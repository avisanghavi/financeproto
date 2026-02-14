"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Briefcase, PlayCircle, FileText, Settings, LogOut } from "lucide-react";

const navigation = [
  { name: "Portfolio", href: "/portfolio", icon: Briefcase },
  { name: "Exercises", href: "/exercises", icon: PlayCircle },
  { name: "Documents", href: "/documents", icon: FileText },
  { name: "Settings", href: "/settings", icon: Settings },
];

interface PortalSidebarProps {
  stakeholderName: string;
  stakeholderEmail: string;
}

export function PortalSidebar({
  stakeholderName,
  stakeholderEmail,
}: PortalSidebarProps) {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-64 flex-col bg-white border-r">
      {/* Logo */}
      <div className="flex h-16 shrink-0 items-center px-6 border-b">
        <Link href="/portfolio" className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-lg bg-blue-600 flex items-center justify-center">
            <Briefcase className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold">BoardFinance</span>
        </Link>
      </div>

      {/* User Info */}
      <div className="px-6 py-4 border-b">
        <p className="font-medium truncate">{stakeholderName}</p>
        <p className="text-sm text-muted-foreground truncate">{stakeholderEmail}</p>
      </div>

      {/* Navigation */}
      <nav className="flex flex-1 flex-col px-4 py-4">
        <ul role="list" className="flex flex-1 flex-col gap-y-1">
          {navigation.map((item) => {
            const isActive =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={cn(
                    isActive
                      ? "bg-gray-100 text-gray-900"
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                    "group flex gap-x-3 rounded-md p-2 text-sm font-medium"
                  )}
                >
                  <item.icon
                    className={cn(
                      isActive
                        ? "text-gray-900"
                        : "text-gray-400 group-hover:text-gray-900",
                      "h-5 w-5 shrink-0"
                    )}
                  />
                  {item.name}
                </Link>
              </li>
            );
          })}

          <li className="mt-auto">
            <Link
              href="/auth/stakeholder/logout"
              className="text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex gap-x-3 rounded-md p-2 text-sm font-medium"
            >
              <LogOut className="h-5 w-5 shrink-0 text-gray-400 group-hover:text-gray-900" />
              Sign Out
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
