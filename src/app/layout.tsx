import Cursor from '@/components/cursor/cursor';
import "./globals.scss";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html>
      <body>
        <Cursor></Cursor>
        {children}
      </body>
    </html>
  );
}
