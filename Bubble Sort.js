let arr = [199, 72, 33, 50, 200, 0, -555];

let tem;

for (let i = 0; i < arr.length - 1; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      tem = arr[j];
      arr[j] = arr[j + 1];
      arr[j + 1] = tem;
    }
  }
}

console.log(arr);
