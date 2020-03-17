/**
 * Maps a number in a range, to a number in a different range.
 *
 * @param {number} num The number to map
 * @param {number} min The minimum value in the input range
 * @param {number} max The maximum value in the input range
 * @param {number} outMin The minimum value in the output range
 * @param {number} outMax The maximum value in the output range
 */
export const mapRange = (num, min, max, outMin, outMax) => (num - min) / (max - min) * (outMax - outMin) + outMin;

/**
 * Clamps the value of a number between a minimum and a maximum
 *
 * @param {number} num The number to clamp
 * @param {number} min The minimum allowable value
 * @param {number} max The maximum allowable value
 */
export const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
