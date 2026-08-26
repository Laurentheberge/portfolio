import { NextResponse } from 'next/server';
import crypto from 'crypto';

export const dynamic = 'force-dynamic';

interface SheetReview {
  name: string;
  role: string;
  review: string;
  date: string;
  rating: string;
}

function getAccessToken(credentials: {
  client_email: string;
  private_key: string;
}): Promise<string> {
  const now = Math.floor(Date.now() / 1000);
  const expiry = now + 3600;

  const header = Buffer.from(
    JSON.stringify({ alg: 'RS256', typ: 'JWT' }),
  ).toString('base64url');

  const payload = Buffer.from(
    JSON.stringify({
      iss: credentials.client_email,
      scope: 'https://www.googleapis.com/auth/spreadsheets.readonly',
      aud: 'https://oauth2.googleapis.com/token',
      iat: now,
      exp: expiry,
    }),
  ).toString('base64url');

  const signer = crypto.createSign('RSA-SHA256');
  signer.update(`${header}.${payload}`);
  const signature = signer.sign(credentials.private_key, 'base64url');

  const jwt = `${header}.${payload}.${signature}`;

  return fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  })
    .then((res) => res.json())
    .then((data) => data.access_token);
}

export async function GET() {
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const keyJson = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;

  if (!sheetId || !keyJson) {
    return NextResponse.json({ error: 'Missing env vars' }, { status: 500 });
  }

  try {
    const credentials = JSON.parse(keyJson);
    if (credentials.private_key) {
      credentials.private_key = credentials.private_key.replace(/\\n/g, '\n');
    }
    const accessToken = await getAccessToken(credentials);

    // Get the actual sheet name (auto-detect)
    const metaRes = await fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}?fields=sheets.properties.title`,
      { headers: { Authorization: `Bearer ${accessToken}` } },
    );
    const metaData = await metaRes.json();
    const sheetName =
      metaData.sheets?.[0]?.properties?.title || 'Sheet1';

    // Fetch all data from columns A-D
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${encodeURIComponent(sheetName)}!A:E`;
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${accessToken}` },
    });

    const data = await res.json();
    const rows = data.values;

    if (!rows || rows.length <= 1) {
      return NextResponse.json([]);
    }

    const reviews: SheetReview[] = rows.slice(1).map((row: string[]) => ({
      name: row[0] || '',
      role: row[1] || '',
      review: row[2] || '',
      date: row[3] || '',
      rating: row[4] || '',
    }));

    return NextResponse.json(reviews);
  } catch (error) {
    console.error('Failed to fetch reviews:', error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}
