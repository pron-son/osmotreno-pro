export function Badge({ type }: { type: string }) {
    const map: Record<string, { label: string; color: string }> = {
      new: { label: "Новый", color: "bg-gray-300 text-gray-800" },
      verified: { label: "Проверенный", color: "bg-green-500 text-white" },
      pro: { label: "ТОП-эксперт", color: "bg-yellow-500 text-white" },
    };
  
    const { label, color } = map[type] || {
      label: "Без статуса",
      color: "bg-gray-200 text-gray-600",
    };
  
    return (
      <span className={`px-2 py-1 text-xs font-semibold rounded ${color}`}>
        {label}
      </span>
    );
  }