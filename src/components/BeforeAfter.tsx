import { useCallback, useRef, useState } from "react";

interface BeforeAfterProps {
  before: string;
  after: string;
  beforeAlt: string;
  afterAlt: string;
}

export function BeforeAfter({ before, after, beforeAlt, afterAlt }: BeforeAfterProps) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const move = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, next)));
  }, []);

  return (
    <div
      ref={ref}
      className="relative aspect-[3/2] w-full select-none overflow-hidden rounded-lg border border-border shadow-warm"
      onPointerDown={(e) => {
        dragging.current = true;
        move(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && move(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerLeave={() => (dragging.current = false)}
    >
      <img
        src={after}
        alt={afterAlt}
        loading="lazy"
        width={1200}
        height={800}
        className="absolute inset-0 size-full object-cover"
      />
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <img
          src={before}
          alt={beforeAlt}
          loading="lazy"
          width={1200}
          height={800}
          className="absolute inset-0 h-full object-cover"
          style={{ width: ref.current?.clientWidth ?? "100%", maxWidth: "none" }}
        />
        <span className="absolute left-3 top-3 rounded bg-foreground/80 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-background">
          Before
        </span>
      </div>
      <span className="absolute right-3 top-3 rounded bg-foreground/80 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-background">
        After
      </span>
      <div
        className="pointer-events-none absolute inset-y-0 w-1 bg-accent"
        style={{ left: `calc(${pos}% - 2px)` }}
      >
        <span className="absolute top-1/2 left-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent text-accent-foreground shadow-warm">
          ↔
        </span>
      </div>
      <label className="sr-only" htmlFor="ba-range">
        Reveal before and after restoration
      </label>
      <input
        id="ba-range"
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute bottom-3 left-1/2 w-2/3 -translate-x-1/2 accent-accent"
      />
    </div>
  );
}
