interface VUMeterDividerProps {
  className?: string;
}

export function VUMeterDivider({ className = "" }: VUMeterDividerProps) {
  // dB scale positions (normalized 0-1 across width)
  // 0 at center, negatives left with progressive spacing (mimics logarithmic dB scale)
  // Gaps decrease as values approach 0, matching real VU meter behavior
  const ticks = [
    { pos: 0, label: "-∞", height: 8 },
    { pos: 0.14, label: "-24", height: 6 },
    { pos: 0.27, label: "-12", height: 10 },
    { pos: 0.37, label: "-6", height: 8 },
    { pos: 0.45, label: "-3", height: 6 },
    { pos: 0.5, label: "0", height: 12 },
    { pos: 0.68, label: "+3", height: 8 },
    { pos: 0.88, label: "+6", height: 6 },
  ];

  return (
    <div
      className={`w-full py-12 md:py-16 ${className}`}
      style={{ opacity: 0.35 }}
      aria-hidden="true"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="relative">
          {/* Main horizontal line */}
          <div className="h-px bg-text-tertiary" />

          {/* Tick marks and labels */}
          <div className="absolute inset-x-0 top-0 flex justify-between">
            {ticks.map((tick, i) => (
              <div
                key={i}
                className="flex flex-col items-center"
                style={{ position: "absolute", left: `${tick.pos * 100}%` }}
              >
                {/* Tick mark */}
                <div
                  className="w-px bg-text-tertiary -translate-y-full"
                  style={{ height: tick.height }}
                />
                {/* Label */}
                <span
                  className="font-mono text-[10px] text-text-tertiary mt-2 select-none"
                  style={{ transform: "translateX(-50%)" }}
                >
                  {tick.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
