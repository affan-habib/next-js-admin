export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <>
        Sidebar
      </>
      <main>
        {children}
      </main>
    </div>
  );
}
