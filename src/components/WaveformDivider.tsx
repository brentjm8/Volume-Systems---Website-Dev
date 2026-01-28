interface WaveformDividerProps {
  amplitude?: number;
  opacity?: number;
  className?: string;
}

export function WaveformDivider({
  amplitude = 4,
  opacity = 0.3,
  className = "",
}: WaveformDividerProps) {
  // Generate a subtle waveform path
  const width = 1200;
  const segments = 60;
  const segmentWidth = width / segments;

  // Create gentle undulation with some variation
  const points: string[] = [];
  for (let i = 0; i <= segments; i++) {
    const x = i * segmentWidth;
    // Combine multiple sine waves for organic feel
    const y =
      Math.sin((i / segments) * Math.PI * 4) * amplitude * 0.6 +
      Math.sin((i / segments) * Math.PI * 7) * amplitude * 0.3 +
      Math.sin((i / segments) * Math.PI * 2) * amplitude * 0.4;
    points.push(`${x},${amplitude * 2 + y}`);
  }

  const pathD = `M ${points.join(" L ")}`;

  return (
    <div
      className={`w-full py-12 md:py-16 ${className}`}
      aria-hidden="true"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <svg
          viewBox={`0 0 ${width} ${amplitude * 4}`}
          preserveAspectRatio="none"
          className="w-full"
          style={{ height: amplitude * 4, opacity }}
        >
          <path
            d={pathD}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-text-tertiary"
          />
        </svg>
      </div>
    </div>
  );
}
