import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { generatePDF } from "@/utils/pdfGenerator";
import { FavoriteButton } from "@/components/FavoriteButton";

export default function ReportDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [report, setReport] = useState<any | null>(null);

  useEffect(() => {
    if (!id) return;
    const all = JSON.parse(localStorage.getItem("reports") || "[]");
    const found = all.find((r: any) => r.id === id);
    if (found) setReport(found);
  }, [id]);

  if (!report) return <p className="p-6">Загрузка отчёта...</p>;

  return (
    <main className="max-w-3xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">{report.brandModel}</h1>
      <p><strong>Год:</strong> {report.year}</p>
      <p><strong>Пробег:</strong> {report.mileage} км</p>
      <p><strong>Кузов:</strong> {report.bodyType}</p>
      <p><strong>Цвет:</strong> {report.color}</p>
      <p><strong>Состояние кузова:</strong> {report.bodyCondition}</p>
      <p><strong>Салон:</strong> {report.interiorCondition}</p>
      <p><strong>Рекомендации:</strong> {report.recommendations}</p>
      <p><strong>Подборщик:</strong> {report.expert}</p>

      {report.video && (
        <video controls width="100%" className="rounded">
          <source src={report.video} type="video/mp4" />
        </video>
      )}

      <div className="flex gap-4 mt-4">
        <FavoriteButton report={report} />
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => generatePDF(report)}
        >
          Скачать PDF
        </button>
      </div>
    </main>
  );
}
