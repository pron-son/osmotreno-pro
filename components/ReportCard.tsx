import Link from "next/link";
import { FavoriteButton } from "./FavoriteButton";

export function ReportCard({ report }: { report: any }) {
  return (
    <div className="border rounded shadow-sm bg-white p-4 space-y-2">
      <h2 className="text-xl font-semibold">{report.brandModel}</h2>
      <p className="text-sm text-gray-500">{report.year} • {report.mileage} км • {report.city}</p>
      <p className="text-sm text-gray-500">Подборщик: {report.expert}</p>
      <div className="flex justify-between items-center mt-2">
        <Link
          href={`/report/${report.id}`}
          className="text-blue-500 underline text-sm"
        >
          Подробнее →
        </Link>
        <FavoriteButton report={report} />
      </div>
    </div>
  );
}
