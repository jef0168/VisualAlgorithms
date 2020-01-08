async function getMax(arr, n) {
  let mx = arr[0];
  for (let i = 1; i < n; i++) {
    if (arr[i] > mx) {
      mx = arr[i];
    }
  }
  return mx;
}

async function countSort(arr, n, exp) {
  let output = new Array(n);
  let count = new Array(10);

  for (let i = 0; i < count.length; i++) {
    count[i] = 0;
  }

  for (let i = 0; i < n; i++) {
    let a = arr[i] / exp;
    let b = a % 10;
    count[floor(b)] += 1;
  }

  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  for (let i = n - 1; i >= 0; i--) {
    output[floor(count[floor((arr[i] / exp) % 10)] - 1)] = arr[i];
    count[floor((arr[i] / exp) % 10)] -= 1;
  }

  for (let i = 0; i < n; i++) {
    await sleep(2);
    arr[i] = output[i];
  }
}

async function radixSort(arr, n) {
  console.log('Preforming radix sort');
  let m = await getMax(arr, n);

  for (let exp = 1; m / exp > 0; exp *= 10) {
    await countSort(arr, n, floor(exp));
  }
  console.log('Done with sort');
}
