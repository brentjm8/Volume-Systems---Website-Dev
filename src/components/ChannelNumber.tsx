interface ChannelNumberProps {
  number: number;
  className?: string;
}

export function ChannelNumber({ number, className = "" }: ChannelNumberProps) {
  const formatted = number.toString().padStart(2, "0");

  return (
    <div
      className={`inline-flex items-center justify-center w-10 h-10 bg-bg-elevated border border-white/5 rounded-sm ${className}`}
    >
      <span className="font-mono text-sm text-text-tertiary select-none">
        {formatted}
      </span>
    </div>
  );
}
