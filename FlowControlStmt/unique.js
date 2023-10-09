var num=1000;
var sum=0;
while (num>0) 
{
  var last=num%10;
  sum=sum+last;
  num=parseInt(num/10);
  console.log(sum);       
}

