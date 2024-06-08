import Card from "@/components/card";
import Link from "next/link";

export default function Notification() {
  return (
    <Card>
      <div>Notifications</div>
      <Link className="ml-4 text-blue-600" href="/complex-dashboard/archived">Archived</Link>
    </Card>
  );
}
