import { NextResponse } from 'next/server';
import { readFileSync } from 'fs';
import path from 'path';

const DECK_PATH = 'C:/Users/User/Downloads/PAWBITE BY WWWESH STUDIO V.4.0.pdf';

const PDF_MAP: Record<string, string> = {
  calming: 'calming.pdf',
  probiotic: 'probiotic.pdf',
  joint: 'joint.pdf',
};

export async function GET(_req: Request, { params }: { params: { name: string } }) {
  let filePath: string;
  if (params.name === 'deck') {
    filePath = DECK_PATH;
  } else {
    const filename = PDF_MAP[params.name];
    if (!filename) return new NextResponse('Not found', { status: 404 });
    filePath = path.join(process.cwd(), 'public', 'product', filename);
  }

  const data = readFileSync(filePath);

  return new NextResponse(data, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline',
    },
  });
}
