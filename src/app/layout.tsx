import GtagScript from '@/features/google';
import { MotionProvider } from '@/shared/animation/motion-provider';

import './globals.css';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="theme-color" content="#000000" />
        <GtagScript />
      </head>
      <body className={`antialiased`}>
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
