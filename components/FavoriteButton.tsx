import { useFavorites } from "../utils/useFavorites";

export function FavoriteButton({ report }: { report: any }) {
  const { toggleFavorite, isFavorite } = useFavorites();
  const active = isFavorite(report.id);

  return (
    <button
      onClick={() => toggleFavorite(report)}
      className={`text-sm px-3 py-1 rounded border transition ${
        active ? "bg-red-500 text-white" : "bg-gray-100 text-gray-700"
      }`}
    >
      {active ? "Удалить из избранного ❤️" : "Добавить в избранное 🤍"}
    </button>
  );
}