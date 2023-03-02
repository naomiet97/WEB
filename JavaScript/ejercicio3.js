let str1= "Hello";
let str2="lo";
let str3="x";
console.log(str1.replaceAll(str2, str3));
let position;
let startingPos=0;
let times=0;
do{
    position = str1.indexOf(str1, startingPos);
    if(position!=-1){
        startingPos=str2.length+position;
        times++;
    }
} while (position>-1);
alert(times);







// function (str1, str2){
//     console.log(s1.indexOf())
// }
