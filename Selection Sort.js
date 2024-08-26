let arr = [199, 72, 33, 50, 200, 0, -555];

let tem, min_index;

for (let i = 0; i < arr.length - 1; i++) {
  min_index = i;

  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[min_index]) {
      min_index = j;
    }
  }

  tem = arr[min_index];
  arr[min_index] = arr[i];
  arr[i] = tem;
}

// for (let i = 0; i < arr.length - 1; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] > arr[j]) {
//       tem = arr[j];
//       arr[j] = arr[i];
//       arr[i] = tem;
//     }
//   }
// }

console.log(arr);
