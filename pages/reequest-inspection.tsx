import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function RequestInspectionPage() {
  const [form, setForm] = useState({
    brandModel: "",
    vinOrLink: "",
    city: "",
    comment: "",
    videoLink: "",
  });
  const router = useRouter();

  const handleSubmit = () => {
    const prev = JSON.parse(localStorage.getItem("inspectionRequests") || "[]");
    const newRequest = {
      ...form,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem("inspectionRequests", JSON.stringify([...prev, newRequest]));
    alert("Заявка отправлена!");
    router.push("/customer-cabinet");
  };

  return (
    <main className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-700">Заявка на осмотр авто</h1>

      <div className="space-y-4">
        <Input
          placeholder="Марка и модель"
          value={form.brandModel}
          onChange={(e) => setForm({ ...form, brandModel: e.target.value })}
        />
        <Input
          placeholder="VIN или ссылка на объявление"
          value={form.vinOrLink}
          onChange={(e) => setForm({ ...form, vinOrLink: e.target.value })}
        />
        <Input
          placeholder="Город / регион"
          value={form.city}
          onChange={(e) => setForm({ ...form, city: e.target.value })}
        />
        <textarea
          placeholder="Комментарий"
          className="w-full border rounded p-2"
          rows={3}
          value={form.comment}
          onChange={(e) => setForm({ ...form, comment: e.target.value })}
        />
        <Input
          placeholder="Ссылка на видео (mp4 или YouTube)"
          value={form.videoLink}
          onChange={(e) => setForm({ ...form, videoLink: e.target.value })}
        />
        <Button onClick={handleSubmit}>Отправить заявку</Button>
      </div>
    </main>
  );
}
