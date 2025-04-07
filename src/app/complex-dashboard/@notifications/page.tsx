import { Card } from "@/components/card"
import Link from "next/link"
export default function NotificationsPage() {
  return (
    <Card>
      <div>NotificationsPage</div>
      <div>
        <Link  href="/complex-dashboard/archived">Archived</Link>
      </div>
    </Card>
  )
}
