export default function BrandMark({ size = 38 }) {
  return (
    <svg
      className="brand-mark"
      width={size}
      height={size}
      viewBox="0 0 64 64"
      aria-hidden="true"
    >
      <rect width="64" height="64" rx="12" fill="#12243a" />
      <path d="M10 18h44v4H36v28h-8V22H10z" fill="#c4a15a" />
      <circle cx="50" cy="48" r="5" fill="#8f2d38" />
    </svg>
  );
}
