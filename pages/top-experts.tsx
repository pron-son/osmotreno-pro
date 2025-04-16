import { useEffect, useState } from "react";
import { Badge } from "@/components/Badge";

export default function TopExpertsPage() {
  const [experts, setExperts] = useState<any[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("experts") || "[]");
    const sorted = [...saved].sort((a, b) => (b.rating || 0) - (a.rating || 0));
    setExperts(sorted);
  }, []);

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">🏆 ТОП Подборщики</h1>
      <ul className="space-y-4">
        {experts.map((e, index) => (
          <li
            key={index}
            className="border p-4 rounded shadow-sm bg-white flex items-center justify-between"
          >
            <div>
              <p className="text-lg font-semibold">{e.name}</p>
              <p className="text-sm text-gray-500">Город: {e.city}</p>
              <Badge type={e.badge} />
            </div>
            <p className="text-xl font-bold text-blue-600">{e.rating || 0}★</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
