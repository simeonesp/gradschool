export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="w-full max-w-sm px-6">{children}</div>
    </div>
  );
}
