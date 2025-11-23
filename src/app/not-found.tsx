import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black px-4">
      <div className="flex max-w-md flex-col items-center gap-6 text-center">
        <h1 className="text-6xl font-bold text-white">404</h1>
        <h2 className="text-2xl font-semibold text-white">Page Not Found</h2>
        <p className="text-gray-400">Sorry, we couldn't find the page you're looking for.</p>
        <Link
          href="/"
          className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-black transition-colors hover:bg-gray-200"
        >
          Go back home
        </Link>
      </div>
    </div>
  );
}
