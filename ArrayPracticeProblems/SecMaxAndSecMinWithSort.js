let max = 0;
let min = 999;
let secondMax = 0;
let secondMin = 999;
let randomElementArray = new Array();

function generateTenRandomThreeDigitNumber() {
    for(let i = 0; i < 10; i++) {
        let randomNumber = Math.floor(Math.random() * (999 - 100 + 1) + 100);
        randomElementArray.push(randomNumber);
    }
}
generateTenRandomThreeDigitNumber();

let sortedArray = randomElementArray.sort();

console.log("Elements In An Sorted Array :- " );
for(let i = 0; i < sortedArray.length; i++) {
    console.log(sortedArray[i] + " ");
}

sizeOfSortedArray = sortedArray.length;
console.log("Largest Element In An Array :- " + sortedArray[(sizeOfSortedArray - 1)]);
console.log("Second Largest Element In An Array :- " + sortedArray[(sizeOfSortedArray - 2)]);
console.log("Smallest Element In An Array :- " + sortedArray[0]);
console.log("Second Smallest Element In An Array :- " + sortedArray[1]);