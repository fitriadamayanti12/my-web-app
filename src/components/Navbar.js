import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl font-bold">
        <Link href="/">My Web App</Link>
      </h1>
      <div>
        <Link href="/login">
          <button className="mr-4 bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-200">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className="bg-white text-blue-500 px-4 py-2 rounded-lg hover:bg-blue-200">
            Register
          </button>
        </Link>
      </div>
    </nav>
  );
}
