"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  FileText,
  Award,
  Landmark,
  PieChart,
  Users,
  Settings,
  Building2,
  LogOut,
  User,
} from "lucide-react";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Cap Table", href: "/cap-table", icon: PieChart },
  { name: "Certificates", href: "/certificates", icon: FileText },
  { name: "Options", href: "/options", icon: Award },
  { name: "Convertibles", href: "/convertibles", icon: Landmark },
  { name: "Stakeholders", href: "/stakeholders", icon: Users },
];

const secondaryNavigation = [
  { name: "Company Settings", href: "/settings", icon: Building2 },
];

interface AdminSidebarProps {
  userEmail?: string;
  userName?: string | null;
}

export function AdminSidebar({ userEmail, userName }: AdminSidebarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/auth/login");
    router.refresh();
  };

  return (
    <div className="flex h-full w-64 flex-col bg-gray-900">
      {/* Logo */}
      <div className="flex h-16 shrink-0 items-center px-6">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <Building2 className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">BoardFinance</span>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col px-4 py-4">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        isActive
                          ? "bg-gray-800 text-white"
                          : "text-gray-400 hover:bg-gray-800 hover:text-white",
                        "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                      )}
                    >
                      <item.icon
                        className={cn(
                          isActive
                            ? "text-white"
                            : "text-gray-400 group-hover:text-white",
                          "h-5 w-5 shrink-0"
                        )}
                      />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </li>

          <li className="mt-auto">
            <ul role="list" className="-mx-2 space-y-1">
              {secondaryNavigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className={cn(
                        isActive
                          ? "bg-gray-800 text-white"
                          : "text-gray-400 hover:bg-gray-800 hover:text-white",
                        "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                      )}
                    >
                      <item.icon
                        className={cn(
                          isActive
                            ? "text-white"
                            : "text-gray-400 group-hover:text-white",
                          "h-5 w-5 shrink-0"
                        )}
                      />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            {/* User info and logout */}
            {userEmail && (
              <div className="mt-4 pt-4 border-t border-gray-700">
                <div className="flex items-center gap-3 px-2 py-2">
                  <div className="h-8 w-8 rounded-full bg-gray-700 flex items-center justify-center">
                    <User className="h-4 w-4 text-gray-300" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-white truncate">
                      {userName || userEmail.split("@")[0]}
                    </p>
                    <p className="text-xs text-gray-400 truncate">{userEmail}</p>
                  </div>
                </div>
                <button
                  onClick={handleLogout}
                  className="mt-2 w-full flex items-center gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-400 hover:bg-gray-800 hover:text-white"
                >
                  <LogOut className="h-5 w-5 shrink-0" />
                  Sign out
                </button>
              </div>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}
