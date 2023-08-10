import { Icons } from "@/components/icons"
import type { Icon } from "lucide-react"
import { User } from "@prisma/client"

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
  };
};


export type NavItem = {
  title: string
  href: string
  disabled?: boolean
}

export type NavConfig = {
  mainNav: NavItem[]
}

export type SidebarNavItem = {
  title: string
  disabled?: boolean
  external?: boolean
  icon?: keyof typeof Icons
} & (
  | {
      href: string
      items?: never
    }
  | {
      href?: string
      items: NavLink[]
    }
)


export type DashboardConfig = {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}