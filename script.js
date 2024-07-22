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
/*
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
*/

// #3
/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
You can find some examples in the test fixtures.
*/
/*
function humanReadable(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;
  const formattedHours = hours.toString().padStart(2, "0");
  const formattedMinutes = minutes.toString().padStart(2, "0");
  const formattedSeconds = remainingSeconds.toString().padStart(2, "0");

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

console.log(humanReadable(0));
console.log(humanReadable(59));
console.log(humanReadable(60));
console.log(humanReadable(3600));
*/

// 24.10.2023

//#1
/*
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.
Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
Examples (input --> output):
255, 255, 255 --> "FFFFFF"
255, 255, 300 --> "FFFFFF"
0, 0, 0       --> "000000"
148, 0, 211   --> "9400D3"
*/
/*
function rgb(r, g, b) {
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));

  // padStart(2, "0") -это для обеспечения длины в 2 символа (добавляет 0 слева)
  const result = [
    r.toString(16).padStart(2, "0"),
    g.toString(16).padStart(2, "0"),
    b.toString(16).padStart(2, "0"),
  ]
    .join("")
    .toUpperCase();

  return result;
}

console.log(rgb(255, 255, 255));
console.log(rgb(255, 255, 300));
console.log(rgb(148, 0, 211));
*/

// #2
/*
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!
Here's the deal:
    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.
Examples
" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false
*/
/*
function generateHashtag(str) {
  // if (!str.trim()) return false;
  // if (str.length >= 140) return false;
  // const arr = str.split(" ");
  // console.log(arr);
  // if (arr.length === 1) {
  //   return "#" + arr;
  // }
  // let result = [];
  // for (let i = 0; i < arr.length; i++) {
  //   let word = arr[i].split("");
  //   word[0] = word[0].toUpperCase();
  //   word = word.join("");
  //   result.push(word);
  // }
  // return "#" + result.join("");

  if (!str || !str.trim()) return false;

  const words = str.split(" ");

  const capitalize = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  console.log(capitalize);

  const hashtag = "#" + capitalize.join("");

  if (hashtag.length > 140) return false;

  return hashtag;
}

console.log(generateHashtag(""));
console.log(generateHashtag("Do We have A Hashtag"));
console.log(generateHashtag("Codewars is nice"));
console.log(generateHashtag("Codewars"));
*/

// #3
/*
Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?
Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.
Examples:
// must return 2
cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// must return 0
cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 
*/
/*
function cakes(recipe, available) {
  let maxCakes = Infinity;

  for (const ingr in recipe) {
    if (recipe.hasOwnProperty(ingr) && available.hasOwnProperty(ingr)) {
      const recipePerIngr = recipe[ingr];
      const availableIngr = available[ingr];
      const possible = Math.floor(availableIngr / recipePerIngr);

      if (possible < maxCakes) {
        maxCakes = possible;
      }
    } else {
      return 0;
    }
  }
  return maxCakes;
}

console.log(
  cakes(
    { flour: 500, sugar: 200, eggs: 1 },
    { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
  )
);
console.log(
  cakes(
    { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 },
    { sugar: 500, flour: 2000, milk: 2000 }
  )
);
*/

// #4
/*
Write a function named first_non_repeating_letter that takes a string input, and returns the first character that is not repeated anywhere in the string.
For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.
As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.
If a string contains all repeating characters, it should return an empty string ("") or None -- see sample tests.
*/
/*
function firstNonRepeatingLetter(s) {
  const count = {};

  for (const char of s) {
    const normal = char.toLowerCase();
    count[normal] = (count[normal] || 0) + 1;
  }

  for (const char of s) {
    if (count[char.toLowerCase()] === 1) {
      return char;
    }
  }

  return "";
}

console.log(firstNonRepeatingLetter("a"));
console.log(firstNonRepeatingLetter("stress"));
console.log(firstNonRepeatingLetter("moonmen"));
*/

// #5
/*
As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(
So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:
[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:
[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.
Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)
*/
/*
function tribonacci(arr, n) {
  if (n === 0) return [];
  if (n <= 3) return arr.slice(0, n);

  for (let i = 3; i < n; i++) {
    let next = arr[i - 1] + arr[i - 2] + arr[i - 3];
    arr.push(next);
  }

  return arr;
}

console.log(tribonacci([1, 1, 1], 10));
*/

// #6
/*
Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
Notes:
    Only lower case letters will be used (a-z). No punctuation or digits will be included.
    Performance needs to be considered.
Examples
scramble('rkqodlw', 'world') ==> True
scramble('cedewaraaossoqqyt', 'codewars') ==> True
scramble('katas', 'steak') ==> False
*/
/*
function scramble(str1, str2) {
  const count1 = {};
  const count2 = {};

  for (const char of str1) {
    count1[char] = (count1[char] || 0) + 1;
  }

  for (const char of str2) {
    count2[char] = (count2[char] || 0) + 1;
  }

  for (const char in count2) {
    if (!count1[char] || count1[char] < count2[char]) {
      return false;
    }
  }
  return true;
}

console.log(scramble("rkqodlw", "world"));
console.log(scramble("katas", "steak"));
*/

// #7
/*
Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).
Notes:
    Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
    Input >> Output Examples
minValue ({1, 3, 1})  ==> return (13)
Explanation:
(13) is the minimum number could be formed from {1, 3, 1} , Without duplications
minValue({5, 7, 5, 9, 7})  ==> return (579)
Explanation:
(579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications
minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
Explanation:
(134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications 
*/
/*
function minValue(values) {
  const set = [...new Set(values)].sort((a, b) => a - b);
  console.log(set);
  if (set.length < 3) {
    return Number(set.join(""));
  }

  return Number(set.join(""));
}

console.log(minValue([1, 3, 1]));
console.log(minValue([4, 7, 5, 7]));
console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]));
console.log(minValue([5, 6, 9, 9, 7, 6, 4]));
*/

// 25.10.2023

// #1
/*
My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.
I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.
For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.
Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?
Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 
"100 180 90 56 65 74 68 86 99"
When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:
180 is before 90 since, having the same "weight" (9), it comes before as a string.
All numbers in the list are positive numbers and the list can be empty.
*/
/*
function orderWeight(str) {
  const arr = str.split(" ");

  arr.sort((a, b) => {
    const sumA = sum(a);
    const sumB = sum(b);

    if (sumA < sumB) return -1;
    if (sumA > sumB) return 1;

    // If sums are equal, compare the original strings.
    if (a < b) return -1;
    if (a > b) return 1;

    return 0;
  });

  return arr.join(" ");
}

function sum(el) {
  return el
    .toString()
    .split("")
    .map(Number)
    .reduce((sum, digit) => sum + parseInt(digit, 10), 0);
}

console.log(orderWeight("103 123 4444 99 2000"));
console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123"));
*/

// #2
/*
Greed is a dice game played with five six-sided dice. Your mission, should you choose to accept it, is to score a throw according to these rules. You will always be given an array with five six-sided dice values.
 Three 1's => 1000 points
 Three 6's =>  600 points
 Three 5's =>  500 points
 Three 4's =>  400 points
 Three 3's =>  300 points
 Three 2's =>  200 points
 One   1   =>  100 points
 One   5   =>   50 point
A single die can only be counted once in each roll. For example, a given "5" can only count as part of a triplet (contributing to the 500 points) or as a single 50 points, but not both in the same roll.
Example scoring
 Throw       Score
 ---------   ------------------
 5 1 3 4 1   250:  50 (for the 5) + 2 * 100 (for the 1s)
 1 1 1 3 1   1100: 1000 (for three 1s) + 100 (for the other 1)
 2 4 4 5 4   450:  400 (for three 4s) + 50 (for the 5)
*/
/*
function score(dice) {
  // Создаю массив длиной 7 (для значений от 1 до 6) и заполняю нулями. Массив для подсчета количества каждого значения на костях
  const counts = new Array(7).fill(0);
  console.log(counts);
  // Перебираю каждое значение в массиве dice с помощью forEach. Для каждого значения увеличиваю соответствующий счётчик в массиве counts (Если в dice есть кость со значением 3, то увеличиваю count[3] на 1)
  dice.forEach((value) => {
    counts[value]++;
  });

  // Переменная для хранения общего количества баллов
  let totalScore = 0;

  // Начинаю обработку 3-ек. Использую цикл, чтобы перебрать все возможные значения на костях от value=1 до value<=6
  for (let value = 1; value <= 6; value++) {
    // Добавляю проверку, есть ли хотя бы три кости с текущим знаением value.
    if (counts[value] >= 3) {
      // Если есть, то выполнется добавление 1000 очков
      if (value === 1) {
        totalScore += 1000;
        // В противном случае, добавляю 100 очков умноженных на value (количество троек)
      } else {
        totalScore += value * 100;
      }
      // Затем уменьшаю счётчик этого значения в counts на 3
      counts[value] -= 3;
    }

    // Обработка отдельных единиц и пятерок
  }
  totalScore += counts[1] * 100;
  totalScore += counts[5] * 50;
  return totalScore;
}

console.log(score([2, 4, 4, 5, 4]));
*/

// #3
/*
Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.
Only numbers without decimals like 4 or 4.0 can be even.
The input is a sequence of numbers: integers and/or floats.
Examples
[4, 3, 1, 2, 5, 10, 6, 7, 9, 8]  -->  30   # because 4 + 2 + 10 + 6 + 8 = 30
[]                               -->  0
*/
/*
function sumEvenNumbers(input) {
  let result = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] % 2 === 0) {
      result += input[i];
    }
  }
  return result;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(sumEvenNumbers([]));
*/

// #4
/*
Description:
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
Your task is to return:
    true if at least one Ruby developer has signed up; or
    false if there will be no Ruby developers.
For example, given the following input array:
var list1 = [
  { firstName: 'Emma', lastName: 'Z.', country: 'Netherlands', continent: 'Europe', age: 29, language: 'Ruby' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'Javascript' },
  { firstName: 'Jayden', lastName: 'P.', country: 'Jamaica', continent: 'Americas', age: 42, language: 'JavaScript' }
*/
/*
function isRubyComing(list) {
  let count = 0;
  for (let i = 0; i < list.length; i++) {
    if (list[i].language === "Ruby") {
      count++;
    }
  }

  return count >= 1;
}

console.log(
  isRubyComing([
    {
      firstName: "Sofia",
      lastName: "I.",
      country: "Argentina",
      continent: "Americas",
      age: 35,
      language: "Java",
    },
    {
      firstName: "Lukas",
      lastName: "X.",
      country: "Croatia",
      continent: "Europe",
      age: 35,
      language: "Python",
    },
    {
      firstName: "Madison",
      lastName: "U.",
      country: "United States",
      continent: "Americas",
      age: 32,
      language: "Ruby",
    },
  ])
);
*/

// #5
/*
Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.
The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
*/
/*
function hasUniqueChars(str) {
  const set = [...new Set(str.split(""))];

  return set.length === str.length;
}

console.log(hasUniqueChars("abcdef"));
console.log(hasUniqueChars("  nAa"));
console.log(hasUniqueChars("++-"));
*/

// #6
/*
Two red beads are placed between every two blue beads. There are N blue beads. After looking at the arrangement below work out the number of red beads.
@ @@ @ @@ @ @@ @ @@ @ @@ @
Implement count_red_beads(n) (in PHP count_red_beads($n); in Java, Javascript, TypeScript, C, C++ countRedBeads(n)) so that it returns the number of red beads.
If there are less than 2 blue beads return 0.
Fundamentals
*/
/*
function countRedBeads(n) {
  if (n < 2) {
    return 0;
  }

  return (n - 1) * 2;
}

console.log(countRedBeads(1));
console.log(countRedBeads(3));
console.log(countRedBeads(5));
*/

// #7
/*
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.
Your task is to return an array where each object will have a new property 'greeting' with the following string value:
Hi < firstName here >, what do you like the most about < language here >?
For example, given the following input array:
var list1 = [
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java' },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python' },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby' } 
];
your function should return the following array:
[
  { firstName: 'Sofia', lastName: 'I.', country: 'Argentina', continent: 'Americas', age: 35, language: 'Java',
    greeting: 'Hi Sofia, what do you like the most about Java?'
  },
  { firstName: 'Lukas', lastName: 'X.', country: 'Croatia', continent: 'Europe', age: 35, language: 'Python',
    greeting: 'Hi Lukas, what do you like the most about Python?'
  },
  { firstName: 'Madison', lastName: 'U.', country: 'United States', continent: 'Americas', age: 32, language: 'Ruby',
    greeting: 'Hi Madison, what do you like the most about Ruby?'
  } 
];
*/
/*
function greetDevelopers(list) {
  return list.map(function (developer) {
    developer.greeting = `Hi ${developer.firstName}, what do you like the most about ${developer.language}?`;

    return developer;
  });
}

console.log(
  greetDevelopers([
    {
      firstName: "Sofia",
      lastName: "I.",
      country: "Argentina",
      continent: "Americas",
      age: 35,
      language: "Java",
    },
    {
      firstName: "Lukas",
      lastName: "X.",
      country: "Croatia",
      continent: "Europe",
      age: 35,
      language: "Python",
    },
    {
      firstName: "Madison",
      lastName: "U.",
      country: "United States",
      continent: "Americas",
      age: 32,
      language: "Ruby",
    },
  ])
);
*/

// #8
/*
You are the greatest chef on earth. No one boils eggs like you! Your restaurant is always full of guests, who love your boiled eggs. But when there is a greater order of boiled eggs, you need some time, because you have only one pot for your job. How much time do you need?
Your Task
Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.
Rules
    you can put at most 8 eggs into the pot at once
    it takes 5 minutes to boil an egg
    we assume, that the water is boiling all the time (no time to heat up)
    for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it
Example (Input --> Output)
0 --> 0
5 --> 5
10 --> 10
*/
/*
function cookingTime(eggs) {
  const batches = Math.ceil(eggs / 8);

  const total = batches * 5;
  return total;
}

console.log(cookingTime(10));
console.log(cookingTime(16));
console.log(cookingTime(5));
console.log(cookingTime(0));
*/

// #9
/*
Given a positive integer n, calculate the following sum:
n + n/2 + n/4 + n/8 + ...
All elements of the sum are the results of integer division.
Example
25  =>  25 + 12 + 6 + 3 + 1 = 47
*/
/*
function halvingSum(n) {
  let sum = 0;
  while (n > 0) {
    sum += n;
    n = Math.floor(n / 2);
  }

  return sum;

  // if(n === 1) return n;
  // return n + halvingSum(Math.floor(n/2));
}

console.log(halvingSum(25));
console.log(halvingSum(127));
*/

// #10
/*
An ordered sequence of numbers from 1 to N is given. One number might have deleted from it, then the remaining numbers were mixed. Find the number that was deleted.
Example:
    The starting array sequence is [1,2,3,4,5,6,7,8,9]
    The mixed array with one deleted number is [3,2,4,6,7,8,1,9]
    Your function should return the int 5.
If no number was deleted from the starting array, your function should return the int 0.
Note: N may be 1 or less (in the latter case, the first array will be []).
*/
/*
function findDeletedNumber(arr, mixArr) {
  arr.sort((a, b) => a - b);
  mixArr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== mixArr[i]) {
      return arr[i];
    }
  }
  return 0;
}
console.log(findDeletedNumber([1, 2, 3, 4, 5], [3, 4, 1, 5]));
*/

// 26.10.2023

// #1
/*
In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.
For example, repeats([4,5,7,5,4,8]) = 15 because only the numbers 7 and 8 occur once, and their sum is 15. Every other number occurs twice. 
*/
/*
function repeats(arr) {
  let ht = {};
  let result = [];

  for (const el of arr) {
    ht[el] = (ht[el] || 0) + 1;
  }
  console.log(ht);

  for (const value in ht) {
    if (ht[value] === 1) {
      result.push(parseInt(value));
    }
  }

  return result.reduce((a, b) => a + b);
}
console.log(repeats([4, 5, 7, 5, 4, 8]));
*/

// #2
/*
Your task is to add up letters to one letter.
The function will be given a variable amount of arguments, each one being a lztter to add.
Notes:
    Letters will always be lowercase.
    Letters can overflow (see second to last example of the description)
    If no letters are given, the function should return 'z'
Examples:
addLetters('a', 'b', 'c') = 'f'
addLetters('a', 'b') = 'c'
addLetters('z') = 'z'
addLetters('z', 'a') = 'a'
addLetters('y', 'c', 'b') = 'd' // notice the letters overflowing
addLetters() = 'z'
*/
/*
function addLetters(...letters) {
  if (letters.length === 0) {
    return "z";
  }

  let sum = letters.reduce(
    (acc, letter) => acc + (letter.charCodeAt(0) - "a".charCodeAt(0) + 1),
    0
  );

  sum = (sum - 1) % 26;

  if (sum < 0) {
    sum += 26;
  }

  return String.fromCharCode("a".charCodeAt(0) + sum);
}

console.log(addLetters("a", "b", "c"));
console.log(addLetters());
*/

// #3
/*
Consider the array [3,6,9,12]. If we generate all the combinations with repetition that sum to 12, we get 5 combinations: [12], [6,6], [3,9], [3,3,6], [3,3,3,3]. The length of the sub-arrays (such as [3,3,3,3] should be less than or equal to the length of the initial array ([3,6,9,12]).
Given an array of positive integers and a number n, count all combinations with repetition of integers that sum to n. For example:
find([3,6,9,12],12) = 5.
*/
/*
function find(arr, n, depth = arr.length) {
  if (n === 0) return 1;
  if (depth === 0) return 0;

  return arr.reduce(
    (s, v, i) => s + find(arr.slice(0, i + 1), n - v, depth - 1),
    0
  );
}

console.log(find([1, 2, 3], 5));
console.log(find([3, 6, 9, 12], 12));
*/

// #4
/*
In this Kata, you will be given an integer array and your task is to return the sum of elements occupying prime-numbered indices.
The first element of the array is at index 0.
 */
/*
function total(arr) {
  let sumPrimeInd = 0;

  for (let i = 2; i < arr.length; i++) {
    if (isPrime(i)) {
      sumPrimeInd += arr[i];
    }
  }
  return sumPrimeInd;
}

function isPrime(num) {
  let root = Math.sqrt(num);

  for (let i = 2; i <= root; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(total([1, 2, 3, 4]));
*/

// #5
/*
You are given a dictionary/hash/object containing some languages and your test results in the given languages. Return the list of languages where your test score is at least 60, in descending order of the scores.
Note: the scores will always be unique (so no duplicate values)
Examples
{"Java": 10, "Ruby": 80, "Python": 65}    -->  ["Ruby", "Python"]
{"Hindi": 60, "Dutch" : 93, "Greek": 71}  -->  ["Dutch", "Greek", "Hindi"]
{"C++": 50, "ASM": 10, "Haskell": 20}     -->  []
*/
/*
function myLanguages(results) {
  let arr = [];

  const sortedEntr = Object.entries(results).sort((a, b) => b[1] - a[1]);
  const sortedObj = Object.fromEntries(sortedEntr);
  console.log(sortedObj);
  for (const lang in sortedObj) {
    if (sortedObj[lang] >= 60) {
      arr.push(lang);
    }
  }
  return arr;
}

console.log(myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 }));
console.log(myLanguages({ "Hindi": 60, "Dutch": 93, "Greek": 71 }));
console.log(myLanguages({ "C++": 50, "ASM": 10, "Haskell": 20 }));
*/

// 28.10.2023
// #1
/*
Given a list of integers and a single sum value, return the first two values (parse from the left please) in order of appearance that add up to form the sum.
If there are two or more pairs with the required sum, the pair whose second element has the smallest index is the solution.
sum_pairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]
sum_pairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * the correct answer is the pair whose second value has the smallest index
== [4, 2]
sum_pairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)
sum_pairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * the correct answer is the pair whose second value has the smallest index
== [3, 7]
*/
/*
function sumPairs(ints, s) {
  // Это хэш таблица для хранения и отслеживания чисел, которые Я уже встречал в массиве
  const seen = new Set();

  // Начинаю переборку массива
  for (let i = 0; i < ints.length; i++) {
    // Вычисляю комплемент как разницу между искомым числом и каждым элементом массива ints
    const comp = s - ints[i];
    // Проверяю, сожержит ли хэш-таблица seen значение комплемента с помощью has. Если комплемент уже имеется, то возвращаю массив из комплемента и элемента массива, которые в сумме дают искомое число "s"
    if (seen.has(comp)) {
      return [comp, ints[i]];
    }

    // Если комплемент не найден, то это означает, что мы не нашли пару для конкретного ints[i]. Поэтому добавляю ints[i] в seen с помощью add
    seen.add(ints[i]);
  }
  // Это на случай, если такого числа не найдется
  return undefined;
}

console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));
*/

// #2
/*
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .
Notes :
    Array/list size is at least 3
    Array/list numbers could be a mixture of positives , negatives and zeros
    Repetition of numbers in the array/list could occur , So (duplications are not included when summing).
    Input >> Output Examples

1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
Explanation:
    As the triplet that maximize the sum {6,8,3} in order , their sum is (17)
    Note : duplications are not included when summing , (i.e) the numbers added only once
    2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
    Explanation:
    As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18)
    Note : duplications are not included when summing , (i.e) the numbers added only once
    3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
    Explanation:
    As the triplet that maximize the sum {12 , 29 , 0} in order , their sum is (41)
    Note : duplications are not included when summing , (i.e) the numbers added only once .
*/
/*
function maxTriSum(numbers) {
  const sorted = numbers.sort((a, b) => b - a);
  const set = [...new Set(sorted)];
  const summ = set[0] + set[1] + set[2];
  return summ;
}

console.log(maxTriSum([3, 2, 6, 8, 2, 3]));
console.log(maxTriSum([2, 9, 13, 10, 5, 2, 9, 5]));
console.log(maxTriSum([2, 1, 8, 0, 6, 4, 8, 6, 2, 4]));
*/

// #3
/*
Write a method, that gets an array of integer-numbers and return an array of the averages of each integer-number and his follower, if there is one.
Example:
Input:  [ 1, 3, 5, 1, -10]
Output:  [ 2, 4, 3, -4.5]
If the array has 0 or 1 values or is null, your method should return an empty array.
*/
/*
function averages(arr) {
  if (!arr || arr.length <= 1) {
    return [];
  }
  let result = [];
  for (let i = 0; i < arr.length - 1; i++) {
    let average = (arr[i] + arr[i + 1]) / 2;
    result.push(average);
  }

  return result;
}

console.log(averages([2, 2, 2, 2, 2]));
console.log(averages([2, -2, 2, -2, 2]));
*/

// #4
/*
Given a string of words (x), you need to return an array of the words, sorted alphabetically by the final character in each.
If two words have the same last letter, they returned array should show them in the order they appeared in the given string.
All inputs will be valid.
*/
/*
function last(x) {
  return x
    .split(" ")
    .sort((a, b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1));
}

console.log(last("man i need a taxi up to ubud"));
*/

// 29.10.2023

// #1
/*
In this Kata, you will be given an array of integers whose elements have both a negative and a positive value, except for one integer that is either only negative or only positive. Your task will be to find that integer.
Examples:
[1, -1, 2, -2, 3] => 3
3 has no matching negative appearance
[-3, 1, 2, 3, -1, -4, -2] => -4
-4 has no matching positive appearance
[1, -1, 2, -2, 3, 3] => 3
(the only-positive or only-negative integer may appear more than once)
Good luck!
*/
/*
function solve(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr.includes(-1 * arr[i])) return arr[i];
  }
}

console.log(solve([1, -1, 2, -2, 3]));
*/

// #2
/*
Given an input of an array of digits, return the array with each digit incremented by its position in the array: the first digit will be incremented by 1, the second digit by 2, etc. Make sure to start counting your positions from 1 ( and not 0 ).
Your result can only contain single digit numbers, so if adding a digit with its position gives you a multiple-digit number, only the last digit of the number should be returned.
Notes:
    return an empty array if your array is empty
    arrays will only contain numbers so don't worry about checking that
Examples:
[1, 2, 3]  -->  [2, 4, 6]   #  [1+1, 2+2, 3+3]
[4, 6, 9, 1, 3]  -->  [5, 8, 2, 5, 8]  #  [4+1, 6+2, 9+3, 1+4, 3+5]
                                       #  9+3 = 12  -->  2
*/
/*
function incrementer(nums) {
  let result = [];
  if (!nums.length) return [];
  for (let i = 0; i < nums.length; i++) {
    let res = nums[i] + i + 1;

    result.push(res % 10);
  }

  return result;
}

console.log(incrementer([4, 6, 9, 1, 3]));
console.log(incrementer([3, 6, 9, 8, 9]));
*/

// #3
/*
Debug   function getSumOfDigits that takes positive integer to calculate sum of its digits. Assume that argument is an integer.
Example
123  => 6
223  => 7
1337 => 14
*/
/*
function getSumOfDigits(integer) {
  var sum = 0;
  var digits = Math.floor(integer).toString();
  for (var ix = 0; ix < digits.length; ix++) {
    sum += parseInt(digits[ix], 10);
  }
  return sum;
}

console.log(getSumOfDigits(123));
console.log(getSumOfDigits(223));
*/

// 30.10.2023
// #1
/*
You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return -1.
For example:
Let's say you are given the array {1,2,3,4,3,2,1}:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index ({3,2,1}) both equal 6.
Let's look at another one.
You are given the array {1,100,50,-51,1,1}:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index ({50,-51,1,1}) both equal 1.
Last one:
You are given the array {20,10,-80,10,10,15,35}
At index 0 the left side is {}
The right side is {10,-80,10,10,15,35}
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.
Note: Please remember that in most programming/scripting languages the index of an array starts at 0.
Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.
Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.
Note:
If you are given an array with multiple answers, return the lowest correct index.
*/
/*
function findEvenIndex(arr) {
  let totalSum = arr.reduce((acc, cur) => acc + cur, 0);

  let leftSumm = 0;

  for (let i = 0; i < arr.length; i++) {
    let rightSum = totalSum - leftSumm - arr[i];

    if (leftSumm === rightSum) {
      return i;
    }

    leftSumm += arr[i];
  }

  return -1;
}

console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]));
*/

// #2
/*
Your job is to create a calculator which evaluates expressions in Reverse Polish notation.
For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.
For your convenience, the input is formatted such that a space is provided between every token.
Empty expression should evaluate to 0.
Valid operations are +, -, *, /.
You may assume that there won't be exceptional situations (like stack underflow or division by zero).
*/
/*
function calc(expr) {
  let result = [];

  const atoms = expr.split(/\s+/);
  const operators = ["+", "-", "*", "/"];
  for (let i = 0; i < atoms.length; i++) {
    switch (atoms[i]) {
      case "+":
        result.push(result.pop() + result.pop());
        break;
      case "-":
        result.push(-result.pop() + result.pop());
        break;
      case "*":
        result.push(result.pop() * result.pop());
        break;
      case "/":
        result.push(1 / (result.pop() / result.pop()));
        break;
      default:
        result.push(parseFloat(atoms[i]));
    }
  }
  return result.pop() || 0;
}

console.log(calc(""));
console.log(calc("3.5"));
console.log(calc("1 3 +"));
*/

// 02.11.2023

// #1
/*
Find the greatest common divisor of two positive integers. The integers can be large, so you need to find a clever solution.
The inputs x and y are always greater or equal to 1, so the greatest common divisor will always be an integer that is also greater or equal to 1.
*/
/*
function mygcd(x, y) {
  while (y !== 0) {
    const temp = y;
    y = x % y;
    x = temp;
  }
  return x;
}

console.log(mygcd(30, 12));
*/

// #2
/*
The code provided is supposed return a person's Full Name given their first and last names.
But it's not working properly.
Notes
The first and/or last names are never null, but may be empty.
Task
Fix the bug so we can all go home early.
*/
/*
class Dinglemouse {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}
*/

// #3
/*
Given a string and an array of integers representing indices, capitalize all letters at the given indices.
For example:
    capitalize("abcdef",[1,2,5]) = "aBCdeF"
    capitalize("abcdef",[1,2,5,100]) = "aBCdeF". There is no index 100.
The input will be a lowercase string with no spaces and an array of digits.
*/
/*
function capitalize(s, arr) {
  const str = s.split("");
  // console.log(str);
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (arr.includes(i)) {
      result.push(str[i].toUpperCase());
    } else {
      result.push(str[i]);
    }
  }

  return result.join("");
}

console.log(capitalize("abcdef", [1, 2, 5]));
*/

// #4
/*
In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
For example:
    dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
    dup(["kelless","keenness"]) = ["keles","kenes"].
Strings will be lowercase only, no spaces. See test cases for more examples.
*/
/*
function dup(s) {
  let result = [];
  for (let i = 0; i < s.length; i++) {
    let word = del(s[i]);
    result.push(word.join(""));
  }
  return result;
}

function del(el) {
  let res = [];
  for (let j = 0; j < el.length; j++) {
    if (el[j] !== el[j + 1]) {
      res.push(el[j]);
    }
  }
  return res;
}

console.log(del("ccooddddddewwwaaaaarrrrsssss"));
console.log(
  dup(["ccooddddddewwwaaaaarrrrsssss", "piccaninny", "hubbubbubboo"])
);
*/

// #5
/*
Input:
    a string strng
    an array of strings arr
Output of function contain_all_rots(strng, arr) (or containAllRots or contain-all-rots):
    a boolean true if all rotations of strng are included in arr
    false otherwise
Examples:
contain_all_rots(
  "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true
contain_all_rots(
  "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)
Note:
Though not correct in a mathematical sense
    we will consider that there are no rotations of strng == ""
    and for any array arr: contain_all_rots("", arr) --> true
*/
/*
function containAllRots(string, arr) {
  if (string === "") {
    return true;
  }

  const rot = [];
  for (let i = 0; i < string.length; i++) {
    const rotStr = string.slice(i) + string.slice(0, i);
    rot.push(rotStr);
  }

  return rot.every((r) => arr.includes(r));
}

console.log(
  containAllRots("bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"])
);
*/

// 06.11.2023

// #1
/*
Suppose you have 4 numbers: 0, 9, 6, 4 and 3 strings composed with them:
s1 = "6900690040"
s2 = "4690606946"
s3 = "9990494604"
Compare s1 and s2 to see how many positions they have in common: 0 at index 3, 6 at index 4, 4 at index 8 : 3 common positions out of ten.
Compare s1 and s3 to see how many positions they have in common: 9 at index 1, 0 at index 3, 9 at index 5 : 3 common positions out of ten.
Compare s2 and s3. We find 2 common positions out of ten.
So for the 3 strings we have 8 common positions out of 30 ie 0.2666... or 26.666...%
Given n substrings (n >= 2) in a string s our function pos_average will calculate the average percentage of positions that are the same between the (n * (n-1)) / 2 sets of substrings taken amongst the given n substrings. It can happen that some substrings are duplicate but since their ranks are not the same in s they are considered as different substrings.
The function returns the percentage formatted as a float with 10 decimals but the result is tested at 1e.-9 (see function assertFuzzy in the tests).
Example:
Given string s = "444996, 699990, 666690, 096904, 600644, 640646, 606469, 409694, 666094, 606490" composing a set of n = 10 substrings (hence 45 combinations), pos_average returns 29.2592592593.
In a set the n substrings will have the same length ( > 0 ).
*/
/*
function posAverage(s) {
  const subs = s.split(", ");

  function compare(subs1, subs2) {
    let commonPositions = 0;
    for (let i = 0; i < subs1.length; i++) {
      if (subs1[i] === subs2[i]) {
        commonPositions++;
      }
    }
    return commonPositions;
  }

  let total = 0;
  let totalPairs = 0;

  for (let i = 0; i < subs.length; i++) {
    for (let j = i + 1; j < subs.length; j++) {
      total += compare(subs[i], subs[j]);
      totalPairs++;
    }
  }

  const average = (total / (subs[0].length * totalPairs)) * 100;

  return parseFloat(average.toFixed(10));
}

console.log(
  posAverage(
    "466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096"
  )
);
*/

// #2
/*
n number theory, an abundant number or an excessive number is one for which the sum of it's proper divisors is greater than the number itself. The integer 12 is the first abundant number. Its proper divisors are 1, 2, 3, 4 and 6 for a total of 16. The amount by which the sum exceeds the number is the abundance. The number 12 has an abundance of 4, for example. Other initial abundant numbers are : 12, 18, 20, 24, 30, 36, 40, 42, 48, 54 etc . Infinitely many odd and even abundant numbers exist.
As you should have guessed by now, in this kata your function will take a positive integer h as range input and return a nested array/list that will contain the following informations-
    Highest available odd or even abundant number in that range
    It's abundance
Examples
A few examples never hurt nobody, right???
abundant(15)  = [[12], [4]]
abundant(19)  = [[18], [3]]
abundant(100) = [[100], [17]]
abundant(999) = [[996], [360]]
Tips
The problem involves some pretty big random numbers. So try to optimize your code for performance as far as you can. And yes, the input argument will always be positive integers. So no need to check there.
*/
/*
function abundant(h) {
  let result = [];
  // Проверяю, является ли число избыточным. Цикл начинается с передаваемого числа "h" до 12 - так как 12 это самое маленькое известное избыточное число. Избыточность проверяю путем нахождения всех делителей этого числа и вычисления суммы этих делителей. Необходимо найти, когда сумма делителей больше самого числа => значит число избыточное
  for (let num = h; num >= 12; num--) {
    let sumOfDiv = 1; // Изначальное сумма делителей равна 1. Добавляю 1, потому что 1 всегда является делителем любого числа

    // Запускаю второй цикл. Начинается с 2, потому что 1 уже учтено. Цикл идет до корня квадратного из числа, так как далее делители будут повторяться в обратном порядке
    for (let i = 2; i <= Math.sqrt(num); i++) {
      // Если "i" является делителем "num"
      if (num % i === 0) {
        // Тогда добавляю "i" к сумме делителей
        sumOfDiv += i;

        // Проверка, чтоыб избежать повторения делителей
        if (i !== num / i) {
          sumOfDiv += num / i;
        }
      }
    }

    // Если сумма делителей больше числа num, то это избыточное число
    if (sumOfDiv > num) {
      result.push([num], [sumOfDiv - num]);

      // Прерываю цикл, так как нашлось самое большое избыточное число
      break;
    }
  }
  return result;
}

console.log(abundant(15));
*/

// #3
/*
 Timed Reading is an educational tool used in many schools to improve and advance reading skills. A young elementary student has just finished his very first timed reading exercise. Unfortunately he's not a very good reader yet, so whenever he encountered a word longer than maxLength, he simply skipped it and read on.
Help the teacher figure out how many words the boy has read by calculating the number of words in the text he has read, no longer than maxLength.
Formally, a word is a substring consisting of English letters, such that characters to the left of the leftmost letter and to the right of the rightmost letter are not letters.
Example
For maxLength = 4 and text = "The Fox asked the stork, 'How is the soup?'", the output should be 7
The boy has read the following words: "The", "Fox", "the", "How", "is", "the", "soup".
*/
/*
function timedReading(maxLength, text) {
  const reg = /[A-Za-z]+/g;

  const words = text.match(reg);
  console.log(words);

  if (!words) {
    return 0;
  }

  let count = 0;
  for (const word of words) {
    if (word.length <= maxLength) {
      count++;
    }
  }
  return count;
}

console.log(timedReading(4, "The Fox asked the stork, 'How is the soup?'"));
*/

// #4
/*
Given any number of boolean flags function should return true if and only if one of them is true while others are false. If function is called without arguments it should return false.
  onlyOne() --> false
  onlyOne(true, false, false) --> true
  onlyOne(true, false, false, true) --> false
  onlyOne(false, false, false, false) --> false
*/
/*
function onlyOne(s) {
  const args = Array.from(arguments);
  console.log(args);
  let trueCount = 0;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === true) {
      trueCount++;
    }
  }
  return trueCount === 1 ? true : false;
}

console.log(onlyOne());
console.log(onlyOne(true, false, false));
console.log(onlyOne(true, false, false, true));
*/

// #5
/*
Here we have a strange looking expression.

(a == 2 && a == 3);

Your task is to make this expression true (see testcase).

HINT: javascript coercion rules.

*/
/*
var value = 2;

var a = {
  valueOf: function () {
    return value++;
  },
};

console.log(a == 2 && a == 3);
*/

// #6
/*
Write a function that takes one or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/
/*
function uniteUnique() {
  let result = [];

  for (let i = 0; i < arguments.length; i++) {
    let curArr = arguments[i];

    for (let j = 0; j < curArr.length; j++) {
      let el = curArr[j];

      if (!result.includes(el)) {
        result.push(el);
      }
    }
  }
  return result;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
*/

// #6
/*
Is the number even?
If the numbers is even return true. If it's odd, return false.
*/
/*
var isEven = function (n) {
  // return (n & 1) === 0;
  return Math.floor(n / 2) * 2 === n ? true : false;
};

console.log(isEven(2));
console.log(isEven(3));
*/

// #7
/*
You are given an array with several "even" words, one "odd" word, and some numbers mixed in.
Determine if any of the numbers in the array is the index of the "odd" word. If so, return true, otherwise false.
*/
/*
function oddBall(arr) {
  // let index;
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === "odd") {
  //     index = i;
  //   }
  // }
  // if (arr.includes(index)) {
  //   return true;
  // } else {
  //   return false;
  // }

  return arr.includes(arr.indexOf("odd"));
}

console.log(
  oddBall([
    "even",
    4,
    "even",
    7,
    "even",
    55,
    "even",
    6,
    "even",
    9,
    "odd",
    3,
    "even",
  ])
);
console.log(
  oddBall([
    "even",
    4,
    "even",
    7,
    "even",
    55,
    "even",
    6,
    "even",
    10,
    "odd",
    3,
    "even",
  ])
);
*/

// #8
/*
Given an array (or list or vector) of arrays (or, guess what, lists or vectors) of integers, your goal is to return the sum of a specific set of numbers, starting with elements whose position is equal to the main array length and going down by one at each step.
Say for example the parent array (etc, etc) has 3 sub-arrays inside: you should consider the third element of the first sub-array, the second of the second array and the first element in the third one: [[3, 2, 1, 0], [4, 6, 5, 3, 2], [9, 8, 7, 4]] would have you considering 1 for [3, 2, 1, 0], 6 for [4, 6, 5, 3, 2] and 9 for [9, 8, 7, 4], which sums up to 16.
One small note is that not always each sub-array will have enough elements, in which case you should then use a default value (if provided) or 0 (if not provided), as shown in the test cases.
*/
/*
function elementsSum(arr, d) {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    let element = arr[i];
    console.log(element);
    for (let j = 0; j < element.length; j++) {
      result += element[j];
      console.log(result);
    }
  }
  return result;
}

console.log(
  elementsSum([
    [3, 2, 1, 0],
    [4, 6, 5, 3, 2],
    [9, 8, 7, 4],
  ])
);
*/

// 09.11.2023
// #1
/*
Given a number return the closest number to it that is divisible by 10.
Example input:
22
25
37
Expected output:
20
30
40
*/
/*
const closestMultiple10 = (num) => {
  const res = Math.round(num / 10) * 10;
  return res;
};

console.log(closestMultiple10(22));
*/

// #2
/*
Given a string "abc" and assuming that each letter in the string has a value equal to its position in the alphabet, our string will have a value of 1 + 2 + 3 = 6. This means that: a = 1, b = 2, c = 3 ....z = 26.
You will be given a list of strings and your task will be to return the values of the strings as explained above multiplied by the position of that string in the list. For our purpose, position begins with 1.
nameValue ["abc","abc abc"] should return [6,24] because of [ 6 * 1, 12 * 2 ]. Note how spaces are ignored.
"abc" has a value of 6, while "abc abc" has a value of 12. Now, the value at position 1 is multiplied by 1 while the value at position 2 is multiplied by 2.
Input will only contain lowercase characters and spaces.
*/
/*
function wordValue(arr) {
  return arr.map((str, index) => {
    let value = str
      .replace(/ /g, "")
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0) - 96, 0);
    return value * (index + 1);
  });
}

console.log(wordValue(["codewars", "abc", "xyz"]));
*/

// #3
/*
Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.
*/
/*
function sumOfIntegersInString(s) {
  const integers = s.match(/\d+/g);

  if (!integers) return 0;

  const nums = integers.map(Number);
  console.log(nums);

  return nums.reduce((acc, curr) => acc + curr, 0);
}

console.log(
  sumOfIntegersInString("The Great Depression lasted from 1929 to 1939")
);
console.log(
  sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy ")
);
*/

// 13.11.2023

// #1
/*
Every now and then people in the office moves teams or departments. Depending what people are doing with their time they can become more or less boring. Time to assess the current team.
You will be provided with an object(staff) containing the staff names as keys, and the department they work in as values.
Each department has a different boredom assessment score, as follows:
accounts = 1
finance = 2
canteen = 10
regulation = 3
trading = 6
change = 6
IS = 8
retail = 5
cleaning = 4
pissing about = 25
Depending on the cumulative score of the team, return the appropriate sentiment:
<=80: 'kill me now'
< 100 & > 80: 'i can handle this'
100 or over: 'party time!!'
*/
/*
function boredom(staff) {
  let boredomScores = {
    accounts: 1,
    finance: 2,
    canteen: 10,
    regulation: 3,
    trading: 6,
    change: 6,
    IS: 8,
    retail: 5,
    cleaning: 4,
    "pissing about": 25,
  };

  let score = 0;

  for (const name in staff) {
    let role = staff[name];
    score += boredomScores[role] || 0;
  }

  if (score <= 80) {
    return "kill me now";
  } else if (score < 100 && score > 80) {
    return "i can handle this";
  } else {
    return "party time!!";
  }
}

console.log(
  boredom({
    tim: "change",
    jim: "accounts",
    randy: "canteen",
    sandy: "change",
    andy: "change",
    katie: "IS",
    laura: "change",
    saajid: "IS",
    alex: "trading",
    john: "accounts",
    mr: "finance",
  })
);
*/

// #2
/*
You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.
    Note:Returning the pattern is not the same as Printing the pattern.
Rules/Note:
    If n < 1 then it should return "" i.e. empty string.
    There are no whitespaces in the pattern.
Pattern:
1
22
333
....
.....
nnnnnn
Examples:
    pattern(5):
    1
    22
    333
    4444
    55555
    pattern(11):
    1
    22
    333
    4444
    55555
    666666
    7777777
    88888888
    999999999
    10101010101010101010
    1111111111111111111111
    Hint: Use \n in string to jump to next line
*/
/*
function pattern(n) {
  if (n < 1) {
    return "";
  }

  let result = "";
  for (let i = 1; i <= n; i++) {
    result += `${i}`.repeat(i);
    if (i < n) {
      result += "\n";
    }
  }
  return result;
}

console.log(pattern(1));
console.log(pattern(2));
console.log(pattern(5));
*/

// #3
/*
Friday 13th or Black Friday is considered as unlucky day. Calculate how many unlucky days are in the given year.
Find the number of Friday 13th in the given year.
Input: Year in Gregorian calendar as integer.
Output: Number of Black Fridays in the year as an integer.
Examples:
unluckyDays(2015) == 3
unluckyDays(1986) == 1
*/
/*
function unluckyDays(year) {
  let count = 0;
  for (let month = 0; month < 12; month++) {
    const date = new Date(year, month, 13);

    if (date.getDay() === 5) {
      count++;
    }
  }
  return count;
}

console.log(unluckyDays(2015));
console.log(unluckyDays(1001));
*/

// #4
/*
Given an array of numbers (in string format), you must return a string. The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc. You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.
All inputs will be valid.
*/
/*
function switcher(x) {
  const mapping = {
    "1": "z",
    "2": "y",
    "3": "x",
    "4": "w",
    "5": "v",
    "6": "u",
    "7": "t",
    "8": "s",
    "9": "r",
    "10": "q",
    "11": "p",
    "12": "o",
    "13": "n",
    "14": "m",
    "15": "l",
    "16": "k",
    "17": "j",
    "18": "i",
    "19": "h",
    "20": "g",
    "21": "f",
    "22": "e",
    "23": "d",
    "24": "c",
    "25": "b",
    "26": "a",
    "27": "!",
    "28": "?",
    "29": " ",
  };

  const result = x.map((number) => mapping[number]).join("");
  return result;
}

console.log(switcher(["24", "12", "23", "22", "4", "26", "9", "8"]));
*/
/*
let x = 1;
var y = 1;
const result = function (x, y) {
  let z;
  z = x + y;
  let j = x + y + z;
  return j;
};
result(x, y);

console.log(j);
console.log(result(2, 2));
// console.log(z);
console.log(result());
*/

// const daughter = {
//   name: "dina",
// };

// daughter.mama = "sasha";

// console.log(daughter);

// daughter.name = "andrei";
// console.log(daughter);

// const dinka = {
//   hairStyle: "kavardak",
//   height: 1.3,
//   weight: 27,
//   toys: {
//     car: "volvo",
//     dinosaur: {
//       name: "bolotniy",
//       number: 2,
//       color: "green",
//     },
//   },
// };
// // 1
// console.log(dinka.weight);
// // 2
// dinka.weight = 32;
// console.log(dinka.weight);
// // 3
// console.log(dinka.toys.dinosaur.name);
// // 4
// delete dinka.toys.dinosaur.number;
// console.log(dinka.toys.dinosaur);

// //

// const toys = {
//   title: "snake",
//   name: "anaconda",
//   number: 2,
// };

// // 1
// delete toys.title;
// console.log(toys);
// // 2
// delete toys["title"];
// console.log(toys);
// // 3
// toys.number = undefined;
// console.log(toys);

// //

// const child = {
//   name: "dina",
//   age: 5,
// };

// const secondChild = {
//   name: "dina",
//   age: 5,
// };

// console.log(child === secondChild);

// //

// const book = {
//   title: "Hobbit",
//   number: 1,
// };

// const anotherBook = book;

// console.log(book === anotherBook);

//
/*
const toy = {
  title: "dinosaur",
  name: "bolotniy",
};

const anotherToy = toy;

// 1
console.log(anotherToy);
console.log(toy);

// 2
toy.name = "banti";
console.log(toy);
console.log(anotherToy);

let user = { name: "sasha", age: 34 };
const architect = user;

user = { name: "dina" };

// 1
console.log(architect);

// 2
architect.student = true;
console.log(architect);
*/

// 27.11.2023

// #1
/*
An array consisting of 0s and 1s, also called a binary array, is given as an input.
Task
Find the length of the longest contiguous subarray which consists of equal number of 0s and 1s.
Example
s = [1,1,0,1,1,0,1,1]
         |_____|
            |
         [0,1,1,0]

         length = 4
Note
0 <= length(array) < 120 000
*/
/*
function binarray(a) {
  // Создаем хеш карту для отслеживания текущей суммы и её индекса
  let sumMap = new Map();
  // Максимальная длина подмассива с равным количеством 0 и 1
  let maxLen = 0;
  // Текущая сумма
  let sum = 0;

  // Итерируем по массиву
  for (let i = 0; i < a.length; i++) {
    // Меняем сумму (увеличиваю при 1, уменьшаю для 0)
    sum += a[i] === 1 ? 1 : -1;

    // Если сумма равна 0, значит, равное количество 0 и 1с начала текущего индекса
    if (sum === 0) {
      maxLen = i + 1; // +1 потому что начало текущего индекса
    } else if (sumMap.has(sum)) {
      // Если эта сумма встречается снова, обновляю масимальную длину. Когд sum становится равным 0, это означает, что подмассив с равным количеством 0 и 1 начинается с начала массива и заканчивается текущим индексом i. Таким образом i+1 (длина массива от 0 до i включительно) становится масимальной длиной подмассива. Если sum уже ранее встречено (присутствует в хэш карте), то разница между двумя вхождениями sum количество 0 и 1 равно. Таким образом, разница между текущим индексом i и сохраненным индексом (sumMap.get(sum)) представляет собой длину подмассива с равным количеством 0 и 1 для текущей суммы sum. Я сравниваю эту длину с текущей максимальной длиной и обновляю maxLen, если новая длина больше
      maxLen = Math.max(maxLen, i - sumMap.get(sum));
    } else {
      sumMap.set(sum, i);
    }
  }

  return maxLen;
}

console.log(binarray([0]));
console.log(binarray([0, 1, 1, 0, 1, 1, 1, 0, 0, 0]));
*/

// #2
/*
I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
P.S. Each array includes only integer numbers. Output is a number too.
*/
/*
function arrayPlusArray(arr1, arr2) {
  let arr = [...arr1, ...arr2];
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]));
*/

// #3
/*
You are given an initial 2-value array (x). You will use this to calculate a score.
If both values in (x) are numbers, the score is the sum of the two. If only one is a number, the score is that number. If neither is a number, return 'Void!'.
Once you have your score, you must return an array of arrays. Each sub array will be the same as (x) and the number of sub arrays should be equal to the score.
For example:
if (x) == ['a', 3] you should return [['a', 3], ['a', 3], ['a', 3]].
*/
/*
function explode(x) {
  let [x1, x2] = x;
  if (typeof x1 === "string" && typeof x2 === "string") {
    return "Void!";
  }

  if (typeof x1 === "number" && typeof x2 === "number") {
    let sumX = x1 + x2;
    let subArray = Array(sumX).fill(x);
    return subArray;
  }

  if (typeof x1 === "number" && typeof x2 === "string") {
    let subArray2 = Array(x1).fill(x);
    return subArray2;
  }

  if (typeof x1 === "string" && typeof x2 === "number") {
    let subArray3 = Array(x2).fill(x);
    return subArray3;
  }
}

console.log(explode([9, 3]));
console.log(explode(["a", "b"]));
console.log(explode(["a", 6]));
console.log(explode([6, "a"]));
*/

// #4
/*
Peter enjoys taking risks, and this time he has decided to take it up a notch!
Peter asks his local barman to pour him n shots, after which Peter then puts laxatives in x of them. He then turns around and lets the barman shuffle the shots. Peter approaches the shots and drinks a of them one at a time. Just one shot is enough to give Peter a runny tummy. What is the probability that Peter doesn't need to run to the loo?
Task
You are given:
n - The total number of shots.
x - The number of laxative laden shots.
a - The number of shots that peter drinks.
return the probability that Peter won't have the trots after drinking. n will always be greater than x, and a will always be less than n.
You must return the probability rounded to two decimal places i.e. 0.05 or 0.81
*/
/*
function getChance(n, x, a) {
  let chance = 1;
  while (a > 0) {
    chance = ((n - x) / n) * chance; // обновляю значение chance. Chance умножается на ((n - x) / n) - это отражает вероятность того, что выбранная стопка не содержит слабительного
    n--; // уменьшаю общее количество оставшихся стопок
    a--; // уменьшаю количество стопок, которые планирует выпить Питер
  }
  return Math.round(chance * 100) / 100;
}

console.log(getChance(2, 1, 1));
console.log(getChance(4, 1, 3));
*/

// 05.12.2023

// #1
/*
You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
Examples
A size 3 diamond:
 *
***
 *
...which would appear as a string of " *\n***\n *\n"
A size 5 diamond:
  *
 ***
*****
 ***
  *
...that is:
"  *\n ***\n*****\n ***\n  *\n"
*/
/*
function diamond(n) {
  if (n <= 0 || n % 2 === 0) {
    return null;
  }

  let result = "";

  // Верхняя часть
  for (let i = 1; i <= n; i += 2) {
    const spaces = " ".repeat((n - i) / 2);
    const stars = "*".repeat(i);
    result += spaces + stars + "\n";
  }

  // Нижняя часть
  for (let i = n - 2; i > 0; i -= 2) {
    const spaces = " ".repeat((n - i) / 2);
    const stars = "*".repeat(i);
    result += spaces + stars + "\n";
  }

  return result;
}

console.log(diamond(2));
console.log(diamond(3));
console.log(diamond(5));
console.log(diamond(-3));
*/

// #2
/*
Given a string, remove any characters that are unique from the string.
Example:
input: "abccdefee"
output: "cceee"
*/
/*
function onlyDuplicates(str) {
  let ht = {};

  for (const char of str) {
    ht[char] = (ht[char] || 0) + 1;
  }
  console.log(ht);

  let result = "";

  for (let char of str) {
    if (ht[char] > 1) {
      result += char;
    }
  }

  return result;
}

console.log(onlyDuplicates("abccdefee"));
*/

// #3
/*
You are given a string of letters and an array of numbers.
The numbers indicate positions of letters that must be removed, in order, starting from the beginning of the array.
After each removal the size of the string decreases (there is no empty space).
Return the only letter left.
Example:
let str = "zbk", arr = [0, 1]
    str = "bk", arr = [1]
    str = "b", arr = []
    return 'b'
Notes
    The given string will never be empty.
    The length of the array is always one less than the length of the string.
    All numbers are valid.
    There can be duplicate letters and numbers.
*/
/*
function lastSurvivor(letters, coords) {
  // FIRST
  // for (let i = 0; i < coords.length; i++) {
  //   letters = letters.slice(0, coords[i]) + letters.slice(coords[i] + 1);
  // }
  // return letters;

  // SECOND
  const arr = [...letters];
  console.log(arr);
  for (const i of coords) {
    arr.splice(i, 1);
    console.log(arr);
  }

  return arr.join("");
}

console.log(lastSurvivor("abc", [1, 1]));
*/

// #4
/*
A sequence or a series, in mathematics, is a string of objects, like numbers, that follow a particular pattern. The individual elements in a sequence are called terms. A simple example is 3, 6, 9, 12, 15, 18, 21, ..., where the pattern is: "add 3 to the previous term".
In this kata, we will be using a more complicated sequence: 0, 1, 3, 6, 10, 15, 21, 28, ... This sequence is generated with the pattern: "the nth term is the sum of numbers from 0 to n, inclusive".
[ 0,  1,    3,      6,   ...]
  0  0+1  0+1+2  0+1+2+3
Your Task
Complete the function that takes an integer n and returns a list/array of length abs(n) + 1 of the arithmetic series explained above. Whenn < 0 return the sequence with negative terms.
Examples
 5  -->  [0,  1,  3,  6,  10,  15]
-5  -->  [0, -1, -3, -6, -10, -15]
 7  -->  [0,  1,  3,  6,  10,  15,  21,  28]
*/
/*
function sumOfN(n) {
  let arr = [];

  // Переменная для хранения текущей суммы
  let sum = 0;

  // Итерируюсь до Math.abs(n) для формирования последовательности
  for (let i = 0; i <= Math.abs(n); i++) {
    // Обновление суммы в соответствии с текущим индексом итерации и знаком "n"
    sum += n < 0 ? -i : i;
    arr.push(sum);
  }

  return arr;
}

console.log(sumOfN(3));
console.log(sumOfN(-4));
*/

// #5
/*
Define a method/function that removes from a given array of integers all the values contained in a second array.
Examples (input -> output):
* [1, 1, 2, 3, 1, 2, 3, 4], [1, 3] -> [2, 2, 4]
* [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8], [1, 3, 4, 2] -> [5, 6, 7, 8]
* [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3], [2, 4, 3] -> [8, 7, 6, 5, 1]
Enjoy it!!
*/

// FIRST
/*
function remove(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        break;
      }

      if (j === arr2.length - 1) {
        result.push(arr1[i]);
      }
    }
  }
  return result;  
}
console.log(remove([1, 1, 2, 3, 1, 2, 3, 4], [1, 3]));
*/
/*
// SECOND
Array.prototype.remove_ = (x, y) => x.filter((e) => !y.includes(e));

*/

// #6
/*
This Kata is intended as a small challenge for my students
Create a function that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").
Example (Input --> Output)
"drake" --> "drk"
"aeiou" --> ""
remove_vowels("drake") // => "drk"
remove_vowels("aeiou") // => ""
*/
/*
var removeVowels = function (str) {
  return str.replace(/[aeiou]/gi, "");
};

console.log(removeVowels("drake"));
console.log(removeVowels("yw njwqnz kytte s nysqzklx zsmjvc khhrvr"));
console.log(
  removeVowels("jfv psqjsz lmpkbtxms mdscps pxej rzmepc smcw zln kwdvj")
);
*/

// 11.12.2023
// #1
/*
Write a function that when given a number >= 0, returns an Array of ascending length subarrays.
pyramid(0) => [ ]
pyramid(1) => [ [1] ]
pyramid(2) => [ [1], [1, 1] ]
pyramid(3) => [ [1], [1, 1], [1, 1, 1] ]
Note: the subarrays should be filled with 1s
*/
// FIRST
/*
function pyramid(n) {
  let result = [];
  for (let i = 0; i < n; i++) {
    let level = [];
    for (let j = 0; j <= i; j++) {
      level.push(1);
    }
    result.push(level);
  }
  return result;
}
*/
/*
// SECOND
function pyramid(n) {
  return Array(n)
    .fill()
    .map((e, i) => Array(i + 1).fill(1));
}
console.log(pyramid(0));
console.log(pyramid(1));
console.log(pyramid(2));
console.log(pyramid(3));
*/

// 12.12.2023

// #1
/*
Given an array/list [] of integers , Construct a product array Of same size Such That prod[i] is equal to The Product of all the elements of Arr[] except Arr[i].
Notes
    Array/list size is at least 2 .
    Array/list's numbers Will be only Positives
    Repetition of numbers in the array/list could occur.
Input >> Output Examples
productArray ({12,20}) ==>  return {20,12}
Explanation:
    The first element in prod [] array 20 is the product of all array's elements except the first element
    The second element 12 is the product of all array's elements except the second element .
productArray ({1,5,2}) ==> return {10,2,5}
Explanation:
    The first element 10 is the product of all array's elements except the first element 1
    The second element 2 is the product of all array's elements except the second element 5
    The Third element 5 is the product of all array's elements except the Third element 2.
productArray ({10,3,5,6,2}) return ==> {180,600,360,300,900}
Explanation:
    The first element 180 is the product of all array's elements except the first element 10
    The second element 600 is the product of all array's elements except the second element 3
    The Third element 360 is the product of all array's elements except the third element 5
    The Fourth element 300 is the product of all array's elements except the fourth element 6
    Finally ,The Fifth element 900 is the product of all array's elements except the fifth element 2
*/
/*
function productArray(numbers) {
  // FIRST
  
  // const total = numbers.reduce((acc, num) => acc * num, 1);
  // console.log(total);
  // const result = numbers.map((num) => total / num);
  // return result;
  

  const result = [];
  for (let i = 0; i < numbers.length; i++) {
    let product = 1;
    for (let j = 0; j < numbers.length; j++) {
      if (i !== j) {
        product *= numbers[j];
      }
    }
    result.push(product);
  }
  return result;
}

console.log(productArray([3, 27, 4, 2]));
*/

// #2
/*
Positive integers have so many gorgeous features. Some of them could be expressed as a sum of two or more consecutive positive numbers.
Consider an Example :
    10 could be expressed as the sum of 1 + 2 + 3 + 4 .
    Task
Given Positive integer, N , return true if it could be expressed as a sum of two or more consecutive positive numbers , otherwise return false .
Notes
    Guaranteed constraint : 2 ≤ N ≤ (2^32) -1 .
Input >> Output Examples:

* consecutiveDucks(9)  ==>  return (true)  //  9 , could be expressed as a sum of ( 2 + 3 + 4 ) or ( 4 + 5 ) . 
* consecutiveDucks(64)  ==>  return (false)
* consecutiveDucks(42)  ==>  return (true) //  42 , could be expressed as a sum of ( 9 + 10 + 11 + 12 ) 
*/
/*
function consecutiveDucks(num) {
  // Использую формулу вычисления суммы последовательности положительных чисел
  // Это проверка, является ли заданное число степенью двойки (сумма чисел от 1 до N равна (n*(n+1)))/2. Исходя из этого можно перебирать возможные значения для N и проверять, деляться ли входное число на N без остатка
  return (num & (num - 1)) !== 0;
}

console.log(consecutiveDucks(69));
console.log(consecutiveDucks(8));
*/

// #3
/*
With Cereal crops like wheat or rice, before we can eat the grain kernel, we need to remove that inedible hull, or to separate the wheat from the chaff.
Task
Given a sequence of n integers , separate the negative numbers (chaff) from positive ones (wheat).
*/
/*
function wheatFromChaff(values) {
  const o = [...values];
  for (let head = 0, tail = values.length - 1; head < tail; head++, tail--) {
    while (values[head] < 0) head++;
    while (values[tail] > 0) tail--;
    if (head < tail) [o[head], o[tail]] = [o[tail], o[head]];
  }
  return o;
}

console.log(wheatFromChaff([16, 25, -48, -47, -37, 41, -2]));
*/

// #4
/*
Given a List [] of n integers , find minimum number to be inserted in a list, so that sum of all elements of list should equal the closest prime number .
*/
/*
function minimumNumber(numbers) {
  let sum = numbers.reduce((a, b) => a + b);
  for (let i = sum; ; i++) {
    if (prime(i)) return i - sum;
  }
  function prime(a) {
    if (a < 2) return false;
    if (a % 2 === 0) return a === 2;
    for (let i = 3; i * i < a; i += 2) {
      if (a % i === 0) return false;
    }
    return true;
  }
}

console.log(minimumNumber([3, 2, 1]));
*/

// #5
/*
Given an array of N integers, you have to find how many times you have to add up the smallest numbers in the array until their Sum becomes greater or equal to K.
    Input >> Output Examples
minimumSteps({1, 10, 12, 9, 2, 3}, 6)  ==>  return (2)
Explanation:
    We add two smallest elements (1 + 2), their sum is 3
    Then we add the next smallest number to it (3 + 3) , so the sum becomes 6
    Now the result is greater or equal to 6 , Hence the output is (2) i.e (2) operations are required to do this .
*/
/*
function minimumSteps(numbers, value) {
  let count = 0;
  let sum = 0;
  numbers.sort((a, b) => a - b);
  console.log(numbers);
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
    count += sum < value ? 1 : 0;

    // Если сумма превышает или равна заданному значению, завершаю цикл
    if (sum >= value) {
      break;
    }
  }
  return count;
}

// console.log(minimumSteps([4, 6, 3], 7));
console.log(minimumSteps([8, 9, 10, 4, 2], 23));
*/

// 15.12.2023

// #1
/*
Since the sum of its digits' factorial of 1! + 2! + 3! = 9 is not equal to number itself, then it's Not Strong .
strong_num(2)  ==>  return "STRONG!!!!"
Since the sum of its digits' factorial of 2! = 2 is equal to number itself, then its a Strong.
strong_num(150) ==> return "Not Strong !!"
Since the sum of its digits' factorial of 1! + 5! + 0! = 122 is not equal to number itself, Then it's Not Strong . 
*/
/*
function strong(n) {
  let arr = n.toString().split("").map(Number);
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    let factorial = arr[i];
    for (let j = 1; j < arr[i]; j++) {
      factorial *= j;
    }
    result += factorial;
  }
  return result === n ? "STRONG!!!!" : "Not Strong !!";
}

console.log(strong(145));
console.log(strong(123));
*/

// #2
/*
The deleteValues function takes an array and removes elements that answer true to the pred function.
For some reason, some of the elements of the array for which the predicate holds are not deleted...
Can you fix the code?

Code:

function deleteValues(array, pred) {
  for(var i = 0; i < array.length; i++) {
    if ( pred(array[i]) ) {
      array.splice(i, 1);
    }
  }
  return array;
}
*/

// function deleteValues(array, pred) {
//   for (var i = 0; i < array.length; i++) {
//     if (pred(array[i])) {
//       array.splice(i--, 1);
//     }
//   }
//   return array;
// }

// #3
/*
 Given an array of positive integers, replace every element with the least greater element to its right. If there is no greater element to its right, replace it with -1. For instance, given the array
[8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28],
the desired output is
[18, 63, 80, 25, 32, 43, 80, 93, 80, 25, 93, -1, 28, -1, -1].
Your task is to create a function "arrayManip()" that takes in an array as its argument, manipulates the array as described above, then return the resulting array.
Note: Return a new array, rather than modifying the passed array.
*/
/*
function arrayManip(array) {
  for (let i = 0; i < array.length; i++) {
    const toRight = array
      .slice(i + 1, array.length)
      .filter((n) => n > array[i]);
    const min = Math.min(...toRight);
    console.log(min);
    min > array[i] && min !== Infinity ? (array[i] = min) : (array[i] = -1);
  }
  return [...array];
}

console.log(
  arrayManip([8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28])
);
*/

// 19.12.2023
// #1
/*
Jumping number is the number that All adjacent digits in it differ by 1.
Task
Given a number, Find if it is Jumping or not .
Warm-up (Highly recommended)
Playing With Numbers Series
Notes
    Number passed is always Positive .
    Return the result as String .
    The difference between ‘9’ and ‘0’ is not considered as 1 .
    All single digit numbers are considered as Jumping numbers.
Input >> Output Examples
jumpingNumber(9) ==> return "Jumping!!"
Explanation:
    It's single-digit number
jumpingNumber(79) ==> return "Not!!"
Explanation:
    Adjacent digits don't differ by 1
jumpingNumber(23) ==> return "Jumping!!"
Explanation:
    Adjacent digits differ by 1
jumpingNumber(556847) ==> return "Not!!"
Explanation:
    Adjacent digits don't differ by 1
jumpingNumber(4343456) ==> return "Jumping!!"
Explanation:
    Adjacent digits differ by 1
jumpingNumber(89098) ==> return "Not!!"
Explanation:
    Adjacent digits don't differ by 1
jumpingNumber(32) ==> return "Jumping!!"
Explanation:
    Adjacent digits differ by 1
*/
/*
function jumpingNumber(n) {
  let arr = n.toString().split("").map(Number);

  for (let i = 0; i < arr.length - 1; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) !== 1) {
      return "Not";
    }
  }
  return "Jumping!!";
}

console.log(jumpingNumber(1));
console.log(jumpingNumber(23));
console.log(jumpingNumber(79));
console.log(jumpingNumber(8987));
*/
// const obj = {
//   prop1: "1",
//   prop2: "2",
// };

// console.log(obj.hasOwnProperty("prop1"));
// console.log("prop1" in obj);
// console.log(obj["prop1"]);
/*
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const squares = nums.map(function (num) {
  return num * num;
});

console.log(squares);
console.log(nums);
*/

// 27.12.2023
// #1
/*
A number is called Automorphic number if and only if its square ends in the same digits as the number itself.
Task
Given a number determine if it Automorphic or not .
Warm-up (Highly recommended)
Playing With Numbers Series
Notes
    The number passed to the function is positive
    Input >> Output Examples
autoMorphic (25) -->> return "Automorphic" 
Explanation:
    25 squared is 625 , Ends with the same number's digits which are 25 .
    autoMorphic (13) -->> return "Not!!"
    Explanation:
    13 squared is 169 , Not ending with the same number's digits which are 69 .
    autoMorphic (76) -->> return "Automorphic"
    Explanation:
    76 squared is 5776 , Ends with the same number's digits which are 76 .
    autoMorphic (225) -->> return "Not!!"
    Explanation:
    225 squared is 50625 , Not ending with the same number's digits which are 225 .
    autoMorphic (625) -->> return "Automorphic"
    Explanation:
    625 squared is 390625 , Ends with the same number's digits which are 625 .
    autoMorphic (1) -->> return "Automorphic"
    Explanation:
    1 squared is 1 , Ends with the same number's digits which are 1 .
    autoMorphic (6) -->> return "Automorphic"
    Explanation:
    6 squared is 36 , Ends with the same number's digits which are 6 
*/
/*
function automorphic(n) {
  const arr = n.toString().split("").map(Number);
  let square = n * n;
  let result = square.toString().split("").map(Number).slice(-arr.length);
  return arr.join("") === result.join("") ? "Automorphic" : "Not!!";
}

console.log(automorphic(1));
console.log(automorphic(225));
console.log(automorphic(625));
*/

// #2
/*
Generate user links
Your task is to create userlinks for the url, you will be given a username and must return a valid link.
Example
generate_link('matt c')
http://www.codewars.com/users/matt%20c
*/
/*
function generateLink(user) {
  let encodedUser = encodeURIComponent(user);

  let result = `http://www.codewars.com/users/${encodedUser}`;

  return result;
}

console.log(generateLink("matt c"));

console.log(generateLink("matt c"));
*/

// #3
/*
Implement a function, multiples(m, n), which returns an array of the first m multiples of the real number n. Assume that m is a positive integer.
Ex.
multiples(3, 5.0)
should return
[5.0, 10.0, 15.0]
*/
/*
function multiples(m, n) {
  let result = [];
  let arr = Array(m).fill(0);

  for (let i = 1; i <= arr.length; i++) {
    result.push(i * n);
  }
  return result;
}

console.log(multiples(3, 5));
*/

// #4
/*
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.
Additionally, if the number is negative, return 0.
Note: If the number is a multiple of both 3 and 5, only count it once.
*/
/*
function solution(number) {
  let sum = 0;
  for (let i = 1; i < number; i++) {
    if (i % 5 === 0 || i % 3 === 0) {
      sum += i;
    }
  }
  return sum;
}

console.log(solution(10));
*/

// #5
/*
Complete the function to find the count of the most frequent item of an array. You can assume that input is an array of integers. For an empty array return 0
Example
input array: [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
ouptut: 5 
The most frequent number in the array is -1 and it occurs 5 times.
 */
/*
function mostFrequentItemCount(collection) {
  if (collection.length === 0) {
    return 0;
  }

  let ht = {};
  for (const duplicate of collection) {
    ht[duplicate] = (ht[duplicate] || 0) + 1;
  }

  let max = -Infinity;
  for (let duplicate in ht) {
    if (ht.hasOwnProperty(duplicate)) {
      max = Math.max(max, ht[duplicate]);
    }
  }

  return max;
}

console.log(mostFrequentItemCount([3, -1, -1]));
*/

// #6
/*
You have stumbled across the divine pleasure that is owning a dog and a garden. Now time to pick up all the cr@p! :D
Given a 2D array to represent your garden, you must find and collect all of the dog cr@p - represented by '@'.
You will also be given the number of bags you have access to (bags), and the capactity of a bag (cap). If there are no bags then you can't pick anything up, so you can ignore cap.
You need to find out if you have enough capacity to collect all the cr@p and make your garden clean again.
If you do, return 'Clean', else return 'Cr@p'.
Watch out though - if your dog is out there ('D'), he gets very touchy about being watched. If he is there you need to return 'Dog!!'.
For example:
x=
[[_,_,_,_,_,_]
[_,_,_,_,@,_]
[@,_,_,_,_,_]]
bags = 2, cap = 2
return --> 'Clean'
*/
/*
function crap(x, bags, cap) {
  let arr = [].concat(...x); // Combine subarrays into one array
  console.log(arr);

  let ht = {};

  for (const shit of arr) {
    ht[shit] = (ht[shit] || 0) + 1;
  }
  console.log(ht);

  let y = 0;
  let z = 0;
  for (let dup in ht) {
    if (dup === "@") {
      y += ht[dup]; // Increment y by the count of "@" in the array
    }

    if (dup === "D") {
      z += ht[dup];
      return "Dog!!";
    }
  }

  return y > bags * cap ? "Cr@p" : "Clean";
}

console.log(
  crap(
    [
      ["_", "_", "_", "_"],
      ["_", "_", "_", "@"],
      ["_", "_", "@", "_"],
    ],
    2,
    2
  )
);
console.log(
  crap(
    [
      ["_", "_", "_", "_"],
      ["_", "_", "_", "@"],
      ["_", "_", "@", "_"],
    ],
    1,
    1
  )
);
console.log(
  crap(
    [
      ["_", "_"],
      ["_", "@"],
      ["D", "_"],
    ],
    2,
    2
  )
);
*/

// #7

/*
In this Kata, you will be given two strings a and b and your task will be to return the characters that are not common in the two strings.
For example:
solve("xyab","xzca") = "ybzc" 
--The first string has 'yb' which is not in the second string. 
--The second string has 'zc' which is not in the first string. 
Notice also that you return the characters from the first string concatenated with those from the second string.
More examples in the tests cases.
Good luck!
*/
/*
function solve(a, b) {
  return (a + b)
    .split("")
    .filter((c) => !a.includes(c) || !b.includes(c))
    .join("");
}

console.log(solve("xyab", "xzca"));
*/

// #8
/*
Time to win the lottery!
Given a lottery ticket (ticket), represented by an array of 2-value arrays, you must find out if you've won the jackpot.
Example ticket:
[ [ 'ABC', 65 ], [ 'HGR', 74 ], [ 'BYHT', 74 ] ]
To do this, you must first count the 'mini-wins' on your ticket. Each subarray has both a string and a number within it. If the character code of any of the characters in the string matches the number, you get a mini win. Note you can only have one mini win per sub array.
Once you have counted all of your mini wins, compare that number to the other input provided (win). If your total is more than or equal to (win), return 'Winner!'. Else return 'Loser!'.
All inputs will be in the correct format. Strings on tickets are not always the same length.
*/
/*
function bingo(ticket, win) {
  let minWins = 0;

  for (let i = 0; i < ticket.length; i++) {
    const [str, num] = ticket[i];

    for (let j = 0; j < str.length; j++) {
      if (str.charCodeAt(j) === num) {
        minWins++;
        break; // Это чтобы после первой минипобеду выйти из текущей строки и перейти к новой
      }
    }
  }

  return minWins >= win ? "Winner!" : "Loser!";
}

console.log(
  bingo(
    [
      ["ABC", 65],
      ["HGR", 74],
      ["BYHT", 74],
    ],
    2
  )
);
*/

// 28.12.2023
// #1
/*
Description:
The aim of this kata is to split a given string into different strings of equal size (note size of strings is passed to the method)
Example:
Split the below string into other strings of size #3
'supercalifragilisticexpialidocious'
Will return a new string
'sup erc ali fra gil ist ice xpi ali doc iou s'
Assumptions:
String length is always greater than 0
String has no spaces
Size is always positive
*/
/*
var splitInParts = function (s, len) {
  let result = [];
  for (let i = 0; i < s.length; i += len) {
    result.push(s.slice(i, i + len));
  }
  return result.join(" ");
};

console.log(splitInParts("supercalifragilisticexpialidocious", 3));
*/

// #2
/*
A stream of data is received and needs to be reversed.
Each segment is 8 bits long, meaning the order of these segments needs to be reversed, for example:
11111111  00000000  00001111  10101010
 (byte1)   (byte2)   (byte3)   (byte4)
should become:
10101010  00001111  00000000  11111111
 (byte4)   (byte3)   (byte2)   (byte1)
The total number of bits will always be a multiple of 8.
The data is given in an array as such:
[1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]
*/
/*
function dataReverse(data) {
  const revData = [];
  for (let i = data.length - 8; i >= 0; i -= 8) {
    for (let j = 0; j < 8; j++) {
      revData.push(data[i + j]);
    }
  }
  return revData;
}

const inputData = [
  1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0,
  1, 0, 1, 0, 1, 0,
];
const reversedOutput = dataReverse(inputData);
console.log(reversedOutput);
*/

// #3
/*
Now that the competition gets tough it will Sort out the men from the boys .
Men are the Even numbers and Boys are the odd !alt !alt
Task
Given an array/list [] of n integers , Separate The even numbers from the odds , or Separate the men from the boys !alt !alt
Notes
    Return an array/list where Even numbers come first then odds
    Since , Men are stronger than Boys , Then Even numbers in ascending order While odds in descending .
    Array/list size is at least 4 .
    Array/list numbers could be a mixture of positives , negatives .
    Have no fear , It is guaranteed that no Zeroes will exists . !alt
    Repetition of numbers in the array/list could occur , So (duplications are not included when separating).
    Input >> Output Examples:
menFromBoys ({7, 3 , 14 , 17}) ==> return ({14, 17, 7, 3}) 
Explanation:
Since , { 14 } is the even number here , So it came first , then the odds in descending order {17 , 7 , 3} .
menFromBoys ({-94, -99 , -100 , -99 , -96 , -99 }) ==> return ({-100 , -96 , -94 , -99})
Explanation:
    Since , { -100, -96 , -94 } is the even numbers here , So it came first in *ascending order *, then the odds in descending order { -99 }
    Since , (Duplications are not included when separating) , then you can see only one (-99) was appeared in the final array/list .
menFromBoys ({49 , 818 , -282 , 900 , 928 , 281 , -282 , -1 }) ==> return ({-282 , 818 , 900 , 928 , 281 , 49 , -1})
Explanation:
    Since , {-282 , 818 , 900 , 928 } is the even numbers here , So it came first in ascending order , then the odds in descending order { 281 , 49 , -1 }
    Since , (Duplications are not included when separating) , then you can see only one (-282) was appeared in the final array/list .
*/
/*
function menFromBoys(arr) {
  let mans = [];
  let boys = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      mans.push(arr[i]);
    } else {
      boys.push(arr[i]);
    }
  }
  const result = new Set(
    mans.sort((a, b) => a - b).concat(boys.sort((a, b) => b - a))
  );

  return [...result];
}

console.log(menFromBoys([82, 91, 72, 76, 76, 100, 85]));
*/

// #4
/*
Write a program that outputs the top n elements from a list.
Example:
largest(2, [7,6,5,4,3,2,1])
// => [6,7]
*/
/*
function largest(n, array) {
  return array
    .sort((a, b) => b - a)
    .splice(0, n)
    .sort((a, b) => a - b);
}

console.log(largest(2, [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));
*/

// 04.01.2023

// ASTON
// #1
/*
Very simple, given an integer or a floating-point number, find its opposite.
Examples:
1: -1
14: -14
-34: 34
*/
/*
const opposite = (number) => {
  if (typeof number === "number") {
    return -number;
  } else {
    return NaN;
  }
};

console.log(opposite(1));
console.log(opposite(14));
console.log(opposite(4.25));
*/

// #2
/*
Your task is to create a function that does four basic mathematical operations.
The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.
Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/
/*
const basicOp = (operation, value1, value2) => {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return NaN;
  }
};

console.log(basicOp("+", 4, 7));
console.log(basicOp("-", 15, 18));
console.log(basicOp("*", 5, 5));
console.log(basicOp("/", 49, 7));
*/

// #3
/*
Description:
Input: Array of elements
["h","o","l","a"]
Output: String with comma delimited elements of the array in th same order.
"h,o,l,a"
Note: if this seems too simple for you try the next level
Note2: the input data can be: boolean array, array of objects, array of string arrays, array of number arrays... 😕
*/
/*
function printArray(array) {
  return array.join(",");
}

console.log(printArray(["h", "o", "l", "a"]));
*/

// #4
/*
Can Santa save Christmas?
Oh no! Santa's little elves are sick this year. He has to distribute the presents on his own.
But he has only 24 hours left. Can he do it?
Your Task:
You will get an array as input with time durations as string in the following format: HH:MM:SS. Each duration represents the time taken by Santa to deliver a present. Determine whether he can do it in 24 hours or not. In case the time required to deliver all of the presents is exactly 24 hours, Santa can complete the delivery ;-) .
*/
/*
const determineTime = (durations) => {
  const totalSec = durations.reduce((total, duration) => {
    const [h, m, s] = duration.split(":").map(Number);
    return total + h * 3600 + m * 60 + s;
  }, 0);
  return totalSec <= 24 * 3600;
};

console.log(determineTime(["00:30:00", "02:30:00", "00:15:00"]));
*/

// #5
/*
You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
#Examples:
Kata.getMiddle("test") should return "es"
Kata.getMiddle("testing") should return "t"
Kata.getMiddle("middle") should return "dd"
Kata.getMiddle("A") should return "A"
#Input
A word (string) of length 0 < str < 1000 (In javascript you may get slightly more than 1000 in some test cases due to an error in the test cases). You do not need to test for this. This is only here to tell you that you do not need to worry about your solution timing out.
#Output
The middle character(s) of the word represented as a string.
*/
/*
const getMiddle = (s) => {
  const middleIndex = Math.floor(s.length / 2);
  if (s.length % 2 === 1) {
    return s[middleIndex];
  } else {
    return s.slice(middleIndex - 1, middleIndex + 1);
  }
};

console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
console.log(getMiddle("A"));
*/

// #6
/*
In software engineering, the singleton pattern is a design pattern that restricts the instantiation of a class to one object. This is useful when exactly one object is needed to coordinate actions across the system.
Create an Singleton pattern, so there is one object in system.
Example:
var obj1 = new Singleton();
var obj2 = new Singleton();
obj1 === obj2; // => true
obj1.test = 1;
obj2.test; // => 1
*/
/*
var Singleton = (function () {
  var instance;

  function Singleton() {
    if (!instance) {
      instance = this;
    }
    return instance;
  }

  return Singleton;
})();
// Example usage:
var obj1 = new Singleton();
var obj2 = new Singleton();

console.log(obj1 === obj2); // Output: true

obj1.test = 1;
console.log(obj2.test); // Output: 1
*/

// #7
/*
You are given a string containing a sequence of character sequences separated by commas.
Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).
Examples
"1,2,3"      =>  "2"
"1,2,3,4"    =>  "2 3"
"1,2,3,4,5"  =>  "2 3 4"
""     =>  NULL
"1"    =>  NULL
"1,2"  =>  NULL
*/
/*
const array = (string) => {
  const arr = string.split(",");
  if (arr.length <= 2) {
    return null;
  } else {
    arr.splice(0, 1);
    arr.splice(-1, 1);
  }
  return arr.join(" ");
};

console.log(array(""));
console.log(array("1"));
console.log(array("1,2"));
console.log(array("1,2,3"));
console.log(array("1,2,3,4"));
console.log(array("1,2,3,4,5"));
*/

// #8
/*
Create the function prefill that returns an array of n elements that all have the same value v. See if you can do this without using a loop.
You have to validate input:
    v can be anything (primitive or otherwise)
    if v is ommited, fill the array with undefined
    if n is 0, return an empty array
    if n is anything other than an integer or integer-formatted string (e.g. '123') that is >=0, throw a TypeError
When throwing a TypeError, the message should be n is invalid, where you replace n for the actual value passed to the function.
Code Examples

    prefill(3,1) --> [1,1,1]    
    prefill(2,"abc") --> ['abc','abc']    
    prefill("1", 1) --> [1]    
    prefill(3, prefill(2,'2d'))
      --> [['2d','2d'],['2d','2d'],['2d','2d']]      
    prefill("xyz", 1)
      --> throws TypeError with message "xyz is invalid"
*/
/*
const prefill = (n, v) => {
  const parsedN = parseInt(n, 10);

  if (
    isNaN(parsedN) ||
    parsedN < 0 ||
    !Number.isInteger(parsedN) ||
    parsedN.toString() !== n.toString()
  ) {
    throw new TypeError(`${n} is invalid`);
  }

  return Array(parsedN).fill(v);
};

console.log(prefill(3, 1));
console.log(prefill(2, "abc"));
console.log(prefill("1", 1));
*/

// #9
/*
Make a function called crossProduct that takes two 3 dimensional vectors (in the form of two arrays) and returns their cross product. You need to check if the passed arguments are of the expected format, otherwise throw the message: "Arguments are not 3D vectors!".

crossProduct([1,0,0],[0,1,0]) //should return [0,0,1]
crossProduct('gobbledigook', [1,1,1]) //should throw the string "Arguments are not 3D vectors!"

Your function should handle non integers.

More info on cross products: https://en.wikipedia.org/wiki/Cross_product

crossprod([1,0,0], [0,1,0], 3, 3)          should return [0,0,1] 
crossprod([1,2,3,4,5], [5,4,3,2,1], 5, 5) should return NULL 
crossprod([6,6,6], NULL, 3, 3)             should return NULL 
crossprod(NULL, NULL, 3, 3)                should return NULL 
*/
/*
function crossProduct(vector1, vector2) {
  if (
    !Array.isArray(vector1) ||
    !Array.isArray(vector2) ||
    vector1.length !== 3 ||
    vector2.length !== 3 ||
    !vector1.every((element) => typeof element === "number") ||
    !vector2.every((element) => typeof element === "number")
  ) {
    throw "Arguments are not 3D vectors!";
  }

  const res = [
    vector1[1] * vector2[2] - vector1[2] * vector2[1],
    vector1[2] * vector2[0] - vector1[0] * vector2[2],
    vector1[0] * vector2[1] - vector1[1] * vector2[0],
  ];

  return res;
}

console.log(crossProduct([3, 2, 1], [1, 2, 3]));
console.log(crossProduct([1, 0, 0], [0, 1, 0]));
console.log(crossProduct("gobbledigook", [0, 1, 0]));
*/

// #10
/*
Write a function that outputs the transpose of a matrix - a new matrix where the columns and rows of the original are swapped.
For example, the transpose of:
| 1 2 3 |
| 4 5 6 |
is
| 1 4 |
| 2 5 |
| 3 6 |
The input to your function will be an array of matrix rows. You can assume that each row has the same length, and that the height and width of the matrix are both positive.
*/
/*
function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const result = Array.from({ length: cols }, () => []);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[j][i] = matrix[i][j];
    }
  }
  return result;
}

console.log(
  transpose([
    [1, 2, 3],
    [4, 5, 6],
  ])
); // [[1,4],[2,5],[3,6]]
*/

// #11
/*
Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
The returned format must be correct in order to complete this challenge.
Don't forget the space after the closing parentheses!
*/
/*
const createPhoneNumber = (numbers) => {
  numbers.unshift("(");
  numbers.splice(4, 0, ")", " ");
  console.log(numbers);
  numbers.splice(9, 0, "-");
  console.log(numbers);
  return numbers.join("");
};

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
// "(123) 456-7890"
*/

// #12
/*
We want to create a function, which returns an array of functions, which return their index in the array. For better understanding, here an example:

var callbacks = createFunctions(5); // create an array, containing 5 functions

callbacks[0](); // must return 0
callbacks[3](); // must return 3

We already implemented that function, but when we actually run the code, the result doesn't look like what we expected. Can you spot, what's wrong with it? A test fixture is also available
*/
/*
function createFunctions(n) {
  var callbacks = [];

  for (var i = 0; i < n; i++) {
    callbacks.push(
      (function (index) {
        return function () {
          return index;
        };
      })(i)
    );
  }

  return callbacks;
}
*/

// #13
/*
This time we want to write calculations using functions and get the results. Let's have a look at some examples:
seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:
    There must be a function for each number from 0 ("zero") to 9 ("nine")
    There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
    Each calculation consist of exactly one operation and two numbers
    The most outer function represents the left operand, the most inner function represents the right operand
    Division should be integer division. For example, this should return 2, not 2.666666...:
*/
/*
function zero(x) {
  return x ? x(0) : 0;
}
function one(x) {
  return x ? x(1) : 1;
}
function two(x) {
  return x ? x(2) : 2;
}
function three(x) {
  return x ? x(3) : 3;
}
function four(x) {
  return x ? x(4) : 4;
}
function five(x) {
  return x ? x(5) : 5;
}
function six(x) {
  return x ? x(6) : 6;
}
function seven(x) {
  return x ? x(7) : 7;
}
function eight(x) {
  return x ? x(8) : 8;
}
function nine(x) {
  return x ? x(9) : 9;
}

function plus(right) {
  return function (left) {
    return left + right;
  };
}
function minus(right) {
  return function (left) {
    return left - right;
  };
}
function times(right) {
  return function (left) {
    return left * right;
  };
}
function dividedBy(right) {
  return function (left) {
    return Math.floor(left / right);
  };
}
*/

// #14
/*
There's no such thing as private properties on a coffeescript object! But, maybe there are?
Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods
    getSecret() which returns the secret
    setSecret() which sets the secret
obj = createSecretHolder(5)
obj.getSecret() # returns 5
obj.setSecret(2)
obj.getSecret() # returns 2
*/
/*
const createSecretHolder = (secret) => {
  let secretVal = secret;

  return {
    getSecret: () => secretVal,
    setSecret: (newSecret) => {
      secretVal = newSecret;
    },
  };
};

console.log(createSecretHolder());
*/

// #15
/*
In object-oriented programming, it is sometimes useful to have private shared state among all instances of a class; in other languages, like ruby, this shared state would be tracked with a class variable. In javascript we achieve this through closures and immediately-invoked function expressions.

In this kata, I want you to write make a Cat constructor that takes arguments name and weight to instantiate a new cat object. The constructor should also have an averageWeight method that returns the average weight of cats created with the constructor.

garfield = new Cat('garfield', 25);
Cat.averageWeight(); // 25

felix = new Cat('felix', 15);
Cat.averageWeight();   // now 20

But that's not all. Cats can change weight. Use Object.defineProperty to write custom setters and getters for the weight property so that the following works properly even as instances change their weight value:

felix.weight = 25;
felix.weight // 25
Cat.averageWeight(); // now 25

Object.defineProperty must be used to pass all tests. Storing a reference to all instances and recalculating the average weight each time is easier, but would prevent garbage collection from working properly if used in a production environment.

Finally, since average weight is an aggregate statistic it's important that we validate constructor arguments so that no cats are created without a specified weight; so, make sure to throw an error if both arguments are not recieved by the constructor.
Summary of requirements:

    Cat constructor, requiring arguments for name and weight
    Throw an error if name or weight not specified when invoking the constructor.
    Cat.averageWeight() method should give the average weight of all cat instances created with Cat, even after if the instance's properties have changed.
    Must use Object.defineProperty
*/

// #16
/*
We want to create a function that will add numbers together when called in succession.
add(1)(2); // == 3
We also want to be able to continue to add numbers to our chain.
add(1)(2)(3); // == 6
add(1)(2)(3)(4); //  == 10
add(1)(2)(3)(4)(5); // == 15
and so on.
A single call should be equal to the number passed in.
add(1); // == 1
We should be able to store the returned values and reuse them.
var addTwo = add(2);
addTwo; // == 2
addTwo + 5; // == 7
addTwo(3); // == 5
addTwo(3)(5); // == 10
We can assume any number being passed in will be valid whole number.
*/
/*
function add(num) {
  function innerAdd(nextNum) {
    return add(num + nextNum);
  }

  innerAdd.valueOf = function () {
    return num;
  };

  return innerAdd;
}

*/

// #17
/*
If you are calculating complex things or execute time-consuming API calls, you sometimes want to cache the results. In this case we want you to create a function wrapper, which takes a function and caches its results depending on the arguments, that were applied to the function.
Usage example:
var complexFunction = function(arg1, arg2) {  complex calculation in here };
var cachedFunction = cache(complexFunction);
cachedFunction('foo', 'bar'); // complex function should be executed
cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments
*/
/*
function cache(func) {
  const cacheMap = new Map();

  return function (...args) {
    const key = JSON.stringify(args);

    if (cacheMap.has(key)) {
      return cacheMap.get(key);
    }

    const result = func.call(this, ...args);
    cacheMap.set(key, result);
    return result;
  };
}
*/

// #18
/*
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
*/
/*
function duplicateCount(text) {
  let ht = {};
  let count = 0;

  for (char of text.toLowerCase()) {
    ht[char] = (ht[char] || 0) + 1;

    if (ht[char] === 2) {
      count++;
    }
  }

  return count;
}

console.log(duplicateCount(""));
console.log(duplicateCount("abcde"));
console.log(duplicateCount("aabBcde"));
console.log(duplicateCount("Indivisibility"));
console.log(duplicateCount("Indivisibilities"));
*/

// #19
/*
Javascript functions can be combined to form new functions. For example the functions addOne and multTwo can be combined to form a new function which first adds one and then multiplies by two, as follows:
const addOne = (a) => a + 1
const multTwo = (b) => b * 2
const addOneMultTwo = (c) => multTwo(addOne(c))
addOneMultTwo(5) // returns 12
Combining functions like this is called function composition. Functional programming libraries in Javascript such as Ramda include a generic compose function which does the heavy lifting of combining functions for you. So you could implement addOneMultTwo as follows:
const addOneMultTwo = compose(multTwo, addOne)
addOneMultTwo(5) // returns 12
A simple implementation of compose, could work as follows:
const compose = (f, g) => (a) => f(g(a))
The arguments f and g are unary functions (i.e. functions which take one argument). The problem with this compose function is that it only composes two functions. Your task is to write a compose function which can compose any number of functions together.
*/
/*
const compose = (...functions) => {
  return (arg) => {
    return functions.reduceRight((result, func) => func(result), arg);
  };
};

console.log(compose());
*/

// #20
/*
Implement a function that receives a string, and lets you extend it with repeated calls. When no argument is passed you should return a string consisting of space-separated words you've received earlier.
Note: There will always be at least 1 string; all inputs will be non-empty.
For example:
createMessage("Hello")("World!")("how")("are")("you?")() === "Hello World! how are you?"
Tip (helpful, but not necessary): Try using classes!
Good luck and happy coding!
*/
/*
function createMessage(...initialWords) {
  let words = [...initialWords];
  console.log(words);

  const message = function (...newWords) {
    if (newWords.length === 0) {
      return words.join(" ");
    } else {
      words = [...words, ...newWords];
      return message;
    }
  };

  return message;
}

const message = createMessage("Hello")("World!")("how")("are")("you?");
console.log(message());
*/

// #21
/*
NOTE: The test cases for this kata are broken, but for some reason CodeWars has locked them and I cannot edit them. Specifically, the returned function is not propertly testing that old values are remembered. If and when I can fix the problem, I will, but I don't see any way to do that due to the lock.

In testing, a spy function is one that keeps track of various metadata regarding its invocations. Some examples of properties that a spy might track include:

    Whether it was invoked
    How many times it was invoked
    What arguments it was called with
    What contexts it was called in
    What values it returned
    Whether it threw an error

For this kata, implement a spyOn function which takes any function func as a parameter and returns a spy for func. The returned spy must be callable in the same manner as the original func, and include the following additional properties/methods:

    .callCount() — returns the number of times spy has been called
    .wasCalledWith(val) – returns true if spy was ever called with val, else returns false.
    .returned(val) — returns true if spy ever returned val, else returns false

Below is a specific example of how spyOn might work in the wild.

function adder(n1, n2) { return n1 + n2; }
var adderSpy = spyOn( adder );

adderSpy(2, 4); // returns 6
adderSpy(3, 5); // returns 8
adderSpy.callCount(); // returns 2
adderSpy.wasCalledWith(4); // true
adderSpy.wasCalledWith(0); // false
adderSpy.returned(8); // true
adderSpy.returned(0); // false
*/
/*
function spyOn(func) {
  let calls = 0;
  let all = [];
  let value;

  const spy = function (...args) {
    calls++;
    all.push(...args);
    value = func.apply(this, args);
    return value;
  };

  spy.callCount = () => calls;
  spy.wasCalledWith = (i) => all.some((a) => i === a);
  spy.returned = (i) => i === value;

  return spy;
}
*/

// #22
/*
You probably know, that in Javascript (and also Ruby) there is no concept of interfaces. There is only a concept of inheritance, but you can't assume that a certain method or property exists, just because it exists in the parent prototype / class. We want to find out, whether a given object fulfils the requirements to implement the "SantaClausable" interface. We need to implement a method which checks for this interface.
Rules

The SantaClausable interface is implemented, if all of the following methods are defined on an object:

    sayHoHoHo() / say_ho_ho_ho
    distributeGifts() / distribute_gifts
    goDownTheChimney() / go_down_the_chimney

Example

var santa = {
    sayHoHoHo: function() { console.log('Ho Ho Ho!') },
    distributeGifts: function() { console.log('Gifts for all!'); },
    goDownTheChimney: function() { console.log('*whoosh*'); }
};

var notSanta = {
    sayHoHoHo: function() { console.log('Oink Oink!') }
    // no distributeGifts() and no goDownTheChimney()
};

isSantaClausable(santa); // must return TRUE
isSantaClausable(notSanta); // must return FALSE
*/
/*
function isSantaClausable(obj) {
  return (
    typeof obj.sayHoHoHo === "function" &&
    typeof obj.distributeGifts === "function" &&
    typeof obj.goDownTheChimney === "function"
  );
}
var santa = {
  sayHoHoHo: function () {
    console.log("Ho Ho Ho!");
  },
  distributeGifts: function () {
    console.log("Gifts for all!");
  },
  goDownTheChimney: function () {
    console.log("*whoosh*");
  },
};

var notSanta = {
  sayHoHoHo: function () {
    console.log("Oink Oink!");
  },
};
console.log(isSantaClausable(santa));
console.log(isSantaClausable(notSanta));
*/

// #23
/*
In JavaScript we can create objects using the new operator.

For example, if you have this constructor function:

function Greeting(name) {
  this.name = name;
}

Greeting.prototype.sayHello = function() {
  return "Hello " + this.name;
};


Greeting.prototype.sayBye = function() {
  return "Bye " + this.name;
};

You can create a Greeting object in this way:

  var greeting = new Greeting('John');

new operator is evil because it produces a highly coupled code, difficult to maintain and test.

Some patterns to reduce coupling are object factories or dependency injection.

These patterns can benefit of the construct() function.

This function receives a constructor function and possibly some arguments and it returns a new object constructed with the function and the passed arguments.

This is another way to create the greeting object:

var greeting = construct(Greeting, 'John');

And a factory could use like this:

  function factory() {
    return {
      createGreeting() {
        return construct(Greeting, arguments);
      }
      ...
    }
  }

Your work is to implement the construct() function.
*/
/*
function construct(Class, ...arg) {
  return new Class(...arg);
}
*/

// #24
/*
You are given a complex object that has many deeply nested variables. You don't want to go the usual if obj.property == null route. Create a prototype method that given a nested path, either return the value or undefined.
var obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};
obj.hash('person.name'); // 'joe'
obj.hash('person.history.bio'); // { funFact: 'I like fishing.' }
obj.hash('person.history.homeStreet'); // undefined
obj.hash('person.animal.pet.needNoseAntEater'); // undefined
*/
/*
Object.prototype.hash = function (string) {
  return string
    .split(".")
    .reduce((result = this, item) => (result = result[item]), this);
};
*/

// #25
/*
This kata is designed to test your ability to extend the functionality of built-in classes. In this case, we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().
Explanation:
    square() must return a copy of the array, containing all values squared
    cube() must return a copy of the array, containing all values cubed
    average() must return the average of all array values; on an empty array must return NaN (note: the empty array is not tested in Ruby!)
    sum() must return the sum of all array values
    even() must return an array of all even numbers
    odd() must return an array of all odd numbers
Note: the original array must not be changed in any case!
Example
var numbers = [1, 2, 3, 4, 5];
numbers.square();  // must return [1, 4, 9, 16, 25]
numbers.cube();    // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum();     // must return 15
numbers.even();    // must return [2, 4]
numbers.odd();     // must return [1, 3, 5]
*/
/*
Object.assign(Array.prototype, {
  square() {
    return this.map((el) => el * el);
  },
  cube() {
    return this.map((el) => Math.pow(el, 3));
  },
  sum() {
    return this.reduce((acc, curr) => acc + curr, 0);
  },
  average() {
    return this.reduce((acc, curr) => acc + curr, 0) / this.length;
  },
  even() {
    return this.filter((el) => !(el % 2));
  },
  odd() {
    return this.filter((el) => el % 2);
  },
});
*/

// #26
/*
Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
Examples
"is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
"4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
""  -->  ""
*/
/*
function order(words) {
  return words
    .split(" ")
    .sort(function (a, b) {
      return a.match(/\d/) - b.match(/\d/);
    })
    .join(" ");
}

console.log(order("is2 Thi1s T4est 3a"));
*/

// #27
/*
Digital root is the recursive sum of all the digits in a number.
Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2
*/
/*
function digitalRoot(n) {
  if (n < 10) return n;
  const arr = n.toString().split("").map(Number);
  const result = arr.reduce((acc, curr) => acc + curr, 0);

  return digitalRoot(result);
}
*/

// 08.01.2024

// #1
/*
You are given a String of one or more words. Your task is to check the length of each word and if it's less than 4, you keep it unmodified otherwise you find out the first vowel which is coming after 3-rd character and replace vowel and rest of word with a dot. Finally, you should return the same string but shorten (only if the length of words is more then 3 characters).
Please note :
 1) You are not asked to trim anything.
2) Apostrophes are part of words.
3) Commas following shortened words are considered characters and should be removed.
Examples:
shortenSpeech( "Hello, do you want a coffee ? " ) => returns "Hell. do you want a coff. ? "
shortenSpeech( "Hey fellow warriors !" ) => returns "Hey fell. warr. !"
shortenSpeech( "This is a test") => returns "This is a test"
*/
// var shortenSpeech = function (str) {
//   return str.replace(/\b(\S{3,}?)[aeiou]\S*/g, "$1.");
// };

// console.log(shortenSpeech("Hello, do you want a coffee ? "));

// #2
/*
In a certain kingdom, strange mathematics is taught at school. Its main difference from ordinary mathematics is that the numbers in it are not ordered in ascending order, but lexicographically, as in a dictionary (first by the first digit, then, if the first digit is equal, by the second, and so on). In addition, we do not consider an infinite set of natural numbers, but only the first n numbers.

So, for example, if n = 11, then the numbers in strange mathematics are ordered as follows:

1, 10, 11, 2, 3, 4, 5, 6, 7, 8, 9.

Help your students to learn this science: write a function that receives two integer numbers: n (total amount of numbers in strange mathematics) and k (number from sequence) and returns the location of a given number k in the order defined in strange mathematics.

For example, if n = 11 and k = 2, the function should return 4 as the answer.

Input: 1 <= n <= 100 000 , 1 <= k <= n.

Output: position of the number k in sequence of the first n natural numbers in lexicographic order. Numbering starts with 1.
Examples:

strangeMath(11, 2) === 4
strangeMath(15, 5) === 11
strangeMath(15, 15) === 7
*/
/*
function strangeMath(n, k) {
  const numbers = Array.from({ length: n }, (_, i) => (i + 1).toString());
  numbers.sort();
  return numbers.indexOf(k.toString()) + 1;
}

console.log(strangeMath(15, 5));
// const arr = Array.from({ length: n }, (_, index) => index + 1);
*/

// #3
/*
Coding in function threeInOne. function accept 1 parameters arr, it's a 1D number array. Your task is to merge each of the 3 elements into 1 elements (sum value) and return the result.
Note1: You should not modify the original array.
Note2: Because this is a beginner Kata, and due to the author's mercy ;-), so you do not have to verify the validity of the parameter, and do not worry about the number of elements of the array is not a multiple of 3.
Example:
threeInOne( [1,2,3]) should return [6]
threeInOne( [1,2,3,4,5,6]) should return [6,15]
threeInOne( [1,2,3,4,5,6,7,8,9]) should return [6,15,24]
threeInOne( [1,3,5,2,4,6,7,7,7]) should return [9,12,21]
*/
/*
function threeInOne(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i += 3) {
    let sum = arr.slice(i, i + 3).reduce((acc, curr) => acc + curr, 0);
    res.push(sum);
  }
  return res;
}

console.log(threeInOne([1, 2, 3]));
console.log(threeInOne([1, 2, 3, 4, 5, 6, 7, 8, 9]));
console.log(threeInOne([1, 3, 5, 2, 4, 6, 7, 7, 7]));
*/

// 09.01.2024
// #1
/*
Coding in function rndCode. Your task is to generate a random verification code. In accordance with the following rules:

    the code length should be 8;

    The 1st and 2nd characters should be two uppercase letters. The range is "ABCDEFGHIJKLM".

    The 3rd-6th characters should be four numbers.

    the 7th and 8th characters should be two symbols. The range is "~!@#$%^&*".

    If Your code runs 100 times, It should generate 100 non duplicate verification codes.

Some valid verification code examples:

AB1234#$ MG6145$@ KJ2249@&
CD5678%^ IG7593~% FH8638@&
EF9012!@ GB7047%$ KD7604^%
*/
/*
function rndCode() {
  let result = "";
  // First
  let firstAndSec = "ABCDEFGHIJKLM";
  for (let i = 0; i < firstAndSec.length; i++) {
    result = result + firstAndSec[~~(firstAndSec.length * Math.random())];
    result = result.slice(0, 2);
  }

  // Second
  for (let i = 0; i < 4; i++) {
    result = result + ~~(100 * Math.random());
    result = result.slice(0, 6);
  }

  // Third
  const eithAndSeventh = "~!@#$%^&*";
  for (let i = 0; i < eithAndSeventh.length; i++) {
    result = result + eithAndSeventh[~~(eithAndSeventh.length * Math.random())];
    result = result.slice(0, 8);
  }
  console.log(result);

  return result;
}

console.log(rndCode());
*/

// #2
/*
Coding in function thinkingAndTesting.

This time I won't explain to you how to do it. You need to look at the test cases. Thinking and testing. solve this kata by yourself ;-)

The only hint is: it is related to power.

If you are interested in this form of kata, I recommend to you my Thinking and Testing Series
*/
/*
const thinkingAndTesting = (number, base) =>
  number - Math.pow(base, Math.floor(Math.log(number) / Math.log(base)));
console.log(thinkingAndTesting(100, 2));
*/

// #3
/*
Coding in function infiniteLoop. function accept 3 parameters. The 1st parameter is arr, it's a 2D array, it contains three 1D array. The 2nd parameter is d ，it's a string. The 3rd parameter is n, it's a number.

You can think of arr as a moat, the elements of arr like water constantly flow in. The direction of flow is controlled by the parameter d. The value of d can be "left" or "right". "left" means the "river" moves to the left. All elements in the 1D array are to the left moving n position, if beyond the bounds of the array and the element is moved to the tail on the left side of the array; if it exceeds the left boundary element would be moved to the tail of 3rd array(like a circle). Right is also similar to the operation, but it is moving to the right.

Finally, return arr.
Examples

    infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"left",1) should return [[2,3,4],[5,6,7],[8,9,1]]
    infiniteLoop( [[1,2,3],[4,5,6],[7,8,9]],"right",1) should return [[9,1,2],[3,4,5],[6,7,8]]
    infiniteLoop( [[1,2],[3,4,5,6],[7,8,9,10]],"left",2) should return [[3,4],[5,6,7,8],[9,10,1,2]]
*/
/*
function infiniteLoop(arr, d, n) {
  let all = [].concat(...arr);

  for (let i = 0; i < n; i++) {
    if (d === "left") {
      let shiftedEl = all.shift();
      all.push(shiftedEl);
    } else if (d === "right") {
      let poppedEl = all.pop();
      all.unshift(poppedEl);
    }
  }
  console.log(all);

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let row = all.splice(0, arr[i].length);
    result.push(row);
  }
  return result;
}

console.log(
  infiniteLoop(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    "left",
    1
  )
);
console.log(
  infiniteLoop(
    [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ],
    "right",
    1
  )
);
*/

// #4
/*
Coding in function sortIt. function accept 1 parameters arr, it's a number array. Your task is to sort the array according to the specified conditions, and returns a new array(should not modify the original array).

conditions1: according to the number of elements(in ascending order) for example:

sortIt([1,1,1,2,2,3]) should return [3,2,2,1,1,1]
because [1,1,1,2,2,3] has one 3, two 2 and three 1

conditions2: If the same number of elements, according to the number values(in descending order) for example:

sortIt([1,1,1,2,2,2,3,3,3]) should return [3,3,3,2,2,2,1,1,1]
because number of 3,2 and 1 both are three, then according to 3>2>1

Comprehensive two conditions should be like this:

sortIt([1,2,3,4,4,5,5,6,6]) should return [3,2,1,6,6,5,5,4,4]
*/
/*
function sortIt(arr) {
  let numberOf = {};
  arr.forEach((x) => (numberOf[x] = (numberOf[x] || 0) + 1));
  return arr.slice().sort((x, y) => numberOf[x] - numberOf[y] || y - x);
}

console.log(sortIt([1, 2, 3, 4, 4, 5, 5, 6, 6]));
*/
/*
const numbers = [1, 2, 3, 4];
for (var index = 0; index < numbers.length; index++);
{
  console.log(`The number is ${numbers[index]}`);
}
*/

// 10.01.2024
// #1
/*
Coding in function isolateIt. function accept 1 parameters arr, it's a string array. Your task is to put a character "|" into the middle of each element.
If the string length is an even number, use the insert method. for example: "abcd" should became "ab|cd". "|" should be inserted between ab and cd.
If the string length is an odd number, use the replacement method. for example: "abcde" should became "ab|de". Character c will be replaced by |.
The original array should not be changed, you need to return a new array(if you use the map method, you do not need to worry about this).
Example
isolateIt(["abcd","efgh"]) should return ["ab|cd","ef|gh"]
isolateIt(["abcde","fghij"]) should return ["ab|de","fg|ij"]
isolateIt(["1234","56789"]) should return ["12|34","56|89"]
a little hint: Flexible use of slice() Will make the work more simple.
*/
/*
function isolateIt(arr) {
  return arr.map((el, id) => {
    const middle = Math.floor(el.length / 2);
    if (el.length % 2 === 0) {
      return el.slice(0, middle) + "|" + el.slice(middle);
    } else {
      return el.slice(0, middle) + "|" + el.slice(middle + 1);
    }
  });
}

console.log(isolateIt(["abcd", "efgh"]));
console.log(isolateIt(["abcde", "efghg"]));
*/

// #2
/*
Coding in function countGrade. function accept 1 parameters scores, it's a number array. Your task is to count the grade distribution of the scores, to return an object like this:
{S:888, A:888, B:888, C:888, D:888, X:888}
Grading rules:
Grade S: Full marks(score=100)
Grade A: score<100 and score>=90
Grade B: score<90 and score>=80
Grade C: score<80 and score>=60
Grade D: score<60 and score>=0
Grade X: score=-1(The cheating guy gets a score like that)
Example
countGrade([50,60,70,80,90,100]) should return {S:1, A:1, B:1, C:2, D:1, X:0}
countGrade([65,75,,85,85,95,100,100]) should return {S:2, A:1, B:2, C:2, D:0, X:0}
countGrade([-1,-1,-1,-1,-1,-1]) should return {S:0, A:0, B:0, C:0, D:0, X:6}
*/
/*
function countGrade(scores) {
  const gradeCounts = {
    S: 0,
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    X: 0,
  };
  scores.forEach((score) => {
    if (score === 100) {
      gradeCounts.S++;
    } else if (score < 100 && score >= 90) {
      gradeCounts.A++;
    } else if (score < 90 && score >= 80) {
      gradeCounts.B++;
    } else if (score < 80 && score >= 60) {
      gradeCounts.C++;
    } else if (score < 60 && score >= 0) {
      gradeCounts.D++;
    } else if (score === -1) {
      gradeCounts.X++;
    }
  });
  return gradeCounts;
}

console.log(countGrade([50, 60, 70, 80, 90, 100]));
*/
/*
function adjustArrayForTargetAverage(arr, targetAverage) {
  const currentAverage =
    arr.reduce((acc, current) => acc + current, 0) / arr.length;
  const difference = targetAverage - currentAverage;

  // Распределение разницы между элементами массива
  const adjustedArray = arr.map((element) => element + difference);

  return adjustedArray;
}

const originalArray = [9.6, 9.6, 9.7, 9.5];
const targetAverage = 9.59;

const adjustedArray = adjustArrayForTargetAverage(originalArray, targetAverage);
console.log(adjustedArray);
*/
/*
const arrayWithDuplicates = ["apple", "banana", "orange", "apple", "banana"];

const uniqueArray = arrayWithDuplicates.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

console.log(uniqueArray);
*/

// 22.01.2024

// #1

/*
Take the following IPv4 address: 128.32.10.1. This address has 4 octets where each octet is a single byte (or 8 bits).
    1st octet 128 has the binary representation: 10000000
    2nd octet 32 has the binary representation: 00100000
    3rd octet 10 has the binary representation: 00001010
    4th octet 1 has the binary representation: 00000001
So 128.32.10.1 == 10000000.00100000.00001010.00000001
Because the above IP address has 32 bits, we can represent it as the 32 bit number: 2149583361.
Write a function ip_to_int32(ip) ( JS: ipToInt32(ip) ) that takes an IPv4 address and returns a 32 bit number.
Example
"128.32.10.1" => 2149583361
*/
/*
function ipToInt32(ip) {
  let binOctets = ip
    .split(".")
    .map(Number)
    .map((el) => {
      return el.toString(2);
    });
  binOctets = binOctets.map((bin) => bin.padStart(8, "0"));
  let binString = binOctets.join("");
  console.log(binString);

  return parseInt(binString, 2);
}

console.log(ipToInt32("128.32.10.1"));
*/

// #2
/*
Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3.
Note that the number will always be non-negative (>= 0).
*/
/*
function insertDash(num) {
  let arr = num.toString().split("").map(Number);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] % 2 === 1 && arr[i + 1] % 2 === 1) {
      arr.splice(i + 1, 0, "-");
      i++; // Пропускаем следующий элемент, чтобы не добавить лишний дефис
    }
  }

  return arr.join("");
}

console.log(insertDash(454793));
console.log(insertDash(123456));
*/

// 23.01.2024

// #1
/*
Coding in function colorOf. function accept 3 parameter:r g b. It means value of color red green and blue. the value range is 0-255.
Use toString(16) Convert numbers r g b to hex string form. at last, combine them to a web color code and return it.
the color code should starting with "#". and then use 2 characters per color.
for example:
colorOf(255,0,0) should return "#ff0000"
colorOf(0,111,0) should return "#006f00"
colorOf(1, 2 ,3) should return "#010203"
That's all of your work. My work is print your color code on your screen.
*/
/*
function colorOf(r, g, b) {
  const arr = [r, g, b];
  let result = "#";
  for (let i = 0; i < arr.length; i++) {
    let hex = arr[i].toString(16);

    if (hex.length === 1) {
      hex = "0" + hex;
    }

    result += hex;
  }
  return result;
}
console.log(colorOf(255, 0, 0));
console.log(colorOf(1, 2, 3));
*/

// #2
/*
Coding in function howManySmaller, function accept 2 parameter:arr and n. arr is a decimal array. n is a decimal.
The first mission: let all elements in the array keep two decimal places(No need to convert number n).
The second mission: Traversal arr, count the number of the element which smaller than n and return it.
for example:
howManySmaller([1.234,1.235,1.228],1.24) should return 2
howManySmaller([1.1888,1.1868,1.1838],1.19) should return 1
howManySmaller([3.1288,3.1212,3.1205],3.1212) should return 2
*/
/*
function howManySmaller(arr, n) {
  const roundedArray = arr.map((element) => Number(element.toFixed(2)));
  const count = roundedArray.filter((element) => element < n).length;
  return count;
}

console.log(howManySmaller([1.234, 1.235, 1.228], 1.24));
*/

// #3
/*
Coding in function cutIt, function accept 1 parameter:arr. arr is a string array.
The first mission: Traversing arr, find the shortest string length.
The second mission: Traversing arr again, intercept all strings to the shortest string length(Start from index0). you can use one of slice() substring() or substr() do it. return the result after finished the work.
for example:
cutIt(["ab","cde","fgh"]) should return ["ab","cd","fg"]
cutIt(["abc","defgh","ijklmn"]) should return ["abc","def","ijk"]
cutIt(["codewars","javascript","java"]) should return ["code","java","java"]
*/
/*
function cutIt(arr) {
  let result = [];

  let shortest = Math.min(...arr.map((str) => str.length));

  result = arr.map((str) => str.substring(0, shortest));

  return result;
}

console.log(cutIt(["codewars", "javascript", "java"]));
console.log(cutIt(["abc", "defgh", "ijklmn"]));
*/

// #4
/*
Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).
The array will never be empty.
*/
/*
function average(scores) {
  let rounded = scores.map((el) => Math.round(el));

  let sum = rounded.reduce((acc, curr) => acc + curr, 0);

  let avg = Math.round(sum / rounded.length);

  return avg;
}

console.log(average([90.1, 98, 89, 100, 100, 86, 94]));
*/

// #5
/*
Enjoying your holiday, you head out on a scuba diving trip!
Disaster!! The boat has caught fire!!
You will be provided a string that lists many boat related items. If any of these items are "Fire" you must spring into action. Change any instance of "Fire" into "~~". Then return the string.
*/
/*
function fireFight(s) {
  return s.replace(/Fire/g, "~~");
}

console.log(
  fireFight(
    "Boat Rudder Mast Boat Hull Water Fire Boat Deck Hull Fire Propeller Deck Fire Deck Boat Mast"
  )
);
*/

// #6
/*
Coding in function firstToLast, function accept 2 parameters:str and c. str is a string. c is a char.
Please return the gap between the first position of c and the last position of c.
If there are a lot of c in the str, should return a positive integer; If there is only one c in str, should return 0; If there is no c in the str, should return -1. Retrieval should not ignored the case.
for example:
firstToLast("ababc","a") should return 2(2-0)
firstToLast("ababc","c") should return 0(4-4)
firstToLast("ababc","d") should return -1
*/
/*
function firstToLast(str, c) {
  if (!str.includes(c)) {
    return -1;
  }
  let left = str.indexOf(c);
  let right = str.lastIndexOf(c);
  return right - left;
}

console.log(firstToLast("ababc", "a"));
console.log(firstToLast("ababc", "c"));
console.log(firstToLast("ababc", "d"));
*/

/*
console.log("100" / "2"); // 50
console.log("100" * 5); // 500
console.log("100" - 5); // 95
console.log("100" + 5); // 1005

console.log(Number("123")); // 123
console.log(Number("123z")); // NaN
console.log(Number(true)); // 1 
console.log(Number(false)); // 0

////////////////////////////////////////////////////////////////////////////////////////////////////

console.log({} === {}); // false
console.log([] == []); // false
console.log(true == 1); // true
console.log(false == 0); // true
console.log(false === ""); // false
console.log(typeof null); // object
console.log(typeof function () {}); // function

////////////////////////////////////////////////////////////////////////////////////////////////////

const res = "B" + "a" + (1 - "hello"); // BaNaN
console.log(res); // 

const res2 = Boolean(true && 3) + "d";
console.log(res2); // trued

////////////////////////////////////////////////////////////////////////////////////////////////////

var a = 10;
var b = 20;
a.b = 15;

console.log("a", a); // a 10
console.log("a.b", a.b); // a.b undefined
console.log(b); // 20

////////////////////////////////////////////////////////////////////////////////////////////////////

var a = { b: 1};
c = Object.create(a); 

// с = {b: 1}

console.log(c.b); // 1
delete c.b;
console.log(c.b); // 1
delete a.b;
console.log(c.b); // undefined
a.z = 2;
console.log(c.z); // 2
c.z = 3;
console.log(a.z); // 2

////////////////////////////////////////////////////////////////////////////////////////////////////

 <style>

.red {
  color: red;
}

.blue {
  color: blue;
}

</style>

<div className="red blue">Text 1</div> // blue
<div className="blue red">Text 2</div> // blue

////////////////////////////////////////////////////////////////////////////////////////////////////

// for (var i = 0; i < 10; i++) {
//   setTimeout(function () {
//     console.log(i); // 10
//   }, 1000);
// }
// var i = 0

for (var i = 0; i < 10; i++) {
  let j = i
  setTimeout(function () {
    console.log(j); // 10
  }, 1000);
}

for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i); // 
  }, 1000);
} // 2

for (var i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(this); // 
  }.bind(i), 1000);
} // 3

for (var i = 0; i < 10; i++) {
  setTimeout(function (i) {
    console.log(i); // 
  }, 1000, i);
} // 4

for (var i = 0; i < 10; i++) {
  (function (i) {
  setTimeout(function () {
    console.log(i); // 
  }, 1000);
  })(i)
} // 5

////////////////////////////////////////////////////////////////////////////////////////////////////

//Что выведет console.log и почему
function makeWorker() {
  let name = "Peter";

  return function () {
    console.log(name);
  };
}

var name = "John";

let work = makeWorker();

work() // Peter

////////////////////////////////////////////////////////////////////////////////////////////////////

//? Что выведут console.log
const obj2 = {
  x: "yandex",
  a: function f() {
    console.log(this.x);
  },
  b: () => {
    console.log("arrow", this.x);
  },
};

obj2.a(); // yandex
obj2.b(); // undefined


////////////////////////////////////////////////////////////////////////////////////////////////////

function makeCounter() {
  let counter = 0;
  return function () {
    return ++counter;
  };
}

let someCounter = makeCounter();

for (var i = 0; i < 10; i++) {
  setTimeout(() => console.log(someCounter())); // 2..11
}

console.log(someCounter()); // 1

////////////////////////////////////////////////////////////////////////////////////////////////////

class Foo {
  constructor() {
    this.id = "foo";
    this.print();
  }

  print() {
    console.log("foo" + this.id);
  }
}

class Bar extends Foo {
  constructor() {
    super();
    this.id = "bar";
    this.print();
    super.print();
  }

  print() {
    console.log("bar" + this.id);
  }
}

new Bar();

// bar foo
// bar bar 
// foo bar

////////////////////////////////////////////////////////////////////////////////////////////////////


const func = (a,b) => {
    return a + b 
}


////////////////////////////////////////////////////////////////////////////////////////////////////

const myPromise = (delay) => new Promise((res, rej) => { setTimeout(res, delay) })
setTimeout(() => console.log('1'), 1000);
myPromise(1000).then(res => console.log('2'));
setTimeout(() => console.log('3'), 100);
myPromise(2000).then(res => console.log('4')); 
setTimeout(() => console.log('5'), 2000);
myPromise(1000).then(res => console.log('6'));
setTimeout(() => console.log('7'), 1000);
myPromise(5000).then(res => console.log('8'));

////////////////////////////////////////////////////////////////////////////////////////////////////

console.log("Start"); // 1

const observer = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Observer: Событие произошло");
    resolve("Success");
  }, 2000);
});

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 1: Событие произошло");
    resolve("Success");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Promise 2: Событие произошло");
    resolve("Success");
  }, 1500);
});

observer.then(() => {
  console.log("Observer: Обработка события");
});

Promise.all([promise1, promise2]).then(() => {
  console.log("Promise: Все события обработаны");
});

console.log("End");

// Start
// End
// Promise 1: Событие произошло
// Promise 2: Событие произошло
// Promise: Все события обработаны
// Observer: Событие произошло
// Observer: Обработка события


////////////////////////////////////////////////////////////////////////////////////////////////////

queueMicrotask(() => {
  console.log("1");
});

Promise.reject("2")
  .catch((res1) => {
    console.log("res1", res1);
    return "4";
  })
  .then((res2) => {
    console.log("res2", res2);
  });

queueMicrotask(() => {
  console.log("3");
});

// 1
// res1 2
// 3
// res2 4
// 

////////////////////////////////////////////////////////////////////////////////////////////////////

const myPromise = Promise.resolve(Promise.resolve("Promise!"));

function funcOne() {
  myPromise
    .then((res) => res)
    .then((res) => console.log(res, "Результат funcOne"));
  setTimeout(() => console.log("Timeout! 1", 0));
  console.log("Last line! 1");
}

async function funcTwo() {
  const res = await myPromise;
  console.log(res, "Результат funcTwo");
  setTimeout(() => console.log("Timeout! 2", 0));
  console.log("Last line! 2");
}

funcOne();
funcTwo();

// Last line! 1
// Promise! Результат funcTwo
// Last line! 2
// Promise! Результат funcOne
// Timeout! 1
// Timeout! 2

////////////////////////////////////////////////////////////////////////////////////////////////////

const foo = async () => {
  console.log("1");
  return 100;
};

const bar = async () => {
  console.log("2");
  const r = await foo();
  console.log(r);
  foo().then((res) => console.log(res));
  await console.log("3");
  console.log(await "4");
};

bar();

// 2
// 1
// 100 
// 1
// 3
// 100
// 4

// async await
// Что вернет функция fetchData?
const fetchData = async () => {
  const result = await doSomething(getDelay());
  return result;
};

fetchData();


////////////////////////////////////////////////////////////////////////////////////////////////////

async function a(p) {
  return p;
}

console.log("1");

(async function () {
  console.log("f1");
  console.log(await a("a1"));
  console.log("f2");
  console.log(await a("a2"));
  console.log("f3");
})();

console.log("2");

// 1
// f1
// 2
// a1
// f2
// a2
// f3

////////////////////////////////////////////////////////////////////////////////////////////////////

Promise.reject("a")
  .then(
    (p) => p + "1",
    (p) => p + "2"
  )
  .catch((p) => p + "b")
  .catch((p) => p + "с")
  .then((p) => p + "d1")
  .then("d2")
  .then((p) => p + "d3")
  .finally((p) => p + "e")
  .then((p) => console.log(p)); // 

////////////////////////////////////////////////////////////////////////////////////////////////////

function getPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Успешное выполнение");
    }, 1000);
  });
}

async function myAsyncFunction() {
  try {
    console.log("Начало выполнения асинхронной функции");

    const result = await getPromise();
    console.log("Результат промиса:", result);

    console.log("Завершение выполнения асинхронной функции");
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
}

myAsyncFunction();

console.log("Последующий код");

// Начало выполнения асинхронной функции
// Последующий код
// Результат промиса: Успешное выполнение
// Завершение выполнения асинхронной функции

////////////////////////////////////////////////////////////////////////////////////////////////////


const myNewPromise = new Promise((resolve, reject) => { 
  setTimeout(() => {
    const randomNumber = Math.random(); // 0.55555555
    if (randomNumber > 0.5) {
      resolve("Успешный результат: " + randomNumber);
    } else {
      reject("Неудача: " + randomNumber);
    }
  }, 1000); // mac 1
});

myNewPromise
  .then((result) => {
    console.log("Промис выполнен успешно:", result);
  })
  .catch((error) => {
    console.log("Промис был отклонен с ошибкой:", error);
  })
  .finally(() => {
    console.log("Завершение выполнения промиса");
  }); // mic 1

  
const promise11 = new Promise((resolve) => setTimeout(() => resolve(1), 3000)); // mac 2
const promise22 = new Promise((resolve) => setTimeout(() => resolve(2), 2000)); // mac 3

Promise.all([promise11, promise22]).then((results) => {
  console.log("Оба промиса выполнены успешно:", results);
}); // mic 2

const racePromise1 = new Promise((resolve) =>
  setTimeout(() => resolve(1), 3000) // mac 4
);

const racePromise2 = new Promise((resolve) =>
  setTimeout(() => resolve(2), 2000) //mac 5
);

Promise.race([racePromise1, racePromise2]).then((result) => {
  console.log("Первый завершившийся промис:", result);
});

// Промис выполнен успешно: Успешный результат:  0.55555555
// Завершение выполнения промиса
// Первый завершившийся промис: 2
// Оба промиса выполнены успешно: [1, 2]



////////////////////////////////////////////////////////////////////////////////////////////////////

function asyncActions() {
  console.log("Start of asyncActions");

  const action1 = new Promise((resolve) => {
    console.log("Action 4");
    setTimeout(() => {
      console.log("Action 1 completed");
      resolve();
    }, 2000);
  });

  const action2 = new Promise((resolve) => {
    console.log("Action 5");
    setTimeout(() => {
      console.log("Action 2 completed");
      resolve();
    }, 1000);
  });

  return action1.then(() => action2);
}

asyncActions();

// Start of asyncActions
// Action 4
// Action 5
// Action 2 completed
// Action 1 completed


////////////////////////////////////////////////////////////////////////////////////////////////////

const obj = {
  name: "Alice",
  sayHello: function () {
    setTimeout(function () {
      console.log("Hello, " + this.name);
    }, 1000);
  },
};

obj.sayHello(); // Hello undefined

////////////////////////////////////////////////////////////////////////////////////////////////////

function getAge() {
  "use strict";
  age = 21;
  console.log(age);
}

getAge(); // 

////////////////////////////////////////////////////////////////////////////////////////////////////

const sum = eval("10*10+5");
console.log(sum);  

////////////////////////////////////////////////////////////////////////////////////////////////////

let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting); // 



*/

/*
ДАНО
строка слов "apple banana orange apple"

ЗАДАЧА
написать словами алгоритм подсчета кол-ва вхождений каждого слова. вывести на экран результат.
примерная степень детализации алгоритма - одна строчка алгоритма = одна строчка будущего кода.пример вывода на экран
apple - 2
banana - 1
orange - 1

ОГРАНИЧЕНИЯ
не использовать функцию split
*/
/*
function noSplit(str) {
  let count = {};
  let curWord = "";

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (char !== " ") {
      curWord += char;
    }

    if (char === " " || i === str.length - 1) {
      if (curWord in count) {
        count[curWord]++;
      } else {
        count[curWord] = 1;
      }
      curWord = "";
    }
  }
  return count;
}

let str = "apple banana orange apple";
let result = noSplit(str);
for (let word in result) {
  console.log(`${word} - ${result[word]}`);
}




// 08.05.2024
/*
// #1
/*
Write a function that flattens an Array of Array objects into a flat Array. Your function must only do one level of flattening.

flatten([1,2,3]) // => [1,2,3]
flatten([[1,2,3],["a","b","c"],[1,2,3]])  // => [1,2,3,"a","b","c",1,2,3]
flatten([[[1,2,3]]]) // => [[1,2,3]]
*/
// var flatten = function (array) {
//   let arr = [];
//   for (let item of array) {
//     if (Array.isArray(item)) {
//       arr.push(...item);
//     } else {
//       arr.push(item);
//     }
//   }
//   return arr;
// };

// console.log(
//   flatten([
//     [1, 2, 3],
//     ["a", "b", "c"],
//     [1, 2, 3],
//   ])
// );
// console.log(flatten([[3, 4, 5], [[9, 9, 9]], ["a,b,c"]]));

// 10.05.2024

// #1
/*
Compare two strings by comparing the sum of their values (ASCII character code).

    For comparing treat all letters as UpperCase
    null/NULL/Nil/None should be treated as empty strings
    If the string contains other characters than letters, treat the whole string as it would be empty

Your method should return true, if the strings are equal and false if they are not equal.
*/
/*
function helpFunc(str) {
  if (!str || /[^a-zA-Z]/.test(str)) {
    return true;
  }

  return str
    .toUpperCase()
    .split("")
    .reduce((sum, char) => sum + char.charCodeAt(0), 0);
}

function compare(s1, s2) {
  const sum1 = helpFunc(s1);
  const sum2 = helpFunc(s2);

  return sum1 === sum2;
}

console.log(compare("AD", "BC"));
console.log(compare("AD", "DD"));
console.log(compare("gf", "FG"));
console.log(compare("##", "1176"));
*/

// #2
/*
Implement a function that returns the minimal and the maximal value of a list (in this order).
*/
/*
function getMinMax(arr) {
  if (!Array.isArray(arr) || arr.length === 0) {
    return [];
  }

  if (arr.length === 1) {
    return [arr[0], arr[0]];
  }

  const sort = arr.slice().sort((a, b) => a - b);

  return [sort[0], sort[sort.length - 1]];

  // return [Math.min(...arr),Math.max(...arr)];
}

console.log(getMinMax([1]));
console.log(getMinMax([1, 1]));
console.log(getMinMax([1, 2]));
console.log(getMinMax([2, 1]));
*/

// #3
/*
Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero numbers.
Examples:
1) n =   3, x = 1, y = 3 =>  true because   3 is divisible by 1 and 3
2) n =  12, x = 2, y = 6 =>  true because  12 is divisible by 2 and 6
3) n = 100, x = 5, y = 3 => false because 100 is not divisible by 3
4) n =  12, x = 7, y = 5 => false because  12 is neither divisible by 7 nor 5
*/
/*
function isDivisible(n, x, y) {
  let first;
  let second;
  if (n % x === 0) {
    first = true;
  }
  if (n % y === 0) {
    second = true;
  }

  return first === second ? true : false;
}

console.log(isDivisible(3, 3, 4));
console.log(isDivisible(12, 3, 4));
console.log(isDivisible(48, 3, 4));
*/

// 14.05.2024

// #1
/*
Write a function filterLucky/filter_lucky() that accepts a list of integers and filters the list to only include the elements that contain the digit 7.

For example,

ghci> filterLucky [1,2,3,4,5,6,7,68,69,70,15,17]
[7,70,17]

Don't worry about bad input, you will always receive a finite list of integers
*/
/*
var filterLucky = (x) => {
  let result = [];
  for (let i = 0; i < x.length; i++) {
    let y = x[i].toString();
    if (y.includes(7)) {
      result.push(Number(y));
    }
  }
  return result;
};

console.log(filterLucky([1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]));
*/

// #2
/*
Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

For example (Input --> Output)

"Yes" --> "Yes?" 
"No?" --> "No?"
*/
/*
function ensureQuestion(s) {
  const sign = s.endsWith("?");
  if (sign) {
    return s;
  } else {
    return s + "?";
  }
}

console.log(ensureQuestion("Yes"));
console.log(ensureQuestion("No?"));
*/

// #3
/*
Given a string of space separated words, return the longest word.
If there are multiple longest words, return the rightmost longest word.
Examples
"red white blue"  =>  "white"
"red blue gold"   =>  "gold"
*/
/*
function longestWord(stringOfWords) {
  const arr = stringOfWords.split(" ");
  let longest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length >= longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}

console.log(longestWord("red white blue"));
console.log(longestWord("red blue gold"));
*/

// #4
/*
back·ro·nym

    An acronym deliberately formed from a phrase whose initial letters spell out a particular word or words, either to create a memorable name or as a fanciful explanation of a word's origin.

    "Biodiversity Serving Our Nation", or BISON
(from https://en.oxforddictionaries.com/definition/backronym)
Complete the function to create backronyms. Transform the given string (without spaces) to a backronym, using the preloaded dictionary and return a string of words, separated with a single space (but no trailing spaces).
The keys of the preloaded dictionary are uppercase letters A-Z and the values are predetermined words, for example:
dict["P"] == "perfect"
Examples
"dgm" ==> "disturbing gregarious mustache"
"lkj" ==> "literal klingon joke"
*/

/*
//preload variable: dict
var makeBackronym = function (string) {
  return string
    .toUpperCase()
    .split("")
    .map(function (s) {
      return dict[s];
    })
    .join(" ");
};

console.log(makeBackronym("dgm"));
*/

// #5
/*
###Lucky number
Write a function to find if a number is lucky or not. If the sum of all digits is 0 or multiple of 9 then the number is lucky.
1892376 => 1+8+9+2+3+7+6 = 36. 36 is divisible by 9, hence number is lucky.
Function will return true for lucky numbers and false for others.
*/
/*
function isLucky(n) {
  const result = n.toString().split("").map(Number);
  return result.reduce((acc, curr) => acc + curr, 0) % 9 === 0;
}

console.log(isLucky(1892376));
console.log(isLucky(189237));
console.log(isLucky(0));
*/

// #6
/*
This kata is about converting numbers to their binary or hexadecimal representation:
    If a number is even, convert it to binary.
    If a number is odd, convert it to hex.
Numbers will be positive. The hexadecimal string should be lowercased.
*/
/*
function evensAndOdds(num) {
  return num % 2 === 0 ? num.toString(2) : num.toString(16);
}

console.log(evensAndOdds(2));
console.log(evensAndOdds(13));
*/

// #7
/*
In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.
The result should also be ordered from highest to lowest.
Examples:
[4, 10, 10, 9]  =>  [10, 9]
[1, 1, 1]  =>  [1]
[]  =>  []
*/
/*
function twoHighest(arr) {
  if (!arr.length || arr.length === 1) return arr;
  const res = [...new Set(arr)].sort((a, b) => b - a);
  return [res[0], res[1]];
}

console.log(twoHighest([4, 10, 10, 9]));
console.log(twoHighest([15]));
console.log(twoHighest([]));
*/

// #8
/*
There are two lists, possibly of different lengths. The first one consists of keys, the second one consists of values. Write a function createDict(keys, values) that returns a dictionary created from keys and values. If there are not enough values, the rest of keys should have a None (JS null)value. If there not enough keys, just ignore the rest of values.
Example 1:
keys = ['a', 'b', 'c', 'd']
values = [1, 2, 3]
createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3, 'd': null}
Example 2:
keys = ['a', 'b', 'c']
values = [1, 2, 3, 4]
createDict(keys, values) // returns {'a': 1, 'b': 2, 'c': 3}
*/
/*
function createDict(keys, values) {
  let ht = {};
  for (let i = 0; i < keys.length; i++) {
    if (i < values.length) {
      ht[keys[i]] = values[i];
    } else {
      ht[keys[i]] = null;
    }
  }
  return ht;
}

console.log(createDict(["a", "b", "c"], [1, 2, 3]));
console.log(createDict(["a", "b", "c"], [1, 2, 3, 4]));
console.log(createDict(["a", "b", "c", "d"], [1, 2, 3]));
*/

// #9
/*
Say hello!
Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.
Example:
greet("Niks") === "hello Niks!";
greet("") === null; // Return null if input is empty string
greet(null) === null; // Return null if input is null
*/

/*
function greet(name) {
  if (name === null) return null;
  return name.length > 0 ? "hello " + name + "!" : null;
}

console.log(greet("Niks"));
console.log(greet(""));
console.log(greet(null));
*/

// #10
/*
Kevin is noticing his space run out! Write a function that removes the spaces from the values and returns an array showing the space decreasing.
For example, running this function on the array ['i', 'have','no','space'] would produce ['i','ihave','ihaveno','ihavenospace']
*/

// function spacey(arr) {
//   let res = [];
//   let curr = "";
//   for (let i = 0; i < arr.length; i++) {
//     curr += arr[i].split(" ").join("");
//     res.push(curr);
//   }

//   return res;
// }

// console.log(spacey(["i", "have", "no", "space"]));

// 04.06.2024

// #1
/*
In this kata the function returns an array/list of numbers without its last element. The function is already written for you and the basic tests pass, but random tests fail. Your task is to figure out why and fix it.
Good luck!
*/
/*
function withoutLast(arr) {
  return arr.slice(0, -1);
}

console.log(withoutLast([53, 50, 10, 84, 66, 70, 64, 5, 65, 63, 100, 10]));

*/

// #2

/*
It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
Return the average of the given array rounded down to its nearest integer.
The array will never be empty.
*/

/*
function getAverage(marks) {
  return Math.floor(marks.reduce((curr, acc) => acc + curr, 0) / marks.length);
}

console.log(getAverage([2, 2, 2, 2]));
console.log(getAverage([1, 2, 3, 4, 5]));
console.log(getAverage([1, 5, 87, 45, 8, 8]));
*/

// #3
/*
In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.
For example:
"This Is A Test" ==> "TIAT"
Strings will only contain letters and spaces, with exactly 1 space between words, and no leading/trailing spaces.
*/

/*
function makeString(s) {
  let res = s.split(" ");
  let result = "";

  for (let i = 0; i < res.length; i++) {
    let word = res[i];
    result += word[0];
  }
  return result;
}

console.log(makeString("This Is A Test"));
*/

// 05.06.2024

// #1

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
  const mapArr = arr.map((el) => el.charCodeAt(0));
  console.log(mapArr);
  for (let i = 0; i < mapArr.length - 1; i++) {
    if (mapArr[i] + 1 !== mapArr[i + 1]) {
      return String.fromCharCode(mapArr[i] + 1);
    }
  }
  return "";
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));

// const arr = Array.from({ length: n }, (_, index) => index + 1);
// char.charCodeAt(0) - 96
*/

// 2
/*
The Stanton measure of an array is computed as follows: count the number of occurences for value 1 in the array. Let this count be n. The Stanton measure is the number of times that n appears in the array.
Write a function which takes an integer array and returns its Stanton measure.
Examples
The Stanton measure of [1, 4, 3, 2, 1, 2, 3, 2] is 3, because 1 occurs 2 times in the array and 2 occurs 3 times.
The Stanton measure of [1, 4, 1, 2, 11, 2, 3, 1] is 1, because 1 occurs 3 times in the array and 3 occurs 1 time.
*/
/*
function stantonMeasure(a) {
  let ht = {};
  for (const el of a) {
    ht[el] = (ht[el] || 0) + 1;
  }
  console.log(ht);

  let count = ht[1] || 0;

  let stanton = ht[count] || 0;

  return stanton;
}

console.log(stantonMeasure([1, 4, 3, 2, 1, 2, 3, 2])); // 2
console.log(stantonMeasure([1, 4, 1, 2, 11, 2, 3, 1]));
console.log(stantonMeasure([-2, 1, -15, 1, 3, 1, -11, 1, -3, 1]));

/*
  let ht = {};
  let result = [];

  for (const el of arr) {
    ht[el] = (ht[el] || 0) + 1;
  }
  console.log(ht);
*/

// #3
/*
Some numbers are more important to get right during data entry than others: a common example is product codes.

To reduce the possibility of mistakes, product codes can be crafted in such a way that simple errors are detected. This is done by calculating a single-digit value based on the product number, and then appending that digit to the product number to arrive at the product code.

When the product code is checked, the check digit value is stripped off and recalculated. If the supplied value does not match the recalculated value, the product code is rejected.

A simple scheme for generating self-check digits, described here, is called Modulus 11 Self-Check.
Calculation method

Each digit in the product number is assigned a multiplication factor. The factors are assigned from right to left, starting at 2 and counting up. For numbers longer than six digits, the factors restart at 2 after 7 is reached. The product of each digit and its factor is calculated, and the products summed. For example:

digit     :  1    6    7    7    0    3    6    2    5
factor    :  4    3    2    7    6    5    4    3    2
           ---  ---  ---  ---  ---  ---  ---  ---  ---
             4 + 18 + 14 + 49 +  0 + 15 + 24 +  6 + 10 = 140

Then the sum of the products is divided by the prime number 11. The remainder is inspected, and:

    if the remainder is 0, the check digit is also 0
    if the remainder is 1, the check digit is replaced by an uppercase X
    for all others, the remainder is subtracted from 11

The result is the check digit.
Your task

Your task is to implement this algorithm and return the input number with the correct check digit appended.
Examples

input: "036532"

product sum = 2*2 + 3*3 + 5*4 + 6*5 + 3*6 + 0*7 = 81
remainder   = 81 mod 11 = 4
check digit = 11 - 4 = 7

output: "0365327"
*/
/*
function addCheckDigit(number) {
  let arr = number.split("").map(Number);
  console.log(arr);

  let factor = [2, 3, 4, 5, 6, 7];

  let result = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    let factorIndex = (arr.length - 1 - i) % factor.length;
    result.push(arr[i] * factor[factorIndex]);
  }

  let sum = result.reduce((acc, curr) => acc + curr, 0);

  let remainder = sum % 11;
  let digit;

  if (remainder === 0) {
    digit = 0;
  } else if (remainder === 1) {
    digit = "X";
  } else {
    digit = 11 - remainder;
  }

  return number + digit.toString();
}

*/

// #4
/*
Gigi is a clever monkey, living in the zoo, his teacher (animal keeper) recently taught him some knowledge of "0".

In Gigi's eyes, "0" is a character contains some circle(maybe one, maybe two).

So, a is a "0",b is a "0",6 is also a "0"，and 8 have two "0" ,etc...

Now, write some code to count how many "0"s in the text.

Let us see who is smarter? You ? or monkey?

Input always be a string(including words numbers and symbols)，You don't need to verify it, but pay attention to the difference between uppercase and lowercase letters.

Here is a table of characters：
one zero	abdegopq069DOPQR         () <-- A pair of braces as a zero
two zero	%&B8

Output will be a number of "0".
*/
/*
function countzero(s) {
  const one = (s.match(/(?:[0690abdDegoOpPRqQ]|\(\))/g) || []).length;
  const two = (s.match(/[8B%&]/g) || []).length * 2;
  return one + two;
}

console.log(countzero("1234567890"));
console.log(countzero("abcdefghijklmnopqrstuvwxyz"));
*/

// #5
/*
Given a sequence of integers, return the sum of all the integers that have an even index (odd index in COBOL), multiplied by the integer at the last index.
Indices in sequence start from 0.
If the sequence is empty, you should return 0.
*/
/*
function evenLast(numbers) {
  if (!numbers.length) return 0;

  let res = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (i % 2 === 0) {
      res += numbers[i] * numbers[numbers.length - 1];
    }
  }
  return res;
}

console.log(evenLast([2, 3, 4, 5]));
console.log(evenLast([]));
*/

// #6
/*
You receive the name of a city as a string, and you need to return a string that shows how many times each letter shows up in the string by using asterisks (*).

For example:

"Chicago"  -->  "c:**,h:*,i:*,a:*,g:*,o:*"

As you can see, the letter c is shown only once, but with 2 asterisks.

The return string should include only the letters (not the dashes, spaces, apostrophes, etc). There should be no spaces in the output, and the different letters are separated by a comma (,) as seen in the example above.

Note that the return string must list the letters in order of their first appearance in the original string.

More examples:

"Bangkok"    -->  "b:*,a:*,n:*,g:*,k:**,o:*"
"Las Vegas"  -->  "l:*,a:**,s:**,v:*,e:*,g:*"
*/
/*
function getStrings(city) {
  const str = city.replace(/\s/g, "").toLowerCase().split("");
  let ht = {};

  for (const el of str) {
    ht[el] = (ht[el] || "") + "*";
  }

  let result = "";
  for (const key in ht) {
    if (result) {
      result += ",";
    }
    result += `${key}:${ht[key]}`;
  }

  return result;
}

console.log(getStrings("Chicago"));
console.log(getStrings("Las Vegas"));
*/

// #7
/*
Write a function that returns the number of arguments it received.
args_count() --> 0
args_count('a') --> 1
args_count('a', 'b') --> 2
*/
// Create a function called args_count that returns the number of arguments provided
/*
function args_count(args) {
  return arguments.length;
}

console.log(args_count(1, 2));
console.log(args_count());
console.log(args_count(["foo", "bar"]));
*/

// #8
/*
You are given a list of unique integers arr, and two integers a and b. Your task is to find out whether or not a and b appear consecutively in arr, and return a boolean value (True if a and b are consecutive, False otherwise).

It is guaranteed that a and b are both present in arr.
*/

/*
function consecutive(arr, a, b) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (
      (arr[i] === a && arr[i + 1] === b) ||
      (arr[i] === b && arr[i + 1] === a)
    ) {
      return true;
    }
  }
  return false;
}

console.log(consecutive([1, 3, 5, 7], 3, 7)); // false
console.log(consecutive([1, 3, 5, 7], 3, 1)); // true
*/

// #9
/*
Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.
Examples:

[0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
[9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3
*/
/*
function getMissingElement(arr) {
  if (!arr.length) return 0;
  const res = arr.sort((a, b) => a - b);
  console.log(res);

  for (let i = 0; i < res.length - 1; i++) {
    if (res[i] + 1 !== res[i + 1]) {
      return res[i] + 1;
    }
  }

  return 0;
}

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4])); // 8
console.log(getMissingElement([9, 2, 4, 5, 7, 0, 8, 6, 1])); // 3
*/

// #10
/*
A mad sociopath scientist just came out with a brilliant invention! He extracted his own memories to forget all the people he hates! Now there's a lot of information in there, so he needs your talent as a developer to automatize that task for him.

    You are given the memories as a string containing people's surname and name (comma separated). The scientist marked one occurrence of each of the people he hates by putting a '!' right before their name.

Your task is to destroy all the occurrences of the marked people. One more thing ! Hate is contagious, so you also need to erase any memory of the person that comes after any marked name!
Examples

Input:

"Albert Einstein, !Sarah Connor, Marilyn Monroe, Abraham Lincoln, Sarah Connor, Sean Connery, Marilyn Monroe, Bjarne Stroustrup, Manson Marilyn, Monroe Mary"

Output:

"Albert Einstein, Abraham Lincoln, Sean Connery, Bjarne Stroustrup, Manson Marilyn, Monroe Mary"

=> We must remove every memories of Sarah Connor because she's marked, but as a side-effect we must also remove all the memories about Marilyn Monroe that comes right after her! Note that we can't destroy the memories of Manson Marilyn or Monroe Mary, so be careful!
Fundamentals
*/
/*
function select(memory) {
  let names = memory.split(", ");
  console.log(names);
  let namesToRemove = new Set();

  for (let i = 0; i < names.length; i++) {
    if (names[i].startsWith("!")) {
      let markedName = names[i].substring(1);
      namesToRemove.add(markedName);

      if (i + 1 < names.length) {
        namesToRemove.add(names[i + 1]);
      }
    }
  }

  let result = names.filter(
    (name) => !namesToRemove.has(name.replace(/^!/, ""))
  );

  return result.join(", ");
}

console.log(
  select(
    "Albert Einstein, !Sarah Connor, Marilyn Monroe, Abraham Lincoln, Sarah Connor, Sean Connery, Marilyn Monroe, Bjarne Stroustrup, Manson Marilyn, Monroe Mary"
  )
);
*/

// 07.06.2024

// #1
/*
There is a war and nobody knows - the alphabet war!
There are two groups of hostile letters. The tension between left side letters and right side letters was too high and the war began.
Task
Write a function that accepts fight string consists of only small letters and return who wins the fight. When the left side wins return Left side wins!, when the right side wins return Right side wins!, in other case return Let's fight again!.
The left side letters and their power:
 w - 4
 p - 3
 b - 2
 s - 1
The right side letters and their power:
 m - 4
 q - 3
 d - 2
 z - 1
The other letters don't have power and are only victims.
Example
alphabetWar("z");        //=> Right side wins!
alphabetWar("zdqmwpbs"); //=> Let's fight again!
alphabetWar("zzzzs");    //=> Right side wins!
alphabetWar("wwwwwwz");  //=> Left s
*/
/*
function alphabetWar(fight) {
  const leftSide = { w: 4, p: 3, b: 2, s: 1 };
  const rightSide = { m: 4, q: 3, d: 2, z: 1 };

  let rightCount = 0;
  let leftCount = 0;

  for (const letter of fight) {
    if (leftSide[letter]) {
      leftCount += leftSide[letter];
    } else if (rightSide[letter]) {
      rightCount += rightSide[letter];
    }
  }

  if (leftCount > rightCount) {
    return "Left side wins!";
  } else if (rightCount > leftCount) {
    return "Right side wins!";
  } else {
    return "Let's fight again!";
  }
}

console.log(alphabetWar("zdqmwpbs"));
console.log(alphabetWar("zzzzs"));
*/

// #2
/*
Write a function that finds the sum of all its arguments.

eg:

sum(1, 2, 3) // => 6
sum(8, 2) // => 10
sum(1, 2, 3, 4, 5) // => 15

*/
/*
function sum() {
  let arr = [...arguments];
  return arr.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(12, 1, 1, 1, 1));
console.log(sum(11));
console.log(sum(5, 7, 9));
*/

// #3
/*
Create a method each_cons that accepts a list and a number n, and returns cascading subsets of the list of size n, like so:

each_cons([1,2,3,4], 2)
  #=> [[1,2], [2,3], [3,4]]

each_cons([1,2,3,4], 3)
  #=> [[1,2,3],[2,3,4]]
  

As you can see, the lists are cascading; ie, they overlap, but never out of order.
*/
/*
function eachCons(array, n) {
  let result = [];
  for (let i = 0; i <= array.length - n; i++) {
    result.push(array.slice(i, i + n));
  }

  return result;
}

console.log(eachCons([1, 2, 3, 4], 2));
console.log(eachCons([1, 2, 3, 4], 3));
*/

// #4
/*
Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.
Examples:
Input: 42145 Output: 54421
Input: 145263 Output: 654321
Input: 123456789 Output: 987654321
*/
/*
function descendingOrder(n) {
  const arr = n.toString().split("").map(Number);
  console.log(arr);

  return parseInt(arr.sort((a, b) => b - a).join(""), 10);
}

console.log(descendingOrder(42145));
console.log(descendingOrder(145263));
console.log(descendingOrder(123456789));
console.log(descendingOrder(467994600));
*/

// #5
/*
In your class, you have started lessons about geometric progression. Since you are also a programmer, you have decided to write a function that will print first n elements of the sequence with the given constant r and first element a.
Result should be separated by comma and space.
Example
geometricSequenceElements(2, 3, 5) == '2, 6, 18, 54, 162
*/
/*
function geometricSequenceElements(a, r, n) {
  const result = [];
  let curr = a;

  for (let i = 0; i < n; i++) {
    result.push(curr);
    curr *= r;
  }

  return result.join(", ");
}

console.log(geometricSequenceElements(2, 3, 5));
console.log(geometricSequenceElements(2, 2, 10));
console.log(geometricSequenceElements(1, -2, 10));
*/

// #6
/*
In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

    make as few changes as possible.
    if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.
For example:
solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
*/
/*
function solve(s) {
  const arr = s.split("");
  console.log(arr);
  let upperCount = 0;
  let lowerCount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i].toLowerCase()) {
      lowerCount++;
    } else {
      upperCount++;
    }
  }

  console.log(lowerCount, upperCount);

  return lowerCount <= upperCount ? s.toLowerCase() : s.toUpperCase();
}

console.log(solve("coDe"));
console.log(solve("CODe"));
console.log(solve("coDE"));
*/

// #7
/*
Remove the duplicates from a list of integers, keeping the last ( rightmost ) occurrence of each element.
Example:
For input: [3, 4, 4, 3, 6, 3]
    remove the 3 at index 0
    remove the 4 at index 1
    remove the 3 at index 3
Expected output: [4, 6, 3]
*/
/*
function solve(arr) {
  arr.reverse();
  let set = new Set(arr);

  let result = Array.from(set);

  return result.reverse();
}

console.log(solve([3, 4, 4, 3, 6, 3]));
console.log(solve([1, 2, 1, 2, 1, 2, 3]));
console.log(solve([1, 2, 1, 2, 1, 2, 3]));
*/

// #8
/*
Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

Example:

Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/
/*
function flattenAndSort(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(...array[i]);
  }
  return result.sort((a, b) => a - b);
}

console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]));
console.log(flattenAndSort([[3, 2, 1], [4, 6, 5], [], [9, 7, 8]]));
*/

// #8
/*
Our standard numbering system is base-10, that uses digits 0 through 9. Binary is base-2, using only 1s and 0s. And hexadecimal is base-16, using digits 0 to 9 and A to F. A hexadecimal F has a base-10 value of 15.

Base-64 has 64 individual characters ("digits") which translate to the base-10 values of 0 to 63. These are (in ascending order):

ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/

(so A is equal to 0 and / is equal to 63)
Task

Complete the method that will take a base-64 number (as a string) and output its base-10 value as an integer.
Examples

"/"   -->  63
"BA"  -->  64
"BB"  -->  65
"BC"  -->  66
"WIN" -->  90637
*/
/*
function base64toBase10(base64) {
  const base64Mapping = {
    "A": 0,
    "B": 1,
    "C": 2,
    "D": 3,
    "E": 4,
    "F": 5,
    "G": 6,
    "H": 7,
    "I": 8,
    "J": 9,
    "K": 10,
    "L": 11,
    "M": 12,
    "N": 13,
    "O": 14,
    "P": 15,
    "Q": 16,
    "R": 17,
    "S": 18,
    "T": 19,
    "U": 20,
    "V": 21,
    "W": 22,
    "X": 23,
    "Y": 24,
    "Z": 25,
    "a": 26,
    "b": 27,
    "c": 28,
    "d": 29,
    "e": 30,
    "f": 31,
    "g": 32,
    "h": 33,
    "i": 34,
    "j": 35,
    "k": 36,
    "l": 37,
    "m": 38,
    "n": 39,
    "o": 40,
    "p": 41,
    "q": 42,
    "r": 43,
    "s": 44,
    "t": 45,
    "u": 46,
    "v": 47,
    "w": 48,
    "x": 49,
    "y": 50,
    "z": 51,
    "0": 52,
    "1": 53,
    "2": 54,
    "3": 55,
    "4": 56,
    "5": 57,
    "6": 58,
    "7": 59,
    "8": 60,
    "9": 61,
    "+": 62,
    "/": 63,
  };

  let base10 = 0;
  const arr = base64.split("").reverse();

  for (let i = 0; i < arr.length; i++) {
    const val = base64Mapping[arr[i]];
    base10 += val * Math.pow(64, i);
  }

  return base10;
}

console.log(base64toBase10("WIN"));
console.log(base64toBase10("/"));
console.log(base64toBase10("BA"));
*/

// #9
/*
Create an any? (JS: any) function that accepts an array and a block (JS: function), and returns true if the block (/function) returns true for any item in the array. If the array is empty, the function should return false.
*/
/*
function any(arr, fun) {
  if (!arr.length) return false;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i])) {
      count++;
    } else {
      count;
    }
  }
  return count > 0;
}

console.log(
  any([1, 2, 3, 4], function (v, i) {
    return v > 3;
  })
);
console.log(
  any([1, 2, 3, 4], function (v, i) {
    return v > 4;
  })
);
console.log(
  any([], function (v, i) {
    return v > 4;
  })
);
*/

// #10
/*
Create a function called one that accepts two params:

    a sequence
    a function

and returns true only if the function in the params returns true for exactly one (1) item in the sequence.
Example

one([1, 3, 5, 6, 99, 1, 3], bigger_than_ten) -> true
one([1, 3, 5, 6, 99, 88, 3], bigger_than_ten) -> false
one([1, 3, 5, 6, 5, 1, 3], bigger_than_ten) -> false

*/
/*
function one(arr, fun) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i])) {
      count++;
    }
    if (count > 1) {
      return false;
    }
  }
  return count === 1;
}

console.log(
  one([1, 2, 3, 4, 5], function (item) {
    return item < 2;
  })
);
console.log(
  one([1, 2, 3, 4, 5], function (item) {
    return item % 2;
  })
);
*/

// #11
/*
Each exclamation mark's weight is 2; each question mark's weight is 3. Putting two strings left and right on the balance - are they balanced?

If the left side is more heavy, return "Left"; if the right side is more heavy, return "Right"; if they are balanced, return "Balance".
Examples

"!!", "??"     -->  "Right"
"!??", "?!!"   -->  "Left"
"!?!!", "?!?"  -->  "Left"
"!!???!????", "??!!?!!!!!!!"  -->  "Balance"
*/
/*
function balance(left, right) {
  function calculateWeight(str) {
    let weights = { "!": 2, "?": 3 };
    let count = 0;

    for (const char of str) {
      if (weights[char]) {
        count += weights[char];
      }
    }
    return count;
  }

  const leftWeight = calculateWeight(left);
  const rightWeight = calculateWeight(right);

  if (leftWeight > rightWeight) {
    return "Left";
  } else if (rightWeight > leftWeight) {
    return "Right";
  } else {
    return "Balance";
  }
}

console.log(balance("!!", "??"));
console.log(balance("!??", "?!!"));
console.log(balance("!!???!????", "??!!?!!!!!!!"));
*/

// 11.06.2024

// #1
/*
Let's imagine we have a popular online RPG. A player begins with a score of 0 in class E5. A1 is the highest level a player can achieve.

Now let's say the players wants to rank up to class E4. To do so the player needs to achieve at least 100 points to enter the qualifying stage.

Write a script that will check to see if the player has achieved at least 100 points in his class. If so, he enters the qualifying stage.

In that case, we return, "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up.".

Otherwise return, False/false (according to the language in use).
*/
/*
function playerRankUp(points) {
  return points >= 100
    ? "Well done! You have advanced to the qualifying stage. Win 2 out of your next 3 games to rank up."
    : false;
}

console.log(playerRankUp(64));
console.log(playerRankUp(101));
*/

// #2
/*
Create a function that takes a number as an argument and returns a grade based on that number.
Score 	Grade
Anything greater than 1 or less than 0.6 	"F"
0.9 or greater 	"A"
0.8 or greater 	"B"
0.7 or greater 	"C"
0.6 or greater 	"D"
Examples:
grader(0)   should be "F"
grader(1.1) should be "F"
grader(0.9) should be "A"
grader(0.8) should be "B"
grader(0.7) should be "C"
grader(0.6) should be "D"
*/
/*
function grader(score) {
  if (score > 1 || score < 0.6) {
    return "F";
  }
  if (score >= 0.9) {
    return "A";
  }
  if (score >= 0.8) {
    return "B";
  }
  if (score >= 0.7) {
    return "C";
  }
  if (score >= 0.6) {
    return "D";
  }
}

console.log(grader(0.7));
console.log(grader(0.9));
console.log(grader(0.6));
console.log(grader(1.6));
*/

// #3
/*
You are the "computer expert" of a local Athletic Association (C.A.A.). Many teams of runners come to compete. Each time you get a string of all race results of every team who has run. For example here is a string showing the individual results of a team of 5 runners:

"01|15|59, 1|47|6, 01|17|20, 1|32|34, 2|3|17"

Each part of the string is of the form: h|m|s where h, m, s (h for hour, m for minutes, s for seconds) are positive or null integer (represented as strings) with one or two digits. Substrings in the input string are separated by , or ,.

To compare the results of the teams you are asked for giving three statistics; range, average and median.

    Range : difference between the lowest and highest values. In {4, 6, 9, 3, 7} the lowest value is 3, and the highest is 9, so the range is 9 − 3 = 6.

    Mean or Average : To calculate mean, add together all of the numbers and then divide the sum by the total count of numbers.

    Median : In statistics, the median is the number separating the higher half of a data sample from the lower half. The median of a finite list of numbers can be found by arranging all the observations from lowest value to highest value and picking the middle one (e.g., the median of {3, 3, 5, 9, 11} is 5) when there is an odd number of observations. If there is an even number of observations, then there is no single middle value; the median is then defined to be the mean of the two middle values (the median of {3, 5, 6, 9} is (5 + 6) / 2 = 5.5).

Your task is to return a string giving these 3 values. For the example given above, the string result will be

"Range: 00|47|18 Average: 01|35|15 Median: 01|32|34"

of the form: "Range: hh|mm|ss Average: hh|mm|ss Median: hh|mm|ss"`

where hh, mm, ss are integers (represented by strings) with each 2 digits.
Remarks:

    if a result in seconds is ab.xy... it will be given truncated as ab.
    if the given string is "" you will return ""
*/
/*
function stat(strg) {
  if (!strg) return "";

  let times = strg.split(", ").map((time) => {
    let [h, m, s] = time.split("|").map(Number);
    return h * 3600 + m * 60 + s;
  });

  // Sort for range and median
  times.sort((a, b) => a - b);

  // Range
  let range = times[times.length - 1] - times[0];

  // Average
  let total = times.reduce((acc, time) => acc + time, 0);
  let average = Math.floor(total / times.length);

  // Median
  let median;
  let mid = Math.floor(times.length / 2);
  if (times.length % 2 === 0) {
    median = Math.floor((times[mid - 1] + times[mid]) / 2);
  } else {
    median = times[mid];
  }

  // Convert seconds back to hh|mm|ss format
  function toTimeFormat(sec) {
    let h = Math.floor(sec / 3600)
      .toString()
      .padStart(2, "0");
    sec %= 3600;
    let m = Math.floor(sec / 60)
      .toString()
      .padStart(2, "0");
    let s = (sec % 60).toString().padStart(2, "0");
    return `${h}|${m}|${s}`;
  }
  return `Range: ${toTimeFormat(range)} Average: ${toTimeFormat(
    average
  )} Median: ${toTimeFormat(median)}`;
}

console.log(stat("01|15|59, 1|47|16, 01|17|20, 1|32|34, 2|17|17"));
*/

// #4
/*
You will be given a string (x) featuring a cat 'C' and a mouse 'm'. The rest of the string will be made up of '.'.

You need to find out if the cat can catch the mouse from it's current position. The cat can jump over three characters. So:

C.....m returns 'Escaped!' <-- more than three characters between

C...m returns 'Caught!' <-- as there are three characters between the two, the cat can jump.
*/
/*
function catMouse(x) {
  return x.length <= 5 ? "Caught!" : "Escaped!";
}

console.log(catMouse("C....m"));
console.log(catMouse("C...m"));
console.log(catMouse("C..m"));
console.log(catMouse("C....m"));
*/

// #5
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

*/
/*
function partsSums(ls) {
  let sum = 0;
  let result = new Array(ls.length + 1);
  result[ls.length] = 0;
  for (let i = ls.length - 1; i >= 0; i--) {
    sum += ls[i];
    result[i] = sum;
  }
  return result;
}

console.log(partsSums([1, 2, 3, 4, 5, 6]));
*/

// #6
/*
Welcome to the Codewars Bar!

Codewars Bar recommends you drink 1 glass of water per standard drink so you're not hungover tomorrow morning.

Your fellow coders have bought you several drinks tonight in the form of a string. Return a string suggesting how many glasses of water you should drink to not be hungover.
Examples

"1 beer"  -->  "1 glass of water"
because you drank one standard drink

"1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"  -->  "10 glasses of water"
because you drank ten standard drinks
*/
/*
function hydrate(s) {
  const arr = s.match(/\d+/g).map(Number);
  let result = arr.reduce((acc, curr) => acc + curr, 0);
  if (result === 1) return "1 glass of water";
  return `${result} glasses of water`;
}

console.log(hydrate("1 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer"));
*/

// #7
/*
Complete the solution so that it takes the object (JavaScript/CoffeeScript) or hash (ruby) passed in and generates a human readable string from its key/value pairs.
The format should be "KEY = VALUE". Each key/value pair should be separated by a comma except for the last pair.
Example:
solution({a: 1, b: '2'}) // should return "a = 1,b = 2"
*/
/*
function solution(pairs) {
  const result = Object.entries(pairs).map(
    ([key, value]) => `${key} = ${value}`
  );
  return result.join(",");
}

console.log(solution({ "a": 1, "b": 2 }));
console.log(solution({ "a": 1, "b": 2, "c": 3 }));
console.log(solution({}));
*/

// 12.06.2024

// #1
/*
Aspect-oriented programming (AOP) is programming that adds additional behavior (advice) to existing functionality without actually modifying that functionality.

Create a method called adviseBefore. This method will take two arguments, a function (target) and the advising function (advice).

adviseBefore should return a function that, when executed, will first execute the advising function and then the original method with the following conditions:

    The arguments passed to the function that adviseBefore returns should be passed to the advising function.
    If the advising function returns an array, the array should replace the arguments passed to the original method.
    If the advising function does not return an array, the original arguments should be passed to the original method.
    The return value of the original method should be returned.
*/
/*
function adviseBefore(target, advice) {
  return function (...args) {
    const adviseArgs = advice(...args);
    const finalArgs = Array.isArray(adviseArgs) ? adviseArgs : args;
    return target(...finalArgs);
  };
}

console.log(adviseBefore());
*/

// #2
/*
You are a(n) novice/average/senior/professional/world-class (choose one) Computer Scientist and Web Developer who specialises in Javascript (choose the language of your choice). One day, while you were away, your naughty little brother fiddles with your computer and somehow manages to disable the sort() method for arrays!
Task

Being the developer that you are, you decide to fix the sort() method so that it works for any array consisting of only positive integers. You may use any algorithm you wish.
Extension

If you wish, you could also fix the sort() method for arrays such that it also works on String arrays (sorting them into alphabetical order) but please note that it is not required and will not be tested.
*/

// Fix the sort() method for arrays here.
/*
Array.prototype.sort = function () {
  // Bubble sort implementation
  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < this.length - i - 1; j++) {
      if (this[j] > this[j + 1]) {
        // Swap elements if they are in the wrong order
        let temp = this[j];
        this[j] = this[j + 1];
        this[j + 1] = temp;
      }
    }
  }
  return this; // Return sorted array
};

// Example usage:
const arr = [9, 7, 2, 4, 5, 3, 6, 8, 1];
arr.sort();
console.log(arr); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
*/

// #3
/*
In this kata, you will do addition and subtraction on a given string. The return value must be also a string.
Note: the input will not be empty.
Examples
"1plus2plus3plus4"  --> "10"
"1plus2plus3minus4" -->  "2"
*/

/*
function calculate(str) {
  let replaced = str.replace(/plus/g, "+").replace(/minus/g, "-");
  let arr = replaced.split(/[\+\-]/); // Split by either "+" or "-" to get individual numbers
  let operations = replaced.match(/[\+\-]/g) || []; // Get all "+" and "-" signs

  let count = Number(arr[0]); // Initialize count with the first number

  for (let i = 0; i < operations.length; i++) {
    let num = Number(arr[i + 1]); // Get the next number
    if (operations[i] === "+") {
      count += num;
    } else {
      count -= num;
    }
  }
  return count.toString();
}
console.log(calculate("1plus2plus3plus4"));
console.log(calculate("1minus2minus3minus4"));
console.log(calculate("1plus2plus3minus4"));
*/

// 17.06.2024

// #1
/*
Write a function, nicknameGenerator that takes a string name as an argument and returns the first 3 or 4 letters as a nickname.

If the 3rd letter is a consonant, return the first 3 letters.

nickname("Robert") //=> "Rob"
nickname("Kimberly") //=> "Kim"
nickname("Samantha") //=> "Sam"

If the 3rd letter is a vowel, return the first 4 letters.

nickname("Jeannie") //=> "Jean"
nickname("Douglas") //=> "Doug"
nickname("Gregory") //=> "Greg"

If the string is less than 4 characters, return "Error: Name too short".
*/
/*
function nicknameGenerator(name) {
  if (name.length < 4) {
    return "Error: Name too short";
  }

  const vowels = /[aeiouAEIOU]/g;

  if (vowels.test(name[2])) {
    return name.slice(0, 4);
  } else {
    return name.slice(0, 3);
  }
}

console.log(nicknameGenerator("Jimmy"));
console.log(nicknameGenerator("Sam"));
console.log(nicknameGenerator("Samantha"));
console.log(nicknameGenerator("Roby"));
*/

// #2
/*
My friend wants a new band name for her band. She like bands that use the formula: "The" + a noun with the first letter capitalized, for example:

"dolphin" -> "The Dolphin"

However, when a noun STARTS and ENDS with the same letter, she likes to repeat the noun twice and connect them together with the first and last letter, combined into one word (WITHOUT "The" in front), like this:

"alaska" -> "Alaskalaska"

Complete the function that takes a noun as a string, and returns her preferred band name written as a string.
*/
/*
function bandNameGenerator(str) {
  let newStr1 = str[0].toUpperCase();
  let newStr2 = str.slice(1);

  if (str[0] === str[str.length - 1]) {
    return `${newStr1}${newStr2}${newStr2}`;
  } else {
    return `The ${newStr1}${newStr2}`;
  }
}

console.log(bandNameGenerator("knife"));
console.log(bandNameGenerator("tart"));
*/

// #3
/*
Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

Here is a list of functions, we need:

    Math.round()
    Math.ceil()
    Math.floor()
*/
/*
Math.round = function (number) {
  if (number % 1 >= 0.5) {
    return Math.floor(number) + 1;
  } else {
    return Math.floor(number);
  }
};

Math.ceil = function (number) {
  if (number % 1 === 0) {
    return number;
  } else {
    return Math.floor(number) + 1;
  }
};

Math.floor = function (number) {
  return number - (number % 1);
};
*/

// #4
/*
Express is a minimalist web framework for Node.js.

To get a server up and running there are a few steps you have to follow.

    Install express npm install express --save
    Require express on a file var express = require('express');
    Get the app from express by invoking it var app = express();
    Start the server with the app's listen function

The listen function will start a server that you are going to be able to use through the browser.

It has different signature methods, the one you are going to use in this kata is (port, host, callback)
Your Task

Inside the solution function you have to require express and start a server.

The PORT and HOST are going to be pre-loaded in the process.env object (in a node application process.env stores the environment configuration).

process.env = {
  PORT: 3000,
  HOST: '0.0.0.0',
};
*/
/*
const solution = () => {
  var express = require("express");
  var app = express();


  // Start
  const port = process.env.PORT;
  const host = process.env.HOST;

  app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
  });
};

*/

// 20.06.2024

// #1
/*
Complete function padIt, which accepts 2 parameters:

    str: a string representing the string to pad. We will pad it with "*" symbols on its left side and on its right side.
    n: a number indicating how many times to pad the string.

Behaviour

You need to write a loop statement within the function that loops n times. Each time through the loop it will add one * to str, alternating on which side it is padded: the first time will add a * to the left side of str, the second time will add a * to the right side, and so on.

Finally, return the padded string.
*/
/*
function padIt(str, n) {
  let i = 0;
  while (i < n) {
    if (i % 2 === 0) {
      str = "*" + str;
    } else {
      str = str + "*";
    }
    i++;
  }
  return str;
}

console.log(padIt("a", 1));
console.log(padIt("a", 2));
console.log(padIt("a", 3));
console.log(padIt("a", 4));
console.log(padIt("a", 5));
*/

// #2
/*
The other day I saw an amazing video where a guy hacked some wifi controlled lightbulbs by flying a drone past them. Brilliant.

In this kata we will recreate that stunt... sort of.

You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. When these lamps are on, they should be represented by o.

The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere the drone has flown, including its current position, will result in the lamp at that position switching on.

Return the resulting lamps string. See example tests for more clarity.
*/
/*
function flyBy(l, d) {
  let lengthToTurn = Math.min(l.length, d.length);

  let result = "o".repeat(lengthToTurn) + l.slice(lengthToTurn);
  return result;
}

console.log(flyBy("xxxxxx", "====T"));
console.log(flyBy("xxxxxxxxxxxxxxx", "=========T"));
*/

// 01.07.2024
// #1
/*
Write a function that reverses the bits in an integer.

For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

You can assume that the number is not negative.
*/
/*
function reverseBits(n) {
  const bin = n.toString(2);
  console.log(bin);

  const binArr = bin.split("").reverse().join("");

  return parseInt(binArr, 2);
}

console.log(reverseBits(417));
*/

// #2
/*
HELP! Jason can't find his textbook! It is two days before the test date, and Jason's textbooks are all out of order! Help him sort a list (ArrayList in java) full of textbooks by subject, so he can study before the test.

The sorting should NOT be case sensitive
*/
/*
function sorter(textbooks) {
  return textbooks.sort((a, b) =>
    a.toLowerCase() > b.toLowerCase()
      ? 1
      : a.toLowerCase() < b.toLowerCase()
      ? -1
      : 0
  );
}

console.log(sorter(["Algebra", "History", "Geometry", "English"]));
*/

// #3
/*
Not all integers can be represented by JavaScript/TypeScript. It has space to to represent 53bit signed integers. In this Kata, we've to determine if it is safe to use the integer or not. Make use of the latest ES6 features to find this.

SafeInteger(9007199254740990) //true
SafeInteger(-90) //true
SafeInteger(9007199254740992) //false
*/
/*
function SafeInteger(n) {
  return Number.isSafeInteger(n);
}

console.log(SafeInteger(9007199254740992));
console.log(SafeInteger(-90));
console.log(SafeInteger(9007199254740992));
*/

// #4
/*
JavaScript has sparse arrays, in which not all of its elements are necessarily set. As a result, the length of a javascript array may be greater than the number of its elements. It would be useful to have an array method that checks whether or not an array is sparse.

The challenge here is to create such a method. Please remember that an element in an array can be set to anything including "null" and "undefined". Such elements are not considered sparse in JavaScript. One of the ways to make sparse arrays is for example by deleting some elements in a regular array, like in "delete array[i]", where i < array.length. Also remember that an empty array is not a sparse array by definition.
*/
/*
Array.prototype.isSparse = function () {
  for (let i = 0; i < this.length; i++) {
    if (!(i in this)) {
      return true;
    }
  }
  return false;
};

console.log([1, 2, 3].isSparse());
*/

// #5
/*
Write a function that takes as its parameters one or more numbers which are the diameters of circles.
The function should return the total area of all the circles, rounded to the nearest integer in a string that says "We have this much circle: xyz".
You don't know how many circles you will be given, but you can assume it will be at least one.
So:
sumCircles(2) == "We have this much circle: 3"
sumCircles(2, 3, 4) == "We have this much circle: 23"
*/
/*
function sumCircles() {
  let area = 0;
  let args = [...arguments];
  for (let i = 0; i < args.length; i++) {
    let rad = args[i] / 2;
    area += Math.PI * rad * rad;
  }
  console.log(area);
  return `We have this much circle: ${Math.round(area)}`;
}
console.log(sumCircles(2));
console.log(sumCircles(2, 3, 4));
console.log(sumCircles(1, 1, 1));
*/

// #6
/*
Array.prototype.sort() is a pretty handy feature of the JS core, but when it comes to order an array of numbers, sometimes it can pollute our code.
Task

In this Kata you have to extend the Array object and add the sortReloaded(dir) method to it in order to make this task easier and cleaner.

It should receive a dir parameter which has with two possible values 'asc' or 'desc', and return a new array ordered ascendingly or descendingly respectively. If no dir parameter is set it should assume 'asc' by default. If it has an invalid value, return false.
Note

    For the effects of this Kata, all the arrays will contain only Integer numbers so you don't have to care about validating them.

    You have to return a new array, do not modify the original array.
*/
/*
Array.prototype.sortReloaded = function (dir = "asc") {
  let newArray = [...this];

  if (dir === "asc") {
    return newArray.sort((a, b) => a - b);
  } else if (dir === "desc") {
    return newArray.sort((a, b) => b - a);
  } else {
    return false;
  }
};

console.log([3, 1, 5, 3, 6, 1, 2].sortReloaded("asc"));
console.log([2, 3, 4, 3, 2, 9, 1].sortReloaded("desc"));
console.log([2, 3, 4, 3, 2, 9, 1].sortReloaded("foo"));
console.log([4, 7, 2].sortReloaded());
*/

// #7
/*
You have an array of numbers 1 through n (where 1 <= n <= 10). The array needs to be formatted correctly for the person reading the countdown of a spaceship launch.

Unfortunately, the person reading the countdown only knows how to read strings. After the array is sorted correctly make sure it's in a format he can understand.

Between each number should be a space and after the final number (n) should be the word 'liftoff!'

Example:

// Given
instructions = [8,1,10,2,7,9,6,3,4,5]
// Should return
"10 9 8 7 6 5 4 3 2 1 liftoff!"
// Given
instructions = [1,2,4,3,5]
// Should return
"5 4 3 2 1 liftoff!"
*/
/*
function liftoff(instructions) {
  let sorted = instructions.sort((a, b) => b - a);
  sorted.push("liftoff!");

  return sorted.join(" ");
}

console.log(liftoff([8, 1, 10, 2, 7, 9, 6, 3, 4, 5]));
console.log(liftoff([1, 2, 4, 3, 5]));
*/

// #8
/*
Exponential/scientific notation is used to write very large or small numbers in JavaScript. It uses positive and negative exponents to write multiples and submultiples of 10 and simplifies numbers by getting rid of zeros. If a number greater than 21 digits, in JavaScript, it is displayed in exponential notation and if you try to get the length of it by converting to the string you would get wrong number of length because of the specific way of its display.
Write a function which returns the number of digits in any number with more than 21 digits. If the function is passed a string or a number with 21 or fewer digits it should return "wrong input".
For example: If input number is 9000000000000000000000, then it should return number of digits, in this case 22. If numbers are 222222222 or "5263" which number of digits are less than 21 or "asdf///" which is not a number then it should return string 'wrong input'.
*/
/*
function getNumberLength(n) {
  if (typeof n === "string" || !n.toString().includes("e+"))
    return "wrong input";
  return parseInt(n.toString().substring(n.toString().indexOf("e+") + 2)) + 1;
}
console.log(getNumberLength(7005623021525000000000000000));
console.log(getNumberLength(5236200000000000));
console.log(getNumberLength(9000000000000000000000));
*/

// #9
/*
Calculate the sum of all the arguments passed to a function.
Note: If any of the arguments is not a finite number the function should return false/False instead of the sum of the arguments.
For example:
sum(1,2,3,4)         should return 10
sum(1, "two", 3)     should return false
sum(1, 2, [3], NaN)  should return false
*/
/*
function sum() {
  var total = 0;

  let arr = [...arguments];
  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" || !isFinite(arr[i])) {
      return false;
    } else {
      total += arr[i];
    }
  }
  return total;
}

console.log(sum(6, 2, 3));
console.log(sum(1, -32, undefined, 1076));
*/

// #10
/*
Complete the function/method so that it takes a PascalCase string and returns the string in snake_case notation. Lowercase characters can be numbers. If the method gets a number as input, it should return a string.
Examples
"TestController"  -->  "test_controller"
"MoviesAndBooks"  -->  "movies_and_books"
"App7Test"        -->  "app7_test"
1                 -->  "1"
*/
/*
function toUnderscore(string) {
  if (typeof string === "number") return string.toString();

  const capital = /[A-Z]/g;

  const chars = string.replace(capital, (match) => `_${match.toLowerCase()}`);
  const final = chars.startsWith("_") ? chars.slice(1) : chars;
  return final;
}

console.log(toUnderscore(1));
console.log(toUnderscore("TestController"));
console.log(toUnderscore("MoviesAndBooks"));
console.log(toUnderscore("App7Test"));
*/

// #11
/*
Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either true or false (or the corresponding value in each language).

For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Words can be any consecutive sequence of non space characters. Below are some examples of what the function should return:

* 'Hello world'   => true
* ' Hello world'  => false
* 'Hello world  ' => false
* 'Hello  world'  => false
* 'Hello'         => true

Even though there are no spaces, it is still valid because none are needed:
* 'Helloworld'    => true
* 'Helloworld '   => false
* ' '             => false
* ''              => true
*/
/*
function validSpacing(s) {
  return s.trim() === s && !s.includes("  ");
}

console.log(validSpacing("Hello world"));
console.log(validSpacing(" Hello world"));
console.log(validSpacing("Hello world  "));
console.log(validSpacing("  "));
console.log(validSpacing(""));
*/

// 02.07.2024

// #1
/*
Your task is to write a higher order function for chaining together a list of unary functions. In other words, it should return a function that does a left fold on the given functions.

chained([a,b,c,d])(input)

Should yield the same result as

d(c(b(a(input))))
*/
/*
function chained(functions) {
  return function (input) {
    return functions.reduce((acc, fn) => fn(acc), input);
  };
}
*/

// #2
/*
Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).
Examples

'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'
*/
/*
function initializeNames(name) {
  let arr = name.split(" ");
  console.log(arr);
  let result = [];
  if (arr.length >= 3) {
    for (let i = 1; i < arr.length - 1; i++) {
      // arr[i] = arr[i].slice(0, 1);
      arr[i] = arr[i].charAt(0) + ".";
      
    }
  }

  return arr.join(" ");
}

console.log(initializeNames("Jack Ryan"));
console.log(initializeNames("Dimitri"));
console.log(initializeNames("Lois Mary Lane"));
console.log(initializeNames("Alice Betty Catherine Davis"));
*/

// #3
/*
Create a function that returns True if a given number is divisible by 4, otherwise it should return False.
*/
/*
function dividedByFour(x) {
  return x % 4 === 0 
}
*/

// #4
/*
Create a function that rounds a number to 2 decimal places and returns it as a string.

For example:

Round(1.56888)==>"1.57"
Round(0.3333)==> "0.33"

The return value should be a string, as shown in examples.
*/
/*
function Round(n) {
  return n.toFixed(2);
}

console.log(Round(1.56888));
console.log(Round(0.3333));
*/

// #4
/*
Here is a piece of code:

function getStatus(isBusy) {
  var msg = (isBusy ? "busy" : "available");
  return 
  {
    status: msg
  }
}

Expected Behaviour

Function should return a dictionary/Object/Hash with "status" as a key, whose value can : "busy" or "available" depending on the truth value of the argument is_busy.

But as you will see after clicking RUN or ATTEMPT this code has several bugs, please fix them.
*/

/*
function getStatus(isBusy) {
  var msg = isBusy ? "busy" : "available";
  let ht = { status: msg };
  return ht;
}

console.log(getStatus(1));
*/

// #5
/*
Every Friday and Saturday night, farmer counts sheep coming back to his farm (sheep returned on Friday stay and don't leave).

Sheep return in groups both of the days -> You will be given two arrays with these numbers (one for Friday and one for Saturday night). Array entries are integers, equal zero or higher - in case a given array is empty, farmer did not count the sheep or got sick (we treat this as no sheep returned that night).

Farmer knows how many sheep he has in total (third parameter). You need to calculate the amount of sheep lost (not returned to the farm) after final sheep count on Saturday.

Example 1: Input: [1, 2], [3, 4], 15 --> Output: 5

Example 2: Input: [3, 1, 2], [4, 5], 21 --> Output: 6

Example 3: Input: [0], [4, 15], 31 --> Output: 12

Example 4: Input: [], [4], 15 --> Output: 11
*/
/*
function lostSheep(friday, saturday, total) {
  let res = sums(friday) + sums(saturday);
  return total - res;
}

function sums(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}

console.log(lostSheep([1, 2], [3, 4], 15));
console.log(lostSheep([5, 1, 4], [5, 4], 29));
console.log(lostSheep([], [], 15));
*/

// #6
/*
An IPv4 address is a 32-bit number that identifies a device on the internet.

While computers read and write IP addresses as a 32-bit number, we prefer to read them in dotted-decimal notation, which is basically the number split into 4 chunks of 8 bits, converted to decimal, and delmited by a dot.

In this kata, you will create the function ipToNum (or ip_to_num, depending on the language) that takes an ip address and converts it to a number, as well as the function numToIp (or num_to_ip) that takes a number and converts it to an IP address string. Input will always be valid.
Conversion Example

//original IP address
192.168.1.1

//breaks down into 4 binary octets
11000000 . 10101000 . 00000001 . 00000001

//which are merged together (unsigned 32-bit binary)
11000000101010000000000100000001

//and finally converted to base 10
3232235777

Note that the binary octets are unsigned (so we can't have negative numbers).

Be careful: JavaScript does bitwise arithmetic on signed 32-bits integers.
Examples
ipToNum / ip_to_num

'192.168.1.1' converts to 3232235777
'10.0.0.0'    converts to  167772160
'176.16.0.1'  converts to 2953838593

numToIp / num_to_ip

3232235777 converts to '192.168.1.1'
 167772160 converts to    '10.0.0.0'
2953838593 converts to  '176.16.0.1'
*/
/*
function ipToNum(ip) {
  // Разделяем IP-адрес на октеты
  let arr = ip.split(".");

  // Преобразуем каждый октет в 8-битное число и объединяем их в одно 32-битное число
  let num =
    (parseInt(arr[0]) << 24) |
    (parseInt(arr[1]) << 16) |
    (parseInt(arr[2]) << 8) |
    parseInt(arr[3]);

  return num >>> 0; // >>> 0 используется для преобразования результата в неотрицательное число
}

function numToIp(num) {
  // Извлекаем каждый октет из числа с помощью побитового сдвига и маскирования
  let octet1 = (num >>> 24) & 255;
  let octet2 = (num >>> 16) & 255;
  let octet3 = (num >>> 8) & 255;
  let octet4 = num & 255;

  // Объединяем октеты в строку IP-адреса
  return `${octet1}.${octet2}.${octet3}.${octet4}`;
}

console.log(ipToNum("192.168.1.1"));
console.log(ipToNum("10.0.0.0"));

console.log(numToIp(3232235777));
console.log(numToIp(167772160));
*/

// #7
/*
Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

  12 ==> 21
 513 ==> 531
2017 ==> 2071

If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

  9 ==> -1
111 ==> -1
531 ==> -1
*/
/*
function nextBigger(n) {
  let arr = n.toString().split("").map(Number);
  let len = arr.length;

  // Найти первый элемент справа который меньше следующего справа от него
  let i;

  for (i = len - 2; i >= 0; i--) {
    if (arr[i] < arr[i + 1]) break;
  }

  // Если такого не найдено, то вернуть -1
  if (i === -1) return -1;

  // Найти наименьший элемент справа от arr[i], который больше arr[i]
  let j;
  for (j = len - 1; j > i; j--) {
    if (arr[j] > arr[i]) break;
  }

  // Меняю местами arr[i] и arr[j]
  [arr[i], arr[j]] = [arr[j], arr[i]];

  // Отсортировать элементы справа от позиции i
  let r = arr.slice(i + 1).sort((a, b) => a - b);
  let result = arr.slice(0, i + 1).concat(r);

  return parseInt(result.join("", 10));
}

console.log(nextBigger(12));
console.log(nextBigger(513));
console.log(nextBigger(414));
console.log(nextBigger(111));
console.log(nextBigger(9));
*/

// #8
/*
Define a class named MyClass inside a namespace MyNamespace. The class constructor should accept a single string argument. It should also have a function named sayHello that returns the string passed into the constructor.

Example:

var myObject = new MyNamespace.MyClass('Hello!');

var phrase = myObject.sayHello(); // phrase should be 'Hello!'

The interesting part is that MyClass should only be accessible via the namespace and should not define any extra global variables. Code should not redefine an existing namespace, but should also function if the namespace is not previously defined.
*/
/*
var MyNamespace = MyNamespace || {};

MyNamespace.MyClass = function (phrase) {
  this.phrase = phrase;
};

MyNamespace.MyClass.prototype.sayHello = function () {
  return this.phrase;
};
*/

// #9
/*
Sys Admins are always on your case to improve the strength of your passwords. You could really use a handy function to make your passwords completely un-hackable.

Use the super secret characters in the superSecretChars variable to replace the matching characters in your totally insecure password and make it un-hackable.

eg. replace all 'a's with '@'s. Make sure you get the upper case characters too just in case the user wants to SHOUT their password at you.
*/
//These are your super secret characters you will use to make the password super secure
/*
var superSecretChars = [
  ["a", "@"],
  ["s", "$"],
  ["o", "0"],
  ["h", "5"],
  ["x", "*"],
];
function createSSP(password) {
  for (let i = 0; i < superSecretChars.length; i++) {
    let [char, replace] = superSecretChars[i];

    let regex = new RegExp(char, "gi");

    password = password.replace(regex, replace);
  }

  return password;
}

console.log(createSSP("haxorpassword"));
console.log(createSSP("HaxorPassword"));
*/

// 08.07.2024

// #1
/*
Complete the function that returns an array of length n, starting with the given number x and the squares of the previous number. If n is negative or zero, return an empty array/list.
Examples

2, 5  -->  [2, 4, 16, 256, 65536]
3, 3  -->  [3, 9, 81]
*/
/*
function squares(x, n) {
  if (n <= 0) return [];

  let result = [x];
  for (let i = 1; i < n; i++) {
    result.push(result[i - 1] ** 2);
  }

  return result;
}

console.log(squares(3, 3));
console.log(squares(2, 5));
*/

// #2
/*
Write a function that calculates the original product price, without VAT.
Example

If a product price is 200.00 and VAT is 15%, then the final product price (with VAT) is: 200.00 + 15% = 230.00

Thus, if your function receives 230.00 as input, it should return 200.00

Notes:

    VAT is always 15% for the purposes of this Kata.
    Round the result to 2 decimal places.
    If null value given then return -1
*/
//return price without vat
/*
function excludingVatPrice(price) {
  if (price === null) return -1;
  const vat = 1.15;
  const realPrice = price / vat;
  return parseFloat(realPrice.toFixed(2));
}

console.log(excludingVatPrice(230));
console.log(excludingVatPrice(123));
*/

// #3
/*
For this game of BINGO, you will receive a single array of 10 numbers from 1 to 26 as an input. Duplicate numbers within the array are possible.

Each number corresponds to their alphabetical order letter (e.g. 1 = A. 2 = B, etc). Write a function where you will win the game if your numbers can spell "BINGO". They do not need to be in the right order in the input array. Otherwise you will lose. Your outputs should be "WIN" or "LOSE" respectively.
*/
/*
function bingo(a) {
  const bingo = new Set(["B", "I", "N", "G", "O"]);
  const letters = a.map((num) => String.fromCharCode(num + 64));
  const unique = new Set(letters);

  for (let letter of bingo) {
    if (!unique.has(letter)) {
      return "LOSE";
    }
  }
  return "WIN";
}

console.log(bingo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(bingo([21, 13, 2, 7, 5, 14, 7, 15, 9, 10]));
*/

// 15.07.2024

// #1
/*
Jack really likes his number five: the trick here is that you have to multiply each number by 5 raised to the number of digits of each numbers, so, for example:

  3 -->    15  (  3 * 5¹)
 10 -->   250  ( 10 * 5²)
200 --> 25000  (200 * 5³)
  0 -->     0  (  0 * 5¹)
 -3 -->   -15  ( -3 * 5¹)
*/
/*
function multiply(number) {
  let len = number.toString().length;
  if (number < 0) {
    len = len - 1;
  }

  return number * Math.pow(5, len);
}

// console.log(multiply(10));
// console.log(multiply(5));
// console.log(multiply(200));
// console.log(multiply(0));
console.log(multiply(-3));
*/

// #2
/*
Implement function sequence, which returns new n-size Array filled according to pattern.

pattern may be:

    a function that takes two: (element, index), one: (element) or any arguments (similar to map function), then filled running this function, in other words: function describes sequence,
    number, string or any other object, then filled by copying, this object n-times.

Examples:

sequence(3, 4); // [4, 4, 4]
sequence(5, []); // [[], [], [], [], []]
sequence(2, "s"); // ["s", "s"]
sequence(5, (x, idx) => idx%2) // [0, 1, 0, 1, 0];
sequence(10, (x, idx) => idx+1) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

Note: Sequences are great to work with functional methods like map, reduce, forEach, every or any. For example:

// sum of numbers 1-10
let sum = sequence(10, (x, idx) => idx+1).reduce((sum, num) => sum + num);

Be careful with long sequences. They are just arrays, every element is created when function is called.

For lazy sequences (elements created when needed) use Iterator.
*/
/*
function sequence(n, pattern) {
  // const res = new Array(n);
  // if (typeof pattern === "function") {
  //   for (let i = 0; i < n; i++) {
  //     res[i] = pattern(res[i], i);
  //   }
  // } else {
  //   res.fill(pattern);
  // }
  // return res;

  return Array.from(
    { length: n },
    typeof pattern === "function" ? pattern : () => pattern
  );

  // () => pattern - это стрелочная функция, которая всегда возвращает pattern
}

console.log(sequence(3, 4));
console.log(sequence(3, "s"));
console.log(sequence(3, []));
console.log(sequence(3, (x, idx) => idx % 2));
*/

// #3
/*
Write a function changeTime which increases or decreases given time. Input param is string in HH:MM format and delta is integer value -1 or 1 in minutes. Let see some examples:

changeTime('10:00', 1) //return '10:01'
changeTime('10:00', -1) //return '09:59'
changeTime('23:59', 1) //return '00:00'
changeTime('00:00', -1) //return '23:59'
*/
/*
function changeTime(input, delta) {
  let [h, m] = input.split(":").map(Number);

  // Создаю новый объект Date, и задаю ему часы и минуты
  let date = new Date();
  date.setHours(h);
  date.setMinutes(m + delta); // изменение минут
  // console.log(date);

  // Обратное действие
  let newH = date.getHours().toString().padStart(2, "0");
  let newM = date.getMinutes().toString().padStart(2, "0");

  return `${newH}:${newM}`;
}

console.log(changeTime("10:00", 1));
console.log(changeTime("23:59", 1));
console.log(changeTime("00:00", -1));
*/

// #4
/*
You are a(n) novice/average/experienced/professional/world-famous Web Developer (choose one) who owns a(n) simple/clean/slick/beautiful/complicated/professional/business website (choose one or more) which contains form fields so visitors can send emails or leave a comment on your website with ease. However, with ease comes danger. Every now and then, a hacker visits your website and attempts to compromise it through the use of XSS (Cross Site Scripting). This is done by injecting script tags into the website through form fields which may contain malicious code (e.g. a redirection to a malicious website that steals personal information).
Mission

Your mission is to implement a function that converts the following potentially harmful characters:

    < --> &lt;
    > --> &gt;
    " --> &quot;
    & --> &amp;
*/
/*
function htmlspecialchars(formData) {
  // const replacement = {
  //   "<": "&lt",
  //   ">": "&gt",
  //   '"': "&quot",
  //   "&": "&amp",
  // };
  // let result = formData.replace(/[<>"&]/g, (matched) => replacement[matched]);
  // return result;

  const replacement = [
    ["<", "&lt;"],
    [">", "&gt;"],
    ['"', "&quot;"],
    ["&", "&amp;"],
  ];

  for (let [search, replace] of replacement) {
    formData = formData.replace(new RegExp(search, "g"), replace);
  }
  return formData;
}

console.log(htmlspecialchars("<h2>Hello World</h2>"));
console.log(htmlspecialchars("Hello, how would you & I fare?"));
console.log(htmlspecialchars("<script>alert('Website Hacked!');</script>"));
*/

// #5
/*
This is a simple exercise to understand the feature in the javascript language called closure.

The function buildFun will return an array of functions. The single parameter accepted by buildFun is the number of elements N of the array returned.

The wanted outcome is that when all function in the array are executed, the number from 0 to N should be returned.
*/
/*
function buildFun(n) {
  var res = [];

  for (let i = 0; i <= n; i++) {
    res.push(function () {
      return i;
    });
  }
  return res;
}

console.log(buildFun(10));
*/

// #6
/*
Amicable numbers are two different numbers so related that the sum of the proper divisors of each is equal to the other number. (A proper divisor of a number is a positive factor of that number other than the number itself. For example, the proper divisors of 6 are 1, 2, and 3.)

For example, the smallest pair of amicable numbers is (220, 284); for the proper divisors of 220 are 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 and 110, of which the sum is 284; and the proper divisors of 284 are 1, 2, 4, 71 and 142, of which the sum is 220.

Derive function amicableNumbers(num1, num2) which returns true/True if pair num1 num2 are amicable, false/False if not.
*/
/*
function amicableNumbers(num1, num2) {
  let x = check(num1);
  let y = check(num2);

  if (num1 === y && num2 === x) {
    return true;
  }
  return false;
}

function check(num) {
  let arr = [];
  for (let i = 1; i < num; i++) {
    if (num % i === 0) {
      arr.push(i);
    }
  }
  return arr.reduce((acc, curr) => acc + curr, 0);
}
console.log(amicableNumbers(220, 284));
console.log(amicableNumbers(220, 280));
console.log(amicableNumbers(1184, 1210));
*/

// #7
/*
vowelOne
Write a function that takes a string and outputs a strings of 1's and 0's where vowels become 1's and non-vowels become 0's.
All non-vowels including non alpha characters (spaces,commas etc.) should be included.
Examples:
vowelOne( "abceios" ) // "1001110"
vowelOne( "aeiou, abc" ) // "1111100100"
*/
/*
function vowelOne(s) {
  const vowels = /[aeiouAEIOU]/g;

  const arr = s.split("");
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(vowels)) {
      result.push(1);
    } else {
      result.push(0);
    }
  }
  return result.join("");
}

console.log(vowelOne("vowelOne"));
console.log(vowelOne("123, arou"));
*/

// #8
/*
In this kata you will be given a leaderboard of unique names for example:

['John',
 'Brian',
 'Jim',
 'Dave',
 'Fred']

Then you will be given a list of strings for example:

['Dave +1', 'Fred +4', 'Brian -1']

Then you sort the leaderboard.

The steps for our example would be:

# Dave up 1
['John',
 'Brian',
 'Dave',
 'Jim',
 'Fred']

# Fred up 4
['Fred',
 'John',
 'Brian',
 'Dave',
 'Jim']

# Brian down 1
['Fred',
 'John',
 'Dave',
 'Brian',
 'Jim']

Then once you have done this you need to return the leaderboard.

All inputs will be valid. All strings in the second list will never ask to move a name up higher or lower than possible eg. "John +3" could not be added to the end of the second input list in the example above.

The strings in the second list will always be something in the leaderboard followed by a space and a + or - sign followed by a number.
*/
/*
function leaderboardSort(leaderboard, changes) {
  for (let change of changes) {
    const [name, delta] = change.split(" ");

    const index = leaderboard.indexOf(name);

    leaderboard.splice(
      index - parseInt(delta),
      0,
      ...leaderboard.splice(index, 1)
    );
  }
  return leaderboard;
}

console.log(
  leaderboardSort(
    ["John", "Brian", "Jim", "Dave", "Fred"],
    ["Dave +1", "Fred +4", "Brian -1"]
  )
);
*/

// 19.07.2024

// #1
/*
Create a function that always returns True/true for every item in a given list.
However, if an element is the word 'flick', switch to always returning the opposite boolean value.
Examples

['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

Notes

    "flick" will always be given in lowercase.
    A list may contain multiple flicks.
    Switch the boolean value on the same element as the flick itself.
*/
/*
function flickSwitch(arr) {
  let result = [];
  let isOn = true;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "flick") {
      isOn = !isOn; // switch
    }
    result.push(isOn);
  }
  return result;
}

console.log(flickSwitch(["codewars", "flick", "code", "wars"]));
console.log(flickSwitch(["flick", "chocolate", "adventure", "sunshine"]));
*/

// #2
/*
Given two strings comprised of + and -, return a new string which shows how the two strings interact in the following way:

    When positives and positives interact, they remain positive.
    When negatives and negatives interact, they remain negative.
    But when negatives and positives interact, they become neutral, and are shown as the number 0.

Worked Example

("+-+", "+--") ➞ "+-0"
# Compare the first characters of each string, then the next in turn.
# "+" against a "+" returns another "+".
# "-" against a "-" returns another "-".
# "+" against a "-" returns "0".
# Return the string of characters.

Examples

("--++--", "++--++") ➞ "000000"

("-+-+-+", "-+-+-+") ➞ "-+-+-+"

("-++-", "-+-+") ➞ "-+00"
*/
/*
function neutralise(s1, s2) {
  let res = [];
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] === s2[i]) {
      res.push(s1[i]);
    } else {
      res.push("0");
    }
  }
  return res.join("");
}

console.log(neutralise("--++--", "++--++"));
console.log(neutralise("-+-+-+", "-+-+-+"));
*/

// #3
/*
Write a function that takes an array of unique integers and returns the minimum number of integers needed to make the values of the array consecutive from the lowest number to the highest number.
Example

[4, 8, 6] --> 2
Because 5 and 7 need to be added to have [4, 5, 6, 7, 8]

[-1, -5] --> 3
Because -2, -3, -4 need to be added to have [-5, -4, -3, -2, -1]

[1] --> 0
[]  --> 0
*/
/*
function consecutive(arr) {
  if (!arr.length || arr.length === 1) return 0;

  arr.sort((a, b) => a - b);
  let min = arr[0];
  let max = arr[arr.length - 1];

  let totalNumInRange = max - min + 1;

  return totalNumInRange - arr.length;
}

console.log(consecutive([4, 8, 6]));
console.log(consecutive([-1, -5]));
console.log(consecutive([1]));
console.log(consecutive([]));
*/

// 21.07.2024

// #1
/*
Given an array of 4 integers
[a,b,c,d] representing two points (a, b) and (c, d), return a string representation of the slope of the line joining these two points.

For an undefined slope (division by 0), return undefined . Note that the "undefined" is case-sensitive.

   a:x1
   b:y1
   c:x2
   d:y2

Assume that [a,b,c,d] and the answer are all integers (no floating numbers!). Slope: https://en.wikipedia.org/wiki/Slope
*/
/*
function slope(points) {
  const [x1, y1, x2, y2] = points;

  if (x2 - x1 === 0) {
    return "undefined";
  }

  const k = (y2 - y1) / (x2 - x1);

  return k.toString();
}

console.log(slope([19, 3, 20, 3]));
console.log(slope([2, 7, 4, -7]));
console.log(slope([-10, 6, -10, 3]));
*/

// #2
/*
In this Kata, you will be given two numbers, a and b, and your task is to determine if the first number a is divisible by all the prime factors of the second number b. For example: solve(15,12) = False because 15 is not divisible by all the prime factors of 12 (which include2).

See test cases for more examples. 
*/
/*
function getPrimeFactors(n) {
  let factors = new Set();
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor == 0) {
      factors.add(divisor);
      n = n / divisor;
    } else {
      divisor++;
    }
  }

  return factors;
}

function solve(a, b) {
  let primeFactors = getPrimeFactors(b);

  for (let prime of primeFactors) {
    if (a % prime !== 0) {
      return false;
    }
  }

  return true;
}

console.log(solve(2, 256));
console.log(solve(15, 12));
console.log(solve(9, 243));
console.log(solve(21, 2893401));
*/

// #3
/*
Create a function that checks if the first argument n is divisible by all other arguments (return true if no other arguments)

Example:

(6,1,3)--> true because 6 is divisible by 1 and 3
(12,2)--> true because 12 is divisible by 2
(100,5,4,10,25,20)--> true
(12,7)--> false because 12 is not divisible by 7
*/
/*
function isDivisible() {
  let arr = [...arguments];

  let i = 1;
  while (i < arr.length) {
    if (arr[0] % arr[i] !== 0) {
      return false;
    }
    i++;
  }

  return true;
}

console.log(isDivisible(3, 3, 4));
console.log(isDivisible(12, 3, 4));
console.log(isDivisible(8, 3, 4, 2, 5));
*/

// #4
/*
In your class, you have started lessons about arithmetic progression. Since you are also a programmer, you have decided to write a function that will return the first n elements of the sequence with the given common difference d and first element a. Note that the difference may be zero!

The result should be a string of numbers, separated by comma and space.
Example

# first element: 1, difference: 2, how many: 5
arithmetic_sequence_elements(1, 2, 5) == "1, 3, 5, 7, 9"
*/
/*
function arithmeticSequenceElements(a, d, n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(a + i * d);
  }
  return res.join(", ");
}

console.log(arithmeticSequenceElements(1, 2, 5));
console.log(arithmeticSequenceElements(1, 0, 5));
*/

// #5
/*
Each floating-point number should be formatted that only the first two decimal places are returned. You don't need to check whether the input is a valid number because only valid numbers are used in the tests.

Don't round the numbers! Just cut them after two decimal places!

Right examples:  
32.8493 is 32.84  
14.3286 is 14.32

Incorrect examples (e.g. if you round the numbers):  
32.8493 is 32.85  
14.3286 is 14.33
*/
/*
function twoDecimalPlaces(number) {
  let arr = number.toString().split("");
  let res = [];
  let found = false;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    res.push(arr[i]);
    if (found) {
      count++;
      if (count === 2) {
        break;
      }
    }
    if (arr[i] === ".") {
      found = true;
    }
  }
  // console.log(typeof Number(res.join("")));
  return Number(res.join(""));
}

console.log(twoDecimalPlaces(10.1289767789));
console.log(twoDecimalPlaces(-7488.83485834983));
console.log(twoDecimalPlaces(4.653725356));
*/

// #6
/*
Simple enough this one - you will be given an array. The values in the array will either be numbers or strings, or a mix of both. You will not get an empty array, nor a sparse one.

Your job is to return a single array that has first the numbers sorted in ascending order, followed by the strings sorted in alphabetic order. The values must maintain their original type.

Note that numbers written as strings are strings and must be sorted with the other strings.
*/
/*
function dbSort(arr) {
  let strings = [];
  let numbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      strings.push(arr[i]);
    } else {
      numbers.push(arr[i]);
    }
  }
  numbers.sort((a, b) => a - b);
  strings.sort();

  return [...numbers, ...strings];
}

console.log(dbSort([6, 2, 3, 4, 5]));
console.log(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]));
*/

// #7
/*
A Nice array is defined to be an array where for every value n in the array, there is also an element n - 1 or n + 1 in the array.

examples:

[2, 10, 9, 3] is a nice array because

 2 =  3 - 1
10 =  9 + 1
 3 =  2 + 1
 9 = 10 - 1

[4, 2, 3] is a nice array because

4 = 3 + 1
2 = 3 - 1
3 = 2 + 1 (or 3 = 4 - 1)

[4, 2, 1] is a not a nice array because

for n = 4, there is neither n - 1 = 3 nor n + 1 = 5

Write a function named isNice/IsNice that returns true if its array argument is a Nice array, else false. An empty array is not considered nice.
*/
/*
function isNice(arr) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let plus = arr[i] + 1;
    let minus = arr[i] - 1;
    if (arr.includes(minus) || arr.includes(plus)) {
      count++;
    }
  }
  if (count == arr.length && arr.length != 0) return true;
  return false;
}

console.log(isNice([2, 10, 9, 3]));
console.log(isNice([3, 4, 5, 7]));
*/

// #8
/*
Write a solution to cleanup arrays. This can exist entirely in the squeakyClean function or contain multiple helper functions.

Your squeakyClean function should accept an input array of values and return a new array with all empty strings, 0, null and undefined removed.

Example:

var originalArray = ['click1','click2',null,'','','submitForm'];

the solution you write should return this:

var cleanedArray = ['click1', 'click2','submitForm'] 
*/
/*
function squeakyClean(arr) {
  // let cleanedArray = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (Boolean(arr[i]) !== false) {
  //     cleanedArray.push(arr[i]);
  //   }
  // }
  // return cleanedArray;item

  return arr
    .map((item) => (Boolean(item) ? item : null))
    .filter((item) => item !== null);
}

console.log(squeakyClean(["click1", "click2", null, "", "", "submitForm"]));
*/

// #9
/*
You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.

The Maze array will look like

maze = [[1,1,1,1,1,1,1],
        [1,0,0,0,0,0,3],
        [1,0,1,0,1,0,1],
        [0,0,1,0,0,0,1],
        [1,0,1,0,1,0,1],
        [1,0,0,0,0,0,1],
        [1,2,1,0,1,0,1]]

..with the following key

      0 = Safe place to walk
      1 = Wall
      2 = Start Point
      3 = Finish Point

  direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"

Rules

1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

2. The start and finish positions will change for the final tests.

3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

4. If you reach the end point before all your moves have gone, you should return Finish.

5. If you hit any walls or go outside the maze border, you should return Dead.

6. If you find yourself still in the maze after using all the moves, you should return Lost.
*/
/*
function mazeRunner(maze, directions) {
  // Определение размеров лабиринта
  const n = maze.length;

  // Найти стартовую точку
  let startX, startY;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (maze[i][j] === 2) {
        startX = i;
        startY = j;
        break;
      }
    }
  }

  // Функция для перемещения
  function move(x, y, direction) {
    switch (direction) {
      case "N":
        return [x - 1, y];
      case "S":
        return [x + 1, y];
      case "E":
        return [x, y + 1];
      case "W":
        return [x, y - 1];
    }
  }

  // Перемещение по направлениям
  let [x, y] = [startX, startY];
  for (const direction of directions) {
    [x, y] = move(x, y, direction);

    // Проверка границ
    if (x < 0 || x >= n || y < 0 || y >= n) {
      return "Dead";
    }

    // Проверка на стену
    if (maze[x][y] === 1) {
      return "Dead";
    }

    // Проверка на финиш
    if (maze[x][y] === 3) {
      return "Finish";
    }
  }

  // Если достигли конца и все перемещения использованы
  return "Lost";
}

console.log(
  mazeRunner(
    [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 3],
      [1, 0, 1, 0, 1, 0, 1],
      [0, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 2, 1, 0, 1, 0, 1],
    ],
    ["N", "N", "N", "N", "N", "E", "E", "E", "E", "E"]
  )
); // "Finish"

console.log(
  mazeRunner(
    [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 3],
      [1, 0, 1, 0, 1, 0, 1],
      [0, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 2, 1, 0, 1, 0, 1],
    ],
    ["N", "N", "N", "N", "N", "E", "E", "S", "S", "E", "E", "N", "N", "E"]
  )
); // "Lost"

console.log(
  mazeRunner(
    [
      [1, 1, 1, 1, 1, 1, 1],
      [1, 0, 0, 0, 0, 0, 3],
      [1, 0, 1, 0, 1, 0, 1],
      [0, 0, 1, 0, 0, 0, 1],
      [1, 0, 1, 0, 1, 0, 1],
      [1, 0, 0, 0, 0, 0, 1],
      [1, 2, 1, 0, 1, 0, 1],
    ],
    ["N", "N", "N", "W", "W"]
  )
);
*/

// #10
/*
You are walking on the sidwalk, you notice your friend is also walking on the sidewalk. You need to give a shout to your friend in order to grab their attention.
Kata

Write the function madShout that takes a string input sidewalk to calculate the shout string and return it.

The shout phrase is "Oi F!" but depending on the distance between your friend, the word expands.
Example for input 'sidewalk'

'---------Y-----F------------'

Y = You
F = Friend

'Shout' phrase:

Since in the example, the difference between the friends is 6 (F's index is 15 & that of Y's is 9), the shout phrase becomes 'Oiii F!'
Consider the following differences and its output:

Difference is 4 => 'Oii F!'
2 => 'Oi F!'
9 => 'Oiiiii F!'
0 => 'Oi F!'
1 => 'Oi F!'
20 => 'Oiiiiiiiiii F!'

Some guides for coding

    Y will always be on the left and F will be on the right.
    The number of 'i's in the output must be >= 1
    All the inputs are valid.
*/
/*
function madShout(sidewalk) {
  let yIndex = sidewalk.indexOf("Y");
  let fIndex = sidewalk.indexOf("F");

  if (yIndex === -1 || fIndex === -1) {
    return "Error: Missing Y or F in the input.";
  }

  let distance = fIndex - yIndex;
  let shout = "Oi" + "i".repeat(Math.max(1, Math.floor(distance / 2))) + " F!";

  return shout;
}

// console.log(madShout("-----------------Y--------F--------------"));
console.log(madShout("------------Y-F------------------"));
*/

// 22.07.2024
// #1
/*
Create a method none? (JS none) that accepts an array and a block (JS: a function), and returns true if the block (/function) returns true for none of the items in the array. An empty list should return true.
*/
/*
function none(arr, fun) {
  for (let i = 0; i < arr.length; i++) {
    if (fun(arr[i])) {
      return false;
    }
  }
  return true;
}

console.log(
  none([1, 2, 3, 4, 5], function (item) {
    return item > 5;
  })
);
console.log(
  none([1, 2, 3, 4, 5], function (item) {
    return item > 4;
  })
);
*/

// #2
/*
Coding in function whatNumberIsIt. function accept 1 parameter:n. it's a number.

To judge the number n. If n is one of the above five constants, return one of these string:

"Input number is Number.MAX_VALUE"
"Input number is Number.MIN_VALUE"
"Input number is Number.NaN"
"Input number is Number.NEGATIVE_INFINITY"
"Input number is Number.POSITIVE_INFINITY"

Other values should return "Input number is xxx". xxx means this number.

For example:

whatNumberIsIt(1/0) should return "Input number is Number.POSITIVE_INFINITY"
whatNumberIsIt(100) should return "Input number is 100"

What you need to think about is how to judge it correctly and effectively and don't forget isNaN().
*/

function whatNumberIsIt(n) {
  if (n === Number.MAX_VALUE) {
    return "Input number is Number.MAX_VALUE";
  } else if (n === Number.MIN_VALUE) {
    return "Input number is Number.MIN_VALUE";
  } else if (isNaN(n)) {
    return "Input number is Number.NaN";
  } else if (n === Number.NEGATIVE_INFINITY) {
    return "Input number is Number.NEGATIVE_INFINITY";
  } else if (n === Number.POSITIVE_INFINITY) {
    return "Input number is Number.POSITIVE_INFINITY";
  } else {
    return `Input number is ${n}`;
  }
}

console.log(whatNumberIsIt(1 / 0));
console.log(whatNumberIsIt(100));
console.log(whatNumberIsIt(5e-324));
console.log(whatNumberIsIt(NaN));
