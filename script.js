// const arr = [3, -1, 4, 1, -5, 9];

// 1.
// function sum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
// console.log(sum(arr));

// 2.
// function sumPositive(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) sum += arr[i];
//   }
//   return sum;
// }
// console.log(sumPositive(arr));

// 3.
// function minElement(arr) {
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) min = arr[i];
//   }
//   return min;
// }
// console.log(minElement(arr));

// 4.
// function indexOfMax(arr) {
//   let max = arr[0];
//   let index = 0;
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//       index = i;
//     }
//   }
//   return index;
// }
// console.log(indexOfMax(arr));

// 5.
// function reverseArray(arr) {
//   let reverse = [];
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverse.push(arr[i]);
//   }
//   return reverse;
// }
// console.log(reverseArray(arr));

// 6.
// function countGreaterThanNeighbors(arr) {
//   let count = 0;
//   for (let i = 1; i < arr.length - 1; i++) {
//     if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countGreaterThanNeighbors(arr));

// 7.
// function printAllPairs(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       console.log(arr[i], arr[j]);
//     }
//   }
// }
// console.log();
// printAllPairs(arr);

// 8.
// function countPairsWithGivenSum(arr,n) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] + arr[j] === n) {
//         count++;
//       }
//     }
//   }
//   return count;
// }
// console.log(countPairsWithGivenSum(arr,4));

// 9.
// function intersection(arr1, arr2) {
//   let result = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         let alreadyExists = false;
//         for (let k = 0; k < result.length; k++) {
//           if (result[k] === arr1[i]) {
//             alreadyExists = true;
//             break;
//           }
//         }
//         if (!alreadyExists) {
//           result.push(arr1[i]);
//         }
//       }
//     }
//   }
//   return result;
// }
// const a = [1, 2, 3, 4, 5];
// const b = [3, 4, 5, 6, 7];
// console.log(intersection(a, b));

// 10.
// function moveNegativesLeft(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 0) result.push(arr[i]);
//   }
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= 0) result.push(arr[i]);
//   }
//   return result;
// }
// console.log(moveNegativesLeft(arr));

// 11.
// function findMissingNumber(arr) {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i + 1] !== arr[i] + 1) {
//       return arr[i] + 1;
//     }
//   }
// }
// console.log(findMissingNumber([1, 2, 3, 4, 6]));

// off record problem #1
// function lightsOn(x) {
//   const lights = new Array(x + 1).fill(false);
//   for (let person = 1; person <= x; person++) {
//     for (let room = person; room <= x; room += person) {
//       lights[room] = !lights[room];
//     }
//   }
//   const on = [];
//   for (let i = 1; i <= x; i++) if (lights[i]) on.push(i);
//   return on;
// }
// console.log(lightsOn(100));

// 1. Count Occurrences
// function countOccurences(arr, x) {
//   let y = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === x) {
//       y++;
//     }
//   }
//   return y;
// }
// console.log(countOccurences([2, 2, 2, 2, 2, 3, 3, 3, 4, 5, 4, 5, 6, 4, 3], 3));

// 2. Check if Number Exists
// function existInArray(arr, x) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === x) return true;
//   }
//   return false;
// }
// console.log(existInArray([1, 3, 5, 7, 9], 3));

// 3. Find Second Largest
// function secondLargest(arr) {
//   let largest = -Infinity;
//   let second = -Infinity;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       second = largest;
//       largest = arr[i];
//     } else if (arr[i] > second && arr[i] !== largest) {
//       second = arr[i];
//     }
//   }
//   return second;
// }
// console.log(secondLargest([2, 4, 6, 8, 10]));

// 4. Rotate Array
// function rotateArray(arr, k) {
//   let a = arr.length;
//   k = k % a;
//   let rotated = [];
//   for (let i = 0; i < a; i++) {
//     rotated[(i + k) % a] = arr[i];
//   }
//   return rotated;
// }
// console.log(rotateArray([1, 2, 3, 4, 5], 1));

// 5. Remove Duplicates (preserve order)
// function removeDuplicates(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     let exists = false;
//     for (let j = 0; j < result.length; j++) {
//       if (arr[i] === result[j]) {
//         exists = true;
//         break;
//       }
//     }
//     if (!exists) result.push(arr[i]);
//   }
//   return result;
// }
// console.log(removeDuplicates([1, 2, 2, 3, 1, 4]));

// 6. Factorial Sum
// function factorialSum(arr) {
//   function factorial(n) {
//     let f = 1;
//     for (let i = 1; i <= n; i++) f *= i;
//     return f;
//   }
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += factorial(arr[i]);
//   }
//   return sum;
// }
// console.log(factorialSum([1, 2, 3, 4, 5]));

// 7. Array Rotation Check
// function isRotation(arr1, arr2) {
//   if (arr1.length !== arr2.length) return false;
//   let n = arr1.length;
//   for (let i = 0; i < n; i++) {
//     let match = true;
//     for (let j = 0; j < n; j++) {
//       if (arr1[j] !== arr2[(i + j) % n]) {
//         match = false;
//         break;
//       }
//     }
//     if (match) return true;
//   }
//   return false;
// }
// console.log(isRotation([1, 2, 3, 4], [4, 1, 2, 3]));

// 8. Merge Two Sorted Arrays
// function mergeSorted(arr1, arr2) {
//   let i = 0,
//     j = 0;
//   let merged = [];
//   for (; i < arr1.length || j < arr2.length; ) {
//     if (j >= arr2.length || (i < arr1.length && arr1[i] < arr2[j])) {
//       merged.push(arr1[i]);
//       i++;
//     } else {
//       merged.push(arr2[j]);
//       j++;
//     }
//   }
//   return merged;
// }
// console.log(mergeSorted([1, 3, 5, 7], [2, 4, 6, 8]));

// 9. Diagonal Sum of Matrix
// function diagonalSum(arr) {
//   let x = arr.length;
//   let sum = 0;
//   for (let i = 0; i < x; i++) {
//     sum += arr[i][i];
//     sum += arr[i][x - 1 - i];
//   }
//   let midIndex = 0;
//   for (let i = 0; i < x; i++) {
//     if (i * 2 + 1 === x) {
//       midIndex = i;
//     }
//   }
//   if (x % 2 === 1) {
//     sum -= arr[midIndex][midIndex];
//   }
//   return sum;
// }
// console.log(
//   diagonalSum([
//     [10, 2, 4],
//     [6, 5, 9],
//     [31, 7, 8],
//   ])
// );

// off record problem #2
// function stairs(n) {
//   if (n <= 2) return n;
//   let x = 1;
//   let y = 2;
//   let a = 0;
//   for (let i = 3; i <= n; i++) {
//     a = x + y;
//     x = y;
//     y = a;
//   }
//   return y;
// }
// console.log(stairs(19));

// 1 - 1
// 1+1, 2 - 2
// 1+1+1, 1+2, 2+1 - 3
// 1+1+1+1, 1+1+2, 1+2+1, 2+1+1, 2+2 - 5
// 1+1+1+1+1, 1+1+1+2, 1+1+2+1, 1+2+1+1, 2+1+1+1, 1+2+2, 2+1+2, 2+2+1 - 8
// 1+1+1+1+1+1, 1+1+1+1+2, 1+1+1+2+1, 1+1+2+1+1, 1+2+1+1+1, 2+1+1+1+1, 1+1+2+2, 1+2+1+2, 1+2+2+1, 2+1+2+1, 2+2+1+1, 2+1+1+2, 2+2+2 - 13

// off record problem #3
// function sort(arr) {
//   for (let i = 1; i < arr.length; i++)
//     for (let j = 0; j < i; j++)
//       if (arr[i] < arr[j]) {
//         let x = arr[i];
//         arr[i] = arr[j];
//         arr[j] = x;
//       }
//   return arr;
// }
// console.log(sort([2, 1, 7, 8, 2, 5, 6, 1, 2, 4, 7, 9]));

// 1. 1–100 хүртэлх бүх 3 болон 5-д хуваагддаг тоог хэвлэх
// let i = 1;
// while (i <= 100) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
//   }
//   i++;
// }

// 2. Өгөгдсөн тооны цифрүүдийн нийлбэрийг ол
// let n = 12345;
// let sum = 0;
// while (n > 0) {
//   let digit = n % 10;
//   sum += digit;
//   n = (n - digit) / 10;
// }
// console.log(sum);

// 3. Өгөгдсөн цагийг 24 цагийн форматаас 12 цагийн AM/PM форматаар хөрвүүлэх функц бич
// let result;
// let ampm;
// let hour = 25;
// switch (true) {
//   case hour === 0:
//     result = 12;
//     ampm = "AM";
//     break;
//   case hour === 12:
//     result = 12;
//     ampm = "PM";
//     break;
//   case hour > 12 && hour <= 24:
//     result = hour - 12;
//     ampm = "PM";
//     break;
//   case hour > 0 && hour <= 12:
//     result = hour;
//     ampm = "AM";
//     break;
//   default:
//     console.log("Invalid hour!");
//     break;
// }
// if (result !== undefined) {
//   console.log(`${result} ${ampm}`);
// }

// 4. Өгөгдсөн өдрийг шалгаж, зөвхөн амралтын өдөр эсвэл ажлын өдөр болохыг хэвлэнэ үү.
// let day = 1;
// while (day < 1 || day > 7) {
//   console.log(day);
// }
// switch (day) {
//   case 6:
//   case 7:
//     console.log("Weekend");
//     break;
//   default:
//     console.log("Weekday");
//     break;
// }
