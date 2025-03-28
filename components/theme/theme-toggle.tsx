'use client';

import { Moon, SunMedium } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/button';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <Button
        variant="themeToggle"
        size="icon"
        onClick={() =>
          theme === 'dark' ? setTheme('light') : setTheme('dark')
        }
      >
        <Moon className="size-5 scale-100 rotate-0 transition-all duration-500 dark:scale-0 dark:-rotate-180" />
        <SunMedium className="absolute size-5 scale-0 rotate-180 transition-all duration-500 dark:scale-100 dark:rotate-0" />
        <span className="sr-only">Переключение темы</span>
        {/* Только для роботов */}
      </Button>
    </>
  );
}
