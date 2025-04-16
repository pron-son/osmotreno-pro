import { useState } from "react";
import { useRouter } from "next/router";
import { Button } from "@/components/ui/button";

export default function AdminLoginPage() {
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = () => {
    if (password === "osmotreno123") {
      document.cookie = "adminAccess=true; path=/";
      router.push("/admin/experts");
    } else {
      alert("Неверный пароль");
    }
  };

  return (
    <main className="max-w-sm mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">Вход для администратора</h1>
      <input
        type="password"
        placeholder="Введите пароль"
        className="w-full border rounded px-3 py-2 mb-4"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button onClick={handleLogin} className="w-full">Войти</Button>
    </main>
  );
}
