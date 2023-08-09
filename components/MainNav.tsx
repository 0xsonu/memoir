"use client"
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation"
import { useState } from "react";
import { Icons } from "@/components/Icons";
import { siteConfig } from "@/config/site";
import { NavItem } from "@/types";
import { cn } from "@/lib/utils";
import { MobileNav } from "@/components/MobileNav";

interface MainNavProps {
  items?: NavItem[]
  children?: React.ReactNode

}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment()
  const [mobileMenu, setMobileMenu] = useState<boolean>(false)

  return (
    <div className="flex gap-6 md:gap-10">
      {/* Logo */}
      <Link href="/" className="hidden items-center space-x-2 md:flex">
        <Icons.logo />
        <span className="hidden font-bold sm:inline-block">
          {siteConfig.name}
        </span>
      </Link>

      {
        items?.length ? (
          <nav className="hidden gap-6 md:flex">
            {
              items.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? "" : item.href}
                  className={
                    cn("flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                      item.href.startsWith(`/${segment}`) ? "text-foreground" : "text-foreground/60",
                      item.disabled && "cursor-not-allowed opacity-80"
                    )}
                >
                  {item.title}
                </Link>
              ))
            }
          </nav>
        ) : null
      }
      {/* Mobile navigation menu */}
      <button
        className="flex item-center space-x-2 md:hidden"
        onClick={() => setMobileMenu(!mobileMenu)}
      >
        {
          mobileMenu ? <Icons.close /> : <Icons.logo />
        }
        <span className="font-bold">Menu</span>
      </button>
      {mobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div >
  )
}