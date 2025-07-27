import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-secondary-light shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          MotherCare
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-primary">
            Home
          </Link>
          <Link href="/services" className="text-gray-600 hover:text-primary">
            Services
          </Link>
          <Link href="/contact" className="text-gray-600 hover:text-primary">
            Contact
          </Link>
        </nav>
        <button className="md:hidden">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
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
    </header>
  );
}
