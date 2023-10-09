//check the given number is prime or not

var num=99;
var count=0;

for(a=2; a<=num; a++)
{
    if(num%a==0)
    {
        count++;
        console.log(count);
    }
}
console.log(count==0?"Prime number":"Not a prime number");