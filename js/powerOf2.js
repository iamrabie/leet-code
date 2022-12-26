//user will enter the value, we have to find at which power of 2 is equal to the input
//create a variable for input
var user_input = window.prompt('Enter a number');
/* console.log('user input' , user_input); */

//create a variable to store 2
var two = 2;
/* console.log('two' ,two); */

//for loop will be used for iterating power
for(var i = 0; i < user_input; i++)
{
//condition will be applied to check if power of 2 is equal to the input or not
   //if condition is true, rerurn value of i
   if(two**i == user_input)
    {
      /* console.log('power is', i); */
      alert('power is ' + i);
      break;  
    }
}

//else return does not exist
if(two**i != user_input)
{
    alert('power does not exists');
    /* console.log('power doesnt exists'); */
}