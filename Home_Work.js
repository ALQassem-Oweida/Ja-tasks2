// 1
// Correct the syntax error
A1 = [1, 7, 9, 45];

A2 = ["Str", "alex", "moh", "the", "fox", "over", "lazy", "dog"];

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]
index of "Banana" : 1
index of "Tomato" : 0
*/

/*
3
Create an array represents your:
1- Favorite Food  (5)   FavoriteFood=["Macrony" , "Mansaf" , "Maqluba" , "Shawarma" , "butter chicken"]
2- Favorite Sport (3)  Favorite Sport=["Football","Tennis","F1"]
3- Favorite Movie (4)  Favorite Movie=["Iron Man","The Godfather" ,"Miracle in Cell No.7"]
*/

// 4  **************************************************************************************************************************************************
// Create a function called firstOfArray
// that take an array as a parameter
// and return the first element in an array

function firstOfArray(arrayx) {
  console.log("EX#04 : the first element in the array is : " + arrayx[0]);
}
Ex: firstOfArray([1, 4, 5]);
Ex: firstOfArray(["t", "u", "g", "x"]);

// 5  **************************************************************************************************************************************************
// Create a function called lastOfArray
// that take an array as a parameter
// and return the last element in an array

function lastOfArray(arrayx) {
  console.log(
    `EX#05 : the last element in the array is : ${
      arrayx[arrayx.length - 1]
    }  ${typeof arrayx[arrayx.length - 1]}`
  ),
    console.log(
      "EX#05 : the last element in the array is : " +
        arrayx[arrayx.length - 1] +
        "  " +
        typeof arrayx.slice(-1)
    );
}
Ex: lastOfArray([1, 4, 5]);
Ex: lastOfArray(["t", "u", "g", "x"]);

// 6  **************************************************************************************************************************************************
// Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0, 5, 7, 9];
array.shift();
array.shift();
array.shift();
array.push(10);
array.unshift(1, 3, 4, 6, 8);
console.log("EX#06 : " + array);

//  [1,3,4,6,8,9,10]

// 7  **************************************************************************************************************************************************
// Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5, 9, -7, 3.5];
console.log(`EX#07 : Originla Array : ${array2}`);
array2.push(1);
console.log("EX#07 : Array after push(1) : " + array2);
array2.unshift(1);
console.log("EX#07 : Array after unshift(1) : " + array2);
array2.shift();
console.log("EX#07 : Array after shift() : " + array2);
array2.pop();
console.log("EX#07 : Array after pop() : " + array2);

// 8:  **************************************************************************************************************************************************
//  Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

function doubleValues(ArrayS) {
  var ArrayD = [];
  for (i = 0; i < ArrayS.length; i++) {
    ArrayD.push(ArrayS[i] * 2);
  }
  console.log("EX#08 : ArrayD : " + ArrayD);
}
doubleValues([1, 2, 3]);
doubleValues([5, 1, 2, 3, 10]);

//9:  **************************************************************************************************************************************************
// * Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

function onlyEvenValues(arrayAny) {
  var arrayOnlyEven = [];
  for (i = 0; i < arrayAny.length; i++) {
    if (arrayAny[i] % 2 == 0) {
      arrayOnlyEven.push(arrayAny[i]);
    }
  }
  console.log("EX#09 : Only Even Array : " + arrayOnlyEven);
}
onlyEvenValues([1, 2, 3]);
onlyEvenValues([5, 1, 2, 3, 10]);

//10:  **************************************************************************************************************************************************

// * Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

function showFirstAndLast(StringArray) {
  var FirstLastArray = [];
  for (i = 0; i < StringArray.length; i++) {
    FirstLastArray.push(
      StringArray[i][0] + StringArray[i][StringArray[i].length - 1]
    );
  }
  console.log(
    "EX#10 : First & last character of each string  : " + FirstLastArray
  );
}
showFirstAndLast(["colt", "matt", "tim", "udemy"]);
showFirstAndLast(["hi", "goodbye", "smile"]);

//11  **************************************************************************************************************************************************
// Create a function called middleOfArray
// that take an array as a parameter
// and return the middle element in an array if it is have an odd elemnets
// and return the two middle elemnt in an array if it is have an even elemnets

function middleOfArray(arrayMidle) {
  if (arrayMidle.length % 2 == 0) {
    console.log(
      "EX#11 : Middle elements in an even array : " +
        arrayMidle[arrayMidle.length / 2 - 1] +
        " and " +
        arrayMidle[arrayMidle.length / 2]
    );
  } else {
    console.log(
      "EX#11 : Middle element in an odd array : " +
        arrayMidle[(arrayMidle.length - 1) / 2]
    );
  }
}
middleOfArray([1, 4, 5]);
middleOfArray(["t", "u", "g", "x"]);

//12  **************************************************************************************************************************************************
// Using assignment operator (=)
// make the animals array have these animals    animals; => ['zebra', 'elephant']
var animals = ["cat", "ele", "bird"];
animals[0] = "Zebra";
animals[1] = "elephant";
animals.pop();
console.log("EX#12 : " + animals);

//13  **************************************************************************************************************************************************
// Create a function called indexOfArray
// that accept an array and index
// and return what this array have in this index

function indexOfArray(NumArray, indexNum) {
  console.log(
    "EX#13 : The contant of index #" + indexNum + " is : " + NumArray[indexNum]
  );
}

var NumArray = [1, 2, 3, 8, 9];
Ex: indexOfArray(NumArray, 3);
Ex: indexOfArray(NumArray, 1);
Ex: indexOfArray(NumArray, 4);

//14  **************************************************************************************************************************************************
// Create a function called arrayExceptLast
// that accept an array
// and return the entire array except the last elemnt
// ** hint: search abou the function that will cut the array on MDN
var nums = [1, 2, 3, 8, 9];

function arrayExceptLast(nums) {
  console.log(
    "EX#14 : The entire array except the last elemnt : " +
      nums.slice(0, nums.length - 1)
  );
}
Ex: arrayExceptLast(nums);

//15  **************************************************************************************************************************************************
// Create a function called addToEnd
// that accept an array and value
// and return the entire array with add this value to the end of this array

var nums = [1, 2, 3, 8, 9];
function addToEnd(nums, valueToAdd) {
  nums.push(valueToAdd);
  console.log("EX#15 : The nums array after value add : " + nums);
}
Ex: addToEnd(nums, 55);

// all the exercises below should solved 2 times: 1- for loop 2- while lopp

//16  **************************************************************************************************************************************************
// Create a function called sumArray
// that accept an array
// and return the summation of all elemnt in this array

// ********* using for loop : **************

function sumArray(nums) {
  let sum = 0;
  for (i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  console.log(
    "EX#16 : (using for loop) The summation of all elemnt in the array  = " +
      sum
  );
}
var nums = [1, 2, 3, 8, 9];

sumArray(nums);

// ********* using while loop : *************

function sumArray2(nums) {
  let sum = 0;
  let i = 0;
  while (i < nums.length) {
    sum += nums[i];
    i++;
  }
  console.log(
    "EX#16 : (using While loop) The summation of all elemnt in the array  = " +
      sum
  );
}
var nums = [1, 2, 3, 8, 9];
sumArray2(nums);

//17  **************************************************************************************************************************************************

// Create a function called minInArray
// that accept an array
// and return the minimum value inside this array

var nums = [1, 2, 3, 8, -9];

// ********* using ECMA6 : *************

function minInArray(nums) {
  console.log(
    "EX#17 : (using ECMA6) The minimum value inside this array is : " +
      Math.min(...nums)
  );
}

minInArray(nums);
// ********* using for loop : **************

function minInArray2(nums) {
  let minNum = nums[0];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] < minNum) {
      minNum = nums[i];
    }
  }
  console.log(
    "EX#17 : (using for loop) The minimum value inside this array is : " +
      minNum
  );
}
minInArray2(nums);

// ********* using while loop : *************

function minInArray3(nums) {
  let minNum = nums[0];
  let i = 0;
  while (i < nums.length) {
    if (nums[i] < minNum) {
      minNum = nums[i];
    }
    i++;
  }
  console.log(
    "EX#17 : (using while loop) The minimum value inside this array is : " +minNum
  );
}
minInArray3(nums);

//18  **************************************************************************************************************************************************
// Create a function called removeFromArray
// that accept an array and elemnt to remove
// and return the array after remove this elemnt from it
var nums = [1, 2, 3, 8, 9];

// ********* using for loop : **************

function removeFromArray(nums, removeNum) {
  for (i = 0; i < nums.length; i++) {
    if (nums[i] == removeNum) {
      nums.splice(i, 1);
    }
  }
  console.log(
    "EX#18 : (using for loop) array after remove  elemnt ( " +removeNum +" ) from it : " + nums
  );
}
removeFromArray(nums, 8);

// ********* using while loop : *************
var nums = [1, 2, 3, 8, 9];
function removeFromArray2(nums, removeNum) {
  let i = 0;
  while (i < nums.length) {
    if (nums[i] == removeNum) {
      nums.splice(i, 1);
    }
    i++;
  }
  console.log(
    "EX#18 : (using while loop) array after remove  elemnt ( " +removeNum +" ) from it : " + nums
  );
}
removeFromArray2(nums, 1);

//19  **************************************************************************************************************************************************
// Create a function called oddArray
// that accept an array
// and return an array have only the odd elemnts

// ********* using for loop : **************

function oddArray(nums) {
  let onlyOdd = [];
  for (i = 0; i < nums.length; i++) {
    if (nums[i] % 2 != 0) {
      onlyOdd.push(nums[i]);
    }
  }
  console.log("EX#19 : (using for loop) array have only the odd elemnts : "+onlyOdd)
}
var nums = [1, 2, 3, 8, 9];
oddArray(nums);


// ********* using while loop : *************

function oddArray2(nums) {
    let onlyOdd = [];
    let i=0;
    while ( i < nums.length) {
      if (nums[i] % 2 != 0) {
        onlyOdd.push(nums[i]);
      };
      i++;
    }
    console.log("EX#19 : (using while loop) array have only the odd elemnts : "+onlyOdd)
  }
  var nums = [1, 2, 3, 8, 9];
  oddArray2(nums);


//20  **************************************************************************************************************************************************
// Create a function called aveArray
// that accept an array
// and return the average of the numbers inside this array

// ********* using for loop : **************

function aveArray(nums){
    let sum=0;
    let avr=0;
    for(i=0;i<nums.length;i++){
    sum +=nums[i];
    avr=sum/(nums.length)
    }
console.log("EX#20 : (using for loop) The average  = "+avr)
}

var nums= [1,2,3,8,9]
aveArray(nums) 

var nums= [1,2,3,8,9,77]
aveArray(nums) 

// ********* using while loop : *************

function aveArray(nums){
    let sum=0;
    let avr=0;
    let i=0;
    while(i<nums.length){
    sum +=nums[i];
    avr=sum/(nums.length);
    i++;
    }
console.log("EX#20 : (using while loop) The average  = "+avr)
}

var nums= [1,2,3,8,9]
aveArray(nums) 

var nums= [1,2,3,8,9,77]
aveArray(nums) 

//21  **************************************************************************************************************************************************
// Create a function called shorterInArray
// that accept an array of strings
// and return the shortest string inside this array (first)

// ********* using for loop : **************

function shorterInArray(strings){
    let min=strings[0];
    for(i=0;i<strings.length;i++){
      if(strings[i].length<min.length){
        min = strings[i];
    };
}
console.log("EX#21 : (using for loop) The shortest string is : "+min)
}
var strings= ["alex","mercer","madrasa","raed","emad","hala"]
shorterInArray(strings) 


// ********* using while loop : *************

function shorterInArray(strings){
  let min=strings[0];let i=0;
  while(i<strings.length){
    if(strings[i].length<min.length){
      min = strings[i]
  };
  i++;
}
console.log("EX#21 : (using while loop) The shortest string is : "+min)
}
var strings= ["alex","mercer","madrasa","raed","emad","hala"]
shorterInArray(strings) 



//22  **************************************************************************************************************************************************
// Create a function called repeatChar
// that accept a string and char
// and return the times that this char repeat inside this string

// ********* using for loop : **************

let count=0; var string=[]
function repeatChar(String,Char){
  for(i=0;i<string.length;i++){
if(Char==string[i]){
  count++
}
  }
  console.log("EX#22 : (using for loop) the ("+ Char+") char repeated : "+count+" times")
}

var string= "alex mercer madrasa rashed2 emad hala"
repeatChar(string,"a")
repeatChar(string,"z") 


// ********* using while loop : *************

 count=0; var string=[];
function repeatChar2(String,Char){
  let i=0;
while(i<string.length){
   if(Char==string[i]){
  count++
};
i++;
  }
  console.log("EX#22 : (using while loop) the ("+ Char+") char repeated : "+count+" times")
}

var string= "alex mercer madrasa rashed2 emad hala"
repeatChar2(string,"a")
repeatChar2(string,"z") 


//23  **************************************************************************************************************************************************
// Create a function called evenIndexOddLength
// that accept an array of strings
// and return a new array that have the string with odd length in even index

// ********* using for loop : **************

function evenIndexOddLength(strings){
  let newArr=[];
for(i=0;i<strings.length;i++){
  if(i%2==0 && strings[i].length%2!=0){
    newArr.push(strings[i])
  }
}
console.log("EX#23 : (using for loop) the new array : "+newArr)
}

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) 


// ********* using while loop : *************

function evenIndexOddLength2(strings){
  let newArr=[];let i=0;
while(i<strings.length){
  if(i%2==0 && strings[i].length%2!=0){
    newArr.push(strings[i])
  };i++;
}
console.log("EX#23 : (using while loop) the new array : "+newArr)
}

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength2(strings) 


//24  **************************************************************************************************************************************************
// Create a function called powerElementIndex
// that accept an array of number
// and return a new array that have the elemnt power by the index of it self

// ********* using for loop : **************


function powerElementIndex(nums){
  let newArr=[];
  for(i=0;i<nums.length;i++){
    newArr.push((nums[i])**i);
  };
  console.log("EX#24 : (using for loop) the new array : "+newArr);
}
var nums= [44, 5, 4, 3, 2, 10]
powerElementIndex(nums) //=> [1, 5, 16, 27, 16, 100000]


// ********* using while loop : **************


function powerElementIndex2(nums){
  let newArr=[];let i=0;
  while(i<nums.length){
    newArr.push((nums[i])**i);i++;
  };
  console.log("EX#24 : (using while loop) the new array : "+newArr);
}
var nums= [44, 5, 4, 3, 2, 10]
powerElementIndex2(nums) //=> [1, 5, 16, 27, 16, 100000]


//25  **************************************************************************************************************************************************
// Create a function called evenNumberEvenIndex
// that accept an array of nums
// and return a new array that have the even number in even index

// ********* using for loop : **************

function evenNumberEvenIndex(nums){
  let newArr=[];
  for(i=0;i<nums.length;i++){
    if(i%2==0 && nums[i]%2==0){
      newArr.push(nums[i]);
    }
  }
  console.log("EX#25 : (using for loop) the new array : "+newArr);
}
var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
evenNumberEvenIndex(nums) //=> [2,8,34]

// ********* using while loop : **************

function evenNumberEvenIndex2(nums){
  let newArr=[]; let i=0;
  while(i<nums.length){
    if(i%2==0 && nums[i]%2==0){
      newArr.push(nums[i])
    };
    i++;
  }
  console.log("EX#25 : (using while loop) the new array : "+newArr);
}
var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
evenNumberEvenIndex2(nums) //=> [2,8,34]



console.log("***************************************************************************************");
// While Exercises  ******************************************************************************************************************** 
// 1
// Create a function called subtract
// that takes a single parameter n,
// and return the subtraction of all
// starting from n to 0


function subtract(n){
  let sub=0;let i=0;
while(i<n){
  sub -=(i-1);
  i++;
}
console.log("EX#01 : (while) The subtraction of all starting from ( "+n+" ) to 0 = "+sub)
}

Ex: subtract(2); //=> 2 - 1 - 0 => 1
Ex: subtract(5);// => 5 - 4 - 3 - 2 - 1 - 0 => -5
Ex: subtract(9); //=> 9 - 8 - 7 - 6 - 5 - 4 - 3 - 2 - 1 - 0 => -27






//2
// Create a function called factorial
// that takes a single parameter n,
// and return the product of all integers up to n starting from 1

function factorial(n){
    var fact = n;
    while (n > 1 ) { 
      fact *= n-1;
      n--;
    };
    
  console.log("EX#02 : (while) The product of all integers up to ( "+n+" ) starting from 1  = "+fact)
  }
  
Ex: factorial(2); //=> 2 * 1 => 2
Ex: factorial(4); //=> 4 * 3 * 2 * 1 => 24


// 3
// Create a function called repeatStr
// that takes 2 parameters string and number,
// and return the string number time with space
// Important: the continue condition should be [somthing !== 0]
// ** Think how we can return nothing ???
// ** Important: You should dint have extra space at the end

function repeatStr(st,n){
  let stRepeted="";
  while(n>0){
    stRepeted +=st+" ";
    n--;
  }
  console.log("EX#03 : (while) The repeted string : "+stRepeted);
}


Ex: repeatStr("to",2); //=> "to to"
Ex: repeatStr("to",4); //=> "to to to to"



// 4
// Create a function called sum2
// that take two parameter
// and will return the sumation from the first number to the second number

function sum2(num1,num2){
  var sum2=0;
while(num1<=num2){
sum2 +=num1;
num1++;
}
console.log("EX#04 : (while) The sumation from the first number to the second number = "+sum2)
}
 sum2(4, 5); //=> 4 + 5 => 9
 sum2(3, 6); //=> 3 + 4 + 5 + 6 => 18



// 5
// Create a function called multiOf
// that takes 3 parameters,
// and return the first number mutiple by
// (the second one ^ the third number)
// ** Important: dont use **

function multiOf(num1,num2,num3){
mult = num1 * Math.pow(num2,num3);
console.log("EX#5 : "+mult)
}
 multiOf(4,10,3); //=> 4000
 multiOf(6,3,2); //=> 54
 multiOf(6,2,3); //=> 48



//6
// Create a function called muti2
// that take two parameter
// and will return the multiplication
// from the first number to the second number

function muti2(num1,num2){
        let multy=1;
        while(num1<=num2){
            multy *=num1;
            num1++;
        }
        console.log("EX#6 : "+multy)
    }

Ex: muti2(4, 5); //=> 4 * 5 => 20
Ex: muti2(3, 6); //=> 3 * 4 * 5 * 6 => 360


// 7
// Create a function called numberBetweenUs
// that take 2 parameters
// and return the number between them
// ** Important: You should't have extra space at the end and comma
// ** Important: the stop condition should [num1!==num2-1]
// ** hint: maybe you will have 2 if statment












//numberBetweenUs(2,8) //=> "3, 4, 5, 6, 7"
//numberBetweenUs(1,3) //=> "2"

/*
8
Write a function called countDown
that takes one parameter
and return a string represent the count down from the number
that insert to 0
instead of 0 you shoulf have "done"
between each number a comma and space
** you need to use recursion
** Important: You should't have extra space at the end and comma
countDown(5)
=> "5, 4, 3, 2, 1, done"
countDown(2)
=> "2, 1, done"
countDown(7)
=> "7, 6, 5, 4, 3, 2, 1, done"
*/







//For Exercises


console.log("For Exercises ************************************************************")
//  * Exercise 4:
//  * Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed
//  * to the function with the new key and value added for each object


  console.log("EX#4 : The new array : ")  
  function addKeyAndValue(array, key, value) {
    
    for (i = 0; i < array.length; i++) {
      narr = array[i];
      narr[key] = value;
    }
    console.log(array)
    }

 //Test Cases:
addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')
 //Result:
 //[{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]




//  * Exercise 5:
//  * Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the
//  * values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count









//  * Test Cases 1: vowelCount('Elie') // {e:2,i:1};
//  * Test Cases 2:  vowelCount('Tim') // {i:1};
//  * Test Cases 3:  vowelCount('Matt') // {a:1})
//  * Test Cases 4:  vowelCount('hmmm') // {};
//  * Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
//  *
//  *
//  * Result:
//  * Test Cases 1: {e:2,i:1};
//  * Test Cases 2: {i:1};
//  * Test Cases 3: {a:1})
//  * Test Cases 4: {};
//  * Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
//  *
//  */
