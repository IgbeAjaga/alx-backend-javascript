/**
 * a function named updateUniqueItems that returns an updated
 * map for all items with initial quantity at 1
 * @param {Map<String, number>} map - A map of name of a grocery/qty.
 * @author Igbe Ajaga
 */
export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }
  map.forEach((value, key) => {
    if (value === 1) {
      map.set(key, 100);
    }
  });
}
