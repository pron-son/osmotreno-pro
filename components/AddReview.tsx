import { useState } from "react";

export function AddReview({ onAdd }: { onAdd: (review: any) => void }) {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");

  const handleSubmit = () => {
    if (!text.trim()) return;
    const newReview = {
      text,
      author: author || "Аноним",
    };
    onAdd(newReview);
    setText("");
    setAuthor("");
  };

  return (
    <div className="space-y-2 mt-4">
      <textarea
        className="w-full border rounded p-2"
        rows={3}
        placeholder="Ваш отзыв"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        className="w-full border rounded px-2 py-1"
        placeholder="Ваше имя (необязательно)"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
        onClick={handleSubmit}
      >
        Оставить отзыв
      </button>
    </div>
  );
}
