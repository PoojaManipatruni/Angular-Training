var number=prompt("Enter Number");
if(number==0 || number==1){
	alert("Factorial is 1");
}else{
	var res= factorial(number);
alert("Factorial is "+res)
}

function factorial(input){

	var i, no, fact;
	fact=1;
	no=input;
	for(i=1; i<=no; i++){
		fact= fact*i;
	} 
	return fact; 
}