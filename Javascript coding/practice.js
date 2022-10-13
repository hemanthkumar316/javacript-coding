//Reverse string
/* function reversestring(str){
    return str.split('').reverse().join('')
}
console.log(reversestring('hello world')) *///dlrow olleh

//Reverse string without inbuilt function
/* let a='welcome'
let b=''
for(i=a.length-1;i>=0;i--){
    b=b+a[i]
}
console.log(b) *///emoclew

//remove duplicates
/* let chars=["a","b","c","c","d","e","e"]
let removechars=chars.filter((index,item)=>{
    return chars.indexOf(index)===item
})
console.log(removechars) */ //["a","b","c","d","e"]
/* let chars=["a","b","c","c","d","e","e"]
let removechars=chars.filter((index,item)=>{
    return chars.indexOf(index)!==item
})
console.log(removechars) */ //["c","e"]

//print prime numbers
/* let numbers=[1,2,3,4,5,6,7,8,9,10]
let primenum=numbers.filter(num=>num%2==0)
console.log(primenum) */ //[2,4,6,8,10]

//print prime numbers  1 to 100
/* let count=0
let i,j 
for(j=2;j<=100;j++)
{
for( i=1;i<=j;i++)
{
  if(j%i==0)
  count++
  }
if(count==2)
console.log(j)
count=0
} */

// largest  numbers in an arrary 
let numbers1=[12,34,45,67,34,2,1,5]
let largestnum=()=>{
    return numbers1.reduce((largest,num)=>Math.max(largest,num))
}
console.log(largestnum(numbers1))

//smallest number in arrary

let numbers2=[12,34,45,67,34,2,1,5]
let smallestnum=()=>{
    return numbers2.reduce((smallest,num)=>Math.min(smallest,num))
}
console.log(smallestnum(numbers2))

//charcters start with x letter
let chars= ["abc","xcv","sdf","xdf","erf","xde","acv"]
let startwith=chars.filter((xletter)=>xletter.startsWith("x"))
console.log(startwith)

//another
const countries = ['Norway', 'Sweden', 'Denmark', 'New Zealand'];
function firstN(item) {
  return item.toLowerCase().indexOf('n') !== 0;
}
let startsWithN = countries.filter(firstN);
console.log(startsWithN)

// remove duplicates in arrary

let nums=[1,1,2,3,4,,5,6,7,9,9]
let dupnum=nums.filter((index,item)=>{
    return nums.indexOf(index)!==item
})
console.log(dupnum)

//given two strings return  true  if they  are anagrams of one other
var firstWord = "Mary";
var secondWord = "Army";
function isAnagram(first, second) {
  // For case insensitivity, change both words to lowercase.
  var a = first.toLowerCase();
  var b = second.toLowerCase();
// Sort the strings, and join the resulting array to a string. Compare the results
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");
return a === b;
}
console.log(isAnagram(firstWord, secondWord)); // true