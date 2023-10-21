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
/*
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
*/

// #3
/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
Examples
highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
*/
/*
function highAndLow(numbers) {
  const arr = numbers
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  return `${arr[arr.length - 1]} ${arr[0]}`;
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
console.log(highAndLow("1 2 3"));
*/

// #4
/*
Make a program that filters a list of strings and returns a list with only your friends name in it.
If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
i.e.
friend ["Ryan", "Kieran", "Mark"] `shouldBe` ["Ryan", "Mark"]
*/
/*
function friend(friends) {
  let res = [];
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length === 4) {
      res.push(friends[i]);
    }
  }
  return res;
}

console.log(friend(["Ryan", "Kieran", "Mark"]));
*/

// #5
/*
In this kata you get the start number and the end number of a region and should return the count of all numbers except numbers with a 5 in it. The start and the end number are both inclusive!
Examples:
1,9 -> 1,2,3,4,6,7,8,9 -> Result 8
4,17 -> 4,6,7,8,9,10,11,12,13,14,16,17 -> Result 12
The result may contain fives. ;-)
The start number will always be smaller than the end number. Both numbers can be also negative!
I'm very curious for your solutions and the way you solve it. Maybe someone of you will find an easy pure mathematics solution.
*/
/*
function dontGiveMeFive(start, end) {
  let count = 0;
  for (let i = start; i <= end; i++) {
    if (i.toString().includes("5")) {
    } else {
      count++;
    }
  }
  return count;
}

console.log(dontGiveMeFive(1, 81));
*/

// #6
/*
Your task is to split the chocolate bar of given dimension n x m into small squares. Each square is of size 1x1 and unbreakable. Implement a function that will return minimum number of breaks needed.
For example if you are given a chocolate bar of size 2 x 1 you can split it to single squares in just one break, but for size 3 x 1 you must do two breaks.
If input data is invalid you should return 0 (as in no breaks are needed if we do not have any chocolate to split). Input will always be a non-negative integer.
*/
/*
function breakChocolate(n, m) {
  if (typeof n !== "number" || typeof m !== "number") {
    return 0;
  }

  if (n <= 0 || m <= 0) return 0;

  return n * m - 1;
}

console.log(breakChocolate(5, 5));
*/

// #7
/*
Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.
Examples (input --> output):

"hello case" --> "HelloCase"
"camel case word" --> "CamelCaseWord"
*/
/*
String.prototype.camelCase = function () {
  return this.split(" ")
    .map(function (word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join("");
};
*/

// 18.10.2023
//#1
/*
Number is a palindrome if it is equal to the number with digits in reversed order. For example, 5, 44, 171, 4884 are palindromes, and 43, 194, 4773 are not.
Write a function which takes a positive integer and returns the number of special steps needed to obtain a palindrome. The special step is: "reverse the digits, and add to the original number". If the resulting number is not a palindrome, repeat the procedure with the sum until the resulting number is a palindrome.
If the input number is already a palindrome, the number of steps is 0.
All inputs are guaranteed to have a final palindrome which does not overflow MAX_SAFE_INTEGER.
Example
For example, start with 87:
  87 +   78 =  165     - step 1, not a palindrome
 165 +  561 =  726     - step 2, not a palindrome
 726 +  627 = 1353     - step 3, not a palindrome
1353 + 3531 = 4884     - step 4, palindrome!
4884 is a palindrome and we needed 4 steps to obtain it, so answer for 87 is 4.
*/
/*
function palindromeChainLength(n) {
  let count = 0;

  while (!isPalindrome(n)) {
    n = n + reverseNumber(n);
    count++;
  }

  return count;
}

function isPalindrome(num) {
  const strNum = num.toString();
  return strNum === strNum.split("").reverse().join("");
}

function reverseNumber(num) {
  return Number(num.toString().split("").reverse().join(""));
}

console.log(palindromeChainLength(1));
console.log(palindromeChainLength(88));
console.log(palindromeChainLength(87));
console.log(palindromeChainLength(89));
*/

// #2
/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order of the strings of a1 which are substrings of strings of a2.
Example 1:
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns ["arp", "live", "strong"]
Example 2:
a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns []
*/
/*
function inArray(a1, a2) {
  const result = [];

  for (const str1 of a1) {
    for (const str2 of a2) {
      if (str2.includes(str1)) {
        result.push(str1);
        break;
      }
    }
  }

  return result.sort();
}

console.log(
  inArray(
    ["xyz", "live", "strong"],
    ["lively", "alive", "harp", "sharp", "armstrong"]
  )
);
*/

// #3
/*
Write a function that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.
The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').
Examples:
"String" => "StRiNg"
"Weird string case" => "WeIrD StRiNg CaSe"
*/
/*
function toWeirdCase(string) {
  const arr = string.split(" ");
  console.log(arr);

  function transform(word) {
    return word
      .split("")
      .map((char, index) => {
        if (index % 2 === 0) {
          return char.toUpperCase();
        } else {
          return char.toLowerCase();
        }
      })
      .join("");
  }

  const transformedWords = arr.map(transform);

  return transformedWords.join(" ");
}

console.log(toWeirdCase("This is a test"));
*/

// #4
/*
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].
The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.
For example (Input --> Output):
[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10]
*/
/*
function twoOldestAges(ages) {
  let sorted = ages.sort((a, b) => b - a);
  console.log(sorted);

  return [sorted[1], sorted[0]];
}

console.log(twoOldestAges([1, 2, 10, 8]));
console.log(twoOldestAges([1, 5, 87, 45, 8, 8]));
*/

// #5
/*
Write an algorithm that will identify valid IPv4 addresses in dot-decimal format. IPs should be considered valid if they consist of four octets, with values between 0 and 255, inclusive.
Valid inputs examples:
Examples of valid inputs:
1.2.3.4
123.45.67.89
Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089
Notes:
    Leading zeros (e.g. 01.02.03.04) are considered invalid
    Inputs are guaranteed to be a single string
*/
/*
function isValidIP(str) {
  const segments = str.split(".");

  if (segments.length !== 4) {
    return false;
  }

  for (const segment of segments) {
    if (!/^\d+$/.test(segment)) {
      return false;
    }

    const num = parseInt(segment, 10);
    if (num < 0 || num > 255) {
      return false;
    }

    if (segment.length > 1 && segment[0] === "0") {
      return false;
    }
  }

  return true;
}

console.log(isValidIP("0.0.0.0"));
console.log(isValidIP("12.255.56.1"));
console.log(isValidIP("01.02.03.04"));
console.log(isValidIP("12.34.56"));
console.log(isValidIP(" 1.2.3.4"));
console.log(isValidIP("abc.def.ghi.jkl"));
console.log(isValidIP(""));
*/

// #6
/*
Write a simple parser that will parse and run Deadfish.
Deadfish has 4 commands, each 1 character long:
    i increments the value (initially 0)
    d decrements the value
    s squares the value
    o outputs the value into the return array
Invalid characters should be ignored.
parse("iiisdoso") => [ 8, 64 ]
*/
/*
function parse(data) {
  let value = 0;
  const result = [];
  for (let i = 0; i < data.length; i++) {
    const command = data[i];

    switch (command) {
      case "i":
        value++;
        break;
      case "d":
        value--;
        break;
      case "s":
        value = value * value;
        break;
      case "o":
        result.push(value);
        break;
    }
  }

  return result;
}

console.log(parse("iiisdoso"));
console.log(parse("iiisxxxdoso"));
*/

// 19.10.2023
// #1
/*
In the following 6 digit number:
283910
91 is the greatest sequence of 2 consecutive digits.
In the following 10 digit number:
1234567890
67890 is the greatest sequence of 5 consecutive digits.
Complete the solution so that it returns the greatest sequence of five consecutive digits found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits. 
*/
/*
function solution(digits) {
  let max = 0;
  for (let i = 0; i <= digits.length - 5; i++) {
    const seq = parseInt(digits.substr(i, 5));
    max = Math.max(max, seq);
  }

  return max;
}

console.log(solution("1234567898765"));
*/

// #2
/*
Are the numbers in order?
In this Kata, your function receives an array of integers as input. Your task is to determine whether the numbers are in ascending order. An array is said to be in ascending order if there are no two adjacent integers where the left integer exceeds the right integer in value.
For the purposes of this Kata, you may assume that all inputs are valid, i.e. arrays containing only integers.
Note that an array of 0 or 1 integer(s) is automatically considered to be sorted in ascending order since all (zero) adjacent pairs of integers satisfy the condition that the left integer does not exceed the right integer in value.
For example:
inAscOrder([1,2,4,7,19]); // returns true
inAscOrder([1,2,3,4,5]); // returns true
inAscOrder([1,6,10,18,2,4,20]); // returns false
inAscOrder([9,8,7,6,5,4,3,2,1]); // returns false because
*/
/*
function inAscOrder(arr) {
  if (arr.length === 0 || arr.length === 1) {
    return true;
  }
  let arr1 = Number(arr.join(""));
  let arr2 = Number(arr.sort((a, b) => a - b).join(""));
  return arr1 === arr2;
}

console.log(inAscOrder([1, 2, 4, 7, 19]));
console.log(inAscOrder([1, 2, 3, 4, 5]));
console.log(inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1]));
*/

// #3
/*
Let us consider this example (array written in general format):
ls = [0, 1, 3, 6, 10]
Its following parts:
ls = [0, 1, 3, 6, 10]
ls = [1, 3, 6, 10]
ls = [3, 6, 10]
ls = [6, 10]
ls = [10]
ls = []
The corresponding sums are (put together in a list): [20, 20, 19, 16, 10, 0]
The function parts_sums (or its variants in other languages) will take as parameter a list ls and return a list of the sums of its parts as defined above.
Other Examples:
ls = [1, 2, 3, 4, 5, 6] 
parts_sums(ls) -> [21, 20, 18, 15, 11, 6, 0]
ls = [744125, 935, 407, 454, 430, 90, 144, 6710213, 889, 810, 2579358]
parts_sums(ls) -> [10037855, 9293730, 9292795, 9292388, 9291934, 9291504, 9291414, 9291270, 2581057, 2580168, 2579358, 0]
Notes
    Take a look at performance: some lists have thousands of elements.
    Please ask before translating.
*/
/*
function partsSums(ls) {
  let totalSum = 0;
  const result = new Array(ls.length + 1);
  result[ls.length] = 0; // устанавливаю последний элемент как 0
  for (let i = ls.length - 1; i >= 0; i--) {
    totalSum += ls[i];
    result[i] = totalSum;
  }

  return result;
}

console.log(partsSums([]));
console.log(partsSums([0, 1, 3, 6, 10]));
console.log(partsSums([1, 2, 3, 4, 5, 6]));
*/

// #4
/*
Your task is to remove all duplicate words from a string, leaving only single (first) words entries.
Example:
Input:
'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
Output:
'alpha beta gamma delta'
*/
/*
function removeDuplicateWords(s) {
  let words = s.split(" ");

  const unique = new Set(words);
  console.log(unique);
  const uniqueArr = Array.from(unique);
  console.log(uniqueArr);
  const result = uniqueArr.join(" ");

  return result;
}

console.log(
  removeDuplicateWords(
    "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
  )
);
*/

// #5
/*
An Arithmetic Progression is defined as one in which there is a constant difference between the consecutive terms of a given series of numbers. You are provided with consecutive elements of an Arithmetic Progression. There is however one hitch: exactly one term from the original series is missing from the set of numbers which have been given to you. The rest of the given series is the same as the original AP. Find the missing term.
You have to write a function that receives a list, list size will always be at least 3 numbers. The missing term will never be the first or last one.
Example
findMissing([1, 3, 5, 9, 11]) == 7
*/
/*
var findMissing = function (list) {
  const step = (list[list.length - 1] - list[0]) / list.length;
  for (let i = 0; i < list.length; i++) {
    let result = list[i] + step;
    if (result === list[i + 1]) {
      continue;
    } else {
      return result;
    }
  }
};

console.log(findMissing([1, 3, 5, 9, 11]));
console.log(findMissing([1, 3, 4]));
*/

// #6
/*
You will be given an array of objects (hashes in ruby) representing data about developers who have signed up to attend the coding meetup that you are organising for the first time.
Your task is to return the number of JavaScript developers coming from Europe.
For example, given the following list:
var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'JavaScript' },
  { firstName: 'Maia', lastName: 'S.', country: 'Tahiti', continent: 'Oceania', age: 28, language: 'JavaScript' },
  { firstName: 'Shufen', lastName: 'L.', country: 'Taiwan', continent: 'Asia', age: 35, language: 'HTML' },
  { firstName: 'Sumayah', lastName: 'M.', country: 'Tajikistan', continent: 'Asia', age: 30, language: 'CSS' }
];
your function should return number 1.
If, there are no JavaScript developers from Europe then your function should return 0.
Notes:
    The format of the strings will always be Europe and JavaScript.
    All data will always be valid and uniform as in the example above.
*/
/*
function countDevelopers(list) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].continent === "Europe" && list[i].language === "JavaScript") {
      count++;
    }
  }
  return count;
}

console.log(
  countDevelopers([
    {
      firstName: "Noah",
      lastName: "M.",
      country: "Switzerland",
      continent: "Europe",
      age: 19,
      language: "JavaScript",
    },
    {
      firstName: "Maia",
      lastName: "S.",
      country: "Tahiti",
      continent: "Oceania",
      age: 28,
      language: "JavaScript",
    },
    {
      firstName: "Shufen",
      lastName: "L.",
      country: "Taiwan",
      continent: "Asia",
      age: 35,
      language: "HTML",
    },
    {
      firstName: "1",
      lastName: "M.",
      country: "Switzerland",
      continent: "Europe",
      age: 19,
      language: "JavaScript",
    },
    {
      firstName: "2",
      lastName: "M.",
      country: "Switzerland",
      continent: "Europe",
      age: 19,
      language: "JavaScript",
    },
  ])
);
*/

// #7
/*
Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"
Your task is to process a string with "#" symbols.
Examples
"abc#d##c"      ==>  "ac"
"abc##d######"  ==>  ""
"#######"       ==>  ""
""              ==>  ""
*/
/*
function cleanString(s) {
  if (!s.length) return "";
  let arr = s.split("");
  let result = [];
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "#") {
      result.pop();
    } else {
      result.push(s[i]);
    }
  }
  return result.join("");
}

console.log(cleanString("abc#d##c"));
console.log(cleanString("abc##d######"));
console.log(cleanString(""));
*/

// 20.10.2023

// #1
/*
Return an array containing the numbers from 1 to N, where N is the parametered value.
Replace certain values however if any of the following conditions are met:
    If the value is a multiple of 3: use the value "Fizz" instead
    If the value is a multiple of 5: use the value "Buzz" instead
    If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
N will never be less than 1.
Method calling example:
fizzbuzz(3) -->  [1, 2, "Fizz"]
*/
/*
function fizzbuzz(n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else {
      result.push(i);
    }
  }
  return result;
}

console.log(fizzbuzz(3));
console.log(fizzbuzz(4));
console.log(fizzbuzz(15));
*/

// #2
/*
Triangular numbers are so called because of the equilateral triangular shape that they occupy when laid out as dots. i.e.
1st (1)   2nd (3)    3rd (6)
*          **        ***
           *         **
                     *
You need to return the nth triangular number. You should return 0 for out of range values:
For example: (Input --> Output)
0 --> 0
2 --> 3
3 --> 6
-10 --> 0
*/
/*
function triangular(n) {
  if (n < 0) {
    return 0;
  }

  return (n * (n + 1)) / 2;
}

console.log(triangular(2));
console.log(triangular(4));
console.log(triangular(-454));
*/

// #3
/*
Write a function that takes a positive integer n, sums all the cubed values from 1 to n (inclusive), and returns that sum.
Assume that the input n will always be a positive integer.
Examples: (Input --> output)
2 --> 9 (sum of the cubes of 1 and 2 is 1 + 8)
3 --> 36 (sum of the cubes of 1, 2, and 3 is 1 + 8 + 27)
*/
/*
function sumCubes(n) {
  const arr = Array.from({ length: n }, (_, index) => index + 1);
  console.log(arr);

  const res = arr.map((val) => val ** 3);
  return res.reduce((acc, curr) => acc + curr, 0);
}

console.log(sumCubes(2));
console.log(sumCubes(3));
*/

// #4
/*
Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)
Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.
Examples
 123 ->  321
-456 -> -654
1000 ->    1
*/
/*
function reverseNumber(n) {
  const arr = [...(n + "")];

  if (n < 0) {
    const first = arr.shift();

    arr.reverse();
    arr.unshift(first);
  } else {
    arr.reverse();
  }
  const rev = arr.join("");
  const revNum = parseInt(rev, 10);
  return revNum;
}

console.log(reverseNumber(123));
console.log(reverseNumber(1000));
console.log(reverseNumber(-456));
*/

// #5
/*
In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:
    years divisible by 4 are leap years
    but years divisible by 100 are not leap years
    but years divisible by 400 are leap years
Additional Notes:
    Only valid years (positive integers) will be tested, so you don't have to validate them
Examples can be found in the test fixture.
*/
/*
function isLeapYear(year) {
  if (year % 4 === 0) {
    if (year % 100 === 0) {
      return year % 400 === 0;
    } else {
      return true;
    }
  }
  return false;
}

console.log(isLeapYear(2020));
console.log(isLeapYear(2000));
console.log(isLeapYear(2015));
console.log(isLeapYear(2100));
*/

// #6
/*
Write a function that accepts a string, and returns true if it is in the form of a phone number.
Assume that any integer from 0-9 in any of the spots will produce a valid phone number.
Only worry about the following format:
(123) 456-7890 (don't forget the space after the close parentheses)
Examples:
"(123) 456-7890"  => true
"(1111)555 2345"  => false
"(098) 123 4567"  => false
*/
/*
function validPhoneNumber(s) {
  // const phoneRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
  // return phoneRegex.test(s);

  if (s.length !== 14) {
    return false;
  }

  if (s[4] !== ")") {
    return false;
  }

  if (s[5] !== " ") {
    return false;
  }

  if (s[9] !== "-") {
    return false;
  } else {
    return true;
  }
}

console.log(validPhoneNumber("(123) 456-7890"));
console.log(validPhoneNumber("(1111)555 2345"));
console.log(validPhoneNumber("(098) 123 4567"));
*/

// #7
/*
Write a function
tripledouble(num1,num2)
which takes numbers num1 and num2 and returns 1 if there is a straight triple of a number at any place in num1 and also a straight double of the same number in num2.
If this isn't the case, return 0
Examples
tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
                                          // num2 has straight double 99s
tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2
tripledouble(12345, 12345) == 0
tripledouble(666789, 12345667) == 1
*/
/*
function tripledouble(num1, num2) {
  const str1 = num1.toString();
  const str2 = num2.toString();

  for (let i = 0; i <= 9; i++) {
    const triple = i.toString() + i.toString() + i.toString();
    const double = i.toString() + i.toString();

    if (str1.includes(triple) && str2.includes(double)) {
      return 1;
    }
  }
  return 0;
}

console.log(tripledouble(451999277, 41177722899));
console.log(tripledouble(1222345, 12345));
console.log(tripledouble(10560002, 100));
*/

// #8
/*
Description:

In this Kata, you will implement the Luhn Algorithm, which is used to help validate credit card numbers.
Given a positive integer of up to 16 digits, return true if it is a valid credit card number, and false if it is not.
Here is the algorithm:
    Double every other digit, scanning from right to left, starting from the second digit (from the right).
    Another way to think about it is: if there are an even number of digits, double every other digit starting with the first; if there are an odd number of digits, double every other digit starting with the second:
    1714 ==> [1*, 7, 1*, 4] ==> [2, 7, 2, 4]
    12345 ==> [1, 2*, 3, 4*, 5] ==> [1, 4, 3, 8, 5]
    891 ==> [8, 9*, 1] ==> [8, 18, 1]
    If a resulting number is greater than 9, replace it with the sum of its own digits (which is the same as subtracting 9 from it):
[8, 18*, 1] ==> [8, (1+8), 1] ==> [8, 9, 1]
or:
[8, 18*, 1] ==> [8, (18-9), 1] ==> [8, 9, 1]
    Sum all of the final digits:
    [8, 9, 1] ==> 8 + 9 + 1 = 18
    Finally, take that sum and divide it by 10. If the remainder equals zero, the original credit card number is valid.
    18 (modulus) 10 ==> 8 , which is not equal to 0, so this is not a valid credit card number
*/
/*
function validate(n) {
  // В строку
  const digits = n.toString().split("").map(Number);

  // Цикл, проходящийся слева направо, удваивая каждую цифру
  for (let i = digits.length - 2; i >= 0; i -= 2) {
    let doubled = digits[i] * 2;

    // Если удвоенная цифра больше 9, заменить её суммой цифр
    if (doubled > 9) {
      doubled -= 9;
    }

    digits[i] = doubled;
  }

  // Сложитб все цифры
  const sum = digits.reduce((acc, digit) => acc + digit, 0);

  // Проверка, делиться ли на 10 без остатка
  return sum % 10 === 0;
}

console.log(validate(123));
console.log(validate(1));
console.log(validate(2121));
*/

// 21.10.2023

// #1
/*
Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/
/*
function moveZeros(arr) {
  let result = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      result.push(arr[i]);
    } else {
      count++;
    }
  }
  let countArr = Array.from({ length: count }, () => 0);
  return result.concat(countArr);
}

console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1]));
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
*/

// #2
/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway !
*/
function pigIt(str) {
  const arr = str.split(" ");
  const resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    if (/[A-Za-z]/.test(word)) {
      // Проверьте, что слово состоит из букв
      let first = word[0];
      const restOfString = word.slice(1);
      const result = restOfString + first + "ay";
      resultArr.push(result);
    } else {
      // Если слово не состоит из букв, добавьте его как есть
      resultArr.push(word);
    }
  }

  const resultStr = resultArr.join(" ");
  return resultStr;
}

console.log(pigIt("Pig latin is cool"));
console.log(pigIt("This is my string"));
