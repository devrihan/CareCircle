// src/components/AuthClientWrapper.tsx
'use client';

import { AuthProvider } from '@/app/context/AuthContext';

export default function AuthClientWrapper({ children }: { children: React.ReactNode }) {
  return <AuthProvider>{children}</AuthProvider>;
}
