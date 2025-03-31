import Image from 'next/image';
import Link from 'next/link';
import { Input } from './ui/input';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { ThemeToggle } from './theme/theme-toggle';

export default function Header() {
  return (
    <header className="bg-primary bac sticky h-18">
      <div className="container mx-auto flex h-auto">
        <div className="flex items-center">
          <Image src="/logo.svg" width={72} height={72} alt="Логотип" />
          <h1 className="text-primary-foreground">Title logo</h1>
          <Input type="search" placeholder="Поиск" className="h-6" />
        </div>
        <NavigationMenu viewport={false}>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="#" legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle({
                    className: 'bg-0 hover:bg-0 h-full',
                  })}
                >
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
