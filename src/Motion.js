export const slideIn = (direction, type, delay, duration) => {
  const x = direction === "left" ? "-100%" : direction === "right" ? "100%" : 0;
  const y = direction === "up" ? "100%" : direction === "down" ? "100%" : 0;

  return {
    hidden: { x, y },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration,
        ease: "easeOut",
      },
    },
  };
};