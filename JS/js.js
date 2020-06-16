let myNum = 10;
let myStr = 'строка';
let myBool = true;
let myArr = [1, 2, 3, 4, 5];
let myObj = {
    first: 'First Name',
    last: 'Last Name'
}

let decimal2 = myNum / 10 / 4
console.log(decimal2);

let i = 0;
console.log(++i);
console.log(i++);
console.log(--i);
console.log(i--);

let myTest = 20;

myTest += 1
myTest -= 1
myTest *= 1
myTest %= 1
myTest /= 1

let myPi = Math.PI;
let myRound = Math.round(89.279);
let myRandom = Math.random(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
let myPow = Math.pow(3, 5)

let strObj = {
    str: "Мама мыла раму, рама мыла маму",
}

strObj.length = strObj.str.length;



let isRamaPos = strObj.str.indexOf('рама');


let strReplace = strObj.str.replace('мыла', 'моет');

strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');
console.log('strReplace:', strReplace);

console.log(myStr.toUpperCase());
console.log(myStr.toLowerCase());