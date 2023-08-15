import { Card } from "@/components/ui/Card"
import { CardSkeleton } from "@/components/CardSkeleton"
import { DashboardHeader } from "@/components/Header"
import { DashboardShell } from "@/components/Shell"

export default function DashboardSettingsLoading() {
  return (
    <DashboardShell>
      <DashboardHeader
        heading="Settings"
        text="Manage account and website settings."
      />
      <div className="grid gap-10">
        <CardSkeleton />
      </div>
    </DashboardShell>
  )
}
