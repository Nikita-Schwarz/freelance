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
  auth,
  children,
}: {
  auth: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={`${notoSans.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          {children}
          {auth}
          <Toaster
            /* expand // скрытие тостов */
            closeButton
            duration={5000}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
