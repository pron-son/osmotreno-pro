import { useFavorites } from "@/utils/useFavorites";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

export default function FavoritesPage() {
  const { favorites } = useFavorites();
  const router = useRouter();

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Избранные отчёты</h1>
      {favorites.length === 0 ? (
        <p className="text-gray-500">Вы ещё не добавили ничего в избранное.</p>
      ) : (
        <ul className="space-y-4">
          {favorites.map((r) => (
            <li key={r.id} className="border p-4 rounded bg-white shadow">
              <h2 className="text-lg font-semibold text-blue-800">{r.brandModel}</h2>
              <p className="text-sm text-gray-500">Подборщик: {r.expert}</p>
              <Button onClick={() => router.push(`/report/${r.id}`)}>Посмотреть</Button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}