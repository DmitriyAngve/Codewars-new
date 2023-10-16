// #1
/*
We need to write some code to return the original price of a product, the return type must be of type decimal and the number must be rounded to two decimal places.
We will be given the sale price (discounted price), and the sale percentage, our job is to figure out the original price.
For example:
Given an item at $75 sale price after applying a 25% discount, the function should return the original price of that item before applying the sale percentage, which is ($100.00) of course, rounded to two decimal places.
DiscoverOriginalPrice(75, 25) => 100.00M where 75 is the sale price (discounted price), 25 is the sale percentage and 100 is the original price
*/

/*
function discoverOriginalPrice(discountedPrice, salePercentage) {
  const discount = salePercentage / 100;
  const original = discountedPrice / (1 - discount);
  return Number(original.toFixed(2));
}

console.log(discoverOriginalPrice(75, 25));
console.log(discoverOriginalPrice(75.75, 25));
console.log(discoverOriginalPrice(25, 75));
*/
// #2
/*
Write a function
vowel2index(str)
that takes in a string and replaces all the vowels [a,e,i,o,u] with their respective positions within that string.
E.g:
vowel2index('this is my string') == 'th3s 6s my str15ng'
vowel2index('Codewars is the best site in the world') == 'C2d4w6rs 10s th15 b18st s23t25 27n th32 w35rld'
vowel2index('') == ''
Your function should be case insensitive to the vowels.
*/
/*
function vowel2index(str) {
  return str.replace(/[aeiou]/gi, (m, i) => i + 1);
}

console.log(vowel2index("this is my string"));
*/

// #3

/*
Converting a 12-hour time like "8:30 am" or "8:30 pm" to 24-hour time (like "0830" or "2030") sounds easy enough, right? Well, let's see if you can do it!
You will have to define a function, which will be given an hour (always in the range of 1 to 12, inclusive), a minute (always in the range of 0 to 59, inclusive), and a period (either a.m. or p.m.) as input.
Your task is to return a four-digit string that encodes that time in 24-hour time.
Notes
    By convention, noon is 12:00 pm, and midnight is 12:00 am.
    On 12-hours clock, there is no 0 hour, and time just after midnight is denoted as, for example, 12:15 am. On 24-hour clock, this translates to 0015.
*/
// SOLUTION #1
/*
function to24hourtime(hour, minute, period) {
   const h =
    period === "pm" ? (hour === 12 ? 12 : hour + 12) : hour === 12 ? "00" : hour < 10 ? "0" + hour : hour;
  const m = minute < 10 ? "0" + minute : minute;
  return `${h}${m}`;
}

console.log(to24hourtime(1, 0, "am"));
console.log(to24hourtime(6, 30, "pm"));
console.log(to24hourtime(1, 0, "pm"));
*/
// SOLUTION #2
/*
function to24hourtime(hour, minute, period) {
  const adj =
    period === "am" ? (hour === 12 ? 0 : hour) : hour === 12 ? 12 : hour + 12;

  // Format h and m as two-digits strings
  const forH = adj.toString().padStart(2, "0");
  const forM = minute.toString().padStart(2, "0");

  return `${forH}${forM}`;
}

console.log(to24hourtime(1, 0, "am"));
console.log(to24hourtime(6, 30, "pm"));
console.log(to24hourtime(1, 0, "pm"));
*/

// #4

/*
The vowel substrings in the word codewarriors are o,e,a,io. The longest of these has a length of 2. Given a lowercase string that has alphabetic characters only (both vowels and consonants) and no spaces, return the length of the longest vowel substring. Vowels are any of aeiou. 
*/
/*
function solve(s) {
  const vowels = s.match(/[aeiouAEIOU]+/g);
  if (!vowels) return "";

  let longest = "";

  for (const vowelGroup of vowels) {
    if (vowelGroup.length > longest.length) {
      longest = vowelGroup;
    }
  }
  return longest.length;
}

console.log(solve("codewarriors"));
*/

// #5

/*
Write a function that takes two arguments, and returns a new array populated with the elements that only appear once, in either one array or the other, taken only once; display order should follow what appears in arr1 first, then arr2:
hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5]) // [4, 5]
hotSingles(["tartar", "blanket", "cinnamon"], ["cinnamon", "blanket", "domino"]) // ["tartar", "domino"]
hotSingles([77, "ciao"], [78, 42, "ciao"]) // [77, 78, 42]
hotSingles([1, 2, 3, 3], [3, 2, 1, 4, 5, 4]) // [4,5]
*/
// SOLUTION #1
/*
function hotSingles(arr1, arr2) {
  const diff = (a, b) => a.filter((e) => !b.includes(e));
  return [...new Set([...diff(arr1, arr2), ...diff(arr2, arr1)])];
}
*/

// SOLUTION #2
/*
function hotSingles(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])].filter(
    (val) => !arr1.includes(val) || !arr2.includes(val)
  );
}

console.log(hotSingles(["tartar", "blanket", "domino"], ["blanket"]));
console.log(hotSingles([77, "basketweave"], [78, 42, "basketweave"]));
console.log(hotSingles([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
*/

// ALGORITHMS

// Linear_search
/*
const array = [1, 2, 3, 4, 8, 6, 7, 4, 1, 3, 6];
let count = 0;
function linearSearch(array, item) {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
}

console.log(linearSearch(array, 8));
console.log("count:", count);
*/

// Binary_search
/*
const array = [0, 1, 2, 3, 4, 6, 7, 8, 10, 12, 15, 17, 82, 91];
let count = 0;

// Цикл
function binarySearch(array, item) {
  // Получаем центральный элемент в массиве
  let start = 0; // позиция первого эл
  let end = array.length; // позиция последнего элемента
  let middle; // позиция среднего (считаем внутри цикла)

  let found = false; // вспомогательная переменная, помогающая отображать нашли ли мы элемнт в массиве или нет
  let position = -1; // вспомогательная переменная, позиция самого элемента, которую мы будем возвращать из функции (если элемент не был найдем, то вернём -1)

  // цикл продолжается пока мы либо не нашли элемент, либо стартовая и конечная позиция не поровнялись
  while (found === false && start <= end) {
    count += 1;
    middle = Math.floor((start + end) / 2); // вычисляю середину. Округление - это для получения целого числа

    if (array[middle] === item) {
      // если элемент, находящийся в массиве по индексу, который высчитали, равен тому элементу, который мы ищем, то:
      found = true;
      // присваиваем позицию
      position = middle;
      return position; // останавливаем цикл, потому что переборка идет пока found === false
    }
    // если на этой итерации не нашли элемент, то проверям искомый элемент меньше ли элемента, находящегося в самой середине (значит, нас интересует только левая часть массива)

    if (item < array[middle]) {
      end = middle - 1; // меняем значение end, чтобы не учитывать правую часть общего массива
    } else {
      start = middle + 1; // это то же самое, но для левой части!
    }
  }
  return position; // если не найден, то вернем -1
}
console.log(binarySearch(array, 17));
console.log("count:", count);
*/
/*
const arr = [0, 1, 2, 3, 4, 6, 7, 8, 10, 12, 15, 17, 82, 91];

function bin(arr, item) {
  let rigth = 0;
  let left = arr.length;
  let mid;
  let fou = false;
  let pos = -1;
  while (fou === false && rigth <= left) {
    mid = Math.floor((rigth + left) / 2); //12

    if (arr[mid] === item) {
      fou = true;
      pos = mid;
      return pos;
    }

    if (item < arr[mid]) {
      left = mid - 1;
    } else {
      rigth = mid + 1;
    }
  }
  return pos;
}

console.log(bin(arr, 2));
*/

// 08.10.2023
/*
Write a function that removes every lone 9 that is inbetween 7s.
"79712312" --> "7712312"
"79797"    --> "777"
*/
/*
function sevenAte9(str) {
  const arr = str.split("");
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "9" && arr[i - 1] === "7" && arr[i + 1] === "7") {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr.join("");
}

console.log(sevenAte9("79712312"));
console.log(sevenAte9("797"));
*/

// #2
/*
#Permutation position In this kata you will have to permutate through a string of lowercase letters, each permutation will start at a and you must calculate how many iterations it takes to reach the current permutation.
*/
/*
function permutationPosition(perm) {
  let res = 0;
  for (let i = 0; i < perm.length; i++) {
    res = res * 26 + perm.charCodeAt(i) - 97;
  }

  return res + 1; // +1 так как счет не с 0, а с 1
}

console.log(permutationPosition("a"));
console.log(permutationPosition("c"));
console.log(permutationPosition("z"));
console.log(permutationPosition("aaa"));
*/

// #3
/*
Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order.
*/
/*
sortme = function (names) {
  return names.sort();
};

console.log(sortme(["one", "two", "three"]));
*/

// 10.10.2023

// #1
/*
Description:
The museum of incredible dull things
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.
However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
Task
Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.
Don't change the order of the elements that are left.
Examples
* Input: [1,2,3,4,5], output = [2,3,4,5]
* Input: [5,3,2,1,4], output = [5,3,2,4]
* Input: [2,2,1,2,1], output = [2,2,2,1]
*/
/*
function removeSmallest(numbers) {
  if (numbers.length === 0) {
    return [];
  }

  const newArr = [...numbers];
  let minVal = newArr[0]; // для хранения наименьшего числа
  let minIdx = 0; // для хранения индекса наименьшего числа

  // Цикл начинаю со второго числа
  for (let i = 1; i < newArr.length; i++) {
    // Сравниваю текущее число в массиве с minVal (наименьшим числом)
    if (newArr[i] < minVal) {
      // Если текущее число меньше, чем minVal, то обновляю minVal
      minVal = newArr[i];
      // И обновляю индекс
      minIdx = i;
    }
  }
  // После завершения minVal будет хранить самое маленькое число, а minIdx - его индекс
  newArr.splice(minIdx, 1);
  return newArr;
}

console.log(removeSmallest([1, 2, 3, 4, 5]));
console.log(removeSmallest([5, 3, 2, 1, 4]));
console.log(removeSmallest([2, 2, 1, 2, 1]));
*/

// #2
/*
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.
Examples:
spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
spinWords( "This is a test") => returns "This is a test" 
spinWords( "This is another test" )=> returns "This is rehtona test
*/
/*
function spinWords(string) {
  const arr = string.split(" ");

  let reversed = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) {
      reversed.push(arr[i].split("").reverse().join(""));
    } else {
      reversed.push(arr[i]);
    }
  }
  return reversed.join(" ");
}

console.log(spinWords("Welcome"));
console.log(spinWords("This is a test"));
console.log(spinWords("This is another test"));
*/

// #3
/*
Digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  --
*/
/*
function digitalRoot(n) {
  if (n < 10) return n;
  const arr = n.toString().split("").map(Number);
  const result = arr.reduce((acc, curr) => acc + curr, 0);

  return digitalRoot(result);
}

console.log(digitalRoot(16));
console.log(digitalRoot(942));
console.log(digitalRoot(132189));
*/

// #4
/*
Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
*/
/*
var countBits = function (n) {
  if (n === 0) return 0;
  let ht = {};
  let count = 0;
  const arr = n.toString(2).split("").map(Number);
  console.log(arr);
  for (const bit of arr) {
    if (bit === 1) {
      count++;
      ht[bit] = (ht[bit] || 0) + 1; // "ht[bit] || 0" - проверка, есть ли в хэш таблице
    }
  }
  console.log(ht);
  return count;
};

console.log(countBits(0));
console.log(countBits(4));
console.log(countBits(7));
console.log(countBits(1234));
*/

// #5
/*
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
Examples
[2, 4, 0, 100, 4, 11, 2602, 36] -->  11 (the only odd number)
[160, 3, 1719, 19, 11, 13, -21] --> 160 (the only even number)
*/
/*
function findOutlier(integers) {
  let evenCount = 0;
  let oddCount = 0;
  let even = 0;
  let odd = 0;
  for (let i = 0; i < integers.length; i++) {
    if (integers[i] % 2 == 0) {
      evenCount++;
      even = integers[i];
    } else {
      oddCount++;
      odd = integers[i];
    }
  }
  if (evenCount === 1) {
    return even;
  } else {
    return odd;
  }
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));
*/

// 12.10.2023
/*
Usually when you buy something, you're asked whether your credit card number, phone number or answer to your most secret question is still correct. However, since someone could look over your shoulder, you don't want that shown on your screen. Instead, we mask it.
Your task is to write a function maskify, which changes all but the last four characters into '#'.
Examples (input --> output):
"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""
// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!
*/
/*
function maskify(cc) {
  if (cc.length <= 4) {
    return cc;
  }

  const arr = cc.split("");
  let lastFour = arr.slice(-4);
  let others = arr.splice(4);
  const replacement = "#";
  let replaced = others.map(() => replacement);

  return replaced.join("") + lastFour.join("");
}

console.log(maskify("4556364607935616"));
console.log(maskify("1"));
console.log(maskify("11111"));
*/

// #2
/*
When provided with a String, capitalize all vowels
For example:
Input : "Hello World!"
Output : "HEllO WOrld!"
Note: Y is not a vowel in this kata.
*/
/*
function swap(string) {
  const regExp = /[aeiou]/g;
  const arr = string.split("");
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(regExp)) {
      newArr.push(arr[i].toUpperCase());
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr.join("");
}

console.log(swap("Friday"));
console.log(swap("abracadabra"));
console.log(swap("   @@@"));
*/

// #3
/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case). The next words should be always capitalized.
Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"
"The_Stealth-Warrior" gets converted to "TheStealthWarrior"
*/
/*
function toCamelCase(str) {
  if (!str.length) return "";
  const regExp = /[-_](.)/g;
  return str.replace(regExp, function (char) {
    return char.toUpperCase();
  });
}

console.log(toCamelCase(""));
console.log(toCamelCase("the_stealth_warrior"));
console.log(toCamelCase("The-Stealth-Warrior"));
*/

// #4
/*
A Narcissistic Number (or Armstrong Number) is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).
For example, take 153 (3 digits), which is narcissistic:
    1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:
    1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938
The Challenge:
Your code must return true or false (not 'true' and 'false') depending upon whether the given number is a Narcissistic number in base 10.
*/
/*
function narcissistic(value) {
  const arr = value.toString().split("").map(Number);
  console.log(arr);
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i] ** arr.length;
  }
  return result === value ? true : false;
}

console.log(narcissistic(1652));
console.log(narcissistic(153));
console.log(narcissistic(7));
*/

// #5
/*
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
Examples:
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/
/*
function solution(str) {
  const pairs = [];
  for (let i = 0; i < str.length; i += 2) {
    const pair = str.slice(i, i + 2);
    pairs.push(pair);
  }

  if (str.length % 2 !== 0) {
    pairs[pairs.length - 1] += "_";
  }
  return pairs;
}

console.log(solution("abcdef"));
console.log(solution("abcdefg"));
console.log(solution(""));
*/

// #6
/*
Find the missing letter
Write a method that takes an array of consecutive (increasing) letters as input and that returns the missing letter in the array.
You will always get an valid array. And it will be always exactly one letter be missing. The length of the array will always be at least 2.
The array will always contain letters in only one case.
Example:
['a','b','c','d','f'] -> 'e'
['O','Q','R','S'] -> 'P'
(Use the English alphabet with 26 letters!)
Have fun coding it and please don't forget to vote and rank this kata! :-)
I have also created other katas. Take a look if you enjoyed this kata!
*/
/*
function findMissingLetter(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    const current = arr[i].charCodeAt();
    const next = arr[i + 1].charCodeAt();

    if (next - current > 1) {
      return String.fromCharCode(current + 1);
    }
  }
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
console.log(findMissingLetter(["O", "Q", "R", "S"]));
*/

// #6
/*
Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
Example:
divisors(12); // should return [2,3,4,6]
divisors(25); // should return [5]
divisors(13); // should return "13 is prime"
*/
/*
function divisors(integer) {
  let result = [];
  for (let i = 1; i <= integer; i++) {
    if (integer % i === 0 && integer !== i) {
      result.push(i);
    }
  }
  result = result.slice(1);

  return result.length > 1 ? result : `${integer} is prime`;
}

console.log(divisors(15));
console.log(divisors(12));
console.log(divisors(13));
*/

// #7
/*
Write a function that takes a string of braces, and determines if the order of the braces is valid. It should return true if the string is valid, and false if it's invalid.
This Kata is similar to the Valid Parentheses Kata, but introduces new characters: brackets [], and curly braces {}. Thanks to @arnedag for the idea!
All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.
What is considered Valid?
A string of braces is considered valid if all braces are matched with the correct brace.
Examples
"(){}[]"   =>  True
"([{}])"   =>  True
"(}"       =>  False
"[(])"     =>  False
"[({})](]" =>  False
*/
/*
function validBraces(braces) {
  const stack = [];
  const brackets = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (const brace of braces) {
    if (brackets[brace]) {
      stack.push(brace);
    } else {
      const lastBracket = stack.pop();
      if (brackets[lastBracket] !== brace) {
        return false;
      }
    }
  }
  return stack.length === 0;
}

console.log(validBraces("()))"));
console.log(validBraces("(){}[]"));
console.log(validBraces("([{}])"));
console.log(validBraces("[(])"));
*/

// 16.10.2023

// #1
/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/
/*
function getCount(str) {
  const ht = {};
  const vowels = "aeiou";
  let count = 0;

  for (const vowel of str) {
    if (vowels.includes(vowel)) {
      count++;
      ht[vowel] = (ht[vowel] || 0) + 1;
    }
  }

  return count;
}

console.log(getCount("dewefwrsqqeieueu"));
console.log(getCount("abracadabra"));
*/

// #2
/*
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1. (81-1-1-81)
Example #2: An input of 765 will/should return 493625 because 72 is 49, 62 is 36, and 52 is 25. (49-36-25)
*/
function squareDigits(num) {
  const arr = num.toString().split("").map(Number);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] ** 2);
  }
  return Number(result.join(""));
}

console.log(squareDigits(9119));
console.log(squareDigits(765));
console.log(squareDigits(3212));
