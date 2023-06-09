export default function DashboardLayout({
    children,
    analytics,
    team
}: {
    children: React.ReactNode,
    analytics: React.ReactNode,
    team: React.ReactNode
}) {
    return (
        <section>
            <h1>Dashboard</h1>
            {children}
            {analytics}
            {team}
        </section>
    );
}