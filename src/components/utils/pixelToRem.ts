export function pixelToRem(...values:number[]): string {
    return values
    .reduce((acc, current) => (acc += current / 16 + `rem `), "")
    .trim();
}