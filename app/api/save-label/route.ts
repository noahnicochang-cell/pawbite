import { NextRequest, NextResponse } from 'next/server';
import { writeFileSync } from 'fs';
import path from 'path';

export async function POST(req: NextRequest) {
  const { name, dataUrl } = await req.json();
  const allowed = ['calming', 'probiotic', 'joint', 'calming-tin', 'probiotic-tin', 'joint-tin', 'merch-bowl', 'merch-shirt', 'merch-cap', 'merch-collar', 'merch-toy', 'merch-kennel'];
  if (!allowed.includes(name)) return new NextResponse('Bad name', { status: 400 });

  const base64 = dataUrl.replace(/^data:image\/png;base64,/, '');
  const buf = Buffer.from(base64, 'base64');
  const outPath = path.join(process.cwd(), 'public', 'product', `${name}-label.png`);
  writeFileSync(outPath, buf);
  return NextResponse.json({ ok: true, path: outPath, size: buf.length });
}
