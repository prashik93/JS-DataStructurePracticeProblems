let rollMap = new Map();

for(let i = 0; i < 6; i++) {
    dieRoll = Math.floor(Math.random() * (6 - 1 + 1) + 1);
    console.log(dieRoll);
    rollMap.set(i+1, dieRoll);
}
console.log(rollMap);