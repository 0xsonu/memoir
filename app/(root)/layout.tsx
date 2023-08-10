import { MainNav } from "@/components/MainNav"
import { ThemeManager } from "@/components/ThemeManager"
import { buttonVariants } from "@/components/ui/Button_varient"
import { navConfig } from "@/config/nav"
import { cn } from "@/lib/utils"
import Link from "next/link"


interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="bg-background container z-40">
        <div className="flex h-20 items-center justify-between py-6">
          {/* main nav bar */}
          <MainNav items={navConfig.mainNav} />

          {/* Theme button */}
          <div className="flex gap-5">
            <ThemeManager />
            <nav>
              <Link
                href="/login"
                className={cn(
                  buttonVariants({
                    variant: "secondary", size: "sm"
                  }),
                  "px-4"
                )}
              >
                Login
              </Link>
            </nav>
          </div>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}