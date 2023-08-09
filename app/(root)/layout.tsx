import { MainNav } from "@/components/MainNav"
import { buttonVariants } from "@/components/ui/button"
import { navConfig } from "@/config/nav"
import { cn } from "@/lib/utils"
import Link from "next/link"


interface RootLayoutProps {
  children: React.ReactNode
}

export default async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-40 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          {/* main nav bar */}
          <MainNav items={navConfig.mainNav} />
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
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}