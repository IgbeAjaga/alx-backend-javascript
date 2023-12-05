/**
 * Create and manipulate typed arrays.
 * @param {Number} length - The length of the buffer.
 * @param {Number} position - The position.
 * @param {Number} value - The value.
 * @author Igbe Ajaga
 * @returns {DataView}
 */
export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw new Error('Position outside range');
  }
  const bufa = new DataView(new ArrayBuffer(length), 0, length);
  bufa.setInt8(position, value);
  return bufa;
}
