export default function MapPin({
  className = "fill-white",
  size = 4,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      className={`w-${size} h-${size} text-gray-800 ${className} inline-block`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M7 0a7 7 0 0 0-1 13.92V19a1 1 0 1 0 2 0v-5.08A7 7 0 0 0 7 0Zm0 5.5A1.5 1.5 0 0 0 5.5 7a1 1 0 0 1-2 0A3.5 3.5 0 0 1 7 3.5a1 1 0 0 1 0 2Z" />
    </svg>
  );
}
