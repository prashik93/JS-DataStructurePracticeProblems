let rollMap = new Map();
let die = true;
const dieReachCondition = 10;
let count;

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

console.log(rollMap);