import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import { ReportCard } from "../components/ReportCard";

export default function HomePage() {
  const [reports, setReports] = useState<any[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("reports") || "[]");
    setReports(saved);
  }, []);

  return (
    <main className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section className="relative text-center py-20 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[url('/logo.png')] bg-no-repeat bg-center bg-cover opacity-5"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold mb-4 tracking-tight">Osmotreno.pro</h1>
          <p className="text-xl mb-8 text-gray-300">Профессиональные автоотчёты от лучших экспертов</p>
          <div className="flex justify-center gap-6">
            <Link href="/reports">
              <Button className="bg-blue-600 hover:bg-blue-700">Найти отчёт</Button>
            </Link>
            <Link href="/register-expert">
              <Button className="bg-gray-800 hover:bg-gray-700 border border-white">Я подборщик</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Как это работает */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Как это работает</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          <div className="bg-white/5 backdrop-blur p-6 rounded shadow-lg">
            <h3 className="font-semibold text-lg mb-2 text-blue-400">Для покупателей</h3>
            <p className="text-gray-300">Выбирайте авто, просматривайте PDF-отчёты и принимайте взвешенное решение.</p>
          </div>
          <div className="bg-white/5 backdrop-blur p-6 rounded shadow-lg">
            <h3 className="font-semibold text-lg mb-2 text-yellow-400">Для экспертов</h3>
            <p className="text-gray-300">Заливайте отчёты, получайте вознаграждение и поднимайте свой рейтинг.</p>
          </div>
          <div className="bg-white/5 backdrop-blur p-6 rounded shadow-lg">
            <h3 className="font-semibold text-lg mb-2 text-green-400">Просто и прозрачно</h3>
            <p className="text-gray-300">Никаких звонков — всё онлайн, удобно и честно.</p>
          </div>
        </div>
      </section>

      {/* Свежие отчёты */}
      <section className="bg-gray-900 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Свежие отчёты</h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {reports.slice(0, 6).map((r) => (
            <ReportCard key={r.id} report={r} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/reports" className="text-blue-400 hover:underline">
            Смотреть все отчёты →
          </Link>
        </div>
      </section>

      {/* Отзывы */}
      <section className="bg-black py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Отзывы</h2>
        <div className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md p-4 rounded shadow">
            <p className="italic text-gray-200">“Отчёт оказался максимально точным. Машину забрал на следующий день.”</p>
            <p className="text-sm text-right text-gray-400 mt-2">— Алексей, Москва</p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-4 rounded shadow">
            <p className="italic text-gray-200">“Как эксперт я рад, что могу зарабатывать на реально полезном деле.”</p>
            <p className="text-sm text-right text-gray-400 mt-2">— Ирина, Казань</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-800 to-black py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Готовы к действиям?</h2>
        <p className="mb-8 text-gray-300">Покупайте, размещайте, зарабатывайте. Всё просто.</p>
        <div className="flex justify-center gap-6">
          <Link href="/request-inspection">
            <Button className="bg-blue-600 hover:bg-blue-700">Оставить заявку</Button>
          </Link>
          <Link href="/register-expert">
            <Button variant="outline">Я — подборщик</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
