import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary font-bold text-white">
              C
            </div>
            <span className="text-xl font-bold tracking-tight text-text-main">
              ClientSite
            </span>
          </Link>

          <nav className="hidden space-x-8 md:flex">
            <Link
              href="#"
              className="font-medium text-text-main transition-colors hover:text-primary"
            >
              Accueil
            </Link>
            <Link
              href="#"
              className="font-medium text-text-main transition-colors hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="#"
              className="font-medium text-text-main transition-colors hover:text-primary"
            >
              À propos
            </Link>
            <Link
              href="#"
              className="font-medium text-text-main transition-colors hover:text-primary"
            >
              Contact
            </Link>
          </nav>

          <button
            className="text-text-main md:hidden"
            type="button"
            aria-label="Ouvrir le menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}