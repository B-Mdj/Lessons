// 1.
// function isDivisibleby5(a) {
//   if (a % 5 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// const result = isDivisbleby5(15);
// console.log(result);

// 2.
// function OnetoHundred(a) {
//   if ((a >= 1 && a <= 100)) {
//     return "include";
//   } else {
//     return "exclude";
//   }
// }
// const result = OnetoHundred(100);
// console.log(result);

// 3.
// function Compare(a, b, c) {
//   if ((a >= b&& a >= c)) {
//     return (largest = a);
//   }
//   if ((b >= a&& b >= c)) {
//     return (largest = b);
//   }
//   if ((c >= a&& c >= b)) {
//     return (largest = c);
//   }
// }
// const result = Compare(1, 8, 120);
// console.log(result);

// 4.
// function OlympicYear(a) {
//   if (a % 4 === 0) {
//     return "Olympic year";
//   } else {
//     return "Not Olympic year";
//   }
// }
// const result = OlympicYear(2023);
// console.log(result);

// 5.
// function Grade(a) {
//   if (a >= 90 && a <= 100) return "A";
//   else if (a >= 70) return "B";
//   else if (a >= 60) return "C";
//   else if (a >= 50) return "D";
//   else return "F";
// }
// const result = Grade(99);
// console.log(result);

// 6.
// function Season(a) {
//   if (a >= 6 && a <= 8) return "summer";
//   else if (a >= 9 && a <= 11) return "autumn";
//   else if (a === 12 && a === 1 && a === 2) return "winter";
//   else if (a >= 3 && a <= 5) return "spring";
// }
// const result = Season(7);
// console.log(result);

// 7.
// function Time(a) {
//   if (a >= 5 && a <= 12) return "good morning";
//   else if (a >= 13 && a <= 18) return "good afternoon";
//   else return "good evening";
// }
// const result = Time(3);
// console.log(result);

// 8.
// function Weather(a, b) {
//   if (a === "rainy") {
//     return "Don't forget your umbrella";
//   } else if (a === "sunny") {
//     if (b > 30) return "It's a hot day";
//   } else if (b >= 20) return "It's a warm day";
//   else return "It's a bit cool today";
// }
// const result = Weather(25);
// console.log(result);

// 9.
// function DrivingAge(a) {
//   if (a >= 18) return "Your are old enough to drive";
// }
// 10.
// 11.

// for (let i = 1; i < 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }
// for (let i = 1; i < 100; i++) {
//   if (i % 2 === 1) {
//     console.log(i);
//   }
// }

// const arr = [352, 23, 51231, 3612, 1547, 12, 5, 1203];
// let largest = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > largest) {
//     largest = arr[i];
//   }
// }
// console.log(largest);

// const str = { firstName: "    bAT    ", lastName: "    BoLD    " };
// const x = ({ firstName, lastName }) => {
//   firstName = firstName.toLowerCase().trim();
//   lastName = lastName.toLowerCase().trim();
//   const firstInitial = firstName[0].toUpperCase();
//   const formattedLastName = lastName[0].toUpperCase() + lastName.slice(1);
//   return `${firstInitial}. ${formattedLastName}`;
// };

// console.log(x(str));

// 1. Reverse a string
// const str = "hello";
// const reverseString = (str) => {
//   return str.split("").reverse().join("");
// };
// console.log(reverseString(str));

// 2. Check if string is a palindrome
// const isPalindrome = (str) => {
//   let pal = str.split("").reverse().join("");
//   if (pal == str) {
//     return true;
//   }
//   return false;
// };
// console.log(isPalindrome("banana"));

// 3. Count vowels in a string
// const countVowels = (str) =>
//   [...str].filter((x) => "aeiouAEIOU".includes(x)).length;
// console.log(countVowels("education"));

// 4. Find the longest word in a sentence
const findLongestWord = (sentence) => {
  return sentence.split(" ").sort(a, b);
};
