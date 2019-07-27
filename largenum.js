/*Write a program to input integer elements into an array of size 20 and perform the following operations:
i) Display largest number from the array
ii) Display smallest number from the array
iii) Display sum of all the elements of the array*/
var arr = [-1,2,3,4,4,5,6,6,7,78,9,9,7,6,5,4,3,2,3,4,5];
var i = 0;
var largest = arr[0];
while (i < arr.length){
    if(arr[i] > largest){
        largest = arr[i];
    }
    i++;
}
console.log(largest);
// sum of array
var sumNum = 0; 
for(let i = 0; i < arr.length; i++){
    sumNum= sumNum+ arr[i];
}
console.log(sumNum);