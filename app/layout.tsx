import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { Noto_Sans } from 'next/font/google';
import './globals.css';

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
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
