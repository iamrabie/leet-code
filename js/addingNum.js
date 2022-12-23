//Program 1
//Adding two numbers from Array and returning their indexes

var Array = [ 1, 4, 5, 3, 2, 0];
var num1 = parseInt(window.prompt
        ('Select a number from array and enter' + '\n' + '[ 1, 4, 5 , 3, 2, 0 ]'));
var num2 = parseInt(window.prompt
        ('Select another number' + '\n' + '[ 1, 4, 5 , 3, 2, 0 ]')); 
var sum;
var n1;
var n2;
var index1;
var index2;
var condition1 = false;
var condition2 = false;


for(var i=0; i<Array.length; i++)
{
    if((Array[i] == num1))
    {
        n1 = Array[i];
        index1 = i;
        condition1 = true;
        console.log("condition1", condition1);
    }

    if(Array[i] == num2)
    {
        n2 = Array[i];
        index2 = i;
        condition2 = true;
        console.log("condition2", condition2);
    }
    sum = n1 + n2;
    console.log(Array[i] + " " + i);
}

if (condition1 == false || condition2 == false)
{
    alert("please choose numbers from the array");
}
else
{
    alert("sum of " +num1+ " and " + num2 + " is " + sum +
    " and their indexes are " + index1 + " and " + index2 + " respectively");
}

/* console.log('sum is' , sum); */
/* console.log('indexes are' + index1 + 'and' + index2); */
