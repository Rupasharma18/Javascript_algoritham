var n = 726;
if (n > 1000){
    console.log("INVALID LENGTH");
}
var num = n;
var c_48 = parseInt(n/ 48);
if(c_48 >0 ){
    console.log("48 x " + c_48 + " = " + (c_48 * 48));
    n %= 48;
    // console.log(n);
}
var c_24 = parseInt(n/24);
if(c_24 > 0){
    console.log("24 x" + c_24 + " = " + (c_24 * 24));
    n %= 24;
    // console.log(n);
} 
var c_12 = parseInt(n/12);
if(c_12 > 0){
    console.log("12 x" + c_12 + " = " + c_12 * 12);
    n%= 12;
    // console.log(n);
}
var c_6 = parseInt(n/ 6);
if (c_6 > 0){
    console.log("6 x" + c_6 + "=" + c_6* 6);
    n %= 6;
    // console.log(n);
}
if (n == 0){
    console.log("Remaining boxes:- 0");
}else {
    console.log("Remaining boxes =" + n + " x 1 = " + n);
}
console.log("Total number of boxes:-", num);
var Total = c_48+c_24+c_12+c_6;
if (Total == 0){
    Total++;
}
console.log("Total number of cartons =", Total);