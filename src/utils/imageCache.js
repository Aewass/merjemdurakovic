/**
 * Utility for caching images using the Cache API
 */

const CACHE_NAME = "image-cache-v1";

/**
 * Cache an image
 * @param {string} imageUrl - The URL of the image to cache
 * @returns {Promise<void>}
 */
export async function cacheImage(imageUrl) {
  try {
    const cache = await caches.open(CACHE_NAME);
    const response = await fetch(imageUrl);
    await cache.put(imageUrl, response);
  } catch (error) {
    console.error("Error caching image:", error);
  }
}

/**
 * Get a cached image
 * @param {string} imageUrl - The URL of the image to retrieve from cache
 * @returns {Promise<Response|null>} The cached response or null if not found
 */
export async function getCachedImage(imageUrl) {
  try {
    const cache = await caches.open(CACHE_NAME);
    return await cache.match(imageUrl);
  } catch (error) {
    console.error("Error getting cached image:", error);
    return null;
  }
}

/**
 * Preload and cache an image
 * @param {string} imageUrl - The URL of the image to preload
 * @returns {Promise<void>}
 */
export async function preloadImage(imageUrl) {
  try {
    // Check if image is already cached
    const cachedResponse = await getCachedImage(imageUrl);
    if (cachedResponse) return;

    // If not cached, fetch and cache it
    await cacheImage(imageUrl);
  } catch (error) {
    console.error("Error preloading image:", error);
  }
}

/**
 * Preload and cache multiple images
 * @param {string[]} imageUrls - Array of image URLs to preload
 * @returns {Promise<void>}
 */
export async function preloadImages(imageUrls) {
  try {
    await Promise.all(imageUrls.map((url) => preloadImage(url)));
  } catch (error) {
    console.error("Error preloading images:", error);
  }
}

/**
 * Clear the image cache
 * @returns {Promise<void>}
 */
export async function clearImageCache() {
  try {
    await caches.delete(CACHE_NAME);
  } catch (error) {
    console.error("Error clearing image cache:", error);
  }
}
