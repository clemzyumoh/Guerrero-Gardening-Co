// import Image from "next/image";
// // Responsive image box. Size it with aspect classes, e.g. className="aspect-video rounded-3xl".
// // Pass `src` to replace the placeholder; the same box fills and scales on every screen.
// export default function Ph({ src, alt = "", className = "", children }) {
//   return (
//     <div className={`relative overflow-hidden bg-[#9fb58a] ${className}`}>
//       <Image src={src || "/images/placeholder.svg"} alt={alt} fill unoptimized={!src} sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
//       {children}
//     </div>
//   );
// }
import Image from "next/image";
export default function Ph({ src, alt = "", className = "", priority = false, children }) {
  const pos = /\b(absolute|fixed)\b/.test(className) ? "" : "relative";
  return (
    <div className={`${pos} overflow-hidden bg-[#9fb58a] ${className}`}>
      <Image src={src || "/images/placeholder.svg"} alt={alt} fill priority={priority} unoptimized={!src} sizes="100vw" className="object-cover" />
      {children}
    </div>
  );
}
