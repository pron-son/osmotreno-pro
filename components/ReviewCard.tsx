export function ReviewCard({ review }: { review: any }) {
    return (
      <div className="border rounded p-4 shadow-sm bg-white">
        <p className="text-sm text-gray-600 italic">“{review.text}”</p>
        <p className="text-xs text-right text-gray-400 mt-2">— {review.author}</p>
      </div>
    );
  }
  
  