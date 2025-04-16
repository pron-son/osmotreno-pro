export function Input({ ...props }: any) {
    return (
      <input
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
        {...props}
      />
    );
  }
  