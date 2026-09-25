export function Logo({ className = "h-7" }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/brand/logo.png"
      alt="CHROVER"
      width={820}
      height={114}
      className={`w-auto light:invert ${className}`}
    />
  );
}
