import Link from "next/link";
import Header from "@/components/Header";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-primary">404</h1>
          <p className="mt-4 text-lg text-muted">
            The prompt you&apos;re looking for doesn&apos;t exist.
          </p>
          <div className="mt-8">
            <Link
              href="/directory"
              className="inline-block rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700 transition-colors"
            >
              Browse Directory
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
