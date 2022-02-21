function reverseNumber(number) {
    return number.toString().split('').reverse().join('')
}

//
function toDecimal(n) {
    let x = [];
    n = reverseNumber(n)
    for(let i in n) {
        if(n[i] != 0) {
            x.push((Math.pow(2, i)))
        } 
    }
    return x.reduce((x, y) => x+y);  
}

console.log(toDecimal(10011011))