import { dbConnect } from '@/app/lib/mongodb';
import AskHelp from '@/app/models/Ask';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await dbConnect();
    const asker = await AskHelp.create(body);
    return NextResponse.json({ success: true, asker });
  } catch (error) {
    console.error('POST /api/ask ERROR:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const askers = await AskHelp.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, askers });
  } catch (error) {
    console.error('GET /api/ask ERROR:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
