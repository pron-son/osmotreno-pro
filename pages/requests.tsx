import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function InspectionRequestsPage() {
  const [requests, setRequests] = useState<any[]>([]);

  useEffect(() => {
    const all = JSON.parse(localStorage.getItem("inspectionRequests") || "[]");
    setRequests(all);
  }, []);

  const handleReply = (req: any) => {
    alert(`Вы откликнулись на заявку: ${req.brandModel}`);
  };

  return (
    <main className="max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Новые заявки на осмотр</h1>
      {requests.length === 0 ? (
        <p className="text-gray-500">Пока нет заявок.</p>
      ) : (
        <ul className="space-y-4">
          {requests.map((r) => (
            <li key={r.id} className="border p-4 rounded bg-white shadow">
              <h2 className="text-lg font-semibold">{r.brandModel}</h2>
              <p className="text-sm text-gray-500">VIN / ссылка: {r.vinOrLink}</p>
              <p className="text-sm text-gray-500">Город: {r.city}</p>
              {r.comment && <p className="text-sm text-gray-500">Комментарий: {r.comment}</p>}
              {r.videoLink && (
                <div className="mt-2">
                  <p className="text-sm font-medium">Видео осмотр:</p>
                  <video controls width="100%" className="rounded mt-1">
                    <source src={r.videoLink} type="video/mp4" />
                  </video>
                </div>
              )}
              <Button onClick={() => handleReply(r)} className="mt-2">
                Откликнуться
              </Button>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
