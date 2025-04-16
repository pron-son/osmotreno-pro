import { useEffect, useState } from "react";

export function useFavorites() {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(saved);
  }, []);

  const toggleFavorite = (report: any) => {
    const saved = JSON.parse(localStorage.getItem("favorites") || "[]");
    const exists = saved.find((r: any) => r.id === report.id);
    const updated = exists
      ? saved.filter((r: any) => r.id !== report.id)
      : [...saved, report];
    localStorage.setItem("favorites", JSON.stringify(updated));
    setFavorites(updated);
  };

  const isFavorite = (id: string) =>
    favorites.some((r) => r.id === id);

  return { favorites, toggleFavorite, isFavorite };
}
