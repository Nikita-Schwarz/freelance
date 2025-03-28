import ThemeImage from '@/components/theme/theme-image';

export default function Home() {
  return (
    <>
      <main className="container mx-auto">
        <div className="relative h-100 w-100">
          <ThemeImage
            srcLight="/girlWhite.png"
            srcDark="/manDark.png"
            fill
            alt="Главное изображение"
            className="object-cover"
          />
        </div>
      </main>
    </>
  );
}
