/**
 * Linear interpolation between two values
 * @param a - Start value
 * @param b - End value
 * @param n - Interpolation factor (0-1)
 * @returns Interpolated value
 */
export function lerp(a: number, b: number, n: number): number {
  return (1 - n) * a + n * b;
}
