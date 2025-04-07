'use client';

import Image from 'next/image';
import Link from 'next/link';
import Form from 'next/form';
import { Input } from './ui/input';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { ThemeToggle } from './theme/theme-toggle';
import { Button } from './ui/button';
import { Search } from 'lucide-react';
import { LoginForm } from './login-form';

export default function Header() {
  return (
    <header className="bg-primary max-h-18">
      <div className="container mx-auto flex items-center">
        <Image src="/logo.svg" width={72} height={72} alt="Логотип" />
        <h1 className="text-primary-foreground mx-4">Фриланс биржа</h1>
        <Form action="#" className="relative flex">
          <Input
            type="search"
            className="bg-input text-primary-foreground dark:bg-input ml-4 h-6 w-64 pr-7 focus-visible:border-none focus-visible:ring-0"
          />
          <Button
            type="submit"
            variant="secondary"
            className="absolute right-0 h-6 w-6"
          >
            <Search className="h-4 w-4" />
          </Button>
        </Form>
        <NavigationMenu viewport={false} className="max-w-full grow">
          <NavigationMenuList className="gap-15">
            <NavigationMenuItem>
              <Link
                href="/"
                className="text-primary-foreground transition-colors hover:text-white"
              >
                Главная
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="#"
                className="text-primary-foreground transition-colors hover:text-white"
              >
                Каталог фрилансеров
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="#"
                className="text-primary-foreground transition-colors hover:text-white"
              >
                Создать заказ
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href="/login"
                className="text-primary-foreground transition-colors hover:text-white"
              >
                Вход/Регистрация
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeToggle />
      </div>
    </header>
  );
}
