let birthdayMap = new Map();
const maxCount = 50;
let flag = true;

while(flag) {
    birthMonth = Math.floor(Math.random() * (12 - 1 + 1) + 1);
    birthYear = Math.floor(Math.random() * (1999 - 1990 + 1) + 1990);
    if((birthYear == "1992") || (birthYear == "1993")) {
        if(birthdayMap.has(birthMonth)) {
            count = birthdayMap.get(birthMonth);
            birthdayMap.set(birthMonth, count+1);
        } else {
            count = 1;
            birthdayMap.set(birthMonth, count);
        }
        if(birthdayMap.get(birthMonth) == maxCount){
            flag = false;
        }
    }
}
for(key of birthdayMap.keys())
{
    console.log(key+" => "+birthdayMap.get(key))
}