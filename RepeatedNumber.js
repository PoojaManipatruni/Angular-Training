var arrayList= [1, 2, 3, 5, 8, 4, 7, 9, 1, 4, 12, 5, 6, 5, 2, 1, 0, 8, 1];
var finalResult=repeatedNumbers(arrayList);
alert("The Repeated Numbers in given List is "+finalResult)
function repeatedNumbers(input){
	var inputArr=input;
	var repeatArr=input;
	var resArr=[];
	var resArrLen;
	for(var i=0;i<inputArr.length;i++){
		for(var j=i+1;j<repeatArr.length;j++){
			if(inputArr[i]==repeatArr[j+1]){
				resArrLen=resArr.length;
				if(!(resArr.includes(inputArr[i]))){
					resArr[resArrLen]=inputArr[i];
				}
			}
		}
	}
	return resArr;
}