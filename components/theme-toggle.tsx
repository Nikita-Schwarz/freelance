'use client';

import * as React from 'react';
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
        <Moon className="hidden [html.light_&]:block" />
        <SunMedium className="absolute hidden [html.dark_&]:block" />
        <span className="sr-only">Переключение темы</span>
      </Button>
    </>
  );
}
