import Link from "next/link";

export default function Menu({ showMenu }) {
  return (
    <header className={`w-full py-6 shadow-md fixed top-0 left-0 right-0 transition-transform duration-500 ${showMenu ? 'translate-y-0' : '-translate-y-full'} bg-opacity-75 z-50`}>
      <nav className="container mx-auto flex justify-center items-center px-6">
        <div className="bg-gray-800 bg-opacity-50 rounded-full px-6 py-2 flex space-x-6">
          <Link href="/about" legacyBehavior>
            <a className="text-lg text-gray-400 hover:text-white transition duration-300">About</a>
          </Link>
          <Link href="/testimonials" legacyBehavior>
            <a className="text-lg text-gray-400 hover:text-white transition duration-300">Sign Up</a>
          </Link>
          <Link href="/contact" legacyBehavior>
            <a className="text-lg text-gray-400 hover:text-white transition duration-300">Contact</a>
          </Link>
        </div>
      </nav>
    </header>
  );
}
