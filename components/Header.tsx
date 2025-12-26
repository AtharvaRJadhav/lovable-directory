import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-semibold text-primary">
            Lovable.directory
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/directory"
              className="text-sm font-medium text-muted hover:text-primary transition-colors"
            >
              Directory
            </Link>
            <Link
              href="/learn"
              className="text-sm font-medium text-muted hover:text-primary transition-colors"
            >
              Tutorials
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

