import Image from 'next/image';
import Link from 'next/link';
import { Input } from './ui/input';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { ThemeToggle } from './theme/theme-toggle';

export default function Header() {
  return (
    <header className="bg-primary">
      <div className="container mx-auto grid h-18 w-full grid-cols-6 items-center">
        <div className="flex items-center">
          <Image src="/logo.svg" width={72} height={72} alt="Логотип" />
          <h1 className="text-primary-foreground">Title logo</h1>
        </div>
        <Input type="search" placeholder="Поиск" className="w-full" />
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Ссылка
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <ThemeToggle />
      </div>
    </header>
  );
}
