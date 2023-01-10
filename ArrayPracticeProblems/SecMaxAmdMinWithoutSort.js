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


console.log("Elements In An Array :- " );
for(let i = 0; i < randomElementArray.length; i++){
    console.log(randomElementArray[i] + " ");
    if(randomElementArray[i] > max) {
        max = randomElementArray[i];
    }
    if(randomElementArray[i] < min) {
        min = randomElementArray[i];
    }
}

for (let j = 0; j < randomElementArray.length; j++) {
    if ((randomElementArray[j] > secondMax) && (randomElementArray[j] < max)) {
        secondMax = randomElementArray[j];
    }
    if((randomElementArray[j] < secondMin) && (randomElementArray[j] > min)) {
        secondMin = randomElementArray[j];
    }
}

console.log("Largest Element In An Array :- " + max);
console.log("Second Smallest Element In An Array :- " + secondMax);
console.log("Smallest Element In An Array :- " + min);
console.log("Second Smallest Element In An Array :- " + secondMin);