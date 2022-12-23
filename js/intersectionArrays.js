//Program : intersection of  multiple arrays

//Array1
var Array1 = [ 19, 2, 10];
console.log('Array 1' , Array1);
//Array2
var Array2 = [ 3, 1, 6];
console.log('Array 2' , Array2);
//Array3
var Array3 = [ 9, 1, 10];
console.log('Array 3' , Array3);
//variable to store common value
var common = '';
var common2 = '';
var second_common;
var second_common2;
var count = 0;

//using for loop to compare first two arrays to get the common number
for (var i = 0; i < Array1.length; i++)
{ 
    for (var j = 0; j < Array2.length; j++)
    {
        if (Array1[i] == Array2[j])
        {
           count += 1;
           if (count == 1)
           {
            common = Array1[i];
           }
           //if there are more than one common mumbers
           if (count > 1)
           {
            common2 = Array1[i];
           }
        }
    }
}



//comparing the common number with numbers present in 3rd Array
for (var k = 0; k < Array3.length; k++)
{
    if (common == Array3[k])
    {
        second_common = Array3[k];
    }

    if (common2 == Array3[k])
    {
        second_common2 = Array3[k];
    }
}

if (common == second_common)
{
    if(common2 == second_common2)
    {
      console.log('intersection is' , common, 'and', second_common2);
    }
    else
    {
        console.log('intersection is' , common);
    }
    
}

else
{
    console.log('intersection does not exists');
}
