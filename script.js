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
/*
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
*/
// #3
/*
You are given an array. Complete the function that returns the number of ALL elements within an array, including any nested arrays.
Examples

[]                   -->  0
[1, 2, 3]            -->  3
["x", "y", ["z"]]    -->  4
[1, 2, [3, 4, [5]]]  -->  7

The input will always be an array.
*/
/*
function deepCount(a) {
  let count = 0;

  for (let i = 0; i < a.length; i++) {
    count++;

    if (Array.isArray(a[i])) {
      count += deepCount(a[i]);
    }
  }

  return count;
}

console.log(deepCount([]));
console.log(deepCount([1, 2, 3]));
console.log(deepCount(["x", "y", ["z"]]));
console.log(deepCount([1, 2, [3, 4, [5]]]));
*/
// #4
/*
Given a string, return a new string that has transformed based on the input:

    Change case of every character, ie. lower case to upper case, upper case to lower case.
    Reverse the order of words from the input.

Note: You will have to handle multiple spaces, and leading/trailing spaces.

For example:

"Example Input" ==> "iNPUT eXAMPLE"

You may assume the input only contain English alphabet and spaces.
*/
/*
function stringTransformer(str) {
  let result = [];
  const arr = str.split(" ");

  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    result.push(changeCase(word));
  }
  result.reverse();

  return result.join(" ");
}

function changeCase(word) {
  let res = [];

  for (let j = 0; j < word.length; j++) {
    let char = word[j];

    if (char === char.toUpperCase()) {
      res.push(char.toLowerCase());
    } else if (char === char.toLowerCase()) {
      res.push(char.toUpperCase());
    }
  }

  return res.join("");
}

console.log(stringTransformer("Example Input"));
*/
// #5
/*
Implement the function which should return true if given object is a vowel (meaning a, e, i, o, u, uppercase or lowercase), and false otherwise.
*/
/*
String.prototype.vowel = function () {
  const vowels = "aeiouAEIOU";
  return this.length === 1 && vowels.includes(this);
};

console.log(".".vowel());
console.log("a".vowel());
console.log("E".vowel());
console.log("ou".vowel());

// const vowels = "aeiou"
*/
// #6
/*
Given an array (a list in Python) of integers and an integer n, find all occurrences of n in the given array and return another array containing all the index positions of n in the given array.

If n is not in the given array, return an empty array [].

Assume that n and all values in the given array will always be integers.

Example:

findAll([6, 9, 3, 4, 3, 82, 11], 3) => [2, 4]
*/
/*
const findAll = (arr, n) => {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n) {
      res.push(i);
    }
  }
  return res;
};

console.log(findAll([6, 9, 3, 4, 3, 82, 11], 3));
*/
// 23.07.2024
// #1
/*
Given 2 strings, a and b, return a string of the form: shorter+reverse(longer)+shorter.

In other words, the shortest string has to be put as prefix and as suffix of the reverse of the longest.

Strings a and b may be empty, but not null (In C# strings may also be null. Treat them as if they are empty.).
If a and b have the same length treat a as the longer producing b+reverse(a)+b
*/
/*
function shorterReverseLonger(a, b) {
  let shorter = a.length < b.length ? a : b;
  let longer = a.length >= b.length ? a : b;

  let reversed = longer.split("").reverse().join("");

  return shorter + reversed + shorter;
}

console.log(shorterReverseLonger("first", "abcde"));
console.log(shorterReverseLonger("hello", "bau"));
console.log(shorterReverseLonger("fghi", "abcde"));
*/
// #2
/*
Create a function that rounds a number n to p decimal places and returns it as a string.

For example:
Round(1.56881,4)==>"1.5688"
Round(0.3333,2)==> "0.33"
*/
/*
function round(n, p) {
  return n.toFixed(p);
}

console.log(round(1.56881, 4));
console.log(round(0.3333, 2));
*/
// #3
/*
You love coffee and want to know what beans you can afford to buy it.

The first argument to your search function will be a number which represents your budget.

The second argument will be an array of coffee bean prices.

Your 'search' function should return the stores that sell coffee within your budget.

The search function should return a string of prices for the coffees beans you can afford. The prices in this string are to be sorted in ascending order.
*/
/*
function search(budget, prices) {
  // let arr = [];
  // for (let i = 0; i < prices.length; i++) {
  //   if (prices[i] <= budget) {
  //     arr.push(prices[i]);
  //   }
  // }
  // console.log(arr);

  // return arr.sort((a, b) => a - b).join(",");

  let arr = prices.filter((price) => price <= budget);

  return arr.sort((a, b) => a - b).join(",");
}

console.log(search(3, [6, 1, 2, 9, 2]));
console.log(search(14, [7, 3, 23, 9, 14, 20, 7]));
*/
// #4
/*
You're in a restaurant with your friends and it's time to go, but there's still one big problem...the bill. Who will pay what? Lucky for you, you've got your computer handy! One simple function and the bill is paid——fairly, too!

The function should take one parameter: an object/dict with two or more name-value pairs that represent the members of the group and the amount spent by each.

Your function should return an object/dict with the same names, showing how much money the members should pay or receive.

Further points:

    The values should be positive numbers if the person should receive money from the group, negative numbers if they owe money to the group.
    If value is a decimal, round to two decimal places.

Translations and comments (and upvotes!) welcome.
Example

3 friends go out together: A spends £20, B spends £15, and C spends £10. The function should return an object/dict showing that A should receive £5, B should receive £0, and C should pay £5.

var group = {
    A: 20, 
    B: 15, 
    C: 10
}

splitTheBill(group) // returns {A: 5, B: 0, C: -5}
*/
/*
function splitTheBill(x) {
  let total = 0;
  for (const amount of Object.values(x)) {
    total += amount;
  }
  console.log(total);

  const average = total / Object.keys(x).length;
  console.log(average);

  let result = {};
  for (const [name, spent] of Object.entries(x)) {
    result[name] = Number((spent - average).toFixed(2));
  }

  return result;
}

console.log(splitTheBill({ A: 20, B: 15, C: 10 }));
*/
// 24.07.2024
// #1
/*
Positive integers that are divisible exactly by the sum of their digits are called Harshad numbers. The first few Harshad numbers are: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, ...

We are interested in Harshad numbers where the product of its digit sum s and s with the digits reversed, gives the original number n. For example consider number 1729:

    its digit sum, s = 1 + 7 + 2 + 9 = 19
    reversing s = 91
    and 19 * 91 = 1729 --> the number that we started with.

Complete the function which tests if a positive integer n is Harshad number, and returns True if the product of its digit sum and its digit sum reversed equals n; otherwise return False.
*/
/*
function numberJoy(n) {
  if (n <= 9) return true;

  let arr = n.toString().split("").map(Number);

  arr = arr.reduce((acc, curr) => acc + curr, 0);

  let revArr = Number(arr.toString().split("").reverse().join(""));

  return arr * revArr === n;
}

console.log(numberJoy(1997));
console.log(numberJoy(1));
console.log(numberJoy(1729));
console.log(numberJoy(1458));
*/
// #2
/*
Complete the function that takes a string of English-language text and returns the number of consonants in the string.

Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
*/
/*
function consonantCount(str) {
  let count = 0;

  let consonant = /[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g;

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(consonant)) {
      count++;
    }
  }
  return count;
}

console.log(
  consonantCount(
    "aeiou AEIOU bcdfghjklmnpqrstvwxyz BCDFGHJKLMNPQRSTVWXYZ 01234567890_ ^&$#"
  )
);
*/
// #3
/*
In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

The string has the following conditions to be alphanumeric:

    At least one character ("" is not valid)
    Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
    No whitespaces / underscore
*/
/*
function alphanumeric(string) {
  let regExp = /[^a-zA-Z0-9]/g;

  if (regExp.test(string) || string === "") {
    return false;
  }

  return true;
}

console.log(alphanumeric("Mazinkaiser"));
console.log(alphanumeric("PassW0rd"));
console.log(alphanumeric("hello world_"));
console.log(alphanumeric("   "));
*/
// #4
/*
Finish the solution so that it takes an input n (integer) and returns a string that is the decimal representation of the number grouped by commas after every 3 digits.

Assume: 0 <= n < 2147483647
Examples

       1  ->           "1"
      10  ->          "10"
     100  ->         "100"
    1000  ->       "1,000"
   10000  ->      "10,000"
  100000  ->     "100,000"
 1000000  ->   "1,000,000"
35235235  ->  "35,235,235"
*/
/*
function groupByCommas(n) {
  let arr = n.toString().split("");

  // console.log(arr);

  for (let i = arr.length - 4; i >= 0; i -= 3) {
    arr.splice(i + 1, 0, ",");
  }

  return `${arr.join("")}`;
}

console.log(groupByCommas(1));
console.log(groupByCommas(10));
console.log(groupByCommas(10000));
console.log(groupByCommas(35235235));
*/
// #5
/*
To solve this Kata, complete the function, calculateHypotenuse(a,b), which will return the length of the hyptenuse for a right angled triangle with the other two sides having a length equal to the inputs. More details:

    The returned value should be a number rounded to three decimal places
    An error (ArgumentException in C#) should be thrown if an invalid input is provided (inputs should both be numbers that are above zero)

calculateHypotenuse(1,1); // returns 1.414
calculateHypotenuse(3,4); // returns 5
calculateHypotenuse(-2,1); // throws error
calculateHypotenuse("one", "two"); // throws error
*/
/*
function calculateHypotenuse(a, b) {
  if (a <= 0 || b <= 0) {
    throw new Error(
      "Invalid arguments: Arguments must be positive numbers and not NaN."
    );
  }
  if (isNaN(a) || isNaN(b)) {
    throw new Error(
      "Invalid arguments: Arguments must be positive numbers and not NaN."
    );
  }

  if (typeof a === "string" || typeof b === "string") {
    throw new Error(
      "Invalid arguments: Arguments must be positive numbers and not NaN."
    );
  }

  if (!a || !b) {
    throw new Error(
      "Invalid arguments: Arguments must be positive numbers and not NaN."
    );
  }

  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error(
      "Invalid arguments: Arguments must be positive numbers and not NaN."
    );
  }

  return Number(Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)).toFixed(3));
}

console.log(calculateHypotenuse(1, 1));
console.log(calculateHypotenuse(3, 4));
console.log(calculateHypotenuse(2, -3));
console.log(calculateHypotenuse(2, NaN));
console.log(calculateHypotenuse(2, "one"));
console.log(calculateHypotenuse());
console.log(calculateHypotenuse(true, 1));
*/
// 25.07.2024
// #1
/*
Create a function that takes in the sum and age difference of two people, calculates their individual ages, and returns a pair of values (oldest age first) if those exist or null/None or {-1, -1} in C if:

    sum < 0
    difference < 0
    Either of the calculated ages come out to be negative
*/
/*
function getAges(sum, difference) {
  if (sum < 0 || difference < 0 || difference > sum) return null;

  let a = (sum + difference) / 2;
  let b = sum - a;

  if (a < 0 || b < 0) return null;

  if (a >= b) {
    return [a, b];
  } else {
    return [b, a];
  }
}

console.log(getAges(24, 4));
console.log(getAges(63, -14));
*/
// #2
/*
You and a group of friends are earning some extra money in the school holidays by re-painting the numbers on people's letterboxes for a small fee.

Since there are 10 of you in the group each person just concentrates on painting one digit! For example, somebody will paint only the 1's, somebody else will paint only the 2's and so on...

But at the end of the day you realise not everybody did the same amount of work.

To avoid any fights you need to distribute the money fairly. That's where this Kata comes in.
Kata Task

Given the start and end letterbox numbers, write a method to return the frequency of all 10 digits painted.
Example

For start = 125, and end = 132

The letterboxes are

    125 = 1, 2, 5
    126 = 1, 2, 6
    127 = 1, 2, 7
    128 = 1, 2, 8
    129 = 1, 2, 9
    130 = 1, 3, 0
    131 = 1, 3, 1
    132 = 1, 3, 2

The digit frequencies are:

    0 is painted 1 time
    1 is painted 9 times
    2 is painted 6 times
    etc...

and so the method would return [1,9,6,3,0,1,1,1,1,1]
*/
/*
function paintLetterboxes(start, end) {
  let freq = Array(10).fill(0);

  for (let i = start; i <= end; i++) {
    let num = i.toString();
    for (let char of num) {
      freq[char]++;
    }
  }

  return freq;
}

console.log(paintLetterboxes(125, 132));
*/
// #3
/*
Count how often sign changes in array.
result

number from 0 to ... . Empty array returns 0
example

const arr = [1, -3, -4, 0, 5];


| elem | count |
|------|-------|
|  1   |  0    |
| -3   |  1    |
| -4   |  1    |
|  0   |  2    |
|  5   |  2    |


catchSignChange(arr) == 2;
*/
/*
function catchSignChange(arr) {
  if (arr.length < 2) return 0;

  let count = 0;

  // Цикл до предпоследнего элемента
  for (let i = 0; i < arr.length - 1; i++) {
    // Проверяем изменение знака, включая переходы к и от нуля
    if ((arr[i] < 0 && arr[i + 1] >= 0) || (arr[i] >= 0 && arr[i + 1] < 0)) {
      count++;
    }
  }

  return count;
}

console.log(catchSignChange([]));
console.log(catchSignChange([1]));
console.log(catchSignChange([-1, -3, -4, -5]));
console.log(catchSignChange([-47, 84, -30, -11, -5, 74, 77]));
console.log(catchSignChange([1, -3, -4, 0, 5]));
*/
// #4
/*
Remove the parentheses

In this kata you are given a string for example:

"example(unwanted thing)example"

Your task is to remove everything inside the parentheses as well as the parentheses themselves.

The example above would return:

"exampleexample"

Notes

    Other than parentheses only letters and spaces can occur in the string. Don't worry about other brackets like "[]" and "{}" as these will never appear.
    There can be multiple parentheses.
    The parentheses can be nested.
*/
/*
function removeParentheses(s) {
  let res = "";
  let depth = 0;

  for (let char of s) {
    if (char === "(") {
      depth++;
    } else if (char === ")") {
      depth--;
    } else if (depth === 0) {
      res += char;
    }
  }
  return res;
}

console.log(removeParentheses("example (unwanted thing) example"));
console.log(
  removeParentheses("hello example (words(more words) here) something")
);
*/
// 02.08.2024
// #1
/*
Your job at E-Corp is both boring and difficult. It isn't made any easier by the fact that everyone constantly wants to have a meeting with you, and that the meeting rooms are always taken!

In this kata, you will be given an array. Each value represents a meeting room. Your job? Find the first empty one and return its index (N.B. There may be more than one empty room in some test cases).

'X' --> busy
'O' --> empty

If all rooms are busy, return "None available!"
*/
/*
function meeting(x) {
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "O") {
      return i;
    }
  }

  return "None available!";
}

console.log(meeting(["X", "O", "X"]));
console.log(meeting(["X", "X", "X"]));
console.log(meeting(["O", "O", "X"]));
*/
// #2
/*
The bloody photocopier is broken... Just as you were sneaking around the office to print off your favourite binary code!

Instead of copying the original, it reverses it: '1' becomes '0' and vice versa.

Given a string of binary, return the version the photocopier gives you as a string.
*/
/*
function broken(x) {
  // let arr = x.split("");
  // console.log(arr);
  // let res = [];
  // for (let i = 0; i < arr.length; i++) {
  //   if (arr[i] === "1") {
  //     res.push("0");
  //   } else if (arr[i] === "0") {
  //     res.push("1");
  //   }
  // }
  // return res.join("");

  return x
    .split("")
    .map((a) => (a == "0" ? "1" : "0"))
    .join("");
}

console.log(broken("10000000101101111110011001000"));
*/
// #3
/*
Complete the code which should return true if the given object is a single ASCII letter (lower or upper case), false otherwise.
*/
/*
String.prototype.isLetter = function () {
  return /^[a-zA-Z]$/.test(this);
};

console.log("7".isLetter());
console.log("".isLetter());
console.log("d".isLetter());
*/
// #4
/*
Write a function that takes a string and an an integer n as parameters and returns a list of all words that are longer than n.

Example:

* With input "The quick brown fox jumps over the lazy dog", 4
* Return ['quick', 'brown', 'jumps']
*/
/*
function filterLongWords(sentence, n) {
  let result = [];
  let arr = sentence.split(" ");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > n) {
      result.push(arr[i]);
    }
  }
  return result;
}

console.log(filterLongWords("The quick brown fox jumps over the lazy dog", 4));
*/
// #5
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
function prefill(n, v) {
  if (
    !Number.isInteger(Number(n)) ||
    n < 0 ||
    isNaN(n) ||
    typeof n === "boolean"
  ) {
    throw new TypeError(`${n} is invalid`);
  }
  return Array(Number(n)).fill(v);
}

console.log(prefill(3, 1));
console.log(prefill(2, "abc"));
*/
// 08.08.2024
// #1
/*
How many ways can you make the sum of a number?

From wikipedia: https://en.wikipedia.org/wiki/Partition_(number_theory)

    In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition. If order matters, the sum becomes a composition. For example, 4 can be partitioned in five distinct ways:

4
3 + 1
2 + 2
2 + 1 + 1
1 + 1 + 1 + 1

Examples
Basic

sum(1) // 1
sum(2) // 2  -> 1+1 , 2
sum(3) // 3 -> 1+1+1, 1+2, 3
sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3

sum(10) // 42

Explosive

sum(50) // 204226
sum(80) // 15796476
sum(100) // 190569292
*/
/*
function sum(num) {
  // Создаю массив для хранения количества разбиений для каждого числа до num включительно
  const partitions = Array(num + 1).fill(0);
  partitions[0] = 1; // Базовый случай
  // Проходим по каждому числу, которое может быть использовано в разбиении
  for (let i = 1; i <= num; i++) {
    // Обновляем массив partititons для каждого числа от i до num
    for (let j = i; j <= num; j++) {
      partitions[j] += partitions[j - i];
    }
  }
  return partitions[num];
}

console.log(sum(1));
console.log(sum(4));
console.log(sum(5));
console.log(sum(80));
*/
// #2
/*
Bob is a lazy man.

He needs you to create a method that can determine how many letters (both uppercase and lowercase ASCII letters) and digits are in a given string.

Example:

"hel2!lo" --> 6

"wicked .. !" --> 6

"!?..A" --> 1
*/
/*
function countLettersAndDigits(input) {
  return input.replace(/[^A-Za-z0-9]/g, "").length;
}
console.log(countLettersAndDigits("hel2!lo"));
console.log(countLettersAndDigits("!?..A"));
*/
// #3
/*
In this Kata, you will be given an array of unique elements, and your task is to rearrange the values so that the first max value is followed by the first minimum, followed by second max value then second min value, etc.

For example:

solve([15,11,10,7,12]) = [15,7,12,10,11]

The first max is 15 and the first min is 7. The second max is 12 and the second min is 10 and so on. 
*/
/*
function solve(arr) {
  let minMax = [];
  arr.sort((a, b) => a - b);
  for (let i = 0, j = arr.length - 1; i <= j; i++, j--) {
    if (i != j) minMax.push(arr[j]), minMax.push(arr[i]);
    else minMax.push(arr[i]);
  }
  return minMax;
}

console.log(solve([15, 11, 10, 7, 12])); // [15,7,12,10,11]
*/
// 12.08.2024
// #1
/*
Given two numbers x and n, calculate the (positive) nth root of x; this means that being r = result, r^n = x
Examples

x = 4     n = 2  -->  2    # the square root of 4 is 2     2^2 = 4
x = 8     n = 3  -->  2    # the cube root of 8 is 2       2^3 = 8
x = 256   n = 4  -->  4    # the 4th root of 256 is 4      4^4 = 256
x = 9     n = 2  -->  3    # the square root of 9 is 3     3^2 = 9
x = 6.25  n = 2  -->  2.5  #                             2.5^2 = 6.25
*/
/*
function root(x, n) {
  return Math.pow(x, 1 / n);
}

console.log(root(4, 2));
console.log(root(8, 3));
console.log(root(256, 4));
*/
// #2
/*
Move every letter in the provided string forward 10 letters through the alphabet.

If it goes past 'z', start again at 'a'.

Input will be a string with length > 0.
*/
/*
function moveTen(s) {
  let res = "";

  for (let i = 0; i < s.length; i++) {
    let code = s.charCodeAt(i);
    let newCode = code + 10;

    if (newCode > 122) {
      newCode = ((newCode - 97) % 26) + 97;
    }
    res += String.fromCharCode(newCode);
  }

  return res;
}

console.log(moveTen("testcase"));
console.log(moveTen("codewars"));
*/
// #3
/*
Unscramble the eggs.

The string given to your function has had an "egg" inserted directly after each consonant. You need to return the string before it became eggcoded.
Example

unscrambleEggs("Beggegeggineggneggeregg"); => "Beginner"
//             "B---eg---in---n---er---"

Kata is supposed to be for beginners to practice regular expressions, so commenting would be appreciated.
*/
/*
function unscrambleEggs(word) {
  return word.replace(/egg/gi, "");
}

console.log(unscrambleEggs("Beggegeggineggneggeregg"));
*/
// #4
/*
Oh no, the map method for arrays has been disabled. Can you fix it?

In case you haven't come across the map method for arrays, here is how it works:

[1,2,3].map(x => x ** 2) === [1,4,9]
[1,2,3].map(x => 2 * x) === [2,4,6]
[1,2,3].map(x => 2 ** x) === [2,4,8]
[1,2,3].map(x => x.toString()) === ["1","2","3"]
["1","2","3"].map(x => parseInt(x)) === [1,2,3]
["random","array","to","be","mapped"].map(x => mapping(x)) === [mapping("random"),mapping("array"),mapping("to"),mapping("be"),mapping("mapped")]
*/
/*
Array.prototype.map = function (x) {
  let arr = [...this];
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(x(arr[i]));
  }
  return result;
};

console.log([1, 2, 3].map((x) => x ** 2));
console.log([1, 2, 3].map((x) => 2 * x));
console.log([1, 2, 3].map((x) => x.toString()));
*/
// #5
/*
Oh no, the filter method for arrays has been disabled. Can you fix it?

The filter method works like this:

[1, 2, 3, 4, 5].filter(x => x > 2) === [3, 4, 5]
["apple", "banana", "cherry"].filter(x => x.includes('a')) === ["apple", "banana"]
[true, false, true].filter(x => x === true) === [true, true]
*/
/*
Array.prototype.filtering = function (x) {
  let arr = [...this];
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (x(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log([1, 2, 3, 4, 5].filtering((x) => x > 2));
console.log(["apple", "banana", "cherry"].filtering((x) => x.includes("a")));
console.log([true, false, true, true, false].filtering((x) => x === true));
*/
// #6
/*
You need to create a function that will validate if given parameters are valid geographical coordinates.

Valid coordinates look like the following: "23.32353342, -32.543534534". The return value should be either true or false.

Latitude (which is first float) can be between 0 and 90, positive or negative. Longitude (which is second float) can be between 0 and 180, positive or negative.

Coordinates can only contain digits, or one of the following symbols (including space after comma) __ -, . __

There should be no space between the minus "-" sign and the digit after it.

Here are some valid coordinates:

    -23, 25
    24.53525235, 23.45235
    04, -23.234235
    43.91343345, 143
    4, -3

And some invalid ones:

    23.234, - 23.4234
    2342.43536, 34.324236
    N23.43345, E32.6457
    99.234, 12.324
    6.325624, 43.34345.345
    0, 1,2
    0.342q0832, 1.2324
*/
/*
function isValidCoordinates(coord) {
  let arr = coord.split(", ").map(Number);
  const regex = /^-?\d{1,2}(\.\d+)?,\s*-?\d{1,3}(\.\d+)?$/;

  if (arr[0] < -90 || arr[0] > 90) {
    return false;
  }
  if (arr[1] < -180 || arr[1] > 180) {
    return false;
  }
  if (!regex.test(coord)) {
    return false;
  }

  return true;
}

// true
console.log(isValidCoordinates("43.91343345, 143"));
console.log(isValidCoordinates("-23, 25"));
// false
console.log(isValidCoordinates("23.245, 1e1"));
console.log(isValidCoordinates("2342.43536, 34.324236"));
console.log(isValidCoordinates("-23, 225"));
console.log(isValidCoordinates("-91, 181"));
*/
// #7
/*
Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples

The output expected would be:

apples, pears
grapes
bananas

The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

*/
/*
function solution(text, markers) {
  return input
    .split("\n")
    .map((str) => markers.reduce((s, m) => s.split(m)[0], str).trimEnd())
    .join("\n");
}

console.log(
  solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
);
*/
// 13.08.2024
// #1
/*
AddExtra method adds a new item to the list and returns the list. The new item can be any object, and it does not matter. (lets say you add an integer value, like 13)

In our test case we check to assure that the returned list has one more item than the input list. However the method needs some modification to pass this test.
*/
/*
function addExtra(listOfNumbers) {
  const newList = listOfNumbers.slice();
  newList.push(13);
  return newList;
}
*/
// #2
/*
Is every value in the array an array?

This should only test the second array dimension of the array. The values of the nested arrays don't have to be arrays.

Examples:

[[1],[2]] => true
['1','2'] => false
[{1:1},{2:2}] => false
*/
/*
function arrCheck(params) {
  for (let i = 0; i < params.length; i++) {
    if (!Array.isArray(params[i])) return false;
  }
  return true;
}

console.log(arrCheck([[1], [2]]));
console.log(arrCheck(["1", "2"]));
console.log(arrCheck([{ 1: 1 }, { 2: 2 }]));
*/
// #3
/*
Your distributeEvenly function will take an array as an argument and needs to return a new array with the values distributed evenly.

Example:

Argument: ['one', 'one', 'two', 'two', 'three', 'three', 'four', 'four']

Result: ['one', 'two', 'three', 'four', 'one', 'two', 'three', 'four']

The underlying order will stay the same as in the original array. So in the case of our argument above, one comes before two so it stays this way in the returned array.

The aim is to have the longest possible chain of evenly distributed values (from the left to right), this means that an argument with many of the same elements might have many which are repeated at the end.

Example:

Argument: ['one', 'one', 'one', 'one', 'one', 'two', 'three']

Result: [ 'one', 'two', 'three', 'one', 'one', 'one', 'one' ]
*/
/*
const distributeEvenly = (array) => {
  let result = [];
  const unique = Array.from(new Set(array));

  while (array.length > 0) {
    unique.forEach((item) => {
      const index = array.indexOf(item);
      if (index !== -1) {
        result.push(item);
        array.splice(index, 1);
      }
    });
  }
  return result;
};

console.log(
  distributeEvenly(["one", "one", "one", "one", "one", "two", "three"])
);
console.log(
  distributeEvenly([
    "one",
    "one",
    "two",
    "two",
    "three",
    "three",
    "four",
    "four",
  ])
);
*/
// #4
/*
Your task is to return an output string that translates an input string s by replacing each character in s with a number representing the number of times that character occurs in s and separating each number with the sep character(s).

Example (s, sep --> Output)

"hello world", "-" --> "1-1-3-3-2-1-1-2-1-3-1"
"19999999"   , ":" --> "1:7:7:7:7:7:7:7"
"^^^**$"     , "x" --> "3x3x3x2x2x1"
*/
/*
function freqSeq(str, sep) {
  let ht = {};
  let res = [];
  for (const char of str) {
    ht[char] = (ht[char] || 0) + 1;
  }

  for (const char of str) {
    res.push(ht[char]);
  }

  return res.join(sep);
}

console.log(freqSeq("hello world", "-"));
console.log(freqSeq("^^^**$", "x"));
*/
// 14.08.2024
// #1
/*
You're saying good-bye your best friend , See you next happy year .
Happy Year is the year with only distinct digits , (e.g) 2018
Task
Given a year, Find The next happy year or The closest year You'll see your best friend !alt !alt
Notes
    Year Of Course always Positive .
    Have no fear , It is guaranteed that the answer exists .
    It's not necessary that the year passed to the function is Happy one .
    Input Year with in range (1000  ≤  y  ≤  9000)
Input >> Output Examples:
nextHappyYear (7712) ==> return (7801)
Explanation:
As the Next closest year with only distinct digits is 7801 .
nextHappyYear (8989) ==> return (9012)
Explanation:
As the Next closest year with only distinct digits is 9012 .
nextHappyYear (1001) ==> return (1023)
Explanation:
As the Next closest year with only distinct digits is 1023 .
*/
/*
function nextHappyYear(year) {
  year++;

  while (true) {
    let arr = year.toString().split("");
    let setSize = new Set(arr).size;
    if (arr.length === setSize) {
      return year;
    }
    year++;
  }
}

console.log(nextHappyYear(1001));
console.log(nextHappyYear(2334));
console.log(nextHappyYear(8999));
*/
// #2
/*
You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

For example(Input --> Output):

10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 1 --> [1]
*/
/*
function monkeyCount(n) {
  // let arr = [];
  // for (let i = 1; i <= n; i++) {
  //   arr.push(i);
  // }
  // return arr;
  //
  let arr = Array.from({ length: n }, (_, index) => index + 1);
  return arr;
}

console.log(monkeyCount(5));
*/
// #3
/*
Let's pretend your company just hired your friend from college and paid you a referral bonus. Awesome! To celebrate, you're taking your team out to the terrible dive bar next door and using the referral bonus to buy, and build, the largest three-dimensional beer can pyramid you can. And then probably drink those beers, because let's pretend it's Friday too.

A beer can pyramid will square the number of cans in each level - 1 can in the top level, 4 in the second, 9 in the next, 16, 25...

Complete the beeramid function to return the number of complete levels of a beer can pyramid you can make, given the parameters of:

    your referral bonus, and

    the price of a beer can

For example:

beeramid(1500, 2); // should === 12
beeramid(5000, 3); // should === 16
*/
// Returns number of complete beeramid levels
/*
var beeramid = function (bonus, price) {
  if (bonus <= 0 || price <= 0) return 0;

  let levels = 0;
  let totalCost = 0;

  while (true) {
    levels++;

    const cansNeeded = levels * levels;
    const costForLevel = cansNeeded * price;

    if (totalCost + costForLevel <= bonus) {
      totalCost += costForLevel;
    } else {
      break;
    }
  }

  return levels - 1;
};

console.log(beeramid(10, 2));
console.log(beeramid(454, 4));
console.log(beeramid(-1, 4));
*/
// #4
/*
Your task in this kata is to return a string that shows if a letter of the input is uppercase or lowercase.
You should replace every uppercase letter with a 1 and every lowercase letter with a 0.

Example:
binaryCase('Hello World!') ==> '10000 10000!'
*/
/*
function binaryCase(inputString) {
  let result = [];

  for (let i = 0; i < inputString.length; i++) {
    let char = inputString[i];
    if (char.toUpperCase() === char && char.toLowerCase() !== char) {
      result.push("1");
    } else if (char.toLowerCase() === char && char.toUpperCase() !== char) {
      result.push("0");
    } else {
      result.push(char);
    }
  }
  return result.join("");
}

console.log(binaryCase("Hello WorlD!!"));
*/
// #5
/*
In this kata you will have to transform each string so that it contains count for every symbol it contains, starting from 2. The order of symbols should be preserved.

Example: abbreviation => a2b2revi2ton
*/
/*
const transform = (s) => {
  let ht = {};
  let res = [];
  for (const char of s) {
    ht[char] = (ht[char] || 0) + 1;
  }
  console.log(ht);

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    if (ht[char] > 1) {
      res.push(char + ht[char]);
      ht[char] = 1;
    } else {
      res.push(char);
    }
  }
  return res.join("");
};

console.log(transform("elevation"));
console.log(transform("transplantology"));
console.log(transform("impressive"));

*/
// 15.08.2024
// #1
/*
Complete the method so that it returns an array of all ID's passed in. The data structure will be similar to the following:

var data = {
  id: 1,
  items: [
    {id: 2},
    {id: 3, items: [
      {id: 4},
      {id: 5}
    ]}
  ]
}

extractIds(data) // should return [1,2,3,4,5]

The method should be able to handle the case of empty data being passed in.

Note: The only arrays that need to be traversed are those assigned to the "items" property.
*/
/*
function extractIds(data) {
  let res = [];

  function recurse(item) {
    if (item.id !== undefined) {
      res.push(item.id);
    }
    if (item.items && Array.isArray(item.items)) {
      item.items.forEach(recurse);
    }
  }
  recurse(data);

  return res;
}

console.log(
  extractIds({
    id: 1,
    items: [{ id: 2 }, { id: 3 }],
  })
);
console.log(
  extractIds({
    id: 1,
    items: [{ id: 2 }, { id: 3, items: [{ id: 4 }, { id: 5 }] }],
  })
);
*/
// #2
/*
У вас есть объект, представляющий компанию. Компания имеет уникальный companyId, и каждая компания может содержать список подразделений (departments). Подразделения могут также иметь свой уникальный departmentId и могут содержать список своих собственных подразделений (departments).

Вам нужно написать функцию extractDepartmentIds, которая принимает объект компании и возвращает массив всех companyId и departmentId, присутствующих в этой компании, включая все уровни вложенности.
*/
/*
function extractsMore(company) {
  let result = [];

  function recurse(cOrD) {
    if (cOrD.companyId !== undefined) {
      result.push(cOrD.companyId);
    } else if (cOrD.departmentId !== undefined) {
      result.push(cOrD.departmentId);
    }

    if (cOrD.departments && Array.isArray(cOrD.departments)) {
      cOrD.departments.forEach((element) => {
        recurse(element);
      });
    }
  }
  recurse(company);
  return result;
}

console.log(
  extractsMore({
    companyId: 100,
    departments: [
      { departmentId: 200 },
      {
        departmentId: 300,
        departments: [
          { departmentId: 400 },
          { departmentId: 500, departments: [{ departmentId: 600 }] },
        ],
      },
    ],
  })
);
*/
// #3
/*
У вас есть объект, представляющий дерево категорий. У каждой категории есть уникальный catId, и каждая категория может содержать вложенные категории (subcategories).

Напишите функцию extractCatIds, которая принимает объект категории и возвращает массив всех catId, присутствующих в этой категории, включая все уровни вложенности.
*/
/*
function ext(category) {
  let result = [];

  function recurse(el) {
    if (el.catId !== undefined) {
      result.push(el.catId);
    }

    if (el.subcategories && Array.isArray(el.subcategories)) {
      el.subcategories.forEach(element => {
        recurse(element)
      });
    }
  }

  recurse(category);

  return result;
}

console.log(
  ext({
    catId: 1,
    subcategories: [
      { catId: 2 },
      {
        catId: 3,
        subcategories: [
          { catId: 4 },
          { catId: 5, subcategories: [{ catId: 6 }] },
        ],
      },
    ],
  })
);
*/
// #4
// Simple Time Bomb
/*
A bomb has been set to go off! You have to find the wire and cut it in order to stop the timer. There is a global property that holds the key to which wire to cut. Find that and then you can CutTheWire(wireKey);
*/
/*
var wire = Object.keys(this).pop();

CutTheWire(this[wire]);
*/
// #5 Calculate age in years
/*
Complete the following function that will return the difference in years (age) for a birthdate, and optionally a "now" date. Both arguments to the function are expected to be Date objects. The returned difference can be either positive or negative.

getAge(new Date('1980/01/01')) === 33 // assuming today's date is 2013/08/01
getAge(new Date('1913/01/01'), new Date('2013/01/01') === 100
getAge(new Date('2008/02/29'), new Date('2032/03/01')) === 24
getAge(new Date('2008/01/01'), new Date('2000/01/01')) === -8
*/
/*
function getAge(birthDate, nowDate = new Date()) {
  if (!(birthDate instanceof Date) || !(nowDate instanceof Date)) {
    throw new TypeError("Both arguments must be Date objects");
  }

  const year = birthDate.getFullYear();
  const month = birthDate.getMonth();
  const date = birthDate.getDate();

  const year1 = nowDate.getFullYear();
  const month1 = nowDate.getMonth();
  const date1 = nowDate.getDate();

  let age = year1 - year;

  if (month1 < month || (month1 === month && date1 < date)) {
    age -= 1;
  }

  return age;
}

console.log(getAge(new Date("2008/02/29"), new Date("2032/03/01")));
console.log(getAge(new Date("2008/05/29"), new Date("2032/03/01")));
console.log(getAge(new Date("2008/01/01"), new Date("2000/01/01")));
console.log(getAge(new Date("1913/01/01"), new Date("2013/01/01")));
console.log(getAge(new Date("1976/11/19"), new Date("2013/01/01")));
*/
// #6
/*
Baby is getting his frst tooth. This means more sleepless nights, but with the fun of feeling round his gums and trying to guess which will be first out!

Probably best have a sweepstake with your friends - because you have the best chance of knowing. You can feel the gums and see where the raised bits are - most raised, most likely tooth to come through first!

Given an array of numbers (t) to represent baby's gums, you need to return the index of the lump that is most pronounced.

The most pronounced lump is the one that has the biggest differential to its surrounding values. e.g.:

[1, 2, 4] = 2

index 0 has a differential of -1 to its right (it is lower so the figure is negative)

index 1 has a differential of +1 to its left, and -2 to its right. Total is -1.

index 2 has a differential of +2 to its left, and nothing to its right, 

If there is no distinct highest value (more than one occurence of the largest differential), return -1.
*/
/*
function firstTooth(gums) {
  const diffs = gums.map(
    (val, i) => (val - gums[i - 1] || 0) + (val - gums[i + 1] || 0)
  );
  const max = Math.max(...diffs);

  if (diffs.filter((val) => val === max).length > 1) {
    return -1;
  }

  return diffs.indexOf(max);
}

console.log(firstTooth([9, 2, 8, 1]));
console.log(firstTooth([1, 1, 1, 1]));
console.log(firstTooth([1, 2, 3, 4, 3]));
console.log(firstTooth([1, 2, 5, 7, 1, 0, 9]));
console.log(firstTooth([15]));
console.log(firstTooth([]));
*/
// 19.08.2024
// #1
/*
Remember the triangle of balls in billiards? To build a classic triangle (5 levels) you need 15 balls. With 3 balls you can build a 2-level triangle, etc.

For more examples,

pyramid(1) == 1

pyramid(3) == 2

pyramid(6) == 3

pyramid(10) == 4

pyramid(15) == 5

Write a function that takes number of balls (≥ 1) and calculates how many levels you can build a triangle.
*/
/*
function pyramid(balls) {
  let levels = 0;
  let ballsNeeded = 0;
  while (ballsNeeded <= balls) {
    levels++;
    ballsNeeded += levels;

    if (ballsNeeded > balls) {
      levels--;
      break;
    }
  }
  return levels;
}

console.log(pyramid(1));
console.log(pyramid(4));
console.log(pyramid(10));
*/
// #2
/*
There are 32 letters in the Polish alphabet: 9 vowels and 23 consonants.

Your task is to change the letters with diacritics:

ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z

and print out the string without the use of the Polish letters.

For example:

"Jędrzej Błądziński"  -->  "Jedrzej Bladzinski"
*/
/*
function correctPolishLetters(string) {
  let dict = {
    "ą": "a",
    "ć": "c",
    "ę": "e",
    "ł": "l",
    "ń": "n",
    "ó": "o",
    "ś": "s",
    "ź": "z",
    "ż": "z",
  };

  let arr = string.split("");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    const char = arr[i];
    result.push(dict[char] || char);
  }
  return result.join("");
}

console.log(correctPolishLetters("Jędrzej Błądziński"));
*/
// #3
/*
Cheesy Cheeseman just got a new monitor! He is happy with it, but he just discovered that his old desktop wallpaper no longer fits. He wants to find a new wallpaper, but does not know which size wallpaper he should be looking for, and alas, he just threw out the new monitor's box. Luckily he remembers the width and the aspect ratio of the monitor from when Bob Mortimer sold it to him. Can you help Cheesy out?
The Challenge

Given an integer width and a string ratio written as WIDTH:HEIGHT, output the screen dimensions as a string written as WIDTHxHEIGHT.

Note: The calculated height should be represented as an integer. If the height is fractional, truncate it.
*/
/*
function findScreenHeight(width, ratio) {
  let w = width;
  let h1 = ratio.split(":").map(Number);
  let h2 = (width / h1[0]) * h1[1];

  return `${w}x${h2}`;
}
console.log(findScreenHeight(1280, "16:9"));
*/
// #4
/*
Return a new array consisting of elements which are multiple of their own index in input array (length > 1).
Some cases:

[22, -6, 32, 82, 9, 25] =>  [-6, 32, 25]

[68, -1, 1, -7, 10, 10] => [-1, 10]

[-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68] => [-85, 72, 0, 68]
*/
/*
function multipleOfIndex(array) {
  let result = [];
  if (array[0] === 0) {
    result.push(array[0]);
  }
  for (let i = 1; i < array.length; i++) {
    if (array[i] % i === 0) {
      result.push(array[i]);
    }
  }
  return result;
}

console.log(multipleOfIndex([22, -6, 32, 82, 9, 25]));
console.log(multipleOfIndex([0, 2, 3, 6, 9]));
console.log(
  multipleOfIndex([
    -56, -85, 72, -26, -14, 76, -27, 72, 35, -21, -67, 87, 0, 21, 59, 27, -92,
    68,
  ])
);
*/
// 20.08.2024
// #1
/*
Our football team has finished the championship.

Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:

    if x > y: 3 points (win)
    if x < y: 0 points (loss)
    if x = y: 1 point (tie)

We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

Notes:

    our team always plays 10 matches in the championship
    0 <= x <= 4
    0 <= y <= 4
*/
/*
function points(games) {
  let count = 0;
  for (let i = 0; i < games.length; i++) {
    let x = games[i].split("").map(Number);
    if (x[0] > x[2]) {
      count += 3;
    }
    if (x[0] === x[2]) {
      count++;
    }
  }
  return count;
}

console.log(
  points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"])
);
console.log(
  points(["1:1", "2:2", "3:3", "4:4", "2:2", "3:3", "4:4", "3:3", "4:4", "4:4"])
);
console.log(
  points(["0:1", "0:2", "0:3", "0:4", "1:2", "1:3", "1:4", "2:3", "2:4", "3:4"])
);
*/
// #2
/*
Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
Example

For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].
*/
/*
function countPositivesSumNegatives(input) {
  if (!input || input.length === 0) return [];

  let posCount = 0;
  let negSum = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      posCount++;
    } else if (input[i] < 0) {
      negSum += input[i];
    }
  }

  return [posCount, negSum];
}

console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);
console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);
console.log(countPositivesSumNegatives([0, 0]));
*/
// #3
/*
Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
Examples

"This is an example!" ==> "sihT si na !elpmaxe"
"double  spaces"      ==> "elbuod  secaps"
*/
/*
function reverseWords(str) {
  let arr = str.split(" ");
  console.log(arr);
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i].split("").reverse().join("");

    result.push(el);
  }

  return result.join(" ");
}

console.log(reverseWords("This is an example!"));
*/
// #4
/*
ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.
Examples (Input --> Output)

"1234"   -->  true
"12345"  -->  false
"a234"   -->  false
*/
/*
function validatePIN(pin) {
  let str = /\D/g;

  if ((pin.length === 4 || pin.length === 6) && !str.test(pin)) {
    return true;
  }

  return false;
}

console.log(validatePIN("1"));
console.log(validatePIN("12"));
console.log(validatePIN("12345"));
console.log(validatePIN("-12345"));
console.log(validatePIN("-1.2345"));
console.log(validatePIN("a234"));
console.log(validatePIN(".234"));

console.log(validatePIN("0000"));
console.log(validatePIN("1111"));
console.log(validatePIN("123456"));
console.log(validatePIN("090909"));
console.log(validatePIN("000000"));
*/
// #4
/*
Count the number of divisors of a positive integer n.

Random tests go up to n = 500000, but fixed tests go higher.
Examples (input --> output)

4 --> 3 // we have 3 divisors - 1, 2 and 4
5 --> 2 // we have 2 divisors - 1 and 5
12 --> 6 // we have 6 divisors - 1, 2, 3, 4, 6 and 12
30 --> 8 // we have 8 divisors - 1, 2, 3, 5, 6, 10, 15 and 30

Note you should only return a number, the count of divisors. The numbers between parentheses are shown only for you to see which numbers are counted in each case.
*/
/*
function getDivisorsCnt(n) {
  // let row = Array.from({ length: n }, (_, index) => index + 1);

  let del = 0;
  for (let i = 1; i * i <= n; i++) {
    if (n % i === 0) {
      del++;
      if (i !== n / i) {
        del++;
      }
    }
  }

  return del;
}

console.log(getDivisorsCnt(1));
console.log(getDivisorsCnt(10));
console.log(getDivisorsCnt(11));
console.log(getDivisorsCnt(30));
console.log(getDivisorsCnt(54));
*/
// 21.08.2024
// #1
/*
Can you find the needle in the haystack?

Write a function findNeedle() that takes an array full of junk but containing one "needle"

After your function finds the needle it should return a message (as a string) that says:

"found the needle at position " plus the index it found the needle, so:

Example(Input --> Output)

["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 
*/
/*
function findNeedle(haystack) {
  let pos = 0;

  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === "needle") {
      pos += i;
    }
  }
  return `found the needle at position ${pos}`;
}

console.log(findNeedle([324, 324, "needle", 1, 2, 3, 4, 45, 54]));
*/
// #2
/*
Mothers arranged a dance party for the children in school. At that party, there are only mothers and their children. All are having great fun on the dance floor when suddenly all the lights went out. It's a dark night and no one can see each other. But you were flying nearby and you can see in the dark and have ability to teleport people anywhere you want.
Legend:
-Uppercase letters stands for mothers, lowercase stand for their children, i.e. "A" mother's children are "aaaa".
-Function input: String contains only letters, uppercase letters are unique.
Task:
Place all people in alphabetical order where Mothers are followed by their children, i.e. "aAbaBb" => "AaaBbb".
*/
/*
function findChildren(d) {
  return d
    .split("")
    .sort((a, b) => {
      const lowerA = a.toLowerCase();
      const lowerB = b.toLowerCase();
      if (lowerA === lowerB) {
        return b.localeCompare(a);
      }
      return lowerA.localeCompare(lowerB);
    })
    .join("");
}

console.log(findChildren("beeeEBb")); // BbbEeee
console.log(findChildren("aAbaBb")); // AaaBbb
*/
// #3
/*
Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

employed | vacation 
true     | true     => false
true     | false    => true
false    | true     => false
false    | false    => false
*/
/*
function setAlarm(employed, vacation) {
  if (vacation === true) {
    return false;
  }
  if (vacation === false && employed !== true) {
    return false;
  }

  if (employed === true && vacation === false) {
    return true;
  }
}

console.log(setAlarm(true, true));
console.log(setAlarm(true, false));
console.log(setAlarm(false, true));
console.log(setAlarm(false, false));
*/
// #4
/*
Your team is writing a fancy new text editor and you've been tasked with implementing the line numbering.

Write a function which takes a list of strings and returns each line prepended by the correct number.

The numbering starts at 1. The format is n: string. Notice the colon and space in between.

Examples: (Input --> Output)

[] --> []
["a", "b", "c"] --> ["1: a", "2: b", "3: c"]
*/
/*
var number = function (arr) {
  if (!arr.length) return [];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let el = `${i + 1}: ${arr[i]}`;
    res.push(el);
  }
  return res;
};

console.log(number([]));
console.log(number(["a", "b", "c"]));
*/
// #5
/*
The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
Input

Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
Output

Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.
Example

input =  [[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]]
output = ["Open", "Open", "Senior", "Open", "Open", "Senior"]
*/
/*
function openOrSenior(data) {
  let res = [];

  for (let i = 0; i < data.length; i++) {
    console.log(data[i][0], data[i][1]);
    let age = data[i][0];
    let gandi = data[i][1];

    if (age >= 55 && gandi > 7) {
      res.push("Senior");
    } else {
      res.push("Open");
    }
  }
  return res;
}

console.log(
  openOrSenior([
    [18, 20],
    [45, 2],
    [61, 12],
    [37, 6],
    [21, 21],
    [78, 9],
  ])
);
*/
// #6
/*
If you can't sleep, just count sheep!!
Task:

Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.
*/
/*
var countSheep = function (n) {
  if (n <= 0) return "";
  let arr = Array.from({ length: n }, (_, index) => index + 1);
  console.log(arr);
  let res = "";
  for (let i = 0; i < arr.length; i++) {
    res += `${String(arr[i])} sheep...`;
  }

  return res;
};

console.log(countSheep(0));
console.log(countSheep(1));
console.log(countSheep(3));
*/
// #7
/*
Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

Note: input will never be an empty string
*/
/*
function fakeBin(x) {
  let arr = x.split("").map(Number);
  console.log(arr);

  let res = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 5) {
      res.push(0);
    }
    if (arr[i] >= 5) {
      res.push(1);
    }
  }

  return res.join("");
}

console.log(fakeBin("45385593107843568"));
console.log(fakeBin("509321967506747"));

*/
// 25.08
// #1
/*
Create a function close_compare that accepts 3 parameters: a, b, and an optional margin. The function should return whether a is lower than, close to, or higher than b.

Please note the following:

    When a is close to b, return 0.
        For this challenge, a is considered "close to" b if margin is greater than or equal to the absolute distance between a and b.

Otherwise...

    When a is less than b, return -1.

    When a is greater than b, return 1.

If margin is not given, treat it as if it were zero.

Assume: margin >= 0

Tip: Some languages have a way to make parameters optional.
Example 1

If a = 3, b = 5, and margin = 3, then close_compare(a, b, margin) should return 0.

This is because a and b are no more than 3 numbers apart.
Example 2

If a = 3, b = 5, and margin = 0, then close_compare(a, b, margin) should return -1.

This is because the distance between a and b is greater than 0, and a is less than b.
*/
/*
function closeCompare(a, b, margin = 0) {
  if (Math.abs(a - b) <= margin) {
    return 0;
  }
  return a < b ? -1 : 1;
}

console.log(closeCompare(3, 5, 0));
*/
// #2
/*
Create a resolved javascript Promise that will return 'Hello World!'.
*/
/*
function promiseHelloWorld() {
  return new Promise((resolve, reject) => {
    resolve("Hello World!");
  });
}
*/
// #3
/*
The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

For example (Input --> Output):

[1, 2, 10, 8] --> [8, 10]
[1, 5, 87, 45, 8, 8] --> [45, 87]
[1, 3, 10, 0]) --> [3, 10].
*/
/*
function twoOldestAges(ages) {
  let result = [];

  ages.sort((a, b) => b - a);

  result.push(ages[0]);
  result.push(ages[1]);

  return result.reverse();
}
console.log(twoOldestAges([1, 2, 10, 8]));
*/
// #4
/*
Given an array, find the duplicates in that array, and return a new array of those duplicates. The elements of the returned array should appear in the order when they first appeared as duplicates.

Note: numbers and their corresponding string representations should not be treated as duplicates (i.e., "1" != 1).
Examples

[1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]  ==>  [4, 3, 1]
[0, 1, 2, 3, 4, 5]                ==>  []
*/
/*
function duplicates(arr) {
  let counts = new Map(); // используем Map для учета типов данных
  let result = [];

  // Проходим по массиву и считаем количество вхождений каждого элемента
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    counts.set(item, (counts.get(item) || 0) + 1);

    // Если элемент встречается второй раз (и не добавлен в result), добавляем его в результат
    if (counts.get(item) === 2) {
      result.push(item);
    }
  }

  return result;
}

console.log(duplicates([1, 2, 4, 4, 3, 3, 1, 5, 3, "5"]));
*/
// 26.09.2024
// #1
/*
Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.

The geese are any strings in the following array, which is pre-populated in your solution:

  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]

For example, if this array were passed as an argument:

 ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

Your function would return the following array:

["Mallard", "Hook Bill", "Crested", "Blue Swedish"]

The elements in the returned array should be in the same order as in the initial array passed to your function, albeit with the 'geese' removed. Note that all of the strings will be in the same case as those provided, and some elements may be repeated.
*/
/*
function gooseFilter(birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

  let result = [];

  for (let i = 0; i < birds.length; i++) {
    if (!geese.includes(birds[i])) {
      result.push(birds[i]);
    }
  }
  return result;
}

console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])
);
*/
// #2
/*
The Pied Piper has been enlisted to play his magical tune and coax all the rats out of town.

But some of the rats are deaf and are going the wrong way!
Kata Task

How many deaf rats are there?
Legend

    P = The Pied Piper
    O~ = Rat going left
    ~O = Rat going right

Example

    ex1 ~O~O~O~O P has 0 deaf rats

    ex2 P O~ O~ ~O O~ has 1 deaf rat

    ex3 ~O~O~O~OP~O~OO~ has 2 deaf rats
*/
/*
var countDeafRats = function (town) {
  town = town.replace(/\s/g, "");

  const piperInd = town.indexOf("P");

  let deafRats = 0;

  for (let i = 0; i < piperInd; i += 2) {
    if (town[i] === "O" && town[i + 1] === "~") {
      deafRats++;
    }
  }
  for (let i = piperInd + 1; i < town.length; i += 2) {
    if (town[i] === "~" && town[i + 1] === "O") {
      deafRats++;
    }
  }
  return deafRats;
};

console.log(countDeafRats("~O~O~O~O P"));
console.log(countDeafRats("P O~ O~ ~O O~"));
console.log(countDeafRats("~O~O~O~OP~O~OO~"));
*/
// #3
/*
I have a cat and a dog.

I got them at the same time as kitten/puppy. That was humanYears years ago.

Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:

    humanYears >= 1
    humanYears are whole numbers only

Cat Years

    15 cat years for first year
    +9 cat years for second year
    +4 cat years for each year after that

Dog Years

    15 dog years for first year
    +9 dog years for second year
    +5 dog years for each year after that
    */
/*
var humanYearsCatYearsDogYears = function (humanYears) {
  let catCount = 0;
  let dogCount = 0;

  if (humanYears === 1) {
    catCount = 15;
    dogCount = 15;
  } else if (humanYears === 2) {
    catCount = 24;
    dogCount = 24;
  } else if (humanYears > 2) {
    catCount = 24 + (humanYears - 2) * 4;
    dogCount = 24 + (humanYears - 2) * 5;
  }

  return [humanYears, catCount, dogCount];
};

console.log(humanYearsCatYearsDogYears(1));
console.log(humanYearsCatYearsDogYears(2));
console.log(humanYearsCatYearsDogYears(10));
*/
// #4
/*
Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

This function should return a number (final grade). There are four types of final grades:

    100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
    90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
    75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
    0, in other cases

Examples(Inputs-->Output):

100, 12 --> 100
99, 0 --> 100
10, 15 --> 100

85, 5 --> 90

55, 3 --> 75

55, 0 --> 0
20, 2 --> 0

*Use Comparison and Logical Operators.
*/
/*
function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}

console.log(finalGrade(100, 12));
console.log(finalGrade(85, 5));
console.log(finalGrade(99, 0));
console.log(finalGrade(55, 3));
console.log(finalGrade(51, 5));
console.log(finalGrade(55, 0));
console.log(finalGrade(20, 2));
*/
//28.09.2024
// #1
/*
This function should test if the factor is a factor of base.

Return true if it is a factor or false if it is not.
About factors

Factors are numbers you can multiply together to get another number.

2 and 3 are factors of 6 because: 2 * 3 = 6

    You can find a factor by dividing numbers. If the remainder is 0 then the number is a factor.
    You can use the mod operator (%) in most languages to check for a remainder

For example 2 is not a factor of 7 because: 7 % 2 = 1

Note: base is a non-negative number, factor is a positive number.
*/
/*
function checkForFactor(base, factor) {
  return base % factor === 0;
}

console.log(checkForFactor(10, 2));
console.log(checkForFactor(2450, 7));
console.log(checkForFactor(9, 2));
*/
// #2
/*
Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F
*/
/*
function abbrevName(x) {
  let arr = x.split(" ");
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i].split("");
    result.push(word[0]);
  }
  return result[0].toUpperCase() + "." + result[1].toUpperCase();
}

console.log(abbrevName("patrick feeney"));
*/
// #3
/*
An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

Examples:

pointsPer48(12, 20) // 28.8
pointsPer48(10, 10) // 48 
pointsPer48(5, 17) // 14.1 
pointsPer48(0, 0) // 0

Notes:
All inputs will be either be an integer or float.
Follow your dreams!
*/
/*
function pointsPer48(ppg, mpg) {
  if (mpg === 0) return 0;

  return +((ppg * 48) / mpg).toFixed(1);
}

console.log(pointsPer48(12, 20));
*/
// #4
/*
You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

Considering these factors, write a function that tells you if it is possible to get to the pump or not.

Function should return true if it is possible and false if not.
*/
/*
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  return fuelLeft * mpg >= distanceToPump;
};

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));
*/
// #5
/*
Make a function that will return a greeting statement that uses an input; your program should return, "Hello, <name> how are you doing today?".

[Make sure you type the exact thing I wrote or the program may not execute properly]
*/
/*
function greet(name) {
  return `Hello, ${name} how are you doing today?`;
}
*/
// #6
/*
altERnaTIng cAsE <=> ALTerNAtiNG CaSe

Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
*/
/*
String.prototype.toAlternatingCase = function () {
  let letters = /[a-zA-Z]/;
  let arr = [...this];
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    let x = arr[i];

    if (x.toUpperCase() === x) {
      res.push(x.toLowerCase());
    } else if (!letters.test(x)) {
      res.push(x);
    } else if (x.toLowerCase() === x) {
      res.push(x.toUpperCase());
    }
  }
  return res.join("");
};

console.log("1a2b3c4d5e".toAlternatingCase());
console.log("String.prototype.toAlternatingCase".toAlternatingCase());
*/
// 30.09.2024
// #1
/*
While developing a website, you detect that some of the members have troubles logging in. Searching through the code you find that all logins ending with a "_" make problems. So you want to write a function that takes an array of pairs of login-names and e-mails, and outputs an array of all login-name, e-mails-pairs from the login-names that end with "_".

If you have the input-array:

[ [ "foo", "foo@foo.com" ], [ "bar_", "bar@bar.com" ] ]

it should output

[ [ "bar_", "bar@bar.com" ] ]

You have to use the filter-method which returns each element of the array for which the filter-method returns true.
 */
/*
function searchNames(logins) {
  return logins.filter((loginPair) => loginPair[0].match(/\w+_$/));
}

console.log(
  searchNames([
    ["foo", "foo@foo.com"],
    ["bar_", "bar@bar.com"],
  ])
);
*/
// #2
/*
Your task is to write a function toLeetSpeak that converts a regular english sentence to Leetspeak.

More about LeetSpeak You can read at wiki -> https://en.wikipedia.org/wiki/Leet

Consider only uppercase letters (no lowercase letters, no numbers) and spaces.

For example:

toLeetSpeak("LEET") returns "1337"

In this kata we use a simple LeetSpeak dialect. Use this alphabet:

{
  A : '@',
  B : '8',
  C : '(',
  D : 'D',
  E : '3',
  F : 'F',
  G : '6',
  H : '#',
  I : '!',
  J : 'J',
  K : 'K',
  L : '1',
  M : 'M',
  N : 'N',
  O : '0',
  P : 'P',
  Q : 'Q',
  R : 'R',
  S : '$',
  T : '7',
  U : 'U',
  V : 'V',
  W : 'W',
  X : 'X',
  Y : 'Y',
  Z : '2'
}
*/
/*
function toLeetSpeak(str) {
  let al = {
    A: "@",
    B: "8",
    C: "(",
    D: "D",
    E: "3",
    F: "F",
    G: "6",
    H: "#",
    I: "!",
    J: "J",
    K: "K",
    L: "1",
    M: "M",
    N: "N",
    O: "0",
    P: "P",
    Q: "Q",
    R: "R",
    S: "$",
    T: "7",
    U: "U",
    V: "V",
    W: "W",
    X: "X",
    Y: "Y",
    Z: "2",
  };
  let arr = str.split("");
  console.log(arr);
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (Object.hasOwn(al, arr[i])) {
      res.push(al[arr[i]]);
    } else {
      res.push(arr[i]);
    }
  }
  return res.join("");
}

console.log(toLeetSpeak("LEET"));
console.log(toLeetSpeak("CODEWARS"));
*/
// #3
/*
Please write a function that sums a list, but ignores any duplicated items in the list.

For instance, for the list [3, 4, 3, 6] the function should return 10,
and for the list [1, 10, 3, 10, 10] the function should return 4.
 */
/*
function sumNoDuplicates(numList) {
  let ht = {};

  for (const el of numList) {
    ht[el] = (ht[el] || 0) + 1;
  }
  console.log(ht);

  return Object.keys(ht).reduce((acc, key) => {
    if (ht[key] === 1) {
      return acc + Number(key);
    }
    return acc;
  }, 0);
}

console.log(sumNoDuplicates([3, 4, 3, 6]));
*/
// #4
/*
Complete the function which will return the area of a circle with the given radius.

Returned value is expected to be accurate up to tolerance of 0.01.

If the radius is not positive, throw Error.

Example:

circleArea(43.2673);     // returns 5881.248  (± 0.01)
circleArea(68);          // returns 14526.724 (± 0.01)
circleArea(0);           // throws Error
circleArea(-1);          // throws Error
*/
/*
function circleArea(radius) {
  if (radius <= 0) {
    throw new Error("Radius must be positive");
  }

  return parseFloat((Math.PI * radius * radius).toFixed(2));
}

console.log(circleArea(43.2673));
console.log(circleArea(68));
console.log(circleArea(0));
console.log(circleArea(-1));
*/
// 01.10.2024
// #1
/*
You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.
Examples:

strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strarr by 2, we get:

treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longest_consec(strarr, 2) should return "folingtrashy".

In the same way:
longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm, "nothing" in Erlang).
Note

consecutive strings : follow one after another without an interruption
*/
/*
function longestConsec(x, k) {
  if (x.length === 0 || k > x.length || k <= 0) {
    return "";
  }

  let longest = "";

  for (let i = 0; i <= x.length - k; i++) {
    let currentStr = x.slice(i, i + k).join("");
    // console.log(currentStr);
    if (currentStr.length > longest.length) {
      longest = currentStr;
    }
  }

  return longest;
}

console.log(
  longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], 2)
);
*/
/*
// #2
function shortestConsec(x, k) {
  if (x.length === 0 || k > x.length || k <= 0) {
    return "";
  }

  let shortest = x.slice(0, k).join("");

  for (let i = 0; i <= x.length - k; i++) {
    let current = x.slice(i, i + k).join("");

    if (current.length < shortest.length) {
      shortest = current;
    }
  }
  return shortest;
}

console.log(
  shortestConsec(
    ["this", "is", "a", "test", "of", "the", "shortest", "string"],
    3
  )
);
*/
/*
// #3
function longestUniqueConsec(x, k) {
  if (x.length === 0 || k > x.length || k <= 0) return "";

  let longestUnique = "";

  for (let i = 0; i <= x.length - k; i++) {
    let cur = x.slice(i, i + k).join("");
    // console.log(cur);

    let unique = new Set(cur);

    if (unique.size === cur.length && cur.length > longestUnique.length) {
      longestUnique = cur;
    }
  }
  return longestUnique;
}

console.log(
  longestUniqueConsec(["hello", "world", "this", "is", "javascript"], 2)
);
*/
/*
// #4
function highestAsciiSumConsec(x, k) {
  if (x.length === 0 || k > x.length || k <= 0) {
    return "";
  }

  let maxSum = 0;
  let result = "";

  for (let i = 0; i <= x.length - k; i++) {
    let cur = x.slice(i, i + k).join("");
    // console.log(cur);

    let asciiSum = cur
      .split("")
      .reduce((acc, char) => acc + char.charCodeAt(0), 0);

    // console.log(asciiSum);

    if (asciiSum > maxSum) {
      maxSum = asciiSum;
      result = cur;
    }
  }

  return result;
}

console.log(highestAsciiSumConsec(["abc", "def", "ghi", "jkl", "mno"], 2));
console.log(highestAsciiSumConsec(["abc", "def", "ghi", "jkl", "mno"], 3));
*/
// #5
/*
There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
input

    customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
    n: a positive integer, the number of checkout tills.

output

The function should return an integer, the total time required.
Important

Please look at the examples and clarifications below, to ensure you understand the task correctly :)
*/
/*
function queueTime(customers, n) {
  if (customers.length === 0) return 0;

  let tills = new Array(n).fill(0);

  for (let time of customers) {
    let idx = tills.indexOf(Math.min(...tills));
    tills[idx] += time;
  }

  return Math.max(...tills);
}

console.log(queueTime([], 1));
console.log(queueTime([1, 2, 3, 4], 1));
console.log(queueTime([1, 2, 3, 4, 5], 100));
console.log(queueTime([10, 2, 3, 3], 2));
*/
// #6
/*
Задача: Распределение задач между серверами

У тебя есть несколько серверов, и у каждого есть лимит по времени обработки задач. Каждая задача имеет своё время выполнения. Твоя задача — распределить задачи по серверам так, чтобы максимальное время, затраченное одним сервером, было минимизировано, но при этом учесть, что серверы не могут обработать больше времени, чем их лимит.
Входные данные:

    tasks — массив положительных целых чисел, где каждое число — это время, необходимое для выполнения задачи.
    servers — массив положительных целых чисел, где каждое число — это максимальное время, которое может потратить сервер на задачи.

Задача:

Верни массив, где для каждого сервера указано общее время, потраченное этим сервером на выполнение задач. Если невозможно распределить задачи по серверам так, чтобы ни один из серверов не превысил свой лимит, верни -1.
Пример:

text

tasks = [5, 8, 3, 7, 2]
servers = [10, 15, 5]

Результат: [10, 10, 5]

Пояснение: 
- Сервер 1 получил задачи 5 и 5 (итого 10, лимит не превышен).
- Сервер 2 получил задачи 8 и 2 (итого 10, лимит не превышен).
- Сервер 3 получил задачу 3 (итого 5, лимит не превышен).

tasks = [10, 10, 10]
servers = [5, 5, 5]

Результат: -1 (Невозможно распределить задачи)
*/
/*
function distributeTasks(tasks, servers) {
  let serverLoad = new Array(servers.length).fill(0); // Текущее время загрузки каждого сервера

  for (let task of tasks) {
    // Нахожу сервер с минимальной текущей загрузкой
    let minIndex = -1;
    for (let i = 0; i < servers.length; i++) {
      if (serverLoad[i] + task <= servers[i]) {
        if (minIndex === -1 || serverLoad[i] < serverLoad[minIndex]) {
          minIndex = i;
        }
      }
    }
    // Если ни один сервер не может принять задачу
    if (minIndex === -1) {
      return -1;
    }

    serverLoad[minIndex] += task;
  }

  return serverLoad;
}

console.log(distributeTasks([5, 8, 3, 7, 2], [10, 15, 5]));
console.log(distributeTasks([10, 10, 10], [5, 5, 5]));
*/
// #7
/*
Terminal game move function

In this game, the hero moves from left to right. The player rolls the dice and moves the number of spaces indicated by the dice two times.

Create a function for the terminal game that takes the current position of the hero and the roll (1-6) and return the new position.
Example:

move(3, 6) should equal 15
*/
/*
function move(position, roll) {
  return position + roll + roll;
}

console.log(move(0, 4));
console.log(move(3, 6));
*/
// #8
/*
Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1

If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.
Examples

Input: ["sheep", "sheep", "sheep", "wolf", "sheep"]
Output: "Oi! Sheep number 1! You are about to be eaten by a wolf!"

Input: ["sheep", "sheep", "wolf"]
Output: "Pls go away and stop eating my sheep"
*/
/*
function warnTheSheep(queue) {
  let wolfIndex = queue.indexOf("wolf");
  console.log(wolfIndex);
  if (wolfIndex === queue.length - 1) {
    return "Pls go away and stop eating my sheep";
  } else {
    let sheepPos = queue.length - wolfIndex - 1;

    return `Oi! Sheep number ${sheepPos}! You are about to be eaten by a wolf!`;
  }
}

console.log(
  warnTheSheep([
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "sheep",
    "wolf",
    "sheep",
    "sheep",
  ])
);
console.log(warnTheSheep(["wolf"]));
*/
// 02.10.2024
/*
Coding in function grabDoll. function accept 1 parameter:dolls. it's a string array, a list of some dolls.

You need traverse dolls by using for loop. If element is "Hello Kitty" or "Barbie doll", you should push it to a bag(bag is an array, I've defined in the function); if it's other strings, we should use continue skip it.

When the bag has three element, bag is full. You should use break jump out the loop; If bag is not full, you should traverse dolls until the last element.

Return the bag after for loop finished.

You should use for, break and continue in your code. otherwise, your solution may not pass this kata.

If you forgot how to push an element to array, please refer to lesson 4.
*/
/*
function grabDoll(dolls) {
  var bag = [];
  let count = 0;

  for (let i = 0; i < dolls.length; i++) {
    if (dolls[i] === "Hello Kitty" || dolls[i] === "Barbie doll") {
      count++;
      bag.push(dolls[i]);
      if (count < 3) continue;
      if (count === 3) break;
    }
  }
  return bag;
}

console.log(
  grabDoll([
    "Mickey Mouse",
    "Barbie doll",
    "Hello Kitty",
    "Hello Kitty",
    "Hello Kitty",
    "Snow white",
  ])
);
*/
// #2
/*
Coding in function mirrorImage. function accept 1 parameter arr, it's a number array. Your task is find the first pair of mirror-image number and return as an array. The two number must be adjacent, and the returned array is in accordance with the order from left to right.

What's the mirror-image number? for example:123 and 321 is a pair of mirror-image number. Two the same number of palindromes can also be seen as a pair of mirror-image number, such as 121 and 121.

If no such number is found, return[-1,-1]
Example

mirrorImage([11,22,33,33,22,11]) should return [33,33]
mirrorImage([454,86,57,75,16,88]) should return [57,75]
mirrorImage([454,0,57,0,16,88]) should return [-1,-1]
*/
/*
function mirrorImage(arr) {
  arr = arr.map(String);
  // console.log(arr);
  let res = [-1, -1];

  arr.some((x, i) => {
    if (i < arr.length - 1) {
      let a = arr[i];
      let b = arr[i + 1];

      if (b === a.split("").reverse().join("")) {
        res = [Number(a), Number(b)];
        return true;
      }
    }

    return false;
  });

  return res;
}

console.log(mirrorImage([454, 86, 57, 75, 16, 88]));
console.log(mirrorImage([454, 0, 57, 0, 16, 88]));
*/
// #3
/*
Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.
*/
/*
function mergeArrays(a, b) {
  return Array.from(new Set([...a, ...b])).sort((a, b) => a - b);
}

console.log(mergeArrays([2, 4, 8], [2, 4, 6]));
console.log(mergeArrays([1, 3, 5], [2, 4, 6]));
*/
// #4
/*
Given an array of numbers, sort them in such a manner that all the odd numbers in the array are sorted in ascending order and the even numbers are sorted in descending order after the last odd number. For example [1,2,3,4,5,6,7,8,9] produces the output [1,3,5,7,9,8,6,4,2]. If the array contains decimals, round them down while checking for odd/even. The output must have the original numbers!
*/
/*
function sortItOut(arr) {
  let odds = [];
  let evens = [];
  for (let i = 0; i < arr.length; i++) {
    if (Math.floor(arr[i]) % 2 === 0) {
      evens.push(arr[i]);
    } else {
      odds.push(arr[i]);
    }
  }

  return [...odds.sort((a, b) => a - b), ...evens.sort((a, b) => b - a)];
}

console.log(sortItOut([11, 22, 33, 44, 55, 55, 90.4, 4, 78]));
*/
// #5
/*
Given a varying number of integer arguments, return the digits that are not present in any of them.

Example:

[12, 34, 56, 78]  =>  "09"
[2015, 8, 26]     =>  "3479"

Note: the digits in the resulting string should be sorted.
*/
/*
function unusedDigits() {
  let arr = [...arguments];
  let str = arr.join("");

  let unused = [];

  for (let i = 0; i <= 9; i++) {
    let reg = new RegExp(i);
    console.log(reg);
    if (!str.match(reg)) {
      unused.push(i);
    }
  }

  return unused.join("");
}

console.log(unusedDigits([12, 34, 56, 78]));
console.log(unusedDigits([2015, 8, 26]));
*/
// 07.10.2024
// #1
/*
Given a sequence of items and a specific item in that sequence, return the item immediately following the item specified. If the item occurs more than once in a sequence, return the item after the first occurence. This should work for a sequence of any type.

When the item isn't present or nothing follows it, the function should return nil in Clojure and Elixir, Nothing in Haskell, undefined in JavaScript, None in Python.

nextItem([1, 2, 3, 4, 5, 6, 7], 3) # 4
nextItem("testing", "t") # "e"
*/
/*
function nextItem(xs, item) {
  let f = false;
  for (const x of xs) {
    if (f) return x;

    if (x === item) f = true;
  }
  return undefined;
}

console.log(nextItem([1, 2, 3, 4, 5, 6, 7], 3));

console.log(nextItem("testing", "t"));
*/
// #2
/*
Write a function that takes in a binary string and returns the equivalent decoded text (the text is ASCII encoded).

Each 8 bits on the binary string represent 1 character on the ASCII table.

The input string will always be a valid binary string.

Characters can be in the range from "00000000" to "11111111" (inclusive)

Note: In the case of an empty binary string your function should return an empty string.
*/
/*
function binaryToString(binary) {
  let arr = [];

  for (let i = 0; i < binary.length; i += 8) {
    arr.push(binary.slice(i, i + 8));
  }

  return arr.reduce(
    (acc, curr) => acc + String.fromCharCode(parseInt(curr, 2)),
    ""
  );
}

console.log(binaryToString("01100001"));
console.log(
  binaryToString("01001011010101000100100001011000010000100101100101000101")
);
*/
// #3
/*
To participate in a prize draw each one gives his/her firstname.

Each letter of a firstname has a value which is its rank in the English alphabet. A and a have rank 1, B and b rank 2 and so on.

The length of the firstname is added to the sum of these ranks hence a number som.

An array of random weights is linked to the firstnames and each som is multiplied by its corresponding weight to get what they call a winning number.
Example:

names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
weights: [1, 4, 4, 5, 2, 1]

PauL -> som = length of firstname + 16 + 1 + 21 + 12 = 4 + 50 -> 54
The *weight* associated with PauL is 2 so PauL's *winning number* is 54 * 2 = 108.

Now one can sort the firstnames in decreasing order of the winning numbers. When two people have the same winning number sort them alphabetically by their firstnames.
Task:

    parameters: st a string of firstnames, we an array of weights, n a rank

    return: the firstname of the participant whose rank is n (ranks are numbered from 1)

Example:

names: "COLIN,AMANDBA,AMANDAB,CAROL,PauL,JOSEPH"
weights: [1, 4, 4, 5, 2, 1]
n: 4

The function should return: "PauL"

Notes:

    The weight array is at least as long as the number of names, it may be longer.

    If st is empty return "No participants".

    If n is greater than the number of participants then return "Not enough participants".

    See Examples Test Cases for more examples.
*/
/*
function rank(st, we, n) {
  if (!st) return "No participants";
  let arr = st.split(",");
  if (n > arr.length) return "Not enough participants";

  const getSom = (name) => {
    let sum = name.length;
    for (let char of name.toUpperCase()) {
      sum += char.charCodeAt(0) - 64;
    }
    return sum;
  };

  let participants = arr.map((name, index) => {
    let som = getSom(name);
    let winnigNumber = som * we[index];
    return { name, winnigNumber };
  });

  participants.sort((a, b) => {
    if (b.winnigNumber === a.winnigNumber) {
      return a.name.localeCompare(b.name);
    }
    return b.winnigNumber - a.winnigNumber;
  });
  return participants[n - 1].name;
}

console.log(
  rank(
    "Addison,Jayden,Sofia,Michael,Andrew,Lily,Benjamin",
    [4, 2, 1, 4, 3, 1, 2],
    4
  )
);
*/
// 25.10.2024
// #1
/*
Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Implement the function taking n and d as parameters and returning this count.
Examples:

n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

The function, when given n = 25 and d = 1 as argument, should return 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.

Note that 121 has twice the digit 1.
*/
/*
function nbDig(n, d) {
  let count = 0;
  const dig = d.toString();

  for (let i = 0; i <= n; i++) {
    const squareStr = (i ** 2).toString();
    // console.log(squareStr);
    count += squareStr.split(dig).length - 1;
  }
  return count;
}

console.log(nbDig(5750, 0));
console.log(nbDig(11011, 2));
*/
// #2
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

eight(dividedBy(three()));
*/
/*
function zero(op) {
  return op ? op(0) : 0;
}
function one(op) {
  return op ? op(1) : 1;
}
function two(op) {
  return op ? op(2) : 2;
}
function three(op) {
  return op ? op(3) : 3;
}
function four(op) {
  return op ? op(4) : 4;
}
function five(op) {
  return op ? op(5) : 5;
}
function six(op) {
  return op ? op(6) : 6;
}
function seven(op) {
  return op ? op(7) : 7;
}
function eight(op) {
  return op ? op(8) : 8;
}
function nine(op) {
  return op ? op(9) : 9;
}

function plus(r) {
  return function (l) {
    return l + r;
  };
}
function minus(r) {
  return function (l) {
    return l - r;
  };
}
function times(r) {
  return function (l) {
    return l * r;
  };
}
function dividedBy(r) {
  return function (l) {
    return Math.floor(l / r);
  };
}

console.log(one(plus(two())));
*/
// #26.10.2024
// #1
/*
Given an array with exactly 5 strings "a", "b" or "c" (chars in Java, characters in Fortran, Chars in Haskell), check if the array contains three and two of the same values.
Examples

["a", "a", "a", "b", "b"] ==> true  // 3x "a" and 2x "b"
["a", "b", "c", "b", "c"] ==> false // 1x "a", 2x "b" and 2x "c"
["a", "a", "a", "a", "a"] ==> false // 5x "a"
*/
/*
function checkThreeAndTwo(arr) {
  let count1 = 0;
  let count2 = 0;
  let count3 = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "a") {
      count1++;
    } else if (arr[i] === "b") {
      count2++;
    } else if (arr[i] === "c") {
      count3++;
    }
  }
  let res = [count1, count2, count3];
  return res.includes(3) && res.includes(2);
}

console.log(checkThreeAndTwo(["a", "a", "a", "b", "b"]));
console.log(checkThreeAndTwo(["a", "a", "a", "a", "a"]));
*/
// #2
/*
This Kata is intended as a small challenge for my students

Your family runs a shop and have just brought a Scrolling Text Machine (http://3.imimg.com/data3/RP/IP/MY-2369478/l-e-d-multicolour-text-board-250x250.jpg) to help get some more business.

The scroller works by replacing the current text string with a similar text string, but with the first letter shifted to the end; this simulates movement.

Your father is far too busy with the business to worry about such details, so, naturally, he's making you come up with the text strings.

Create a function named rotate() that accepts a string argument and returns an array of strings with each letter from the input string being rotated to the end.

rotate("Hello") // => ["elloH", "lloHe", "loHel", "oHell", "Hello"]

Note: The original string should be included in the output array. The order matters. Each element of the output array should be the rotated version of the previous element. The output array SHOULD be the same length as the input string. The function should return an empty array with a 0 length string, '', as input.
*/
/*
function rotate(str) {
  let res = [];

  for (let i = 0; i < str.length; i++) {
    str = str.slice(1) + str[0];
    res.push(str);
  }
  return res;
}

console.log(rotate("Hello"));
*/
// #3
/*
You receive some random elements as a space-delimited string. Check if the elements are part of an ascending sequence of integers starting with 1, with an increment of 1 (e.g. 1, 2, 3, 4).

Return:

    0 if the elements can form such a sequence, and no number is missing ("not broken", e.g. "1 2 4 3")
    1 if there are any non-numeric elements in the input ("invalid", e.g. "1 2 a")
    n if the elements are part of such a sequence, but some numbers are missing, and n is the lowest of them ("broken", e.g. "1 2 4" or "1 5")

Examples

"1 2 3 4"  ==>  return 0, because the sequence is complete

"1 2 4 3"  ==>  return 0, because the sequence is complete (order doesn't matter)

"2 1 3 a"  ==>  return 1, because it contains a non numerical character

"1 3 2 5"  ==>  return 4, because 4 is missing from the sequence
*/
/*
function findMissingNumber(sequence) {
  let arr = sequence.split(" ").map(Number);

  if (sequence.trim() === "") return 0;

  if (arr.some(isNaN)) return 1;

  arr = Array.from(new Set(arr)).sort((a, b) => a - b);
  console.log(arr);

  if (arr[0] !== 1) return 1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== i + 1) {
      return i + 1;
    }
  }
  return 0;
}

console.log(findMissingNumber("1 2 3 5"));
console.log(findMissingNumber("1 3"));
console.log(findMissingNumber("1 2 3 4 5"));
console.log(findMissingNumber("1 2 3 4 a"));
*/
// #4
/*
Description:

Your aim in this puzzle will be to help agent Cooper to avoid the evil powers.

How can you help?

You, as agent Gordon, can see the board and you have directions from FBI and directions from FBI are always safest. What you can do is to check the board for agent Coop and text him the only safe route he has to take.

** Cooper can take only horizontal or vertical gate.

** Gates numbering starts from one.

let's look at the actual example:

If your directions from FBI is "abcdd" and your board is:

  "abcdd",            a b c d d
  "12345",            1 2 3 4 5
  "ratca",     =>     r a t c a
  "pimmu",            p i m m u
  "rest1"             r e s t 1

it's is obvious that you have to send a massage to Coop that says: "Horizontal 1", so he can take the safe route.
Let's look at another example: if we have the same board and your direction is "c3tms" your message has to be "Vertical 3!" because it matches 3rd vertical line; If the directions are too short or too long or don't match any horizontal or vertical line you have to text agent Cooper:  "Coop, it's too risky!".

** Board is always square and length of the direction might not match the length of the square

** Password and board subarrays are always provided as lowerCase strings

** Function has to return a string

P.S If you wonder about the amazingness of Gordon and Cooper you have to watch Twin Peaks and enjoy at your fullest.
*/
/*
function findSafeRoute(board, directions) {
  if (directions.length !== board[0].length) {
    return "Coop, it's too risky!";
  }

  for (let i = 0; i < board.length; i++) {
    if (board[i] === directions) {
      return `Horizontal ${i + 1}`;
    }
  }
  for (let j = 0; i < board[0].length; j++) {
    let column = "";
    for (let i = 0; i < board.length; i++) {
      column += board[i][j];
    }
    if (column === directions) {
      return `Vertical ${j + 1}`;
    }
  }

  return "Coop, it's too risky!";
}

console.log(
  findSafeRoute(
    ["abcden", "abcden", "12345n", "doopln", "ratonn", "parkyn"],
    "Horizontal 1"
  )
);
*/
// 27.10.2024
// #1
/*
Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

    If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

    If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

    If the total of both even and odd numbers are identical return: "Even and Odd are the same
*/
/*
function evenOrOdd(str) {}

console.log(evenOrOdd("12"));
console.log(evenOrOdd("123"));
*/
// 03.11.2024
// #1
/*
Create a function which accepts one arbitrary string as an argument, and return a string of length 26.

The objective is to set each of the 26 characters of the output string to either '1' or '0' based on the fact whether the Nth letter of the alphabet is present in the input (independent of its case).

So if an 'a' or an 'A' appears anywhere in the input string (any number of times), set the first character of the output string to '1', otherwise to '0'. if 'b' or 'B' appears in the string, set the second character to '1', and so on for the rest of the alphabet.

For instance:

"a   **&  cZ"  =>  "10100000000000000000000001"
*/
/*
function change(string) {
  const alphabet = {
    a: 0,
    b: 0,
    c: 0,
    d: 0,
    e: 0,
    f: 0,
    g: 0,
    h: 0,
    i: 0,
    j: 0,
    k: 0,
    l: 0,
    m: 0,
    n: 0,
    o: 0,
    p: 0,
    q: 0,
    r: 0,
    s: 0,
    t: 0,
    u: 0,
    v: 0,
    w: 0,
    x: 0,
    y: 0,
    z: 0,
  };

  for (const char of string.toLowerCase()) {
    if (char in alphabet) {
      alphabet[char] = 1;
    }
  }

  return Object.values(alphabet).join("");
}

console.log(change("a **&  bZ"));
*/
// #2
/*
A zero-indexed array arr consisting of n integers is given. The dominator of array arr is the value that occurs in more than half of the elements of arr.
For example, consider array arr such that arr = [3,4,3,2,3,1,3,3]
The dominator of arr is 3 because it occurs in 5 out of 8 elements of arr and 5 is more than a half of 8.
Write a function dominator(arr) that, given a zero-indexed array arr consisting of n integers, returns the dominator of arr. The function should return −1 if array does not have a dominator. All values in arr will be >=0.
*/
/*
function dominator(arr) {
  const freq = {};
  const hl = arr.length / 2;

  for (const num of arr) {
    freq[num] = (freq[num] || 0) + 1;

    if (freq[num] > hl) {
      return num;
    }
  }
  console.log(freq);

  return -1;
}

console.log(dominator([3, 4, 3, 2, 3, 1, 3, 3]));
console.log(dominator([1, 2, 3, 4, 5]));
console.log(dominator([1, 1, 1, 2, 2, 2, 2]));
console.log(dominator([1, 1, 1, 2, 2, 2]));
*/
// #3
/*
You will be given an array which will include both integers and characters.

Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number. There will always be 10 integers and 10 characters. Create a single string with the characters and return it as a[1] while maintaining the original order.

lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']

Here is an example of your return

[3.6, "udiwstagwo"]
*/
/*
function mean(lst) {
  let sum = 0;
  let count = 0;
  let chars = "";
  for (let i = 0; i < lst.length; i++) {
    const num = Number(lst[i]);
    if (!isNaN(num)) {
      sum += num;
      count++;
    } else {
      chars += lst[i];
    }
  }

  return [sum / count, chars];
}

console.log(
  mean([
    "u",
    "6",
    "d",
    "1",
    "i",
    "w",
    "6",
    "s",
    "t",
    "4",
    "a",
    "6",
    "g",
    "1",
    "2",
    "w",
    "8",
    "o",
    "2",
    "0",
  ])
);
*/
// #4
/*
You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.
Examples

["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]
*/
/*
function tailSwap(arr) {
  let f = arr[0].split(":");
  let s = arr[1].split(":");

  return [`${f[0]}:${s[1]}`, `${s[0]}:${f[1]}`];
}

console.log(tailSwap(["abc:123", "cde:456"]));
*/
// 15.11.2024
// #1
/*
Given n number of people in a room, calculate the probability that any two people in that room have the same birthday (assume 365 days every year = ignore leap year). Answers should be two decimals unless whole (0 or 1) eg 0.05
*/
/*
function calculateProbability(n) {
  if (n < 2) return "0.00"; // Меньше двух человек не могут иметь совпадающий день рождения

  let probabilityNoShared = 1;
  for (let i = 0; i < n; i++) {
    probabilityNoShared *= (365 - i) / 365;
  }

  const probabilityShared = 1 - probabilityNoShared;
  return probabilityShared.toFixed(2);
}

console.log(calculateProbability(5));
console.log(calculateProbability(1000));
*/
// #2
/*
Complete the solution so that it reverses all of the words within the string passed in.

Words are separated by exactly one space and there are no leading or trailing spaces.

Example(Input --> Output):

"The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"
*/
/*
function reverseWords(str) {
  return str.split(" ").reverse().join(" ");
}

console.log(
  reverseWords("The greatest victory is that which requires no battle")
);
*/
// #3
/*
In this kata you need to check the provided 2 dimensional array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

The sub arrays may not be the same length.
*/
/*
function well(x) {
  let count = 0;

  for (let i = 0; i < x.length; i++) {
    for (let j = 0; j < x[i].length; j++) {
      if (typeof x[i][j] === "string" && x[i][j].toLowerCase() === "good") {
        count++;
      }
    }
  }
  return count === 1 || count === 2
    ? "Publish!"
    : count > 2
    ? "I smell a series!"
    : "Fail!";
}

console.log(well([["bad", "bAd", "bad"]]));
console.log(well([["gOOd", "bad", "BAD", "bad", "bad"]]));
console.log(
  well([
    ["gOOd", "good"],
    ["good", "bad", "bad"],
  ])
);
*/
// #4
/*
The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

If the sum of a chunk's digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

If

    sz is <= 0 or if str == "" return ""
    sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

Examples:

("123456987654", 6) --> "234561876549"
("123456987653", 6) --> "234561356789"
("66443875", 4) --> "44668753"
("66443875", 8) --> "64438756"
("664438769", 8) --> "67834466"
("123456779", 8) --> "23456771"
("", 8) --> ""
("123456779", 0) --> "" 
("563000655734469485", 4) --> "0365065073456944"

Example of a string rotated to the left by one position:
s = "123456" gives "234561".
*/
/*
function revrot(str, sz) {
  if (sz > str.length || str === "" || sz <= 0) return "";

  let result = "";

  for (let i = 0; i < str.length; i += sz) {
    let chunk = str.slice(i, i + sz);

    if (chunk.length < sz) break; // игнор последнего куска, если он меньше sz

    const sum = chunk.split("").reduce((sum, digit) => sum + Number(digit), 0);

    if (sum % 2 === 0) {
      result += chunk.split("").reverse().join("");
    } else {
      result += chunk.slice(1) + chunk[0];
    }
  }
  return result;
}

console.log(revrot("123456987654", 6));
console.log(revrot("66443875", 4));
*/
// #5
/*
Your task is simply to count the total number of lowercase letters in a string.
Examples

"abc" ===> 3

"abcABC123" ===> 3

"abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

"" ===> 0;

"ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

"abcdefghijklmnopqrstuvwxyz" ===> 26
*/
/*
function lowercaseCount(str) {
  let lowerReg = /[a-z]/;
  let arr = str.split("");
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].match(lowerReg)) {
      count++;
    }
  }
  return count;
}

console.log(lowercaseCount("abc"));
console.log(lowercaseCount("aBc"));
console.log(lowercaseCount("abcABC123!@€£#$%^&*()_-+=}{[]|':;?/>.<,~"));
*/
// #6
/*
Description:

Suzuki is a monk who climbs a large staircase to the monastery as part of a ritual. Some days he climbs more stairs than others depending on the number of students he must train in the morning. He is curious how many stairs might be climbed over the next 20 years and has spent a year marking down his daily progress.

The sum of all the stairs logged in a year will be used for estimating the number he might climb in 20.

20_year_estimate = one_year_total * 20

You will receive the following data structure representing the stairs Suzuki logged in a year. You will have all data for the entire year so regardless of how it is logged the problem should be simple to solve.

stairs = [sunday,monday,tuesday,wednesday,thursday,friday,saturday]

Make sure your solution takes into account all of the nesting within the stairs array.

Each weekday in the stairs array is an array.

sunday = [6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274, 7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478, 6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381, 5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032, 9871, 5990, 6309, 7825]

Your function should return the 20 year estimate of the stairs climbed using the formula above.
*/
/*
function stairsIn20(s) {
  const oneYearTotal = s.flat().reduce((total, count) => total + count, 0);

  return oneYearTotal * 20;
}

console.log(
  stairsIn20(
    (sunday = [
      6737, 7244, 5776, 9826, 7057, 9247, 5842, 5484, 6543, 5153, 6832, 8274,
      7148, 6152, 5940, 8040, 9174, 7555, 7682, 5252, 8793, 8837, 7320, 8478,
      6063, 5751, 9716, 5085, 7315, 7859, 6628, 5425, 6331, 7097, 6249, 8381,
      5936, 8496, 6934, 8347, 7036, 6421, 6510, 5821, 8602, 5312, 7836, 8032,
      9871, 5990, 6309, 7825,
    ]),
    (monday = [
      9175, 7883, 7596, 8635, 9274, 9675, 5603, 6863, 6442, 9500, 7468, 9719,
      6648, 8180, 7944, 5190, 6209, 7175, 5984, 9737, 5548, 6803, 9254, 5932,
      7360, 9221, 5702, 5252, 7041, 7287, 5185, 9139, 7187, 8855, 9310, 9105,
      9769, 9679, 7842, 7466, 7321, 6785, 8770, 8108, 7985, 5186, 9021, 9098,
      6099, 5828, 7217, 9387,
    ]),
    (tuesday = [
      8646, 6945, 6364, 9563, 5627, 5068, 9157, 9439, 5681, 8674, 6379, 8292,
      7552, 5370, 7579, 9851, 8520, 5881, 7138, 7890, 6016, 5630, 5985, 9758,
      8415, 7313, 7761, 9853, 7937, 9268, 7888, 6589, 9366, 9867, 5093, 6684,
      8793, 8116, 8493, 5265, 5815, 7191, 9515, 7825, 9508, 6878, 7180, 8756,
      5717, 7555, 9447, 7703,
    ]),
    (wednesday = [
      6353, 9605, 5464, 9752, 9915, 7446, 9419, 6520, 7438, 6512, 7102, 5047,
      6601, 8303, 9118, 5093, 8463, 7116, 7378, 9738, 9998, 7125, 6445, 6031,
      8710, 5182, 9142, 9415, 9710, 7342, 9425, 7927, 9030, 7742, 8394, 9652,
      5783, 7698, 9492, 6973, 6531, 7698, 8994, 8058, 6406, 5738, 7500, 8357,
      7378, 9598, 5405, 9493,
    ]),
    (thursday = [
      6149, 6439, 9899, 5897, 8589, 7627, 6348, 9625, 9490, 5502, 5723, 8197,
      9866, 6609, 6308, 7163, 9726, 7222, 7549, 6203, 5876, 8836, 6442, 6752,
      8695, 8402, 9638, 9925, 5508, 8636, 5226, 9941, 8936, 5047, 6445, 8063,
      6083, 7383, 7548, 5066, 7107, 6911, 9302, 5202, 7487, 5593, 8620, 8858,
      5360, 6638, 8012, 8701,
    ]),
    (friday = [
      5000, 5642, 9143, 7731, 8477, 8000, 7411, 8813, 8288, 5637, 6244, 6589,
      6362, 6200, 6781, 8371, 7082, 5348, 8842, 9513, 5896, 6628, 8164, 8473,
      5663, 9501, 9177, 8384, 8229, 8781, 9160, 6955, 9407, 7443, 8934, 8072,
      8942, 6859, 5617, 5078, 8910, 6732, 9848, 8951, 9407, 6699, 9842, 7455,
      8720, 5725, 6960, 5127,
    ]),
    (saturday = [
      5448, 8041, 6573, 8104, 6208, 5912, 7927, 8909, 7000, 5059, 6412, 6354,
      8943, 5460, 9979, 5379, 8501, 6831, 7022, 7575, 5828, 5354, 5115, 9625,
      7795, 7003, 5524, 9870, 6591, 8616, 5163, 6656, 8150, 8826, 6875, 5242,
      9585, 9649, 9838, 7150, 6567, 8524, 7613, 7809, 5562, 7799, 7179, 5184,
      7960, 9455, 5633, 9085,
    ])
  )
);
*/
// #7
/*
This program tests the life of an evaporator containing a gas.

We know the content of the evaporator (content in ml), the percentage of foam or gas lost every day (evap_per_day) and the threshold (threshold) in percentage beyond which the evaporator is no longer useful. All numbers are strictly positive.

The program reports the nth day (as an integer) on which the evaporator will be out of use.
Example:

evaporator(10, 10, 5) -> 29

Note:

Content is in fact not necessary in the body of the function "evaporator", you can use it or not use it, as you wish. Some people might prefer to reason with content, some other with percentages only. It's up to you but you must keep it as a parameter because the tests have it as an argument.
*/
/*
function evaporator(content, evap_per_day, threshold) {
  let count = 0;

  while()
}

console.log(evaporator(10, 10, 10));
console.log(evaporator(10, 10, 5));
*/
// // Возможные символы для барабанов
// const symbols = ["🍒", "🍋", "🍊", "🍉", "⭐", "💎"];
// function spinReel() {
//   // Случайный выбор символа из массива
//   const randomIndex = Math.floor(Math.random() * symbols.length);
//   return symbols[randomIndex];
// }
// function playSlotMachine() {
//   // Запуск трех барабанов
//   const reel1 = spinReel();
//   const reel2 = spinReel();
//   const reel3 = spinReel();
//   console.log(`🎰 ${reel1} | ${reel2} | ${reel3} 🎰`);
//   // Проверка на выигрыш
//   if (reel1 === reel2 && reel2 === reel3) {
//     console.log("🎉 Congratulations! You won! 🎉");
//   } else {
//     console.log("😢 Try again!");
//   }
// }
// // Запуск слот-машины
// playSlotMachine();
// 20.11.2024
// #1
/*
An element in an array is dominant if it is greater than all elements to its right. You will be given an array and your task will be to return a list of all dominant elements. For example:

solve([1,21,4,7,5]) = [21,7,5] because 21, 7 and 5 are greater than elments to their right. 
solve([5,4,3,2,1]) = [5,4,3,2,1]

Notice that the last element is always included. All numbers will be greater than 0.
*/
/*
function solve(arr) {
  let res = [];
  let max = -Infinity;
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > max) {
      res.push(arr[i]);
      max = arr[i];
      console.log(res);
    }
  }
  return res.reverse();
}

console.log(solve([1, 21, 4, 7, 5]));
console.log(solve([5, 4, 3, 2, 1]));
*/
// #2
/*
Write a method that will search an array of strings for all strings that contain another string, ignoring capitalization. Then return an array of the found strings.

The method takes two parameters, the query string and the array of strings to search, and returns an array.

If the string isn't contained in any of the strings in the array, the method returns an array containing a single string: "Empty" (or Nothing in Haskell, or "None" in Python and C)
Examples

If the string to search for is "me", and the array to search is ["home", "milk", "Mercury", "fish"], the method should return ["home", "Mercury"].
*/
/*
function wordSearch(query, seq) {
  const pattern = query;
  const flags = "gi";

  const regex = new RegExp(pattern, flags);
  let res = [];
  for (let i = 0; i < seq.length; i++) {
    if (seq[i].match(regex)) {
      res.push(seq[i]);
    }
  }
  return res.length === 0 ? ["Empty"] : res;
}

console.log(wordSearch("ab", ["za", "ab", "abc", "zab", "zbc"]));
console.log(wordSearch("ab", ["za", "aB", "Abc", "zAB", "zbc"]));
console.log(wordSearch("abqq", ["za", "aB", "Abc", "zAB", "zbc"]));
*/
// #3
/*
Write a generic function chainer

Write a generic function chainer that takes a starting value, and an array of functions to execute on it (array of symbols for Ruby).

The input for each function is the output of the previous function (except the first function, which takes the starting value as its input). Return the final value after execution is complete.

function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

chain(2, [add, mult]);
// returns 90;
*/
/*
function chain(input, fs) {
  return fs.reduce((acc, func) => func(acc), input);
}

function add(num) {
  return num + 1;
}

function mult(num) {
  return num * 30;
}

console.log(chain(2, [add, mult]));
*/
// #4
/*
Complete the function that takes an array of words.

You must concatenate the nth letter from each word to construct a new word which should be returned as a string, where n is the position of the word in the list.

For example:

["yoda", "best", "has"]  -->  "yes"
  ^        ^        ^
  n=0     n=1     n=2

Note: Test cases contain valid input only - i.e. a string array or an empty array; and each word will have enough letters.
*/
/*
function nthChar(words) {
  if (words.length === 0) return "";
  return words.map((word, index) => word[index]).join("");
}

console.log(nthChar([]));
console.log(nthChar(["yoda", "best", "has"]));
*/
// #5
/*
Write a function that returns a sequence (index begins with 1) of all the even characters from a string. If the string is smaller than two characters or longer than 100 characters, the function should return "invalid string".

For example:

"abcdefghijklm" --> ["b", "d", "f", "h", "j", "l"]
"a"             --> "invalid string"
*/
/*
function evenChars(string) {
  if (string.length < 2 || string.length > 100) {
    return "invalid string";
  }
  let res = [];
  let arr = string.split("");
  console.log(arr);
  for (let i = 1; i <= arr.length; i++) {
    if (i % 2 === 0) {
      res.push(arr[i - 1]);
    }
  }
  return res;
}

console.log(evenChars("a"));
console.log(evenChars("abcdefghijklm"));
*/
// #6
/*
Dot Calculator

You have to write a calculator that receives strings for input. The dots will represent the number in the equation. There will be dots on one side, an operator, and dots again after the operator. The dots and the operator will be separated by one space.

Here are the following valid operators :

    + Addition
    - Subtraction
    * Multiplication
    // Integer Division

Your Work (Task)

You'll have to return a string that contains dots, as many the equation returns. If the result is 0, return the empty string. When it comes to subtraction, the first number will always be greater than or equal to the second number.
Examples (Input => Output)

* "..... + ..............." => "...................."
* "..... - ..."             => ".."
* "..... - ."               => "...."
* "..... * ..."             => "..............."
* "..... * .."              => ".........."
* "..... // .."             => ".."
* "..... // ."              => "....."
* ". // .."                 => ""
* ".. - .."                 => ""
*/
/*
function dotCalculator(equation) {
  const [left, operator, right] = equation.split(" ");
  console.log([left, operator, right]);

  const leftDots = left.length;
  const rightDots = right.length;

  switch (operator) {
    case "+":
      return ".".repeat(leftDots + rightDots);
    case "-":
      return ".".repeat(Math.max(leftDots - rightDots, 0));
    case "*":
      return ".".repeat(leftDots * rightDots);
    case "//":
      return ".".repeat(Math.floor(leftDots / rightDots));
    default:
      "Invalid operator";
  }
}

console.log(dotCalculator("..... + .."));
console.log(dotCalculator("..... - ..."));
console.log(dotCalculator("..... * ..."));
console.log(dotCalculator("..... // .."));
*/
// #7
/*
Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

    If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

    If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

    If the total of both even and odd numbers are identical return: "Even and Odd are the same"
*/
/*
function evenOrOdd(str) {
  let countEven = 0;
  let countOdd = 0;
  const arr = str.split("").map(Number);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      countEven += arr[i];
    } else {
      countOdd += arr[i];
    }
  }
  // if (countEven > countOdd) return "Even is greater than Odd";
  // if (countOdd > countEven) return "Odd is greater than Even";
  // if (countEven === countOdd) return "Even and Odd are the same";

  return countEven === countOdd
    ? "Even and Odd are the same"
    : countEven > countOdd
    ? "Even is greater than Odd"
    : "Odd is greater than Even";
}

console.log(evenOrOdd("12"));
console.log(evenOrOdd("123"));
console.log(evenOrOdd("112"));

*/
// #8
/*
Wilson primes satisfy the following condition. Let PPP represent a prime number.

Then,
(P−1)!+1P∗P\displaystyle\frac{(P-1)! + 1}{P * P}P∗P(P−1)!+1​

should give a whole number, where P!P!P! is the factorial of PPP.

Your task is to create a function that returns true if the given number is a Wilson prime and false otherwise.
*/
/*
function amIWilson(n) {
  return [5, 13, 563].indexOf(n) === -1 ? false : true;
}

console.log(amIWilson(5));
console.log(amIWilson(9));
console.log(amIWilson(563));
*/
// #9
/*
I've got a crazy mental illness. I dislike numbers a lot. But it's a little complicated: The number I'm afraid of depends on which day of the week it is... This is a concrete description of my mental illness:

Monday --> 12

Tuesday --> numbers greater than 95

Wednesday --> 34

Thursday --> 0

Friday --> numbers divisible by 2

Saturday --> 56

Sunday --> 666 or -666

Write a function which takes a string (day of the week) and an integer (number to be tested) so it tells the doctor if I'm afraid or not. (return a boolean)
*/
/*
var AmIAfraid = function (day, num) {
  switch (day) {
    case "Monday":
      return num === 12 ? true : false;
    case "Tuesday":
      return num > 95 ? true : false;
    case "Wednesday":
      return num === 34 ? true : false;
    case "Thursday":
      return num === 0 ? true : false;
    case "Friday":
      return num % 2 === 0 ? true : false;
    case "Saturday":
      return num === 56 ? true : false;
    case "Sunday":
      return num === 666 || num === -666 ? true : false;
  }
};

console.log(AmIAfraid("Monday", 13));
console.log(AmIAfraid("Sunday", -666));
console.log(AmIAfraid("Tuesday", 2));
console.log(AmIAfraid("Tuesday", 965));
console.log(AmIAfraid("Friday", 2));
*/
// #10
/*
Given a string, return true if the first instance of "x" in the string is immediately followed by the string "xx".

"abraxxxas" → true
"xoxotrololololololoxxx" → false
"softX kitty, warm kitty, xxxxx" → true
"softx kitty, warm kitty, xxxxx" → false

Note :

    capital X's do not count as an occurrence of "x".
    if there are no "x"'s then return false
*/
/*
function tripleX(str) {
  let first = str.indexOf("x");

  if (first === -1 || first + 2 >= str.length) {
    return false;
  }

  return str[first] === "x" && str[first + 1] === "x" && str[first + 2] === "x";
}

console.log(tripleX("abraxxxas"));
console.log(tripleX("xoxotrololololololoxxx"));
*/

// 28.11.2024
// #1
/*
The function takes in 2 inputs x and y, and should return x to the power of y

Simple, right? But you're NOT allowed to use Math.pow();

Obs: x and y will be naturals, so DON'T take fractions into consideration;

Note : zero to the power of zero equals one in this kata
*/
/*
function power(x, y) {
  let res = 1;
  for (let i = 0; i < y; i++) {
    res *= x;
  }

  return res;
}

console.log(power(2, 2));
console.log(power(3, 2));
*/

// #2
/*
You will be given an array of objects (associative arrays in PHP, table in COBOL, dictionaries in Python) representing data about developers who have signed up to attend the next coding meetup that you are organising.

Your task is to return an object (associative array in PHP, table in COBOL, dictionary in Python) which includes the count of each coding language represented at the meetup.

For example, given the following input array:

var list1 = [
  { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
  { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
  { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
  { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];
your function should return the following object (associative array in PHP, table in COBOL):

{ C: 2, JavaScript: 1, Ruby: 1 }
*/
/*
function countLanguages(list) {
  let arr = [];

  for (let i = 0; i < list.length; i++) {
    let el = list[i].language;
    arr.push(el);
  }

  let ht = {};

  for (const x of arr) {
    ht[x] = (ht[x] || 0) + 1;
  }

  return ht;
}

var list1 = [
  {
    firstName: "Noah",
    lastName: "M.",
    country: "Switzerland",
    continent: "Europe",
    age: 19,
    language: "C",
  },
  {
    firstName: "Anna",
    lastName: "R.",
    country: "Liechtenstein",
    continent: "Europe",
    age: 52,
    language: "JavaScript",
  },
  {
    firstName: "Ramon",
    lastName: "R.",
    country: "Paraguay",
    continent: "Americas",
    age: 29,
    language: "Ruby",
  },
  {
    firstName: "George",
    lastName: "B.",
    country: "England",
    continent: "Europe",
    age: 81,
    language: "C",
  },
];

console.log(countLanguages(list1));
*/

// 05.12.2024

// #1
/*
All we eat is water and dry matter.

Let us begin with an example:

John bought potatoes: their weight is 100 kilograms. Potatoes contain water and dry matter. The water content is 99 percent of the total weight. He thinks they are too wet and puts them in an oven - at low temperature - for them to lose some water.

At the output the water content is only 98%.

What is the total weight in kilograms (water content plus dry matter) coming out of the oven?

He finds 50 kilograms and he thinks he made a mistake: "So much weight lost for such a small change in water content!"

Can you help him?
Task

Write function potatoes with

    int parameter p0 - initial percent of water-
    int parameter w0 - initial weight -
    int parameter p1 - final percent of water -

potatoesshould return the final weight coming out of the oven w1 truncated as an int.
Example:

potatoes(99, 100, 98) --> 50
*/
/*
function potatoes(p0, w0, p1) {
  let dryMatter = (w0 * (100 - p0)) / 100;
  let finalWeight = dryMatter / (1 - p1 / 100);

  return Math.floor(finalWeight + 1e-9);
}

console.log(potatoes(82, 127, 80));
*/

// #2
/*
A new task for you!

    You have to create a method, that corrects a given time string.
    There was a problem in addition, so many of the time strings are broken.
    Time is formatted using the 24-hour clock, so from 00:00:00 to 23:59:59.

Examples

"09:10:01" -> "09:10:01"  
"11:70:10" -> "12:10:10"  
"19:99:99" -> "20:40:39"  
"24:01:01" -> "00:01:01"  

If the input-string is null or empty return exactly this value! (empty string for C++) If the time-string-format is invalid, return null. (empty string for C++)

Have fun coding it and please don't forget to vote and rank this kata! :-)

I have created other katas. Have a look if you like coding and challenges.
*/
/*
function timeCorrect(timestring) {
  if (!timestring) return timestring; // Если строка пуста, вернем её как есть.

  // Проверяем корректность формата времени
  let arr = timestring.split(":");
  if (arr.length !== 3) return null; // Если части времени не три, возвращаем null

  // Преобразуем каждую часть в число и проверим на NaN
  let h = parseInt(arr[0], 10);
  let m = parseInt(arr[1], 10);
  let s = parseInt(arr[2], 10);

  // Если одна из частей не является числом, возвращаем null
  if (isNaN(h) || isNaN(m) || isNaN(s)) return null;

  // Исправление секунд
  if (s >= 60) {
    m += Math.floor(s / 60);
    s = s % 60;
  }

  // Исправление минут
  if (m >= 60) {
    h += Math.floor(m / 60);
    m = m % 60;
  }

  // Исправление часов
  if (h >= 24) {
    h = h % 24;
  }

  // Формируем строку с исправленным временем, гарантируя двухзначное отображение
  return `${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}:${String(
    s
  ).padStart(2, "0")}`;
}

console.log(timeCorrect(""));
console.log(timeCorrect("09:10:01"));
console.log(timeCorrect("11:70:10"));
console.log(timeCorrect("19:99:99"));
*/

// 06.12.2024
// #3
/*
function testit(a,b){
  //return a+b ?
  //return a*b ?
  return a?b;
}
*/
/*
function testit(a, b) {
  return a | b;
}

console.log(testit(0, 1));
console.log(testit(1, 2));
*/

// #2
/*
const {assert} = require("chai");

describe("Sample tests", () => {
  //return s ?
  it("\"\"", () => assert.strictEqual(testit(""), ""));
  it("a",    () => assert.strictEqual(testit("a"), "a"));
  it("b",    () => assert.strictEqual(testit("b"), "b"));
  //return s.substr(0,1) ?
  it("aa", () => assert.strictEqual(testit("aa"), "a"));
  it("ab", () => assert.strictEqual(testit("ab"), "a"));
  it("bc", () => assert.strictEqual(testit("bc"), "b"));
  //return s.substr(0,s.length/2) ?
  it("aaaa",   () => assert.strictEqual(testit("aaaa"), "aa"));
  it("aaaaaa", () => assert.strictEqual(testit("aaaaaa"), "aaa"));
  //click "Submit" try more testcase...
});
*/
/*
function testit(s) {
  return s.replace(/../g, (s) =>
    String.fromCharCode((s.charCodeAt(0) + s.charCodeAt(1)) / 2)
  );
}

console.log(testit(""));
console.log(testit("a"));

console.log(testit("aa"));
console.log(testit("ba"));

console.log(testit("abab"));
console.log(testit("aaaaaa"));
*/

// #3
/*
Your task is to add a new property usersAnswer to every object in the array questions. The value of usersAnswer should be set to null. The solution should work for array of any length.

For example:

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0
}];

After adding the property the result should be:

var questions = [{
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
    usersAnswer: null
}, {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's pub", "China"],
    corAnswer: 0,
    usersAnswer: null
}];

The questions array is already defined for you and is not the same as the one in the example.
*/
/*
questions.forEach(function (i) {
  i.usersAnswer = null;
});

var questions = [
  {
    question: "What's the currency of the USA?",
    choices: ["US dollar", "Ruble", "Horses", "Gold"],
    corAnswer: 0,
  },
  {
    question: "Where was the American Declaration of Independence signed?",
    choices: ["Philadelphia", "At the bottom", "Frankie's Pub", "China"],
    corAnswer: 0,
  },
];

console.log(propertyToObj(questions));
*/

// #4
/*
In this Kata, we will check if a string contains consecutive letters as they appear in the English alphabet and if each letter occurs only once.

Rules are: (1) the letters are adjacent in the English alphabet, and (2) each letter occurs only once.

For example: 
solve("abc") = True, because it contains a,b,c
solve("abd") = False, because a, b, d are not consecutive/adjacent in the alphabet, and c is missing.
solve("dabc") = True, because it contains a, b, c, d
solve("abbc") = False, because b does not occur once.
solve("v") = True

All inputs will be lowercase letters.

More examples in test cases. Good luck!
*/
/*
function solve(s) {
  if (s.length === 1) return true;

  let ht = {};

  for (const char of s) {
    ht[char] = (ht[char] || 0) + 1;
  }

  if (findRepeated(ht)) {
    return false;
  }

  let arr = [];
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    arr.push(letter.charCodeAt(0) - 96);
  }

  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return false;
    }
  }

  return true;
}

function findRepeated(ht) {
  for (let [key, value] of Object.entries(ht)) {
    if (value > 1) {
      return true;
    }
  }
  return false;
}

console.log(solve("abc"));
console.log(solve("abd"));
console.log(solve("dabc"));
console.log(solve("abbc"));
console.log(solve("v"));
*/

// 10.12.2024
// #1
/*
Javascript has a handy built-in Math.round(x) method that rounds a number to the nearest integer:

Math.round(3.14); // Returns 3
Math.round(17.43); // 17
Math.round(198.499); // 198
Math.round(200.5); // 201
Math.round(1784.76); // 1785
But that is sometimes not enough! What if we wanted to round 3.1415926535 to two decimal places? While some languages (such as PHP) has a round() function that supports rounding to a specified number of decimal places (e.g. <?php round(3.1415926535, 4); /* 3.1416 (rounded to 4 d.p. as specified)  ?>), Javascript does not!

Task
Your task is to create a method, Math.roundTo(number, precision) which rounds a given number to precision decimal places.

You may find the following Math methods useful:

Math.round(x) (of course)
Math.pow(x,y) (returns x to the power of y - e.g. Math.pow(3,4) == 81)
*/

// Math.roundTo = function (number, precision) {
//   return 0;
// };
/*
function roundTo(number, precision) {
  return parseFloat(number.toFixed(precision));
}

console.log(roundTo(3.1415926535, 4));
console.log(roundTo(4.1235343424, 6));
*/

// #2
/*
You will be given an array of objects representing data about developers who have signed up to attend the next coding meetup that you are organising.

Given the following input array:

var list1 = [
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Kseniya', lastName: 'T.', country: 'Belarus', continent: 'Europe', age: 49, language: 'Ruby', githubAdmin: 'no' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Piotr', lastName: 'B.', country: 'Poland', continent: 'Europe', age: 128, language: 'JavaScript', githubAdmin: 'no' }
];
write a function that when executed as findAdmin(list1, 'JavaScript') returns only the JavaScript developers who are GitHub admins:

[
  { firstName: 'Harry', lastName: 'K.', country: 'Brazil', continent: 'Americas', age: 22, language: 'JavaScript', githubAdmin: 'yes' },
  { firstName: 'Jing', lastName: 'X.', country: 'China', continent: 'Asia', age: 34, language: 'JavaScript', githubAdmin: 'yes' }
]
Notes:

The original order should be preserved.
If there are no GitHub admin developers in a given language then return an empty array [].
The input array will always be valid and formatted as in the example above.
The strings representing whether someone is a GitHub admin will always be formatted as 'yes' and 'no' (all lower-case).
The strings representing a given language will always be formatted in the same way (e.g. 'JavaScript' will always be formatted with upper-case 'J' and 'S'.

This kata is part of the Coding Meetup series which includes a number of short and easy to follow katas which have been designed to allow mastering the use of higher-order functions. In JavaScript this includes methods like: forEach, filter, map, reduce, some, every, find, findIndex. Other approaches to solving the katas are of course possible.
*/
/*
function findAdmin(list, lang) {
  let res = [];

  for (let i = 0; i < list.length; i++) {
    if (list[i].language === lang && list[i].githubAdmin === "yes") {
      res.push(list[i]);
    }
  }

  return res;
}

var list = [
  {
    firstName: "Harry",
    lastName: "K.",
    country: "Brazil",
    continent: "Americas",
    age: 22,
    language: "JavaScript",
    githubAdmin: "yes",
  },
  {
    firstName: "Kseniya",
    lastName: "T.",
    country: "Belarus",
    continent: "Europe",
    age: 49,
    language: "Ruby",
    githubAdmin: "no",
  },
  {
    firstName: "Jing",
    lastName: "X.",
    country: "China",
    continent: "Asia",
    age: 34,
    language: "JavaScript",
    githubAdmin: "yes",
  },
  {
    firstName: "Piotr",
    lastName: "B.",
    country: "Poland",
    continent: "Europe",
    age: 128,
    language: "JavaScript",
    githubAdmin: "no",
  },
];
console.log(findAdmin(list, "JavaScript"));
*/

// #3
/*
You are to write a function that takes a string as its first parameter. This string will be a string of words.

You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

Once you have the located string you are finally going to multiply by it the third provided parameter, which will also be an integer. You are additionally required to add a hyphen in between each word.

Example

modifyMultiply ("This is a string", 3, 5) 
*/
/*
function modifyMultiply(str, loc, num) {
  let arr = str.split(" ");
  let word = arr[loc];
  let res = Array.from({ length: num }, (_, index) => word);
  return res.join("-");
}

console.log(modifyMultiply("This is a string", 3, 5));
*/

// #4
/*
Find the last element of the given argument(s). If a single argument is passed and is a list/array or a string, return its last element. It is guaranteed that there will be at least one argument and that single-argument arrays/lists/strings will not be empty.

Examples
last(5)               ==> 5
last([1, 2, 3, 4])    ==>  4
last("xyz")           ==> "z"
last(1, 2, 3, 4)      ==>  4
last([1, 2], [3, 4])  ==>  [3, 4]
last([[1, 2], [3, 4]])  ==>  [3, 4]
*/
/*
function last() {
  let args = [...arguments];

  if (args.length === 1) {
    const item = args[0];

    if (Array.isArray(item) || typeof item === "string") {
      return item[item.length - 1];
    }
    return item;
  }
  return args[args.length - 1];
}

console.log(last(5));
console.log(last([1, 2, 3, 4]));
console.log(last("xyz"));
*/

// 11.12.2024
// #1
/*
Given a list of integers values, your job is to return the sum of the values; however, if the same integer value appears multiple times in the list, you can only count it once in your sum.

For example:

[ 1, 2, 3] ==> 6

[ 1, 3, 8, 1, 8] ==> 12

[ -1, -1, 5, 2, -7] ==> -1

[] ==> null
*/
/*
function uniqueSum(lst) {
  if (!lst.length) return null;

  let set = Array.from(new Set(lst));

  return set.reduce((curr, acc) => curr + acc, 0);
}

console.log(uniqueSum([1, 2, 3]));
console.log(uniqueSum([1, 3, 8, 1, 8]));
console.log(uniqueSum([-1, -1, 5, 2, -7]));
console.log(uniqueSum([]));
*/

// #2
/*
Sexy primes are pairs of two primes that are 6 apart. In this kata, your job is to complete the function which returns true if x & y are sexy, false otherwise.
Examples

5, 11   -->  true
61, 67  -->  true
7, 13   -->  true
5, 7    -->  false
1, 7    -->  false  (1 is not a prime)

Note: x & y are always positive integers, but they are not always in order of precendence... For example you can be given either (5, 11) or (11, 5) - both are valid.
*/
/*
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function sexyPrime(x, y) {
  if (!isPrime(x) || !isPrime(y)) return false;

  return Math.abs(x - y) === 6;
}

console.log(sexyPrime(5, 11));
console.log(sexyPrime(11, 5));
console.log(sexyPrime(2, 3));
console.log(sexyPrime(4, 6));
console.log(sexyPrime(1, 7));
console.log(sexyPrime(83, 89));
*/

// #3
/*
Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
Examples (Input -> Output):

* "String"      -> "SSttrriinngg"
* "Hello World" -> "HHeelllloo  WWoorrlldd"
* "1234!_ "     -> "11223344!!__  "
*/
/*
function doubleChar(str) {
  let res = "";
  for (let i = 0; i < str.length; i++) {
    res += str[i] + str[i];
  }
  return res;
}

console.log(doubleChar("String"));
console.log(doubleChar("1234!_ "));
*/

// #4
/*
Factorials are often used in probability and are used as an introductory problem for looping constructs. In this kata you will be summing together multiple factorials.

Here are a few examples of factorials:

4 Factorial = 4! = 4 * 3 * 2 * 1 = 24

6 Factorial = 6! = 6 * 5 * 4 * 3 * 2 * 1 = 720

In this kata you will be given a list of values that you must first find the factorial, and then return their sum.

For example if you are passed the list [4, 6] the equivalent mathematical expression would be 4! + 6! which would equal 744.

Good Luck!

Note: Assume that all values in the list are positive integer values > 0 and each value in the list is unique.
*/
/*
function factorial(num) {
  if (num === 0 || num === 1) return 1;
  let fact = 1;
  for (let i = 2; i <= num; i++) {
    fact *= i;
  }
  return fact;
}

function sumFactorial(arr) {
  return arr.reduce((acc, curr) => acc + factorial(curr), 0);
}

console.log(sumFactorial([4, 6]));
console.log(sumFactorial([5, 4, 1]));
*/

// 12.12.2024
// #1
/*
Write a function that checks whether all elements in an array are square numbers. The function should be able to take any number of array elements.

Your function should return true if all elements in the array are square numbers and false if not.

An empty array should return undefined / None / nil /false (for C). You can assume that all array elements will be positive integers.

Examples:

isSquare([1, 4, 9, 16]) --> true

isSquare([3, 4, 7, 9]) --> false

isSquare([]) --> undefined

is_square([1, 4, 9, 16]) --> True

is_square([3, 4, 7, 9]) --> False

is_square([]) --> None
*/
/*
var isSquare = function (arr) {
  if (!arr.length) return undefined;

  for (let i = 0; i < arr.length; i++) {
    let num = Math.sqrt(arr[i]);

    if (num % 1 !== 0) {
      return false;
    }
  }
  return true;
};

console.log(isSquare([1, 4, 9, 16]));
console.log(isSquare([5, 4, 9, 16]));
console.log(isSquare([]));
console.log(isSquare([1, 2, 3, 4, 5, 6]));
*/

// #2
/*
You might know some pretty large perfect squares. But what about the NEXT one?

Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

If the argument is itself not a perfect square then return either -1 or an empty value like None or null, depending on your language. You may assume the argument is non-negative.

Examples ( Input --> Output )
121 --> 144
625 --> 676
114 --> -1  #  because 114 is not a perfect square
*/
/*
function findNextSquare(sq) {
  if (Math.sqrt(sq) % 1 !== 0) {
    return -1;
  }

  let i = sq + 1;
  while (Math.sqrt(i) % 1 !== 0) {
    i++;
  }
  return i;
}

console.log(findNextSquare(121));
console.log(findNextSquare(625));
*/

// #3
/*
Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}
returns true  / True if every element in an array is an integer or a float with no decimals.
returns true  / True if array is empty.
returns false / False for every other input.
*/
/*
function isIntArray(arr) {
  if (!arr.length) return true;
  let count = 0;
  // for (let i = 0; i < arr.length; i++) {}
  return arr.map((el) => {
    return isInteger(el);
    // if (el === true) {
    //   count++;
    // }
    // if (count === arr.length) {
    //   return true;
    // }
  });
}

function isInteger(num) {
  return typeof num === "number" && num % 1 === 0;
}

console.log(isIntArray([]));
console.log(isIntArray([1, 2, 3, 4]));
console.log(isIntArray([1, 2, 3, NaN]));
*/

// 13.12.2024
// #1
/*
Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.

Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.

Rules:

Obviously the words should be Caps, Every word should end with '!!!!', Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.
*/
/*
function gordon(a) {
  let res = "";
  let arr = a.split(" ");
  for (let i = 0; i < arr.length; i++) {
    let word =
      arr[i]
        .replace(/a/g, "@")
        .replace(/[aeiou]/gi, "*")
        .toUpperCase() + "!!!!";
    res += word + " ";
  }
  return res.trim();
}

console.log(gordon("What feck damn cake")); // WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!
console.log(gordon("i am a chef")); // *!!!! @M!!!! @!!!! CH*F!!!!
*/

// #2
/*
Complete the method that takes a sequence of objects with two keys each: country or state, and capital. Keys may be symbols or strings.

The method should return an array of sentences declaring the state or country and its capital.
Examples

state_capitals = [{state: 'Maine', capital: 'Augusta'}]
capital(state_capitals)[0] // returns "The capital of Maine is Augusta"

country_capitals = [{'country' : 'Spain', 'capital' : 'Madrid'}]
capital(country_capitals)[0]  // returns "The capital of Spain is Madrid"

mixed_capitals: [{"state" : 'Maine', capital: 'Augusta'}, {country: 'Spain', "capital" : "Madrid"}]
capital(mixed_capitals)[1] // returns "The capital of Spain is Madrid"
*/
/*
function capital(capitals) {
  return capitals.map((el) => {
    // Проверяем, есть ли ключ "state" или "country"
    let region = el.state || el.country;
    return `The capital of ${region} is ${el.capital}`;
  });
}

console.log(capital([{ "country": "Spain", "capital": "Madrid" }]));
// "The capital of Spain is Madrid"
// console.log(capital([{ state: "Maine", capital: "Augusta" }]));
*/

// #3
/*
Implement a function which takes a sequence of objects and a property name, and returns a sequence containing the named property of each object.

For example:

pluck([{a:1}, {a:2}], 'a')      // -> [1,2]
pluck([{a:1, b:3}, {a:2}], 'b') // -> [3, undefined]

If an object is missing the property, you should just leave it as undefined/None in the output array
*/
/*
function pluck(objs, name) {
  let res = [];
  for (let i = 0; i < objs.length; i++) {
    let obj = objs[i];
    res.push(obj[name]);
  }
  return res;
}

console.log(pluck([{ a: 1 }, { a: 2 }], "a"));
console.log(pluck([{ a: 1, b: 3 }, { a: 2 }], "b"));
*/

// #4
/*
Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

Return n if the input is already a multiple of three, and if no such number exists, return null, a similar empty value, or -1.
Examples

1      => null
25     => null
36     => 36
1244   => 12
952406 => 9
*/
/*
const prevMultOfThree = (n) => {
  if (n % 3 === 0) return n;

  while (n > 0) {
    if (n % 3 === 0) return n;
    n = Math.floor(n / 10);
  }
  return null;
};

console.log(prevMultOfThree(1));
console.log(prevMultOfThree(25));
console.log(prevMultOfThree(36));
console.log(prevMultOfThree(1244));
*/

// #5
/*
Let's build a calculator.

This is very basic Javascript kata.

The test expects you to provide a Calculator object with the following methods:

Calculator.add()
Calculator.subtract()
Calculator.multiply()
Calculator.divide()

Each method expects two arguments, so for instance:

Calculator.add(1,4) should return 5.

Only integers are expected to be passed in as arguments, and the divide method should return 'false' when trying the divide by zero.
*/
/*
var Calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => (b === 0 ? false : a / b),
};
*/

// #6
/*
Write reverseList function that simply reverses lists.
*/
/*
function reverseList(arr) {
  return arr.reverse();
}

console.log(reverseList([1, 2, 3]));
*/

// #7
/*
Write a function that accepts two numbers a and b and returns whether a is smaller than, bigger than, or equal to b, as a string.

(5, 4)   ---> "5 is greater than 4"
(-4, -7) ---> "-4 is greater than -7"
(2, 2)   ---> "2 is equal to 2"

There is only one problem...

You cannot use if statements, and you cannot use the ternary operator ? :.

In fact the word if and the character ? are not allowed in your code. 
*/
/*
function noIfsNoButs(a, b) {
  switch (true) {
    case a > b:
      return `${a} is greater than ${b}`;
    case a < b:
      return `${a} is smaller than ${b}`;
    default:
      return `${a} is equal to ${b}`;
  }
}

console.log(noIfsNoButs(5, 4));
console.log(noIfsNoButs(-4, -7));
console.log(noIfsNoButs(2, 2));
*/

// 16.12.2024
// #1
/*
You have a quiver of arrows, but some have been damaged. The quiver contains arrows with an optional range information (different types of targets are positioned at different ranges), so each item is an arrow.

You need to verify that you have some good ones left, in order to prepare for battle:

anyArrows([{range: 5}, {range: 10, damaged: true}, {damaged: true}])

If an arrow in the quiver does not have a damaged status, it means it's new.

The expected result is a boolean, indicating whether you have any good arrows left.
*/
/*
function anyArrows(arrows) {
  let res = 0;

  for (let i = 0; i < arrows.length; i++) {
    if (arrows[i].damaged === true) {
      res++;
    }
  }
  return arrows.length > res;
}

console.log(
  anyArrows([{ range: 5 }, { range: 10, damaged: true }, { damaged: true }])
);
console.log(anyArrows([{ range: 10, damaged: true }, { damaged: true }]));
*/

// 17.12.2024
/*
Determine the total number of digits in the integer (n>=0) given as input to the function. For example, 9 is a single digit, 66 has 2 digits and 128685 has 6 digits. Be careful to avoid overflows/underflows.

All inputs will be valid.
*/
/*
function digits(n) {
  let arr = String(n).split("").map(Number);
  console.log(arr);
  return arr.length;
}

console.log(digits(9876543210));
console.log(digits(9));
*/

// #2
/*
In programming you know the use of the logical negation operator (!), it reverses the meaning of a condition.

!false = true
!!false = false

Your task is to complete the function 'negationValue()' that takes a string of negations with a value and returns what the value would be if those negations were applied to it.

negationValue("!", false); //=> true
negationValue("!!!!!", true); //=> false
negationValue("!!", []); //=> true

Do not use the eval() function or the Function() constructor in JavaScript.

Note: Always return a boolean value, even if there're no negations.
*/
/*
function negationValue(string, value) {
  let len = string.length;
  let bool = Boolean(value);
  if (len % 2 === 0) {
    return bool;
  } else {
    return !bool;
  }
}

console.log(negationValue("!", false));
console.log(negationValue("!!!", []));
*/

// #3
/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/
/*
function findLongest(array) {
  let maxLength = 0;
  let longestNumb = array[0];

  for (let i = 0; i < array.length; i++) {
    let length = String(array[i]).length;
    if (length > maxLength) {
      maxLength = length;
      longestNumb = array[i];
    }
  }
  return longestNumb;
}

console.log(findLongest([1, 10, 100]));
console.log(findLongest([31440, 94944]));
*/

// #4
/*
You have to create a function namedone_two (oneTwo for Java or Preloaded.OneTwo for C#) that returns 1 or 2 with equal probabilities. one_two is already defined in a global scope and can be called everywhere.

Your goal is to create a function named one_two_three (oneTwoThree for Java or OneTwoThree for C#) that returns 1, 2 or 3 with equal probabilities using only the one_two function.

Do not try to cheat returning repeating non-random sequences. There is a randomness test especially for this case.

*/
/*
function one_two_three() {
  while (true) {
    let a = one_two();
    let b = one_two();

    let result = (a - 1) * 2 + (b - 1);
    if (result < 3) {
      return result + 1;
    }
  }
}
*/

// #5
/*
A family of kookaburras are in my backyard.

I can't see them all, but I can hear them!
How many kookaburras are there?
Hint

The trick to counting kookaburras is to listen carefully

    The males sound like HaHaHa...

    The females sound like hahaha...

    And they always alternate male/female

Examples

    ha = female => 1
    Ha = male => 1
    Haha = male + female => 2
    haHa = female + male => 2
    hahahahaha = female => 1
    hahahahahaHaHaHa = female + male => 2
    HaHaHahahaHaHa = male + female + male => 3

*/
/*
var kookaCounter = function (laughing) {
  return (laughing.match(/(Ha)+|(ha)+/g) || []).length;
};

console.log(kookaCounter(""));
console.log(kookaCounter("hahahahaha"));
console.log(kookaCounter("HaHaHahahaHaHa"));
*/

// #6
/*
You will be given two inputs: a string of words and a letter. For each string, return the alphabetic character after every instance of letter(case insensitive).

If there is a number, punctuation or underscore following the letter, it should not be returned.

If letter = 'r':
comes_after("are you really learning Ruby?") # => "eenu"
comes_after("Katy Perry is on the radio!")   # => "rya"
comes_after("Pirates say arrrrrrrrr.")       # => "arrrrrrrr"
comes_after("r8 your friend")                # => "i"

Return an empty string if there are no instances of letter in the given string.
*/
/*
function comes_after(str, l) {
  let result = ""; // Строка для хранения результата

  // Пройдем по строке и ищем буквы
  for (let i = 0; i < str.length - 1; i++) {
    // Проверяем, совпадает ли текущий символ (без учета регистра) с заданной буквой
    if (str[i].toLowerCase() === l.toLowerCase()) {
      // Если следующий символ - это буква, добавляем его в результат
      if (/[a-zA-Z]/.test(str[i + 1])) {
        result += str[i + 1];
      }
    }
  }

  return result;
}

console.log(comes_after("are you really learning Ruby?", "r"));
*/

// 22.12.2024
// #1
/*
Sort the given array of strings in alphabetical order, case insensitive. For example:

["Hello", "there", "I'm", "fine"]  -->  ["fine", "Hello", "I'm", "there"]
["C", "d", "a", "B"])              -->  ["a", "B", "C", "d"]
*/
/*
sortme = function (names) {
  return names.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));
};

console.log(sortme(["Hello", "there", "I'm", "fine"]));
console.log(sortme(["time", "my", "Problem", "Tell"]));
*/

// #2
/*
This time the input is a sequence of course-ids that are formatted in the following way:

name-yymm

The return of the function shall first be sorted by yymm, then by the name (which varies in length).
*/
/*
sortme1 = function (courses) {
  return courses.sort((a, b) => {
    let [nameA, dateA] = a.split("-");
    let [nameB, dateB] = b.split("-");

    if (dateA !== dateB) {
      return dateA - dateB;
    }

    return nameA.localeCompare(nameB);
  });
};

console.log(sortme1(["web-1305", "site-1305", "web-1304", "site-1304"]));
//  ["site-1304", "web-1304", "site-1305", "web-1305"]
*/

// #3
/*
You have to write an algorithm that flatten an arrays structure to 2 levels. It means that each array under the second level will be merge to its parent. Only two levels are kept.

Empty arrays are ignored.

var array = [1, [2, 3], [4, 5, [6, 7, 8], 9, 10, [11, [12, [13, 14], 15], 16], 17], 18];
flattenTwoLevels(array); // should return [1,[2,3],[4,5,6,7,8,9,10,11,12,13,14,15,16,17], 18]

flattenTwoLevels([1,[2, 3, [], [4, [], 5]]]) // should return [1,[2,3,4,5]]

*/
/*
function flattenTwoLevels(array) {
  return array.map((x) => (Array.isArray(x) ? x.flat(Infinity) : x));
}

console.log(
  flattenTwoLevels([
    1,
    [2, 3],
    [4, 5, [6, 7, 8], 9, 10, [11, [12, [13, 14], 15], 16], 17],
    18,
  ])
); //  [1,[2,3],[4,5,6,7,8,9,10,11,12,13,14,15,16,17], 18]
console.log(flattenTwoLevels([1, [2, 3, [], [4, [], 5]]]));
//[1,[2,3,4,5]]
*/

// 23.12.2024
// #1
/*
Your task is to sum the differences between consecutive pairs in the array in descending order.
Example

[2, 1, 10]  -->  9

In descending order: [10, 2, 1]

Sum: (10 - 2) + (2 - 1) = 8 + 1 = 9

If the array is empty or the array has only one element the result should be 0 (Nothing in Haskell, None in Rust).
*/
/*
function sumOfDifferences(arr) {
  let res = [];
  if (arr.length === 1 || !arr.length) return 0;
  arr.sort((a, b) => b - a);

  for (let i = 0; i < arr.length; i++) {
    let x = arr[i] - arr[i + 1];

    res.push(x);
  }

  return res.slice(0, -1).reduce((acc, curr) => acc + curr, 0);
}

console.log(sumOfDifferences([2, 1, 10])); // [10, 2, 1]
console.log(sumOfDifferences([-3, -2, -1])); // [-1, -2, -3]
*/

// #2
/*
Given an integer n and two other values, build an array of size n filled with these two values alternating.
Examples

5, true, false     -->  [true, false, true, false, true]
10, "blue", "red"  -->  ["blue", "red", "blue", "red", "blue", "red", "blue", "red", "blue", "red"]
0, "one", "two"    -->  []
*/
/*
function alternate(n, f, s) {
  let arr = Array.from({ length: n }, (_, index) => f);
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 1) {
      arr[i] = s;
    }
  }
  return arr;
}

console.log(alternate(5, true, false));
// const arr = Array.from({ length: n }, (_, index) => index + 1);
*/

// #3
/*
Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
4 --> 0 (because 4 is already a one-digit number, there is no multiplication)
*/
/*
function persistence(num) {
  let count = 0;
  while (num >= 10) {
    num = multiple(num);
    count++;
  }
  return count;
}

function multiple(num) {
  return num
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, curr) => acc * curr, 1);
}

console.log(persistence(39));
console.log(persistence(999));
console.log(persistence(4));
*/

// #4
/*
There is an object/class already created called MrFreeze. Mark this object as frozen so that no other changes can be made to it. 
*/
/*
Object.freeze(MrFreeze);
*/

// #5
/*
You are creating a text-based terminal version of your favorite board game. In the board game, each turn has six steps that must happen in this order: roll the dice, move, combat, get coins, buy more health, and print status.

You are using a library (Game.Logic in C#) that already has the functions below. Create a function named doTurn/DoTurn/do_turn that calls the functions in the proper order as described in the paragraph above.

- combat
- buyHealth
- getCoins
- printStatus
- rollDice
- move
*/
/*
function doTurn() {
  rollDice();
  move();
  combat();
  getCoins();
  buyHealth();
  printStatus();
}
*/

// #6
/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/
/*
function evenOrOdd(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(12));
console.log(evenOrOdd(11));
*/

// #7
/*
Write a function that combines two arrays by alternatingly taking elements from each array in turn.

Examples:

[a, b, c, d, e], [1, 2, 3, 4, 5] becomes  [a, 1, b, 2, c, 3, d, 4, e, 5]

[1, 2, 3], [a, b, c, d, e, f] becomes [1, a, 2, b, 3, c, d, e, f]

Points:

    The arrays may be of different lengths, with at least one character/digit.
    One array will be of string characters (in lower case, a-z), a second of integers (all positive starting at 1).
*/
/*
function mergeArrays(a, b) {
  let res = [];
  let lenMin = Math.min(a.length, b.length);

  for (let i = 0; i < lenMin; i++) {
    res.push(a[i]);
    res.push(b[i]);
  }

  res = res.concat(a.slice(lenMin));
  res = res.concat(b.slice(lenMin));

  return res;
}

console.log(mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5]));
// [a, 1, b, 2, c, 3, d, 4, e, 5]
console.log(mergeArrays([1, 2, 3], ["a", "b", "c", "d", "e", "f"]));
// [1, a, 2, b, 3, c, d, e, f]
*/

// #8
/*
This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?
var a == "code";
var b == "wa.rs";
var name == a + b;
*/
/*
var a = "code";
var b = "wa.rs";
var name = a + b;
console.log(name);
*/

// #9
/*
As a part of this Kata, you need to create three functions that one needs to be able to call upon an array:

    all

    This function returns true only if the predicate supplied returns true for all the items in the array [1, 2, 3].all(isGreaterThanZero) => true [-1, 0, 2].all(isGreaterThanZero) => false

    none

    This function returns true only if the predicate supplied returns false for all the items in the array [-1, 2, 3].none(isLessThanZero) => false [-1, -2, -3].none(isGreaterThanZero) => true

    any

    This function returns true if at least one of the items in the array returns true for the predicate supplied [-1, 2, 3].any(isGreaterThanZero) => true [-1, -2, -3].any(isGreaterThanZero) => false

You do not need to worry about the data supplied, it will be an array at all times.
*/
/*
Array.prototype.all = function (p) {
  // Для all нужно, чтобы все элементы удовлетворяли предикату
  for (let i = 0; i < this.length; i++) {
    if (!p(this[i])) {
      return false; // Если хотя бы один элемент не удовлетворяет, возвращаем false
    }
  }
  return true; // Если все элементы прошли предикат, возвращаем true
};

Array.prototype.none = function (p) {
  // Для none нужно, чтобы все элементы не удовлетворяли предикату
  for (let i = 0; i < this.length; i++) {
    if (p(this[i])) {
      return false; // Если хотя бы один элемент удовлетворяет предикату, возвращаем false
    }
  }
  return true; // Если все элементы не удовлетворяют, возвращаем true
};

Array.prototype.any = function (p) {
  // Для any нужно, чтобы хотя бы один элемент удовлетворял предикату
  for (let i = 0; i < this.length; i++) {
    if (p(this[i])) {
      return true; // Если хотя бы один элемент удовлетворяет предикату, возвращаем true
    }
  }
  return false; // Если ни один элемент не удовлетворяет, возвращаем false
};

const isGreaterThanZero = (el) => el > 0;
const isLessThanZero = (el) => el < 0;

console.log([1, 2, 3].all(isGreaterThanZero)); // true
console.log([1, -2, 3].all(isGreaterThanZero)); // false
console.log([-1, 2, 3].none(isLessThanZero)); // false
console.log([-1, -2, -3].none(isGreaterThanZero)); // true
console.log([-1, 2, 3].any(isGreaterThanZero)); // true
console.log([-1, -2, -3].any(isGreaterThanZero)); // false
*/

// #10
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
  ages.sort((a, b) => b - a);
  return [ages[1], ages[0]];
}

console.log(twoOldestAges([1, 2, 10, 8]));
*/

// #11
/*
Complete the keysAndValues function so that it takes in an object and returns the keys and values as separate arrays.

Example:

keysAndValues({a: 1, b: 2, c: 3}) // should return [['a', 'b', 'c'], [1, 2, 3]]

Style Points (JS/CoffeeScript only): This kata only tests for data that uses object literal notation (simple objects). For extra style, can you get your method to check for objects that extend their prototype?
*/
/*
function keysAndValues(data) {
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < Object.keys(data).length; i++) {
    const key = Object.keys(data)[i];
    arr1.push(key);
    arr2.push(data[key]);
  }
  return [arr1, arr2];
}
console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
*/

// 24.12.2024
// #1
/*
Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning a string containing the Roman Numeral representation of that integer.

Modern Roman numerals are written by expressing each digit separately starting with the leftmost digit and skipping any digit with a value of zero. There cannot be more than 3 identical symbols in a row.

In Roman numerals:

    1990 is rendered: 1000=M + 900=CM + 90=XC; resulting in MCMXC.
    2008 is written as 2000=MM, 8=VIII; or MMVIII.
    1666 uses each Roman symbol in descending order: MDCLXVI.

Example:

   1 -->       "I"
1000 -->       "M"
1666 --> "MDCLXVI"

Help:

Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000
*/
/*
function solution(num) {
  let res = "";
  // Словарь римских цифр, упорядоченных по убыванию
  const dictionary = [
    { symbol: "M", value: 1000 },
    { symbol: "CM", value: 900 },
    { symbol: "D", value: 500 },
    { symbol: "CD", value: 400 },
    { symbol: "C", value: 100 },
    { symbol: "XC", value: 90 },
    { symbol: "L", value: 50 },
    { symbol: "XL", value: 40 },
    { symbol: "X", value: 10 },
    { symbol: "IX", value: 9 },
    { symbol: "V", value: 5 },
    { symbol: "IV", value: 4 },
    { symbol: "I", value: 1 },
  ];

  for (let i = 0; i < dictionary.length; i++) {
    while (num >= dictionary[i].value) {
      res += dictionary[i].symbol;
      num -= dictionary[i].value;
    }
  }
  return res;
}

console.log(solution(2008));
console.log(solution(1990));
*/

// #2
/*
The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

39.99 becomes $39.99

The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

Examples:

3 needs to become $3.00

3.1 needs to become $3.10
*/
/*
function formatMoney(amount) {
  let arr = String(amount).split(".");
  let res = "";

  if (arr.length === 2) {
    if (arr[1].length === 1) {
      res = `$${arr[0]}.${arr[1]}0`;
    } else if (arr[1].length === 2) {
      res = `$${arr[0]}.${arr[1]}`;
    }
  } else {
    res = `$${arr[0]}.00`;
  }

  return res;
}
console.log(formatMoney(3.1));
console.log(formatMoney(3));
console.log(formatMoney(39.99));
console.log(formatMoney(631.9));
console.log(formatMoney(631.99));
*/

// #3
/*
Triple Trouble

Create a function that will return a string that combines all of the letters of the three inputed strings in groups. Taking the first letter of all of the inputs and grouping them next to each other. Do this for every letter, see example below!

E.g. Input: "aa", "bb" , "cc" => Output: "abcabc"

Note: You can expect all of the inputs to be the same length.
*/
/*
function tripleTrouble(one, two, three) {
  let len = one.length;
  let res = "";
  for (let i = 0; i < len; i++) {
    res += one[i] + two[i] + three[i];
  }
  return res;
}

console.log(tripleTrouble("aaa", "bbb", "ccc"));
*/

// #4
/*
Write a method, that will get an integer array as parameter and will process every number from this array.

Return a new array with processing every number of the input-array like this:

If the number has an integer square root, take this, otherwise square the number.
Example

[4,3,9,7,2,1] -> [2,9,3,49,4,1]

Notes

The input array will always contain only positive numbers, and will never be empty or null.
*/
/*
function squareOrSquareRoot(array) {
  let res = [];

  for (let i = 0; i < array.length; i++) {
    if (Math.sqrt(array[i]) % 1 === 0) {
      res.push(Math.sqrt(array[i]));
    } else {
      res.push(Math.pow(array[i], 2));
    }
  }
  return res;

  //   return array.map(num =>
  //   Math.sqrt(num) % 1 === 0 ? Math.sqrt(num) : Math.pow(num, 2)
  // );
}

console.log(squareOrSquareRoot([4, 3, 9, 7, 2, 1]));
*/

// 25.12.2024
/*
Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil. Different races will certainly be involved. Each race has a certain worth when battling against others. On the side of good we have the following races, with their associated worth:

    Hobbits: 1
    Men: 2
    Elves: 3
    Dwarves: 3
    Eagles: 4
    Wizards: 10

On the side of evil we have:

    Orcs: 1
    Men: 2
    Wargs: 2
    Goblins: 2
    Uruk Hai: 3
    Trolls: 5
    Wizards: 10

Although weather, location, supplies and valor play a part in any battle, if you add up the worth of the side of good and compare it with the worth of the side of evil, the side with the larger worth will tend to win.

Thus, given the count of each of the races on the side of good, followed by the count of each of the races on the side of evil, determine which side wins.
Input:

The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space. Each string will contain the count of each race on the side of good and evil.

The first parameter will contain the count of each race on the side of good in the following order:

    Hobbits, Men, Elves, Dwarves, Eagles, Wizards.

The second parameter will contain the count of each race on the side of evil in the following order:

    Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.

All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.
Output:

Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.
*/
/*
function goodVsEvil(good, evil) {
  // Оценка силы для хороших и плохих существ
  const fine = {
    "Hobbits": 1,
    "Men": 2,
    "Elves": 3,
    "Dwarves": 3,
    "Eagles": 4,
    "Wizards": 10,
  };
  const bad = {
    "Orcs": 1,
    "Men": 2,
    "Wargs": 2,
    "Goblins": 2,
    "Uruk Hai": 3,
    "Trolls": 5,
    "Wizards": 10,
  };

  // Разбиваем входные строки на массивы
  let goodArr = good.split(" ");
  let evilArr = evil.split(" ");

  // Считаем сумму сил для хороших существ
  let goodCount = goodArr.reduce(
    (acc, count, index) =>
      acc + (parseInt(count) * Object.values(fine)[index] || 0),
    0
  );

  // Считаем сумму сил для плохих существ
  let evilCount = evilArr.reduce(
    (acc, count, index) =>
      acc + (parseInt(count) * Object.values(bad)[index] || 0),
    0
  );

  // Сравниваем результаты
  if (goodCount > evilCount) {
    return "Battle Result: Good triumphs over Evil";
  } else if (goodCount < evilCount) {
    return "Battle Result: Evil eradicates all trace of Good";
  } else {
    return "Battle Result: No victor on this battle field";
  }
}

console.log(goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1"));
console.log(goodVsEvil("0 0 0 0 0 10", "0 1 1 1 1 0 0"));
*/

// #2
/*
Implement the function generateRange which takes three arguments (start, stop, step) and returns the range of integers from start to stop (inclusive) in increments of step.
Examples

(1, 10, 1) -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
(-10, 1, 1) -> [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1]
(1, 15, 20) -> [1]

Note

    start < stop
    step > 0
*/
/*
function generateRange(min, max, step) {
  let res = [];
  for (let i = min; i < max + 1; i += step) {
    res.push(i);
  }
  return res;
}

// console.log(generateRange(1, 10, 1));
console.log(generateRange(2, 10, 2));
// console.log(generateRange(-10, 1, 1));
*/

// #3
/*
Some new animals have arrived at the zoo. The zoo keeper is concerned that perhaps the animals do not have the right tails. To help her, you must correct the broken function to make sure that the second argument (tail), is the same as the last letter of the first argument (body) - otherwise the tail wouldn't fit!

If the tail is right return true, else return false.

The arguments will always be non empty strings, and normal letters.
*/
/*
function correctTail(body, tail) {
  return body[body.length - 1] === tail ? true : false;
}

console.log(correctTail("Fox", "x"));
*/

// #4
/*
Your task is to write a function, which takes two arguments and returns a sequence. First argument is a sequence of values, second is multiplier. The function should filter all non-numeric values and multiply the rest by given multiplier.
*/
/*
function multiplyAndFilter(arr, m) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !Number.isNaN(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res.map((el) => el * m);
}

console.log(
  multiplyAndFilter(
    [1, null, function () {}, 2.5, "string", 10, undefined, NaN, {}, []],
    3
  )
);
*/

// 02.01.2024
// #1
/*
write me a function stringy that takes a size and returns a string of alternating 1s and 0s.

the string should start with a 1.

a string with size 6 should return :'101010'.

with size 4 should return : '1010'.

with size 12 should return : '101010101010'.

The size will always be positive and will only use whole numbers.
*/
/*
function stringy(size) {
  let res = "";

  for (let i = 1; i <= Math.floor(size / 2); i++) {
    res += "10";
  }

  if (size % 2 !== 0) {
    res += "1";
  }

  return res;
}

console.log(stringy(25));
console.log(stringy(4));
*/

// #2
/*
Is it possible to write a book without the letter 'e' ?

Task
Given String str, return:

How many "e" does it contain (case-insensitive) in string format.
If given String doesn't contain any "e", return: "There is no "e"."
If given String is empty, return empty String.
If given String is `null`/`None`/`nil`, return `null`/`None`/`nil`
*/
/*
const fizzBuzz = (n) => {
  switch (true) {
    case n === 1:
      return n;
    case n % 3 === 0 && n % 5 !== 0:
      return "Fizz";
    case n % 5 === 0 && n % 3 !== 0:
      return "Buzz";
    case n % 3 !== 0 && n % 5 !== 0:
      return n;
    case n % 3 === 0 && n % 5 === 0:
      return "FizzBuzz";
  }
};

console.log(fizzBuzz(1));
console.log(fizzBuzz(3));
console.log(fizzBuzz(6));
console.log(fizzBuzz(7));
console.log(fizzBuzz(10));
console.log(fizzBuzz(30));
*/

// #3
/*
In this Kata, you will be given a multi-dimensional array containing 2 or more sub-arrays of integers. Your task is to find the maximum product that can be formed by taking any one element from each sub-array.

Examples:
solve( [[1, 2],[3, 4]] ) = 8. The max product is given by 2 * 4
solve( [[10,-15],[-1,-3]] ) = 45, given by (-15) * (-3)
solve( [[1,-1],[2,3],[10,-100]] ) = 300, given by (-1) * 3 * (-100)
*/
/*
function solve(a) {
  let min = 1,
    max = 1;
  for (let x of a) {
    let cur = [];
    for (let y of x) cur.push(y * min), cur.push(y * max);
    min = Math.min(...cur);
    max = Math.max(...cur);
  }
  return max;
}

console.log(
  solve([
    [-1, 2, -3, 4],
    [1, -2, 3, -4],
  ])
);
console.log(
  solve([
    [14, 2],
    [0, -16],
    [-12, -16],
  ])
);
*/

// 03.01.2025
// #1
/*
In this kata you need to write a function that will receive two strings (n1 and n2), each representing an integer as a binary number. A third parameter will be provided (o) as a string representing one of the following operators: add, subtract, multiply.

Your task is to write the calculate function so that it will perform the arithmetic and the result returned should be a string representing the binary result.

Examples:

1 + 1 === 10
10 + 10 === 100

Negative binary numbers are usually preceded by several 1's. For this kata, negative numbers can be represented with the negative symbol at the beginning of the string.

Examples of negatives:

1 - 10 === -1
10 - 100 === -10
 */
/*
function calculate(n1, n2, o) {
  n1 = parseInt(n1, 2);
  n2 = parseInt(n2, 2);

  switch (o) {
    case "add":
      return (n1 + n2).toString(2);
    case "subtract":
      return (n1 - n2).toString(2);
    case "multiply":
      return (n1 * n2).toString(2);
  }
}

console.log(calculate("1", "1", "add"));
console.log(calculate("100", "10", "subtract"));
console.log(calculate("10", "10", "multiply"));
console.log(calculate("100", "10", "add"));
console.log(calculate("100", "10", "add"));
*/

// #2
/*
Implement a function that receives two IPv4 addresses, and returns the number of addresses between them (including the first one, excluding the last one).

All inputs will be valid IPv4 addresses in the form of strings. The last address will always be greater than the first one.
Examples

* With input "10.0.0.0", "10.0.0.50"  => return   50 
* With input "10.0.0.0", "10.0.1.0"   => return  256 
* With input "20.0.0.10", "20.0.1.0"  => return  246
*/
/*
function ipsBetween(start, end) {
  function ipToNum(ip) {
    return ip.split(".").reduce((acc, octet) => acc * 256 + parseInt(octet), 0);
  }
  let startNum = ipToNum(start);
  let endNum = ipToNum(end);
  // console.log(startNum, endNum);
  return endNum - startNum;
}

console.log(ipsBetween("10.0.0.0", "10.0.0.50")); // 50
console.log(ipsBetween("10.11.12.13", "10.11.13.0")); // 243
*/

// #3
/*
Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!
*/
/*
function createArray(number) {
  var newArray = [];

  for (var counter = 1; counter <= number; counter++) {
    newArray.push(counter);
  }

  return newArray;
}
*/

// #4
/*
Create a parser to interpret and execute the Deadfish language.

Deadfish operates on a single value in memory, which is initially set to 0.

It uses four single-character commands:

    i: Increment the value
    d: Decrement the value
    s: Square the value
    o: Output the value to a result array

All other instructions are no-ops and have no effect.
Examples

Program "iiisdoso" should return numbers [8, 64].
Program "iiisdosodddddiso" should return numbers [8, 64, 3600].
*/
/*
function parse(data) {
  let res = [];
  let count = 0;
  for (let i = 0; i < data.length; i++) {
    switch (data[i]) {
      case "i":
        count++;
        break;
      case "d":
        count--;
        break;
      case "s":
        count = count * count;
        break;
      case "o":
        res.push(count);
        break;
      // Игнорируем любые другие символы
      default:
        break;
    }
  }
  return res;
}

console.log(parse("iiisdoso"));
console.log(parse("iiisxxxdoso"));
*/

// #5
/*
Given a Divisor and a Bound , Find the largest integer N , Such That ,
Conditions :

    N is divisible by divisor

    N is less than or equal to bound

    N is greater than 0.

Notes

    The parameters (divisor, bound) passed to the function are only positive values .
    It's guaranteed that a divisor is Found
*/
/*
function maxMultiple(divisor, bound) {
  // let n = 0;
  // for (let i = divisor; i <= bound; i++) {
  //   if (i % divisor === 0) {
  //     n = i;
  //   }
  // }
  // return n;
  return Math.floor(bound / divisor) * divisor;
}

console.log(maxMultiple(2, 7));
console.log(maxMultiple(10, 50));
*/

// #6
/*
Description:

Groups of characters decided to make a battle. Help them to figure out which group is more powerful. Create a function that will accept 2 strings and return the one who's stronger.
Rules:

    Each character have its own power: A = 1, B = 2, ... Y = 25, Z = 26
    Strings will consist of uppercase letters only
    Only two groups to a fight.
    Group whose total power (A + B + C + ...) is bigger wins.
    If the powers are equal, it's a tie.

Examples:

      * "ONE", "TWO"  -> "TWO"`
      * "ONE", "NEO"  -> "Tie!"

*/
/*
function battle(x, y) {
  // Сравниваем суммы сил строк
  let powerX = count(x);
  let powerY = count(y);

  if (powerX > powerY) {
    return x; // Если сила первой строки больше, она побеждает
  } else if (powerX < powerY) {
    return y; // Если сила второй строки больше, она побеждает
  } else {
    return "Tie!"; // Если силы одинаковы, ничья
  }
}

function count(string) {
  let sum = 0;
  for (let i = 0; i < string.length; i++) {
    // Для каждого символа находим его силу (A = 1, B = 2, ..., Z = 26)
    sum += string[i].charCodeAt(0) - 64;
  }
  return sum;
}

console.log(battle("AAA", "Z"));
console.log(battle("ONE", "NEO"));
*/

// 04.01.2025
// #1
/*
Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.

Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. it must make the first character in the string upper case).

The string will always start with a letter and will never be empty.

Examples:

"hello" --> "Hello"
"Hello" --> "Hello" (the first letter was already capitalized)
"a"     --> "A"
*/
/*
function capitalizeWord(word) {
  let first = word[0];

  let remaining = word.slice(1);

  return first.toUpperCase() + remaining;
}

console.log(capitalizeWord("wello"));
console.log(capitalizeWord("Hello"));
*/

// #2
/*
Your dad doesn't really get punctuation, and he's always putting extra commas in when he posts. You can tolerate the run-on sentences, as he does actually talk like that, but those extra commas have to go!

Write a function that takes a string as an argument and returns a string with the extraneous commas removed. The returned string should not end with a comma or have any trailing whitespace.
*/
/*
function dadFilter(str) {

  // return str.replace(/,(?=,)|,\s*$/g,'')

  let result = "";
  let commaFound = false; // Флаг для отслеживания первой запятой в группе подряд
  let lastComma = false; // Флаг для отслеживания последней запятой в строке

  // Проходим по строке
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ",") {
      if (!commaFound) {
        // Если запятая первая, добавляем её
        result += str[i];
        commaFound = true; // Первая запятая добавлена
      }
    } else {
      // Если это не запятая, просто добавляем символ
      result += str[i];
      commaFound = false; // После любой другой буквы сбрасываем флаг
    }

    // Флаг для последней запятой
    if (i === str.length - 1 && str[i] === ",") {
      isLastCharComma = true;
    }
  }

  // Убираем последнюю запятую, если она была
  if (isLastCharComma) {
    result = result.slice(0, -1);
  }

  return result;
}

console.log(dadFilter("all this,,,, used to be trees,,,,,,"));
console.log(
  dadFilter("i,, don't believe this round earth,,, show me evadence!!")
);
*/

// #3
/*
 Given an integer product, find the smallest positive integer the product of whose digits is equal to product. If there is no such integer, return -1 instead.
Example

For product = 1, the output should be 11;

1 x 1 = 1 (1 is not a valid result, because it has only 1 digit)

For product = 12, the output should be 26;

2 x 6 = 12

For product = 19, the output should be -1.

No valid result found.

For product = 450, the output should be 2559.

2 x 5 x 5 x 9 = 450

For product = 581, the output should be -1.

No valid result found.

Someone says the output should be 783, because 7 x 83 = 581.

Please note: 83 is not a DIGIT.
Input/Output

    [input] integer product

    Constraints: 0 ≤ product ≤ 600.

    [output] a positive integer
*/
/*
function digitsProduct(product) {
  let res = "";

  if (product < 10) return product + 10;

  for (let i = 9; i > 1; i--) {
    while (!(product % i)) {
      product /= i;
      res = i + res;
    }
  }
  return product - 1 ? -1 : +res;
}

console.log(digitsProduct(1));
console.log(digitsProduct(5));
console.log(digitsProduct(19));
console.log(digitsProduct(450));
*/

// #4
/*
Description: John is really excited about coffee. He wrote some text messages earlier, but he's worried that they didn't convey his enthusiasm for coffee, so he's decided to resend them with coffee in all-caps:

COFFEE

Task: Write a function "coffee" that accepts a string as a parameter and returns that string with every instance of coffee in all caps.

Input: string. The word "coffee" may occur more than once. It may have some capital letters or already be in all-caps. There may be punctuation in the string too. It will not be part of another word like "Coffeeburger", which isn't a word anyway.

Output: string with all instances of coffee in all-caps:

Examples:

Input: "Did I only have two cups of coffee this morning? I need more." Output: "Did I only have two cups of COFFEE this morning? I need more."

Input: "Coffee! Buy me a COFFEE!" Output: "COFFEE! Buy me a COFFEE!"
*/
/*
function coffee(str) {
  let res = [];
  let arr = str.split(" "); // Разбиваем строку на слова

  for (let word of arr) {
    // Убираем пунктуацию для проверки, но сохраняем её
    let cleanWord = word.replace(/[^\w]/g, "").toLowerCase();

    // Если слово — "coffee", заменяем его на "COFFEE"
    if (cleanWord === "coffee") {
      res.push(word.replace(/coffee/i, "COFFEE"));
    } else {
      res.push(word);
    }
  }

  return res.join(" "); // Собираем слова обратно с пробелами
}

console.log(coffee("Coffee! Buy me a COFFEE!"));
*/

// 06.01.2025
// #1
/*
Write a function with the signature shown below:

function isIntArray(arr) {
  return true
}

    returns true  / True if every element in an array is an integer or a float with no decimals.
    returns true  / True if array is empty.
    returns false / False for every other input.
*/
/*
function isIntArray(arr) {
  if (!Array.isArray(arr)) return false;
  if (arr.length === 0) return true;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number" && !Number.isInteger(arr[i])) {
      return false;
    }
  }

  return true;
}

console.log(isIntArray([]));
console.log(isIntArray([1, 2, 3, 4]));
console.log(isIntArray([1, 2, 3, NaN]));

*/

// #2
/*
Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

For example:

solution([1, 2, 10, 50, 5]); // should return [1,2,5,10,50]
solution(null); // should return []
*/
/*
function solution(nums) {
  if (!Array.isArray(nums)) return [];
  if (nums.length === 0) return [];

  return nums.sort((a, b) => a - b);
}

console.log(solution([]));
console.log(solution([20, 2, 10]));
*/

// #3
/*
Fellow code warrior, we need your help! We seem to have lost one of our sequence elements, and we need your help to retrieve it!

Our sequence given was supposed to contain all of the integers from 0 to 9 (in no particular order), but one of them seems to be missing.

Write a function that accepts a sequence of unique integers between 0 and 9 (inclusive), and returns the missing element.
Examples:

[0, 5, 1, 3, 2, 9, 7, 6, 4] --> 8
[9, 2, 4, 5, 7, 0, 8, 6, 1] --> 3
*/
/*
function getMissingElement(superImportantArray) {
  if (!superImportantArray.length) return 0;
  let arr = superImportantArray.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      return arr[i] + 1;
    }
  }
  if (arr[0] !== 0) {
    return 0;
  }
  if (arr[arr.length - 1] !== 9) {
    return 9;
  }
}

console.log(getMissingElement([0, 5, 1, 3, 2, 9, 7, 6, 4]));
console.log(getMissingElement([8, 5, 1, 3, 2, 9, 7, 6, 4]));
console.log(getMissingElement([3, 2, 4, 5, 7, 0, 8, 6, 1]));
*/

// #4
/*
Write a function named numbers.

function should return True if all parameters are of the Number type.

The function should accept any number of parameters.

Example usage:

numbers(1, 4, 3, 2, 5); // true
numbers(1, "a", 3); // false
numbers(1, 3, NaN); // true
*/
/*
function numbers(nums) {
  let arr = [...arguments];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") {
      return false;
    }
  }
  return true;
}

console.log(numbers(1, 4, 3, 2, 5));
console.log(numbers(1, "a", 3));
console.log(numbers(1, 3, NaN));
*/

// #5
/*
Write a function that returns the number of '2's in the factorization of a number.
For example,

twoCount(24)

should return 3, since the factorization of 24 is 2^3 x 3

twoCount(17280)

should return 7, since the factorization of 17280 is 2^7 x 5 x 3^3
The number passed to two_count (twoCount) will always be a positive integer greater than or equal to 1.
*/
/*
function twoCount(n) {
  let count = 0;
  while (n % 2 === 0) {
    count++;
    n /= 2;
  }
  return count;
}

console.log(twoCount(17280));
*/

// #6
/*
A nested list (or array in JavaScript) is a list that appears as a value inside another list,

[item, item, [item, item], item]

in the above list, [item, item] is a nested list.

Your goal is to write a function that determines the depth of the deepest nested list within a given list.
return 1 if there are no nested lists. The list passed to your function can contain any data types.

A few examples:

arrayDepth([true]) // returns 1

arrayDepth([]) // returns 1

arrayDepth([2, "yes", [true, false]]) // returns 2

arrayDepth([1, [2, [3, [4, [5, [6], 5], 4], 3], 2], 1]) // returns 6

arrayDepth([2.0, [2, 0], 3.7, [3, 7], 6.7, [6, 7]]) // returns 2
*/
/*
function arrayDepth(arr) {
  if (!arr.length) return 1;
  let maxDepth = 1;
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i];
    if (Array.isArray(el)) {
      let depth = arrayDepth(el) + 1;
      maxDepth = Math.max(maxDepth, depth);
    }
  }
  return maxDepth;
}

console.log(arrayDepth([]));
console.log(arrayDepth([1]));
console.log(arrayDepth([2, "yes", [true, false]]));
console.log(arrayDepth([1, [2, [3, [4, [5, [6], 5], 4], 3], 2], 1]));
*/

// #7
/*
Based on Project Euler problem 35

A circular prime is a prime in which every circular permutation of that number is also prime. Circular permutations are created by rotating the digits of the number, for example: 197, 971, 719. One-digit primes are circular primes by definition.

Complete the function that dertermines if a number is a circular prime.

There are 100 random tests for numbers up to 10000.
*/
/*
function isPrime(num) {
  if (num <= 1) return false;
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % 2 === 0) {
      return false;
    }
  }
  return true;
}

function getCircular(num) {
  let strNum = num.toString();
  let permutations = [];
  for (let i = 0; i < strNum.length; i++) {
    permutations.push(strNum.slice(i) + strNum.slice(0, i));
  }

  return permutations.map(Number);
}

function circular_prime(num) {
  if (!isPrime(num)) {
    return false;
  }

  let permutations = getCircular(num);

  for (let perm of permutations) {
    if (!isPrime(perm)) {
      return false;
    }
  }
  return true;
}

console.log(circular_prime(197));
console.log(circular_prime(9377));
console.log(circular_prime(222));
*/

// #8
/*
Your job is to return the volume of a cup when given the diameter of the top, the diameter of the bottom and the height.

You know that there is a steady gradient from the top to the bottom.

You want to return the volume rounded to 2 decimal places.

Exmples:

cup_volume(1, 1, 1)==0.79

cup_volume(10, 8, 10)==638.79

cup_volume(1000, 1000, 1000)==785398163.4

cup_volume(13.123, 123.12, 1)==4436.57

cup_volume(5, 12, 31)==1858.51
*/
/*
function cupVolume(d1, d2, height) {
  let volume =
    (1 / 3) *
    Math.PI *
    height *
    (Math.pow(d1 / 2, 2) + (d1 / 2) * (d2 / 2) + Math.pow(d2 / 2, 2));
  return parseFloat(volume.toFixed(2));
}

console.log(cupVolume(1, 1, 1));
console.log(cupVolume(10, 8, 10));
*/

// 07.01.2025
// #1
/*
The function pickIt accepts 1 parameter, arr, which is an array of numbers. We need to traverse arr by using a for loop. If an element is an odd number, push it to the odd array, and if it's an even number, push it to the evenarray.

I've defined two arrays odd and even in the function, and also wrote the return statement. Your work is to write a for loop.

If you forgot how to push an element to an array, please refer to lesson 4.
*/
/*
function pickIt(arr) {
  var odd = [],
    even = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }

  return [odd, even];
}

console.log(pickIt([8, 1, 5, 4, 6, 1, 1]));
*/

// #2
/*
Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

If arr is not an array, function should return:

"It's a fake array"

If arr contains elements 5 and 13, function should return:

"It's a black array"

If arr contains neither 5 nor 13, function should return:

"It's a white array"

Examples

blackAndWhite(5,13) should return "It's a fake array"
blackAndWhite([5,13]) should return "It's a black array"
blackAndWhite([5,12]) should return "It's a white array" 

Using string template and ternary operator can make your work easier.
*/
/*
function blackAndWhite(arr) {
  if (!Array.isArray(arr)) {
    return "It's a fake array";
  }

  if (arr.indexOf(5) !== -1 && arr.indexOf(13) !== -1) {
    return "It's a black array";
  } else {
    return "It's a white array";
  }
}

console.log(blackAndWhite(5, 13));
console.log(blackAndWhite([5, 13]));
console.log(blackAndWhite([5, 12]));
*/

// #3
/*
In this Kata, you will be given a series of times at which an alarm sounds. Your task will be to determine the maximum time interval between alarms. Each alarm starts ringing at the beginning of the corresponding minute and rings for exactly one minute. The times in the array are not in chronological order. Ignore duplicate times, if any.

For example:
solve(["14:51"]) = "23:59". If the alarm sounds now, it will not sound for another 23 hours and 59 minutes.
solve(["23:00","04:22","18:05","06:24"]) == "11:40". The max interval that the alarm will not sound is 11 hours and 40 minutes.

In the second example, the alarm sounds 4 times in a day.

More examples in test cases. Good luck!
*/
/*
function solve(arr) {
  var sortedAsMinutes = arr.map((x) => timeToMinutes(x)).sort((a, b) => a - b);
  sortedAsMinutes.push(sortedAsMinutes[0] + 60 * 24);
  return minutesToTime(
    Math.max.apply(
      null,
      sortedAsMinutes.map((x, i, a) => {
        return i < a.length - 1 ? a[i + 1] - x : 0;
      })
    ) - 1
  );
}

function timeToMinutes(time) {
  var tokens = time.split(":");
  return parseInt(tokens[0], 10) * 60 + parseInt(tokens[1], 10);
}

function minutesToTime(minutes) {
  return (
    ("" + Math.floor(minutes / 60)).padStart(2, "0") +
    ":" +
    ("" + (minutes % 60)).padStart(2, "0")
  );
}

// Примеры вызова
console.log(solve(["14:51"])); // "23:59"
console.log(solve(["23:00", "04:22", "18:05", "06:24"])); // "11:40"
console.log(solve(["5:22", "13:43", "12:19"])); // "6:21"
console.log(solve(["23:00", "23:59", "00:00"])); // "23:59"
*/

// 08.01.2024
// #1
/*
An arrow is formed in a rectangle with sides a and b by joining the bottom corners to the midpoint of the top edge and the centre of the rectangle.

arrow

a and b are integers and > 0

Write a function which returns the area of the arrow.
*/
/*
function arrowArea(a, b) {
  let gip = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2)).toFixed(2);
  gip = Number(gip / 2);
  let h = b / 2;
  return (a * h) / 2;
}

console.log(arrowArea(7, 6));
*/

// #2
/*
Create a function that will trim a string (the first argument given) if it is longer than the requested maximum string length (the second argument given). The result should also end with "..."

These dots at the end also add to the string length.

For example, trim("Creating kata is fun", 14) should return "Creating ka..."

If the string is smaller or equal than the maximum string length, then simply return the string with no trimming or dots required.

e.g. trim("Code Wars is pretty rad", 50) should return "Code Wars is pretty rad"

If the requested string length is smaller than or equal to 3 characters, then the length of the dots is not added to the string length.

e.g. trim("He", 1) should return "H...", because 1 <= 3

Requested maximum length will be greater than 0. Input string will not be empty
*/
/*
function trim(str, size) {
  if (str.length <= size) return str;
  if (size <= 3) return str.slice(0, size) + "...";
  return str.slice(0, size - 3) + "...";
}

console.log(trim("Creating kata is fun", 14));
console.log(trim("He", 1));
*/

// #3
/*
Your job is to create a simple password validation function, as seen on many websites.

The rules for a valid password are as follows:

    There needs to be at least 1 uppercase letter.
    There needs to be at least 1 lowercase letter.
    There needs to be at least 1 number.
    The password needs to be at least 8 characters long.

You are permitted to use any methods to validate the password.
Examples:

password("Abcd1234"); ===> true
password("Abcd123"); ===> false
password("abcd1234"); ===> false
password("AbcdefGhijKlmnopQRsTuvwxyZ1234567890"); ===> true
password("ABCD1234"); ===> false
password("Ab1!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> true;
password("!@#$%^&*()-_+={}[]|\:;?/>.<,"); ===> false;
*/
/*
function password(str) {
  if (
    str.length >= 8 &&
    /[A-Z]/.test(str) &&
    /[a-z]/.test(str) &&
    /[0-9]/.test(str)
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(password("Abcd1234"));
console.log(password("Abcd123"));
console.log(password("abcd1234"));
console.log(password("Ab1!@#$%^&*()-_+={}[]|:;?/>.<,"));
console.log(password("ABCD1234"));
*/

// #4
/*
There were and still are many problem in CW about palindrome numbers and palindrome strings. We suposse that you know which kind of numbers they are. If not, you may search about them using your favourite search engine.

In this kata you will be given a positive integer, val and you have to create the function next_pal()(nextPal Javascript) that will output the smallest palindrome number higher than val.

Let's see:

For Javascript
nextPal(11) == 22

nextPal(188) == 191

nextPal(191) == 202

nextPal(2541) == 2552

You will be receiving values higher than 10, all valid.

Enjoy it!!

*/
/*
function nextPal(val) {
  val++;
  while (!palindrome(val)) {
    val++;
  }
  return val;
}

function palindrome(num) {
  let pal = num.toString().split("").reverse().join("");
  return Number(pal) === num;
}

console.log(nextPal(11));
console.log(nextPal(188));
*/

// 09.01.2025
// #1
/*
I have four positive integers, A, B, C and D, where A < B < C < D. The input is a list of the integers A, B, C, D, AxB, BxC, CxD, DxA in some order. Your task is to return the value of D.
*/
/*
function alphabet(ns) {
  let sorted = ns.sort((a, b) => a - b);

  return sorted[7] / sorted[sorted[0] * sorted[1] == sorted[2] ? 3 : 2];
}
// A, B, C, D, AxB, BxC, CxD, DxA
console.log(alphabet([20, 10, 6, 5, 4, 3, 2, 12]));
console.log(alphabet([2, 6, 18, 3, 6, 7, 42, 14]));
console.log(alphabet([7, 96, 8, 240, 12, 140, 20, 56]));
console.log(alphabet([3950, 79, 1600, 64, 158, 2, 50, 32]));
*/

// #2
/*
Work out what number day of the year it is.

toDayOfYear([1, 1, 2000]) => 1

The argument passed into the function is an array with the format [D, M, YYYY], e.g. [1, 2, 2000] for February 1st, 2000 or [22, 12, 1999] for December 22nd, 1999.

Don't forget to check for whether it's a leap year! Three criteria must be taken into account to identify leap years:

    The year can be evenly divided by 4;
    If the year can be evenly divided by 100, it is NOT a leap year, unless;
    The year is also evenly divisible by 400. Then it is a leap year.
*/
/*
function toDayOfYear(arr) {
  const [day, month, year] = arr;

  function isLeap(year) {
    return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  }

  const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  if (isLeap(year)) {
    daysInMonth[1] = 29;
  }

  let daysBeforeMonth = 0;
  for (let i = 0; i < month - 1; i++) {
    daysBeforeMonth += daysInMonth[i];
  }
  return daysBeforeMonth + day;
}

console.log(toDayOfYear([25, 12, 2017]));
*/

// #3
/*
Given a list of directions to spin, "left" or "right", return an integer of how many full 360° rotations were made. Note that each word in the array counts as a 90° rotation in that direction.
Worked Example

["right", "right", "right", "right", "left", "right"] ➞ 1
# You spun right 4 times (90 * 4 = 360)
# You spun left once (360 - 90 = 270)
# But you spun right once more to make a full rotation (270 + 90 = 360)

Examples

["left", "right", "left", "right"] ➞ 0

["right", "right", "right", "right", "right", "right", "right", "right"] ➞ 2

["left", "left", "left", "left"] ➞ 1

Notes

    Return a positive number.
    All tests will only include the words "right" and "left".
*/
/*
function spinAround(turns) {
  let t = 0;
  for (let x of turns) {
    t += x === "left" ? -1 : 1;
  }
  return Math.floor(Math.abs(t) / 4);
}

console.log(spinAround(["left", "right", "left", "right"]));
console.log(
  spinAround([
    "right",
    "right",
    "right",
    "right",
    "right",
    "right",
    "right",
    "right",
  ])
);

*/

// 10.01.2025
// #1
/*
So we've had nifty-well-working javascript function

returnSomeData()

that was returning useful data, but recently it stopped work.

There is some strange error. Can you find it out, what has changed?

Tip: if in doubt, take a look at Mozilla's Lexical Grammar (thanks jpot for link!). Answer is somewhere here.

*/
/*
var time = Date.now();
var data = (function returnSomeData(time) {
  return {
    name: "__B00013",
    timeStamp: time || "unknown",
    type: "raw",
    var1: 0x041451,
    var2: 0x00,
    var3: 0x00040,
  };
})(time);

console.log(returnSomeData());
*/

// #2
/*
Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

Graph

Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)
*/
/*
function squareArea(A) {
  let radius = (A * 4) / (2 * Math.PI);
  return parseFloat((radius * radius).toFixed(2));
}

console.log(squareArea(2));
*/

// #3
/*
Given a number n, return the number of positive odd numbers below n, EASY!
Examples (Input -> Output)

7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
*/
/*
function oddCount(n) {
  return Math.floor(n / 2);
}

console.log(oddCount(15));
console.log(oddCount(15023));
*/

// #4
/*
Given two integers a and x, return the minimum non-negative number to add to / subtract from a to make it a multiple of x.

minimum(10, 6)  //= 2

10+2 = 12 which is a multiple of 6

Note

    0 is always a multiple of x

Constraints

1 <= a <= 106

1 <= x <= 105
*/
/*
function minimum(a, x) {
  if (a % x === 0) return 0;
  let add = x - (a % x);
  let sub = a % x;

  return Math.min(add, sub);
}

console.log(minimum(10, 6));
*/

// #5
/*
Create a function that returns twice the supplied value unless it is a tricky double.

The trick: if the number passed in is a double, simply return the value that was passed.

Examples of a double number include:

    44
    77
    3333
    8787
    100100

In the example 8787, the number 87 is doubled (appears twice).

trickyDoubles(15)   // should return 30
trickyDoubles(100)  // should return 200
trickyDoubles(4343) // should return 4343
*/
/*
function trickyDoubles(n) {
  let arr = n.toString().split("").map(Number);
  let left = parseFloat(arr.slice(0, Math.floor(arr.length / 2)).join(""));

  let right = parseFloat(
    arr.slice(Math.floor(arr.length / 2), arr.length).join("")
  );

  if (left === right) {
    return n;
  } else {
    return n + n;
  }
}

console.log(trickyDoubles(4));
console.log(trickyDoubles(4343));
console.log(trickyDoubles(100100));
*/

// 13.01.2025
// #1
/*
Complete the 'format' method - so that when a string is passed in, all empty curly braces (' {} ') are replaced with the strings in the array.

The array can be of any length, and the returned string must have the correct values, in the correct places, in the same order as they were in the initial array.

Example:

format("This is an {} for {}.", ["example", "you"]);

Should return - "This is an example for you."
*/
/*
function format(str, arr) {
  let result = [];
  let arrIndex = 0;
  let parts = str.split("{}");
  for (let i = 0; i < parts.length; i++) {
    result.push(parts[i]);
    if (arrIndex < arr.length) {
      result.push(arr[arrIndex]);
      arrIndex++;
    }
  }

  return result.join("");
}

console.log(
  format("Hello, my name is {}, and I am {} years old!", ["Emilio", "24"])
);
*/

// #2
/*
Thick Boston Accent Translate Words From English into a Boston Accent There are two distinct features of the accent. The letter O becomes A. "Boston" --> "bastan" "Oxen" --> "axen"

Any instance of "ar" becomes "ah" "Park" --> "pahk" "Department" --> "depahtment"

However, portrait --> partrait

Return every word in lower case.
*/
/*
var boston = function (str) {
  str = str.toLowerCase();

  str = str.replace(/o/g, "a");
  str = str.replace(/ar/g, "ah");

  return str;
};

console.log(boston("Boston"));
console.log(boston("Department"));
*/

// #3
/*


Baby is just learning to talk, and is starting out with easy common everyday words. You want to encourage your baby to talk more, so you repeat the random words they learned. When baby says a word, you repeat the word twice back at baby. Write a function to illustrate this exercise.

ie: 
baby says("yum");
you say("yum yum");
*/
/*
function babyRepeat(babble) {
  return `${babble} ${babble}`;
}

console.log(babyRepeat("ow"));
*/

// #4
/*
Your goal is to create a function called range().

It takes the follow parameters and returns an array(range of numbers):

start: starting point.
edge: ending point.
step: incrementing value.

for example:

range(0, 500, 50) => [0,50,100,150,200,250,300,350,400,450]

If the start or step is bigger or equals the edge: return empty array.

I will only provide non-negative integers. No need to check for null, undefined etc.
*/
/*
function range(start, edge, step) {
  const length = Math.floor((edge - start) / step) + 1;

  return Array.from({ length }, (_, index) => start + index * step);
}

console.log(range(0, 500, 50));
*/

// 14.01.2025
// #1
/*
Groups of characters decided to make a battle. Help them to figure out what group is more powerful. Create a function that will accept 2 variables and return the one who's stronger.
Rules

    Each character has its own power:

      A = 1, B = 2, ... Y = 25, Z = 26
      a = 0.5, b = 1, ... y = 12.5, z = 13

    Only alphabetical characters can and will participate in a battle.
    Only two groups to a fight.
    Group whose total power (a + B + c + ...) is bigger wins.
    If the powers are equal, it's a tie.

Examples

"One", "Two"  -->  "Two"
"ONE", "NEO"  -->  "Tie!"
*/
/*
function battle(x, y) {
  if (charactersCount(x) === charactersCount(y)) {
    return "Tie!";
  }

  if (charactersCount(x) > charactersCount(y)) {
    return x;
  } else {
    return y;
  }
}

function charactersCount(word) {
  let result = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] >= "A" && word[i] <= "Z") {
      result += word[i].charCodeAt(0) - 64;
    } else if (word[i] >= "a" && word[i] <= "z") {
      result += (word[i].charCodeAt(0) - 96) / 2;
    }
  }
  return result;
}

console.log(charactersCount("a"));

console.log(battle("One", "Two"));
console.log(battle("One", "Neo"));
console.log(battle("One", "Tie!"));
*/

// #2
/*
You're familiar with list slicing in Python and know, for example, that:

>>> ages = [12, 14, 63, 72, 55, 24]
>>> ages[2:4]
[63, 72]
>>> ages[2:]
[63, 72, 55, 24]
>>> ages[:3]
[12, 14, 63]

Write a function inverse_slice that takes three arguments: a list items, an integer a and an integer b. The function should return a new list with the slice specified by items[a:b] excluded.

For example:

>>>inverse_slice([12, 14, 63, 72, 55, 24], 2, 4)
[12, 14, 55, 24]

Input domain:

    items will always be a valid sequence.
    b will always be greater than a.
    a will always be greater than or equal to zero.
    a will always be less than the length of items.
    b may be greater than the length of items.
*/
/*
function inverseSlice(items, a, b) {
  return items.slice(0, a).concat(items.slice(b));
}

console.log(inverseSlice([12, 14, 63, 72, 55, 24], 2, 4));
console.log(inverseSlice([12, 14, 63, 72, 55, 24], 2, 0));
console.log(inverseSlice([12, 14, 63, 72, 55, 24], 0, 3));
*/

// #3
/*
Create an algorithm to count the number of zeros that appear between 1 and N.

Examples:

There are 2 zeros from 1 to 20: 10, 20

There are 11 zeros from 1 to 100: 10, 20, 30, 40, 50, 60, 70, 80, 90, 100

countZeros(10); // returns 1
countZeros(100); // returns 11
countZeros(200); // returns 31
*/
/*
function countZeros(n) {
  // let zerosCount = 0;
  // for (let i = n; i > 0; i--) {
  //   let arr = i.toString().split("");
  //   arr.forEach((value) => {
  //     if (value === "0") zerosCount++;
  //   });
  // }
  // return zerosCount;
  let zeros = 0;
  for (let i = 1; i <= n; i++) {
    let num = i;
    while (num > 0) {
      if (num % 10 === 0) {
        zeros++;
      }
      num = Math.floor(num / 10);
    }
  }
  return zeros;
}

console.log(countZeros(10));
console.log(countZeros(100));
console.log(countZeros(200));
*/

// #4
/*
Given two arrays of strings, return the number of times each string of the second array appears in the first array.
Example

array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
array2 = ['abc', 'cde', 'uap']

How many times do the elements in array2 appear in array1?

    'abc' appears twice in the first array (2)
    'cde' appears only once (1)
    'uap' does not appear in the first array (0)

Therefore, solve(array1, array2) = [2, 1, 0]

Good luck!

If you like this Kata, please try:

Word values

Non-even substrings
*/
/*
function solve(a, b) {
  let res = [];
  for (let i = 0; i < b.length; i++) {
    let count = 0;
    for (let j = 0; j < a.length; j++) {
      console.log(b[i]);
      if (b[i] === a[j]) {
        count++;
      }
    }
    res.push(count);
  }
  return res;
}

console.log(solve(["abc", "abc", "xyz", "cde", "uvw"], ["abc", "cde", "uap"]));
*/

// #5
/*
The town sheriff dislikes odd numbers and wants all odd numbered families out of town! In town crowds can form and individuals are often mixed with other people and families. However you can distinguish the family they belong to by the number on the shirts they wear. As the sheriff's assistant it's your job to find all the odd numbered families and remove them from the town!

Challenge: You are given a list of numbers. The numbers each repeat a certain number of times. Remove all numbers that repeat an odd number of times while keeping everything else the same.

oddOnesOut([1, 2, 3, 1, 3, 3]) = [1, 1]

In the above example:

    the number 1 appears twice
    the number 2 appears once
    the number 3 appears three times

2 and 3 both appear an odd number of times, so they are removed from the list. The final result is: [1,1]

Here are more examples:

oddOnesOut([1, 1, 2, 2, 3, 3, 3]) = [1, 1, 2, 2]
oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26]) = [26, 24, 24, 26]
oddOnesOut([1, 2, 3]) = []
oddOnesOut([1]) = []

Are you up to the challenge?
*/
/*
function oddOnesOut(nums) {
  let ht = {};

  for (const num of nums) {
    ht[num] = (ht[num] || 0) + 1;
  }
  let res = [];
  for (const num of nums) {
    if (ht[num] % 2 === 0) {
      res.push(num);

      ht[num] = 0;
    }
  }
  return res;
}

console.log(oddOnesOut([1, 2, 3, 1, 3, 3]));

*/

// 15.01.2024
// #1
/*
Given the string "1+2+3", write a function calculate to output the result, ie. 6.

If there is no operator between 2 numbers, there will be a space instead ie. the input is "1+2 3". In this case, process the input as "1+23" and output 24.

The input will always be a string with 3 integers 0-1000, zero or more + operators, and zero or more spaces.

Assume the input will always be valid.

Note: eval and Function have been disabled; if not there would be no point to this exercise.

Examples:

Test.assertEquals(calculate("1+2+3"), 6);
Test.assertEquals(calculate("1+2 3"), 24);
Test.assertEquals(calculate("1 2 3"), 123);
*/
/*
function calculate(str) {
  str = str.replace(/\s+/g, "");
  console.log(str);
  let numbers = str.split("+");
  console.log(numbers);

  return numbers.reduce((acc, curr) => acc + Number(curr), 0);
}

console.log(calculate("1+2+3"));
console.log(calculate("1+2 3"));
console.log(calculate("10 2 30"));
*/

// #2
/*
Karan's company makes software that provides different features based on the version of operating system of the user.

To compare versions, Karan currently parses both version numbers as floats.

While this worked for OS versions 10.6, 10.7, 10.8 and 10.9, the operating system company just released OS version 10.10. This causes his method to fail, as 10.9 is greater than 10.10 when interpreting both as numbers, despite being a lesser version.

Help Karan by writing him a function which compares two versions, and returns whether or not the first one is greater than or equal to the second.

Specification notes:

    Versions are provided as strings of one or more integers separated by ..
    The version strings will never be empty.
    The two versions are not guaranteed to have an equal amount of sub-versions, when this happens assume that all missing sub-versions are zero.
    Two versions which differ only by trailing zero sub-versions will never be given.
*/
/*
function compareVersions(version1, version2) {
  let v1 = version1.split(".");
  let v2 = version2.split(".");

  let length = Math.max(v1.length, v2.length);

  for (let i = 0; i < length; i++) {
    let num1 = parseInt(v1[i] || "0");
    let num2 = parseInt(v2[i] || "0");

    if (num1 > num2) return true;
    if (num1 < num2) return false;
  }
  return true;
}

console.log(compareVersions("10.4.6", "10.4"));
// console.log(compareVersions("11", "10"));
*/

// 16.01.2025

// #1
/*
Query string is a way to serialize object, which is used in HTTP requests. You may see it in URL:

codewars.com/kata/search/?q=querystring

The part q=querystring represents that parameter q has value querystring. Also sometimes querystring used in HTTP POST body:

POST /api/users
Content-Type: application/x-www-form-urlencoded

username=warrior&kyu=1&age=28

The string username=warrior&kyu=1&age=28 represents an entity (user in this example) with username equals warrior, kyu equals 1 and age equals 28. The entity may be represented as object:

{
  "username": "warrior",
  "kyu": 1,
  "age": 28
}

Sometimes there are more than one value for property:

{
  "name": "shirt",
  "colors": [ "white", "black" ]
}

Then it represents as repeated param:

name=shirt&colors=white&colors=black

So, your task is to write a function that convert an object to query string:

toQueryString({ foo: 1, bar: [ 2, 3 ] }) // => "foo=1&bar=2&bar=3"
*/
/*
function toQueryString(obj) {
  let result = [];

  for (let [key, value] of Object.entries(obj)) {
    if (Array.isArray(value)) {
      value.forEach((val) => {
        result.push(`${key}=${val}`);
      });
    } else {
      result.push(`${key}=${value}`);
    }
  }
  return result.join("&");
}

console.log(toQueryString({ foo: [1, 3], bar: [2, 4] }));
// 'foo=1&foo=3&bar=2&bar=4'
*/

// #2
/*
Write a function that takes two integers as input and returns their product, but do not use the 'return' reserved word.
*/
/*
multiply = (a, b) => a * b;

console.log(multiply(1, 2));
*/

//#3
/*
Complete the method that returns true if 2 integers share at least two 1 bits, otherwise return false. For simplicity assume that all numbers are non-negative.
Examples

 7  =  0111 in binary
10  =  1010
15  =  1111

    7 and 10 share only a single 1-bit (at index 2) --> false
    7 and 15 share 3 1-bits (at indexes 1, 2, and 3) --> true
    10 and 15 share 2 1-bits (at indexes 0 and 2) --> true

Hint: you can do this with just string manipulation, but binary operators will make your life much easier.
*/
/*
function sharedBits(a, b) {
  a = a.toString(2).split("").map(Number);
  b = b.toString(2).split("").map(Number);
  if (a.length > b.length) {
    b.unshift(...Array(Math.abs(b.length - a.length)).fill(0));
  } else {
    a.unshift(...Array(Math.abs(a.length - b.length)).fill(0));
  }
  let bitCount = 0;
  console.log(a);
  console.log(b);
  for (let i = 0; i < a.length; i++) {
    if (a[i] === 1 && b[i] === 1) {
      bitCount++;
    }
  }
  return bitCount >= 2;
}

console.log(sharedBits(7, 15));
console.log(sharedBits(7, 10));
*/

// #4
/*
I have a friend who is a school teacher and his wife made a mistake. He evaluated the students in a wrong way. Insted of given the student a 5 / 5 she gave a 1 / 5, instead of a 4 / 5 she did a 2 / 5. So the grades are inverted. I want to help my friend to correct his grades.

Because this could happen again I will param de solution with correct grade scale.

Ex. invertGrades(5,1) ret 5 invertGrades(5,5) ret 1 invertGrades(7,1) ret 7 invertGrades(8,2) ret 7
*/
/*
function invertGrades(scale, value) {
  let arr = Array.from({ length: scale + 1 }, (_, index) => scale - index);

  return arr[value - 1];
}

console.log(invertGrades(5, 1));
console.log(invertGrades(5, 2));
console.log(invertGrades(7, 1));
console.log(invertGrades(7, 4));
*/

// #5
/*
It is a simple, real world task. You will receive a single string as input. It will have the month (2 digits) and year(2 or 4 digits). These are separated by one character ("-" or "/", maybe some spaces too). For example:

    02/21
    02 / 21
    02 / 2021
    02-2021

Assume that all dates are in the XXI century.

Your task is to write a function that returns true or false if the expiry date is not in the past. Note, current month should still return true.
*/
/*
function checkExpiryValid(date) {
  let arr = date.match(/\d+/g);

  if (!arr || arr.length < 2) return false;

  let month = Number(arr[0]);
  let year = Number(arr[arr.length - 1]);

  year = year < 100 ? 2000 + year : year;

  if (month < 1 || month > 12) return false;

  let now = new Date();
  let nowMonth = now.getMonth() + 1;
  let nowYear = now.getFullYear();

  if (year > nowYear) return true;
  if (year === nowYear && month >= nowMonth) return true;
  return false;
}

console.log(checkExpiryValid("03/15"));
console.log(checkExpiryValid("03/33"));
console.log(checkExpiryValid("03-15"));
console.log(checkExpiryValid("03 / 15"));
console.log(checkExpiryValid("03-2015"));
*/

// #6
/*
Given two arrays of integers, find the pair of values with the smallest difference and return that difference.

If both arrays are empty, return -1.

If one array is empty, return the smallest value from the non-empty array.

Note: Try to solve this without brute force.

Example:

  arr1 = [1, 3, 5, 23, 5]
  arr2 = [45, 34, 67, 2, 0]
  
  Output = 1
  
Example empty array:

  arr1 = [1, 3, 5, 23, 5]
  arr2 = []
  
  Output = 1
  
Example two empty arrays:

  arr1 = []
  arr2 = []
  
  Output = -1
*/
/*
function smallestDiff(arr1, arr2) {
  if (!arr1.length && !arr2.length) return -1; // Оба массива пустые
  if (!arr1.length) return Math.min(...arr2); // Первый массив пустой
  if (!arr2.length) return Math.min(...arr1); // Второй массив пустой

  // Сортируем массивы
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);

  let i = 0;
  let j = 0;
  let minDiff = Infinity;

  while (i < arr1.length && j < arr2.length) {
    let diff = Math.abs(arr1[i] - arr2[j]);

    minDiff = Math.min(minDiff, diff);

    if (arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return minDiff;
}

console.log(smallestDiff([1, 3, 5, 23, 5], [45, 34, 67, 2, 0]));
console.log(smallestDiff([1, 3, 5, 23, 5], []));
console.log(smallestDiff([], []));
*/

// #7
/*
This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version
Task:

Every uppercase letter is Father, The corresponding lowercase letters is the Son.

Give you a string s, If the father and son both exist, keep them. If it is a separate existence, delete them. Return the result.

For example:

sc("Aab") should return "Aa"

sc("AabBc") should return "AabB"

sc("AaaaAaab") should return "AaaaAaa"(father can have a lot of son)

sc("aAAAaAAb") should return "aAAAaAA"(son also can have a lot of father ;-)
*/
/*
function sc(str) {
  const set = new Set(str);
  console.log(set);

  const result = [...str].filter((char) => {
    if (char >= "A" && char <= "Z") {
      return set.has(char.toLowerCase());
    } else if (char >= "a" && char <= "z") {
      return set.has(char.toUpperCase());
    }
    return false;
  });

  return result.join("");
}

console.log(sc("Aab"));
console.log(sc("FfAaTtHhEeRr"));
*/

// 17.01.2025
// #1
/*
You'll implement once, a function that takes another function as an argument, and returns a new version of that function that can only be called once.

Subsequent calls to the resulting function should have no effect (and should return undefined).

For example:

logOnce = once(console.log)
logOnce("foo") // -> "foo"
logOnce("bar") // -> no effect
*/
/*
function once(fn) {
  let call = false;

  return function (...args) {
    if (!call) {
      call = true;
      return fn(...args);
    }
    return undefined;
  };
}

const logOnce = once(console.log);

logOnce("foo");
logOnce("bar");
*/

// 22.01.2025
// #1
/*
In Bali, as far as I can gather, when ex-pats speak to locals, they basically insert the word 'Pak' as often as possible. I am assured it means something like 'mate' or 'sir' but that could be completely wrong.

Anyway, as some basic language education(??) this kata requires you to turn any sentence provided (s) into ex-pat balinese waffle by inserting the word 'pak' between every other word. Simple 8kyu :D

Pak should not be the first or last word. Strings of just spaces should return an empty string.
*/
/*
function pak(s) {
  if (!s.trim()) return "";

  let words = s.trim().split(" ");
  let result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(words[i]);
    if (i < words.length - 1) result.push("pak");
  }
  return result.join(" ");
}

console.log(pak("Man I need a taxi up to Ubud"));
// 'Man pak I pak need pak a pak taxi pak up pak to pak Ubud'
*/

// 23.01.2025
// #1
/* 
A numeral system is a way of writing numbers using a specific set of digits: for example, the decimal system (also called base-10), which is the most commonly used numeral system worldwide, uses the digits 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 to represent numbers. There is also the binary system (also called base-2), which uses the digits 0 and 1.

For digits that are bigger than 9, the English alphabet is used: 'A' is used for the number 10 in bases higher than 10. This goes all the way to 'Z' in base-36.

The largest digit allowed in a certain base is always 1 smaller than this base.

You need to write a function that checks whether all of the digits of a non-negative integer number are a part of the specified base: for example, the number 17253 is valid for base-8, because this base contains the digits 0, 1, 2, 3, 4, 5, 6, 7, but the number 19823 is not valid for this base, because it contains the digits 9 and 8 which are not a part of base-8.

Note: numbers will be checked against bases from 2 to 36. For digits > 9 (A, B, etc.) such digits will always be uppercase. The function should return a boolean: true for numbers that are valid for a specified numeral system and false otherwise.
*/
/*
function validateBase(num, base) {}

console.log(validateBase(7623, 8));
console.log(validateBase(ABCDEF, 16));
*/

// 30.01.2025
// #1
/*
Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s"
*/
/*
function nerdify(txt) {
  let res = "";
  for (let i = 0; i < txt.length; i++) {
    if (txt[i].toLowerCase() === "a") {
      res += "4";
    } else if (txt[i].toLowerCase() === "e") {
      res += "3";
    } else if (txt[i] === "l") {
      res += "1";
    } else {
      res += txt[i];
    }
  }
  return res;
}

console.log(nerdify("Fundamentals"));
*/

// #2
/*
Timothy (age: 16) really likes to smoke. Unfortunately, he is too young to buy his own cigarettes and that's why he has to be extremely efficient in smoking.

It's now your task to create a function that calculates how many cigarettes Timothy can smoke out of the given amounts of bars and boxes:

    a bar has 10 boxes of cigarettes,
    a box has 18 cigarettes,
    out of 5 stubs (cigarettes ends) Timothy is able to roll a new one,
    of course the self made cigarettes also have an end which can be used to create a new one...

Please note that Timothy never starts smoking cigarettes that aren't "full size" so the amount of smoked cigarettes is always an integer.
*/
/*
function startSmoking(bars, boxes) {
  let cig = bars * 10 * 18 + boxes * 18;

  let stubs = cig;

  while (stubs >= 5) {
    let newCig = Math.floor(stubs / 5);
    cig += newCig;

    stubs = (stubs % 5) + newCig;
  }

  return cig;
}

console.log(startSmoking(1, 1));
console.log(startSmoking(10, 2));
*/

// #3
/*
You get an array of different numbers to sum up. But there is one problem, those numbers all have different bases. For example:

You get an array of numbers with their base as an input:

[["101",16],["7640",8],["1",9]]

The output should be the sum as an integer value with a base of 10, so according to the example this would be:

4258

A few more examples:
[["101",2], ["10",8]] --> 13
[["ABC",16], ["11",2]] --> 2751

Bases can be between 2 and 36 (2<=base<=36)
*/
function sumItUp(nums) {
  let res = 0;

  for (let i = 0; i < nums.length; i++) {
    let num = nums[i][0];
    let base = nums[i][1];
    console.log(num, base);

    res += parseInt(num, base);
  }

  return res;
}

console.log(
  sumItUp([
    ["ABC", 16],
    ["11", 2],
  ])
);
