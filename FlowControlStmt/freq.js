var num=11231;
var digit=1;
var count=0;
while (num>0) 
{
    var last=num%10; //taking our last digit
    if(digit==last)    // compare last to given digit
    {
        count++;     // if same make a count
        
    }
    num=parseInt(num/10); //delete the last digit
    
}
console.log(digit+" is present "+count+" times");

//check the given number num2 is in the num1 or not