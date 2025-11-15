"use client";

import { useEffect } from "react";

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error("Caught error:", error);
  }, [error]);

  return (
    <div
      className="relative flex items-center justify-center h-screen text-white"
      style={{
        backgroundImage: "url('https://picsum.photos/1920/1080?blur=12')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center max-w-lg">
        <h1 className="text-4xl font-bold mb-4">⚠️ Something unraveled</h1>
        <p className="text-lg text-gray-300 mb-6">
          {error.message || "Unexpected error occurred."}
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg shadow-lg hover:scale-105 transition-transform"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}
