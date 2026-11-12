import Link from "next/link";

export function TopBar() {
  return (
    <header className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-gray-200 flex items-center justify-between px-6 z-10">
      <Link href="/dashboard" className="text-lg font-semibold text-gray-900">
        Gradschool
      </Link>

      <div className="flex items-center gap-6">
        <input
          type="text"
          placeholder="Search..."
          className="w-64 h-9 px-3 bg-gray-100 border-0 rounded-md text-sm placeholder:text-gray-500 focus:ring-1 focus:ring-gray-300 outline-none"
        />
        <button className="text-sm text-gray-600 hover:text-gray-900">
          Alex
        </button>
      </div>
    </header>
  );
}
