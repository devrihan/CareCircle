// src/app/api/create-user/route.ts
import { dbConnect } from '@/app/lib/mongodb';
import User from '@/app/models/User';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const { uid, email } = await req.json();
    await dbConnect();

    const existingUser = await User.findOne({ uid });
    if (existingUser) {
      return NextResponse.json({ success: true, message: 'User already exists' });
    }

    const newUser = await User.create({ uid, email });
    return NextResponse.json({ success: true, user: newUser });
  } catch (error) {
    console.error('[CREATE_USER_ERROR]', error);
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 });
  }
}
