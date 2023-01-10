const prompt = require("prompt-sync")({sigint : true});
let primeFactorizationArray = new Array();

let usrInput = prompt("Enter Number To Get Its Prime Factors : ");

function primeFactors(num) {
    let divisor = 2;
  
    while (num >= 2) {
      if (num % divisor == 0) {
        primeFactorizationArray.push(divisor);
        num = num / divisor;
      } else {
        divisor++;
      }
    }
    return primeFactorizationArray;
  }

  console.log('Prime factors of', usrInput + ':', primeFactors(usrInput).join(' '))