import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen p-10 text-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">Добро пожаловать в Osmotreno.pro</h1>
      <p className="mb-4">Платформа профессиональных автоотчётов от проверенных подборщиков.</p>
      <Link href="/top-experts" className="text-blue-500 underline">
        Смотреть топ подборщиков
      </Link>
    </main>
  );
}