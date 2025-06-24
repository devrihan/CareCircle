import { dbConnect } from '@/app/lib/mongodb';
import GiveHelp from '@/app/models/Give';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    await dbConnect();
    const giver = await GiveHelp.create(body);
    return NextResponse.json({ success: true, giver });
  } catch (error) {
    console.error('POST /api/give ERROR:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

export async function GET() {
  try {
    await dbConnect();
    const givers = await GiveHelp.find().sort({ createdAt: -1 });
    return NextResponse.json({ success: true, givers });
  } catch (error) {
    console.error('GET /api/give ERROR:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
