import { useEffect, useMemo, useState } from "react";

export const StarBackground = () => {
  const [resizeRefresh, setResizeRefresh] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setResizeRefresh((prev) => !prev);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setResizeRefresh((prev) => !prev);
      });
    };
  }, []);
  // id, size, x, y, opacity, animationDuration
  const stars = useMemo(() => {
    const starsNum = Math.floor(
      (window.innerHeight * window.innerWidth) / 3000
    );
    return Array.from({ length: starsNum }).map((_i, ind) => {
      return {
        id: ind,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      };
    });
  }, [resizeRefresh]);
  // id, size, x, y, animationDelay, animationDuration
  const metiors = useMemo(() => {
    return Array.from({ length: 4 }).map((_i, ind) => {
      return {
        id: ind,
        size: Math.random() * 2 + 1,
        x: Math.random() * 80,
        y: Math.random() * 40,
        animationDuration: Math.random() * 5 + 3,
        opacity: Math.random() * 0.5 + 0.5,
      };
    });
  }, [resizeRefresh]);
  return (
    <div className="inset-0 fixed overflow-hidden pointer-events-none">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star animate-pulse-subtle"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: `${star.opacity}`,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}
      {metiors.map((metior) => (
        <div
          key={metior.id}
          className="meteor animate-meteor"
          style={{
            width: `${metior.size * 50}px`,
            height: `${metior.size * 2}px`,
            left: `${metior.x}%`,
            top: `${metior.y}%`,
            opacity: `${metior.opacity}`,
            animationDuration: `${metior.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};
