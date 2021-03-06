/*
 *  * Find the first item that occurs an even number of times in an array.
 *   * Remember to handle multiple even-occurance items and return the first one.
 *    * Return null if there are no even-occurance items.
 *    */

/*
 *  * example usage:
 *   * const onlyEven = evenOccurence([1, 7, 2, 4, 5, 1, 6, 8, 9, 6, 4, 1]);
 *    * console.log(onlyEven); //  4
 *    */

const evenOccurence = (arr) => {
  // Your code here.
  const occurence = {};
  for (let i = 0; i < arr.length; i++) {
    const current = arr[i];
    if (!occurence[i]) occurence[current] = 1;
    else occurence[i]++;
  }
  const yarr = Object.keys(occurence);
  for (let i = 0; i < yarr.length; i++) {
    if (occurence[i] % 2 === 0) return yarr[i];
  }
};