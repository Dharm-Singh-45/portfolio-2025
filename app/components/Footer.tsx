export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Portfolio. Built with Next.js,
            TypeScript, and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}

