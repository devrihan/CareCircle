
import mongoose, { Connection } from 'mongoose';

const MONGODB_URI = "mongodb+srv://rihandav2004:uEm0F7HshKTBmmHS@cluster0.sx7ugdv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
console.log('MONGODB_URI:', process.env.MONGODB_URI);
console.log('Test');



if (!MONGODB_URI) throw new Error('Please define MONGODB_URI in .env');

declare global {
  var mongoose: {
    conn: Connection | null;
    promise: Promise<Connection> | null;
  } | undefined;
}

// Use const because we're not reassigning `cached`
const cached = global.mongoose || {
  conn: null,
  promise: null,
};

global.mongoose = cached;

export async function dbConnect(): Promise<Connection> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongooseInstance) => mongooseInstance.connection);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
