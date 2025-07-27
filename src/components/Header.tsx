import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="bg-background border-b border-border">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-success">
          MotherCare
        </Link>
        <nav className="hidden md:flex space-x-6 items-center">
          <Link href="/" className="text-muted-foreground hover:text-success">
            Home
          </Link>
          <Link href="/services" className="text-muted-foreground hover:text-success">
            Services
          </Link>
          <Link href="/contact" className="text-muted-foreground hover:text-success">
            Contact
          </Link>
          <Button asChild>
            <Link href="/appointment">Book Appointment</Link>
          </Button>
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