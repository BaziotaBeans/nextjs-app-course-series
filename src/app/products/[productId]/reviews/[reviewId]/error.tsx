"use client";
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="flex flex-col">
      {error.message}

      <div className="mt-6">
        <button onClick={reset}>Try again</button>
      </div>
    </div>
  );
}
