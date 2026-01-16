/**
 * Utility function to get correct asset paths
 * for GitHub Pages deployment.
 *
 * Use ONLY for assets referenced inside components
 * (videos, logos, static images).
 *
 * Do NOT use for generated data like portfolio.ts
 */
export function getImagePath(path: string): string {
  const cleanPath = path.startsWith("/") ? path.slice(1) : path

  if (process.env.NODE_ENV === "production") {
    return `/PiyushWebsite/${cleanPath}`
  }

  return `/${cleanPath}`
}
