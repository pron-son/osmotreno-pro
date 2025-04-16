import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Badge } from "../../components/Badge";
import { Button } from "../../components/ui/button";

function isAdminAuthenticated() {
  return document.cookie.includes("adminAccess=true");
}

export default function AdminExpertsPage() {
  const [experts, setExperts] = useState<any[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (!isAdminAuthenticated()) {
      router.push("/admin/login");
    }
    const saved = JSON.parse(localStorage.getItem("experts") || "[]");
    setExperts(saved);
  }, []);

  const handleBadgeChange = (index: number, newBadge: string) => {
    const updated = [...experts];
    updated[index].badge = newBadge;
    setExperts(updated);
    localStorage.setItem("experts", JSON.stringify(updated));
  };

  const handleLogout = () => {
    document.cookie = "adminAccess=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    router.push("/admin/login");
  };

  const BADGE_TYPES = ["new", "verified", "pro"];

  return (
    <main className="max-w-4xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Панель администратора: Подборщики</h1>
        <Button onClick={handleLogout}>Выйти</Button>
      </div>
      <table className="w-full border text-sm">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-2 border">Имя</th>
            <th className="p-2 border">Город</th>
            <th className="p-2 border">Бейдж</th>
            <th className="p-2 border">Сменить</th>
          </tr>
        </thead>
        <tbody>
          {experts.map((e, i) => (
            <tr key={i} className="border-t">
              <td className="p-2 border">{e.name}</td>
              <td className="p-2 border">{e.city}</td>
              <td className="p-2 border"><Badge type={e.badge} /></td>
              <td className="p-2 border">
                <select
                  value={e.badge}
                  onChange={(ev) => handleBadgeChange(i, ev.target.value)}
                  className="border px-2 py-1 rounded"
                >
                  {BADGE_TYPES.map((b) => (
                    <option key={b} value={b}>{b}</option>
                  ))}
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  );
}
