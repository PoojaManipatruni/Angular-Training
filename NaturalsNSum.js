var number=prompt("Enter Number");
var result=sum(number);
alert("sum of first "+number+" natural numbers is "+result);

function sum(input){
	var s=0;
	for(var i=1;i<=input;i++){
		s=s+i;
	}
	return s;
}