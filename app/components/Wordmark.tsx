import Link from "next/link";

type Props = {
  className?: string;
  /** size of the FITMATCH text */
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: "text-lg",
  md: "text-xl sm:text-2xl",
  lg: "text-2xl sm:text-3xl",
};

export default function Wordmark({ className = "", size = "md" }: Props) {
  return (
    <Link
      href="#top"
      aria-label="FITMATCH AI — לראש העמוד"
      className={`wordmark inline-flex items-center gap-2 text-foreground ${sizes[size]} ${className}`}
      dir="ltr"
    >
      <span className="tracking-[-0.02em]">
        FIT<span className="text-violet-light">MATCH</span>
      </span>
      <span className="rounded-md border border-violet/60 bg-violet/10 px-1.5 py-0.5 text-[0.6em] font-semibold tracking-[0.12em] text-violet-light">
        AI
      </span>
    </Link>
  );
}
