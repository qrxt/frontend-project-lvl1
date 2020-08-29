export default (offset, multiplier, length) => Array
  .from({ length }, (_, idx) => offset + idx * multiplier);
