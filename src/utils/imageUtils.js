/**
 * Utility to ensure consistent image paths between development and production environments
 *
 * In development and production, images should be directly referenced from the public directory
 * without the /assets/ prefix
 */

/**
 * Get the correct image path that works in both development and production
 * @param {string} path - The image path
 * @returns {string} The corrected image path
 */
export function getImagePath(path) {
  // Remove any leading '/src' if present
  if (path.startsWith("/src/")) {
    path = path.replace("/src", "");
  }

  // Remove the /assets/ prefix as files are directly in public folder
  if (path.startsWith("/assets/")) {
    return path.replace("/assets/", "/");
  }

  return path;
}
