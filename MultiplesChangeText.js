var n=prompt("Enter limit");
var finalResult=multiplesPrint(n);
alert("The list of multiples of numbers upto "+n+" is "+finalResult)
function multiplesPrint(input){
	var resultSet=[];
	for(var i=1;i<=input;i++){
		if(i%3==0){
			resultSet[i-1]="Fizz";
		}else if(i%5==0){
			resultSet[i-1]="Buzz";
		}else{
			resultSet[i-1]=i;
		}
	}
	return resultSet
}