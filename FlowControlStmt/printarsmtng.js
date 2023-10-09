var n=20000;
for(var num=1; num<=n; num++)
{

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
if(num==sum)
{
    console.log(num);
}
}

// check th givn digit is prsnt in th Number or not 
