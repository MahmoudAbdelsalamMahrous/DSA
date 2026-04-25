function findSmallest(arr) {
  let smallest = arr[0];
  let smallest_index = 0;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallest_index = i;
    }
  }
  return smallest_index;
}

function selectionSort(arr) {
  let newArr = [];

  while (arr.length > 0) {
    let smallest = findSmallest(arr);
    newArr.push(arr.splice(smallest, 1)[0]);
  }
  return newArr;
}

console.log(selectionSort([9, 2, 4, 3, 7, 78, 21, 65, 87]));
