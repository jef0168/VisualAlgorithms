async function bogoSort(arr, start, end) {
  //await sleep(50);
  //shuffle(arr);
  let i = floor(random(start, end));
  let j = floor(random(start, end));

  let boolWhile = true;

  while (boolWhile) {
    boolWhile = false;
    for (let i = 0; i < arr.length - 1; i++) {
      await swap(arr, i, j);
      if (arr[i] > arr[i + 1]) {
        boolWhile = true;
      }
    }
    console.log('bogo');
  }
}
