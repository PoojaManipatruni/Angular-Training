var n=prompt("Enter limit");
var finalResult=multiplesSum(n);
alert("The sum of multiples of 3 and 5 below "+n+" is "+finalResult);

function multiplesSum(input){
	var resultSet=[];
	var sum=0;
resultSet[0]=0;

var count=0;
	for(var i=0;i<input;i++){
		if(i%3==0 || i%5==0){
			count=count+1;
			resultSet[count]=i;
		}
	}
	for(var i=0;i<resultSet.length;i++){
		sum=sum+resultSet[i];
	}
	return sum;
}