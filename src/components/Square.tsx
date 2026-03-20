export default function Square({
  value,
  onSquareClick,
  className = "",
}: {
  value: string | null;
  onSquareClick: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onSquareClick}
      className={[
        "flex items-center justify-center rounded-xl border border-black/10 bg-white/90 text-2xl font-semibold text-slate-900 shadow-sm transition",
        "hover:-translate-y-0.5 hover:bg-white hover:shadow-md",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20",
        "active:translate-y-0 active:shadow-sm",
        className,
      ].join(" ")}
    >
      {value}
    </button>
  );
}
