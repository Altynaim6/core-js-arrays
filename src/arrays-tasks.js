function getIntervalArray(start, end) {
  return start > end
    ? []
    : Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function sumArrays(arr1, arr2) {
  const maxLength = Math.max(arr1.length, arr2.length);
  return Array(maxLength)
    .fill(0)
    .map((_, i) => (arr1[i] || 0) + (arr2[i] || 0));
}

function findElement(arr, value) {
  return arr.indexOf(value);
}

function findAllOccurrences(arr, item) {
  return arr.filter((el) => el === item).length;
}

function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}

function getStringsLength(arr) {
  return arr.map((str) => str.length);
}

function getAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  const sum = arr.reduce((acc, num) => acc + num, 0);
  const average = sum / arr.length;
  return parseFloat(average.toFixed(2));
}

function isSameLength(arr) {
  if (arr.length === 0) {
    return true;
  }
  const { length } = arr[0];
  return arr.every((str) => str.length === length);
}

function isValueEqualsIndex(arr) {
  return arr.some((value, index) => value === index);
}

function insertItem(arr, item, index) {
  arr.splice(index, 0, item);
  return arr;
}

function getHead(arr, n) {
  return arr.slice(0, n);
}

function getTail(arr, n) {
  if (n <= 0) {
    return [];
  }
  return arr.slice(-n);
}

function doubleArray(arr) {
  return arr.concat(arr);
}

function toStringList(arr) {
  return arr.join(',');
}

function distinct(arr) {
  return [...new Set(arr)];
}

function createNDimensionalArray(n, size) {
  if (n === 1) {
    return Array(size).fill(0);
  }
  return Array(size).fill(createNDimensionalArray(n - 1, size));
}

function flattenArray(nestedArray) {
  return nestedArray.reduce((acc, item) => {
    if (Array.isArray(item)) {
      acc.push(...flattenArray(item));
    } else {
      acc.push(item);
    }
    return acc;
  }, []);
}

function selectMany(arr, childrenSelector) {
  return arr.flatMap(childrenSelector);
}

function calculateBalance(arr) {
  return arr.reduce((balance, [income, expense]) => {
    return balance + (income - expense);
  }, 0);
}

function createChunks(arr, chunkSize) {
  return arr.reduce((chunks, item, index) => {
    const chunkIndex = Math.floor(index / chunkSize);
    if (chunks[chunkIndex] === undefined) {
      chunks.push([]);
    }
    chunks[chunkIndex].push(item);
    return chunks;
  }, []);
}

function generateOdds(n) {
  return Array.from({ length: n }, (_, index) => index * 2 + 1);
}

function getElementByIndices(arr, indexes) {
  if (indexes.length === 0) return arr;
  return getElementByIndices(arr[indexes[0]], indexes.slice(1));
}

function getFalsyValuesCount(arr) {
  return arr.filter((value) => !value).length;
}

function getIdentityMatrix(n) {
  return Array(n)
    .fill(0)
    .map((_, rowIndex) =>
      Array(n)
        .fill(0)
        .map((__, colIndex) => (rowIndex === colIndex ? 1 : 0))
    );
}

function getIndicesOfOddNumbers(arr) {
  return arr.reduce((indices, num, index) => {
    if (num % 2 !== 0) {
      indices.push(index);
    }
    return indices;
  }, []);
}

function getHexRGBValues(arr) {
  return arr.map((num) => {
    const red = Math.floor(num / 256 / 256);
    const green = Math.floor((num / 256) % 256);
    const blue = num % 256;

    const redHex = red.toString(16).padStart(2, '0').toUpperCase();
    const greenHex = green.toString(16).padStart(2, '0').toUpperCase();
    const blueHex = blue.toString(16).padStart(2, '0').toUpperCase();

    return `#${redHex}${greenHex}${blueHex}`;
  });
}

function getMaxItems(arr, n) {
  const sortedArray = arr.sort((a, b) => b - a);

  return sortedArray.slice(0, n);
}

function findCommonElements(arr1, arr2) {
  const set1 = new Set(arr1);
  const set2 = new Set(arr2);

  const commonElements = [...set1].filter((element) => set2.has(element));

  return commonElements;
}

function findLongestIncreasingSubsequence(nums) {
  const maxLength = nums.reduce(
    (acc, curr, index, arr) => {
      if (curr > arr[index - 1]) {
        acc.currentLength += 1;
      } else {
        acc.maxLength = Math.max(acc.maxLength, acc.currentLength);
        acc.currentLength = 1;
      }

      if (index === arr.length - 1) {
        acc.maxLength = Math.max(acc.maxLength, acc.currentLength);
      }

      return acc;
    },
    { currentLength: 0, maxLength: 0 }
  );

  return maxLength.maxLength;
}

function propagateItemsByPositionIndex(arr) {
  return arr.map((item, index) => Array(index + 1).fill(item)).flat();
}

function shiftArray(arr, n) {
  const { length } = arr;
  const shift = ((n % length) + length) % length;

  return arr.slice(-shift).concat(arr.slice(0, -shift));
}

function sortDigitNamesByNumericOrder(arr) {
  const digitNameToNumber = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  return arr.sort((a, b) => digitNameToNumber[a] - digitNameToNumber[b]);
}

function swapHeadAndTail(arr) {
  const { length } = arr;

  if (length <= 1) {
    return arr;
  }

  const mid = Math.floor(length / 2);

  if (length % 2 === 1) {
    const head = arr.slice(0, mid);
    const tail = arr.slice(mid + 1);
    return [...tail, arr[mid], ...head];
  }
  const head = arr.slice(0, mid);
  const tail = arr.slice(mid);
  return [...tail, ...head];
}

module.exports = {
  getIntervalArray,
  sumArrays,
  findElement,
  findAllOccurrences,
  removeFalsyValues,
  getStringsLength,
  getAverage,
  isSameLength,
  isValueEqualsIndex,
  insertItem,
  getHead,
  getTail,
  doubleArray,
  toStringList,
  distinct,
  createNDimensionalArray,
  flattenArray,
  selectMany,
  calculateBalance,
  createChunks,
  generateOdds,
  getElementByIndices,
  getFalsyValuesCount,
  getIdentityMatrix,
  getIndicesOfOddNumbers,
  getHexRGBValues,
  getMaxItems,
  findCommonElements,
  findLongestIncreasingSubsequence,
  propagateItemsByPositionIndex,
  shiftArray,
  sortDigitNamesByNumericOrder,
  swapHeadAndTail,
};
