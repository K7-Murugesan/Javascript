var num=1634;
var temp=num;
var powr=0;
var sum=0;

while (num>0) 
{
  num=parseInt(num/10);
  powr++;   
}
num=temp;

while (num>0)
{
  var last=num%10;
  sum = sum+ last**powr;
  num=parseInt(num/10);   
}

num=temp;

console.log("sum is "+sum);
console.log(num==sum?"Armstrong":"Not an Armstrong");