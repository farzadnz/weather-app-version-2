export function celsiusToFahrenheit(celsius: string) {
  return String(Math.round((Number(celsius) * 9) / 5 + 32));
}
