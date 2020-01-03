async function bubbleSort(arr, start, end) {
  for (let i = 0; i < arr.length; i++) {
    if (i < arr.length) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        let a = arr[j];
        let b = arr[j + 1];
        if (a > b) {
          await swap(arr, j, j + 1);
        }
      }
    } else {
      console.log('Finished Sorting');
      noLoop();
    }
  }
}
