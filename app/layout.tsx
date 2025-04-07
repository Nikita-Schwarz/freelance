import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Noto_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import { Toaster } from '@/components/ui/sonner';

const notoSans = Noto_Sans({
  subsets: ['cyrillic'],
});

export const metadata: Metadata = {
  title: 'Freelance',
  description: 'Место, где рождаются великие проекты.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${notoSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
        </ThemeProvider>
        <Toaster
          position="top-right"
          richColors
          expand
          duration={5000}
          visibleToasts={2}
        />
      </body>
    </html>
  );
}
