let selSort;
let selSize;
let startButton;
let newArray;
let arr = [];
let states = [];
let sort, size;
let anim;

let run = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  selSort = createSelect();
  selSize = createSlider(10, 500, 1);
  startButton = createButton('Run Algorithm');
  newArray = createButton('Create new array');
  selSort.position(0, 10);
  selSize.position(125, 10);
  startButton.position(275, 10);
  newArray.position(400, 10);
  selSort.style('width, 100px');
  selSize.style('width', '100px');
  selSort.option('Bubble Sort');
  selSort.option('Quick Sort');
  selSort.option('Insertion Sort');
  selSort.option('Heap Sort');
  selSort.option('Radix Sort');
  selSort.option('Bogo Sort');

  sort = selSort.value();
  size = selSize.value();
  selSort.changed(mySortEvent);
  startButton.mousePressed(runAlgorithm);
  newArray.mousePressed(createArray);
  selSize.changed(mySortEvent);
}

function mySortEvent() {
  sort = selSort.value();
  size = selSize.value();
}
function createArray() {
  arr = new Array(floor(size));
  for (let i = 0; i < arr.length; i++) {
    arr[i] = random(height);
    states[i] = -1;
  }
}
function runAlgorithm() {
  if (arr.length == 0) {
    fill(0);
    textSize(32);
    text('Please create an array first', width / 2, height / 2);
    console.log('Please create array first');
    return;
  }
  switch (sort) {
    case 'Bubble Sort':
      bubbleSort(arr, 0, arr.length - 1);
      break;
    case 'Quick Sort':
      quickSort(arr, 0, arr.length - 1);
      break;
    case 'Insertion Sort':
      insertionSort(arr, 0, arr.length - 1);
      break;
    case 'Heap Sort':
      heapSort(arr, 0, arr.length - 1);
      break;
    case 'Radix Sort':
      radixSort(arr, arr.length);
      break;
    case 'Bogo Sort':
      for (let i = 0; i < arr.length - 1; i++) {
        bogoSort(arr, 0, arr.length - 1);
      }
      break;
    default:
      break;
  }
}

function draw() {
  background(255);

  let slider = selSize.value();
  textSize(16);
  text(slider, 240, 20);
  fill(51);
  // frameRate(200);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == null) {
      noLoop();
      console.error('Arr at ' + i + ' is empty');
    }
    if (states[i] == 0) {
      fill('#E0777D');
    } else if (states[i] == 1) {
      fill('#D6FFB7');
    } else {
      fill(51);
    }
    rect(i * (width / size), height - arr[i], width / size, arr[i]);
  }
}
