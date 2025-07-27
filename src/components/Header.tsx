import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          MotherCare
        </Link>
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-muted-foreground hover:text-primary">
            Home
          </Link>
          <Link href="/services" className="text-muted-foreground hover:text-primary">
            Services
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-primary">
            Contact
          </Link>
          <Link href="/appointment" className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90">
            Book Appointment
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
