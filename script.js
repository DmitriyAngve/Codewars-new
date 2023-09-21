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
