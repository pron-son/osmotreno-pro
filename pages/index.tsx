import Link from "next/link";
import { Button } from "../components/ui/button";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Добро пожаловать в Osmotreno.pro</h1>
        <p className="text-lg mb-6">Проверенные автоотчёты от профессиональных подборщиков</p>
        <div className="flex justify-center gap-4">
          <Link href="/reports">
            <Button className="bg-white text-blue-600 hover:bg-blue-100">Найти отчёт</Button>
          </Link>
          <Link href="/register-expert">
            <Button className="bg-yellow-400 text-black hover:bg-yellow-300">Я подборщик</Button>
          </Link>
        </div>
      </section>

      {/* Как это работает */}
      <section className="py-12 px-6 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-center mb-8">Как это работает</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-semibold text-lg mb-2">Покупателю</h3>
            <p>Выберите авто, купите отчёт, получите PDF и рекомендации эксперта.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Подборщику</h3>
            <p>Загрузите отчёт, получайте доход и рейтинг за каждую покупку отчёта.</p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Просто и удобно</h3>
            <p>Без звонков и встреч — всё в одном месте, онлайн.</p>
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section className="bg-white py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Отзывы клиентов</h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-gray-100 p-4 rounded shadow">
            <p className="italic">“Нашёл отличный отчёт и купил авто без рисков. Спасибо Osmotreno!”</p>
            <p className="text-sm text-right mt-2">— Алексей, Москва</p>
          </div>
          <div className="bg-gray-100 p-4 rounded shadow">
            <p className="italic">“Как подборщик я уже заработал 5к+ просто заливая отчёты.”</p>
            <p className="text-sm text-right mt-2">— Ирина, Казань</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-50 py-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Готовы присоединиться?</h2>
        <p className="mb-6">Покупайте или размещайте отчёты — вместе делаем рынок прозрачным!</p>
        <div className="flex justify-center gap-4">
          <Link href="/request-inspection">
            <Button>Оставить заявку</Button>
          </Link>
          <Link href="/register-expert">
            <Button variant="outline">Я — подборщик</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
