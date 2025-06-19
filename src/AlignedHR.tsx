import { useEffect, useRef, useState } from "preact/hooks";

const GridAlignedHR = ({
  gridSize = 20,
  ...props
}: { gridSize: number } & preact.JSX.HTMLAttributes) => {
  const hrRef = useRef<null | HTMLHRElement>(null);
  const [marginTop, setMarginTop] = useState<null | number>(null);

  useEffect(() => {
    const alignToGrid = () => {
      if (hrRef.current) {
        const rect = hrRef.current.getBoundingClientRect();
        const scrollY = window.scrollY;
        const offsetTop = rect.top + scrollY;
        const misalignment = offsetTop % gridSize;
        const adjustment = misalignment === 0 ? 0 : gridSize - misalignment;

        setMarginTop(adjustment);
      }
    };

    // Run on mount and on resize
    alignToGrid();
    window.addEventListener("resize", alignToGrid);
    return () => window.removeEventListener("resize", alignToGrid);
  }, [gridSize]);

  return (
    <hr
      ref={hrRef as any}
      style={{
        transform:
          marginTop !== null ? `translateY(${marginTop}px)` : undefined,
      }}
      {...props}
    />
  );
};

export default GridAlignedHR;
