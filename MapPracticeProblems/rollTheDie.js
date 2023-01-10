let rollMap = new Map();
let die = true;
const dieReachCondition = 10;
let count;
let maxValue = 0;
let minValue = 10;
let maxKey = 0;
let minKey = 0;

while(die) {
    dieRoll = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    if(rollMap.has(dieRoll)) {
        count = rollMap.get(dieRoll);
        rollMap.set(dieRoll, count+1);
    } else {
        count = 1;
        rollMap.set(dieRoll, count);
    }
    if(rollMap.get(dieRoll) == dieReachCondition){
        die = false;
    }
}

for(let i = 0; i <= rollMap.size; i++) {
    if(rollMap.get(i) > maxValue) {
        maxValue = rollMap.get(i);
        maxKey = i;
    }
    if(rollMap.get(i) < minValue) {
        minValue = rollMap.get(i);
        minKey = i;
    }
}

console.log(rollMap);
console.log("The number that reached maximum number of times is : " + maxKey);
console.log("The number that reached minimum number of times is : " + minKey);