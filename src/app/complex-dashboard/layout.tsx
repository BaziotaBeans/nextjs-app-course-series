
interface DashboardLayoutProps {
    children: React.ReactNode,
    users: React.ReactNode,
    revenue: React.ReactNode,
    notifications: React.ReactNode,
    login: React.ReactNode
}

export default function DashboardLayout({
    children,
    users,
    revenue,
    notifications,
    login
}: DashboardLayoutProps) {
    const isLoggedIn = false;

    return isLoggedIn ? (
        <>
            <div>
                {children}
            </div>
            <div className="flex">
                <div className="flex flex-col">
                    <div>{users}</div>
                    <div>{revenue}</div>
                </div>
                <div className="flex flex-1">
                    {notifications}
                </div>
            </div>
        </>
    ) : login;
}