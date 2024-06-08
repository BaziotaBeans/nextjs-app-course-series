import Card from "@/components/card";
import Link from "next/link";

export default function ArchivedNotification() {
  return (
    <Card>
      <div>Archived Notifications</div>
      <Link className="ml-4 text-blue-600" href="/complex-dashboard">Default</Link>
    </Card>
  );
}
