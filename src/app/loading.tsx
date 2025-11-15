export default function Loading() {
  return (
    <div
      className="relative flex flex-col items-center justify-center h-screen text-white"
      style={{
        backgroundImage: "url('https://picsum.photos/1920/1080?grayscale')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
      <div className="relative z-10 text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-pink-500 mx-auto mb-6"></div>
        <h2 className="text-2xl font-semibold">We’re weaving your feed…</h2>
        <p className="text-gray-300 mt-2">Hang tight, premium threads loading.</p>
      </div>
    </div>
  );
}
