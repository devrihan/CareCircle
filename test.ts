// test.ts
import mongoose from 'mongoose';

async function run() {
  const uri = process.env.MONGODB_URI!;
  console.log('Connecting to MongoDB...');
  await mongoose.connect(uri);
  console.log('Connected ✅');
}

run().catch((err) => console.error(err));
