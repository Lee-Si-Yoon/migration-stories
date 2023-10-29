const lerp = (a: number, b: number, n: number): number => (1 - n) * a + n * b;

const lerpRange = (
  value: number,
  low1: number,
  high1: number,
  low2: number,
  high2: number,
): number => {
  return low2 + ((high2 - low2) * (value - low1)) / (high1 - low1);
};

export { lerp, lerpRange };
