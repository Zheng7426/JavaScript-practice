const swap = (arr, indexOne, indexTwo) => {
  let temp = arr[indexTwo];
  arr[indexTwo] = arr[indexOne];
  arr[indexOne] = temp;
};

module.exports = swap;
