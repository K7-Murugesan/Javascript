var cigar=50 ;
var isWeekend=false;

if((isWeekend==false && cigar>=40 && cigar<=60) || (isWeekend==true && cigar>=40) )
//its weekday so cigar should be in range 40-60
//OR
//its weekend so cigar is more than 40
{
    console.log(true);
}
else
{
    console.log(false);
}