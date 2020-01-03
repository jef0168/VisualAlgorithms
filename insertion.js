async function insertionSort(arr, start, end) {
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length) {
      console.log('Running');
      let key = arr[i];
      let j = i-1;
      while (j >= 0 && arr[j] > key) {
        await swap(arr, j, j + 1);
        j -= 1;
      }
      arr[j + 1] = key;
    } else {
      console.log('Finished Sorting');
      noLoop();
    }
  }
}
