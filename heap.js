async function heapSort(arr, start, end) {
  const n = end;
  console.log('Heap sort begin');
  for (let i = n / 2 ; i >= 0; i--) {
    await heapify(arr, n, i);
  }
  for (let i = n; i >= 0; i--) {
    await swap(arr, 0, i);
    await heapify(arr, i, 0);
  }
  console.log(arr);
}

async function heapify(arr, n, i) {
  let largest = i;
  let l = 2 * i + 1;
  let r = 2 * i + 2;

  if (l < n && arr[l] > arr[largest]) {
    largest = l;
  }
  if (r < n && arr[r] > arr[largest]) {
    largest = r;
  }
  if (largest !== i) {
    await swap(arr, i, largest);
    await heapify(arr, n, largest);
  }
}
