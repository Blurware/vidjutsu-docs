export function GlassCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-surface-raised border border-border-light shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}
