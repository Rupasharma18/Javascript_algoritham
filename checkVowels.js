// function char(string1){
//     var count = 0;
//     var array = string1.split(" ");
//     console.log(array);
//     var vowels = "AEIOU";
//     for (var i = 0; i< vowels.length; i++){
//         if (array[0] == vowels[i] || array[array.length-1] == vowels[i]){
//              console.log("kom");
//             count++;
//         }
//     }
//     if (array[0] == array[0].toUpperCase() || array[array.length-1] == array[array.length-1].toUpperCase()){
//         count++;
//     }
//     return count;

//     // return count;
// }
// console.log(char("HOW ARE OOU"));





function vowelCount(str){
    let splitString=str.split(" ");
    console.log(splitString);
    let count=0;
    let vowels="AOUIE";
    // splitString.forEach((letter)=>{
    if(vowels.indexOf(splitString[0].toUpperCase())!==-1 || vowels.indexOf(splitString[splitString.length-1].toUpperCase())!==-1){
        count++;
    }   
  
//    });
   return count;    
  }
console.log(vowelCount("YOU MUST AIM TO BE A BETTER PERSON TOMORROW THAN YOU ARE TODAY"));


// function vowels(lette){
//     var arrayOfLetter = lette.split(" ")
//     // return arrayOfLetter;
//     var vow = "AEIOU";
//     // console.log(arrayOfLetter[0]);
//     console.log(arrayOfLetter[arrayOfLetter.length-1].includes("O"));
//     var count = 0;
//     if(arrayOfLetter[0].includes("OU")){
//         count++;
//     }
//     if(arrayOfLetter[arrayOfLetter.length-1].includes("O")){
//          count++;
//     }
     
    
//     return count;
//   }
//   console.log(vowels("YOU MUST AIM TO BE A BETTER PERSON TOMORROW THAN YOU ARE TODAY"))


// function vowelCount(str){
//     let splitString=str.split(" ");
//     console.log(splitString);
//     let count=0;
//     let vowels="AOUIE";
//     // splitString.forEach((letter)=>{
//     if(vowels.indexOf(splitString[0].toUpperCase()) || vowels.indexOf(splitString[splitString.length-1].toUpperCase())){
//       count++;
//     }
//     if(splitString[splitString.length-1] == "@"){
//       console.log( "invaild");
//     }
  
//   // });
//    return count;    
//   }
// console.log(vowelCount("YOU MUST AIM TO BE A BETTER PERSON TOMORROW THAN YOU ARE @TODAY"));
