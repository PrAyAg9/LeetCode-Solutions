/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = (functions) => {
  const composed = (x) => {
    return functions.reduceRight((acc, fn) => {
      return fn.call(null, acc);
    }, x);
  };
  return composed;
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */