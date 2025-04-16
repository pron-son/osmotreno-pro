export function Button({ children, ...props }: any) {
    return (
      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        {...props}
      >
        {children}
      </button>
    );
  }