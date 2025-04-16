import { useEffect, useState } from "react";
import { generatePDF } from "../utils/pdfGenerator";

export default function CustomerCabinet() {
  const [purchases, setPurchases] = useState<any[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("purchases") || "[]");
    setPurchases(saved);
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Ваши покупки</h1>
      {purchases.length === 0 ? (
        <p>Нет купленных отчётов</p>
      ) : (
        <ul className="space-y-4">
          {purchases.map((r) => (
            <li key={r.id} className="border p-4 rounded">
              <h2 className="text-lg font-semibold">{r.brandModel}</h2>
              <p className="text-sm">Подборщик: {r.expert}</p>
              <button
                onClick={() => generatePDF(r)}
                className="text-blue-500 underline"
              >
                Скачать PDF
              </button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
