// src/app/layout.tsx
import './globals.css';
import AuthClientWrapper from '@/app/components/AuthClientWrapper';

export const metadata = {
  title: 'CareCircle',
  description: 'Connecting people who care',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <AuthClientWrapper>
          {children}
        </AuthClientWrapper>
      </body>
    </html>
  );
}
