import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors">
      {/* Illustration */}
      <div className="w-full max-w-md mb-6">
        <Image
          src="https://picsum.photos/id/1025/600/400"
          alt="Beautiful landscape"
          width={600}
          height={400}
          className="rounded-lg shadow-xl object-cover border-4 border-gray-300 dark:border-gray-700"
        />
      </div>

      {/* Text */}
      <h2 className="text-4xl font-extrabold mb-2 drop-shadow-sm">Page Not Found</h2>
      <p className="text-lg mb-6 text-center max-w-md opacity-80">
        Sorry, the page you’re looking for doesn’t exist. But hey, enjoy this beautiful view instead.
      </p>

      {/* Button */}
      <Link
        href="/"
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition transform hover:scale-105"
      >
        Return Home
      </Link>
    </div>
  );
}
