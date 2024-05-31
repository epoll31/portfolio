"use client";

import cn from "@/utils/cn";
import { CSSProperties, useEffect, useRef, useState } from "react";

export default function GlowContainer({
  className,
  style,
  children,
  glowRadius = "100px",
  padding = "1px",
  whileHover = true,
}: {
  className?: string;
  style?: CSSProperties;
  children: React.ReactNode;
  glowRadius?: `${number}px`;
  padding?: string;
  whileHover?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [opacity, setOpacity] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [relativeMousePosition, setRelativeMousePosition] = useState({
    x: "-100%",
    y: "-100%",
  });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x: e.clientX, y: e.clientY });
    setRelativeMousePosition({ x: `${x}px`, y: `${y}px` });
    setOpacity(1);
  };

  const handleTouchStart = (e: TouchEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    setMousePosition({ x: touch.clientX, y: touch.clientY });
    setRelativeMousePosition({ x: `${x}px`, y: `${y}px` });
    setOpacity(1);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const touch = e.touches[0];
    const x = touch.clientX - rect.left;
    const y = touch.clientY - rect.top;
    setMousePosition({ x: touch.clientX, y: touch.clientY });
    setRelativeMousePosition({ x: `${x}px`, y: `${y}px` });
  };

  const handleEnd = () => {
    setTimeout(() => {
      setOpacity(0);
    }, 100);
  };
  const handleScroll = () => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = parseFloat(relativeMousePosition.x) - rect.left;
    const y = parseFloat(relativeMousePosition.y) - rect.top;
    setRelativeMousePosition({ x: `${x}px`, y: `${y}px` });
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchmove", handleTouchMove);
    document.addEventListener("touchend", handleEnd);
    document.addEventListener("touchcancel", handleEnd);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("touchstart", handleTouchStart);
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleEnd);
      document.removeEventListener("touchcancel", handleEnd);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = mousePosition.x - rect.left;
      const y = mousePosition.y - rect.top;
      setRelativeMousePosition({ x: `${x}px`, y: `${y}px` });
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mousePosition]);

  return (
    <div
      className={cn(
        "group/glowContainer relative overflow-hidden rounded-full ",
        className
      )}
      style={{
        ...style,
        padding: padding,
      }}
      ref={ref}
    >
      <span
        className={cn(
          whileHover && " invisible group-hover/glowContainer:visible",
          `absolute -translate-x-1/2 -translate-y-1/2 blur-lg pointer-events-none z-0 transition-opacity`,
          ` bg-gradient-to-tr from-teal-200 to-teal-300`
        )}
        style={
          {
            opacity: opacity,
            left: relativeMousePosition.x,
            top: relativeMousePosition.y,
            height: glowRadius,
            width: glowRadius,
            // backgroundColor: glowColor,
            maskImage: `radial-gradient(#00000020 0%, transparent 50%)`,
          } as CSSProperties
        }
      ></span>
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}
