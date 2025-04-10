import ThemeImage from '@/components/theme/theme-image';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <>
      <main className="container mx-auto mt-8">
        <div className="grid grid-cols-6 grid-rows-3">
          <h2 className="col-start-1 col-end-3 row-span-2 mb-40 self-end text-6xl">
            Место, <br /> где рождаются великие <br /> проекты
          </h2>
          <Button className="col-start-1 col-end-3 row-start-3 h-16 w-118 text-3xl font-normal">
            Стать фрилансером
          </Button>
          <div className="relative col-start-3 row-span-3 size-256">
            <Image
              /* srcLight="/girlWhite.png"
              srcDark="/manDark.png" */
              src="/manDark.png"
              alt="Главное изображение"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </main>
    </>
  );
}
