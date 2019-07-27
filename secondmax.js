var arr = [2,3,4,5,6,6];
// var larg = arr[0];
// var i = 0;
// var emy_arr = [];
// while(i < arr.length){
//     if(larg < arr[i]){
//         larg = arr[i];
//     }
//     i++;
// }
// console.log(larg);



function findSecondLargeNumber(arr){
	
	var fLargeNum = 0;
	var sLargeNum = 0;
	
	for(var i=0; i<arr.length; i++){
		if(fLargeNum < arr[i]){
			sLargeNum = fLargeNum;
			fLargeNum = arr[i];			
		}else if(sLargeNum < arr[i]){
			sLargeNum = arr[i];
		}
	}
	
	return sLargeNum;
	
}
console.log([2,3,4,5,6,6]) ;

// var arr = [3, 6, 2, 56, 32, 5, 89, 32];
// var largest = arr[0];

// for (var i = 0; i < arr.length; i++) {
//     if (largest < arr[i] ) {
//         largest = arr[i];
//     }
// }
// console.log(largest);