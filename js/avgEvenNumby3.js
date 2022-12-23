//Program 2
//Average of even numbers divisible by 3 

var evenNumbers = [2, 4, 6, 9, 12, 14, 18, 21, 24];
console.log("array" , evenNumbers);
var avg;
var sum = 0;
var count = 0;

for(var i = 0; i < evenNumbers.length; i++)
{
  //checking if number is even and is divisible by three also
  if ((evenNumbers[i] % 2 == 0) && (evenNumbers[i] % 3 == 0))
  {
    //counts how many times the condition mets
    count += 1;
    console.log('count' , count);
    //adds the numbers which fulfill the conditions
    sum += evenNumbers[i];
    console.log('sum' , sum);
  }
}

//calculating average
avg = sum / count;

console.log("Avg is" , avg);