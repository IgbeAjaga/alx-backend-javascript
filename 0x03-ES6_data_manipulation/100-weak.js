/**
 * WeakMap to store query counts for different API endpoints.
 */
export const weakMap = new WeakMap();

/**
 * The maximum number of calls for an endpoint.
 */
const MAX_CALLS = 5;

/**
 * Records the number of times queryAPI is called for each endpoint.
 * Throws an error when the query count for an endpoint is >= 5
 * @param {{
 *   protocol: String,
 *   name: String,
 * }} endpoint - The endpoint to make a request to.
 * @author Igbe Ajaga
 */
export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 0);
  }
  weakMap.set(endpoint, weakMap.get(endpoint) + 1);
  if (weakMap.get(endpoint) >= MAX_CALLS) {
    throw new Error('Endpoint load is high');
  }
}
