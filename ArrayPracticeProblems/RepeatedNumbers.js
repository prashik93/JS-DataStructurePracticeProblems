let repeatedTwiceArray = new Array();

function checkPalindrome(num) {
    let rem = 0;
    let rev = 0;

    while(num > 10) {
        rem = num % 10;
        rev = (rev * 10) + rem;
        num = Math.floor(num / 10);
    }
    if((rev == num)) {
    
        return true;
    } 
    return false;
}

for(let i = 0 ; i <= 100; i++) {
    if((i > 10) && checkPalindrome(i)) {
        repeatedTwiceArray.push(i);
    }
}

console.log("The Number Array is : " + repeatedTwiceArray);
