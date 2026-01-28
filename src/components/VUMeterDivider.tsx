interface VUMeterDividerProps {
  className?: string;
}

export function VUMeterDivider({ className = "" }: VUMeterDividerProps) {
  // dB scale positions — symmetric layout across full width
  const ticks = [
    { pos: 0.10, label: "-12", height: 8 },
    { pos: 0.30, label: "-6", height: 8 },
    { pos: 0.50, label: "0", height: 12 },
    { pos: 0.70, label: "+6", height: 8 },
    { pos: 0.90, label: "+12", height: 8 },
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
