import { useEffect, useState } from "react";
import { ReportCard } from "@/components/ReportCard";
import { RegionFilter } from "@/components/RegionFilter";

export default function ReportsPage() {
  const [reports, setReports] = useState<any[]>([]);
  const [filtered, setFiltered] = useState<any[]>([]);
  const [region, setRegion] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("reports") || "[]");
    setReports(saved);
    setFiltered(saved);
  }, []);

  useEffect(() => {
    if (region === "") {
      setFiltered(reports);
    } else {
      setFiltered(reports.filter((r: any) => r.city === region));
    }
  }, [region, reports]);

  const allRegions = Array.from(new Set(reports.map((r: any) => r.city))).filter(Boolean);

  return (
    <main className="max-w-5xl mx-auto p-6 space-y-4">
      <h1 className="text-2xl font-bold">Готовые автоотчёты</h1>

      <div className="flex justify-end">
        <RegionFilter selected={region} onChange={setRegion} regions={allRegions} />
      </div>

      {filtered.length === 0 ? (
        <p className="text-gray-500">Нет отчётов для выбранного региона.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filtered.map((r: any) => (
            <ReportCard key={r.id} report={r} />
          ))}
        </div>
      )}
    </main>
  );
}
