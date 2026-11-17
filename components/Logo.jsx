export default function Logo({ compact = false, className = "" }) {
  return (
    <span className={`inline-flex border-2 border-current p-1 ${className}`}>
      <span className="flex flex-col items-center border border-current px-3 py-2 leading-none">
        <span className="font-western flex items-center gap-2 text-base md:text-xl">
          <span aria-hidden>★</span>Guerrero Gardening Co.
          <span aria-hidden>★</span>
        </span>
        {!compact && (
          <span className="mt-2 text-[9px] font-semibold uppercase tracking-wider">
            Landscaping • Yard Care • Hauling
          </span>
        )}
      </span>
    </span>
  );
}
