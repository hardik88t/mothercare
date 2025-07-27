export default function Footer() {
  return (
    <footer className="bg-secondary-light mt-12">
      <div className="container mx-auto px-4 py-6 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} MotherCare. All rights reserved.</p>
      </div>
    </footer>
  );
}
