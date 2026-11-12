"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/dashboard", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/courses", label: "Courses" },
];

const myLearningItems = [
  { href: "/progress", label: "Progress" },
  { href: "/portfolio", label: "Portfolio" },
];

export function Sidebar() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/dashboard") return pathname === "/dashboard";
    return pathname.startsWith(href);
  };

  return (
    <aside className="fixed left-0 top-14 bottom-0 w-56 bg-white border-r border-gray-200 py-6 px-3">
      <nav className="space-y-1">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block py-2 px-3 rounded-md text-sm transition-colors duration-150 ${
              isActive(item.href)
                ? "text-gray-900 font-medium bg-gray-100"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>

      <div className="mt-8">
        <p className="px-3 mb-2 text-xs font-medium text-gray-500">
          My Learning
        </p>
        <nav className="space-y-1">
          {myLearningItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`block py-2 px-3 rounded-md text-sm transition-colors duration-150 ${
                isActive(item.href)
                  ? "text-gray-900 font-medium bg-gray-100"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-8">
        <nav>
          <Link
            href="/settings"
            className={`block py-2 px-3 rounded-md text-sm transition-colors duration-150 ${
              isActive("/settings")
                ? "text-gray-900 font-medium bg-gray-100"
                : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
            }`}
          >
            Settings
          </Link>
        </nav>
      </div>
    </aside>
  );
}
