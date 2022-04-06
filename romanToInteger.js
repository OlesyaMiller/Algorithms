var romanToInt = function(s) {
    // define roman and corresponding integer list in descending order
    let symbol = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    let values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    
    let res = 0;
    // traverse through roman number list from highest to lowest
    for(let i = 0; i < symbol.length; i++) {
        // if roman symbol matches start of given s
        // update the s by removing  the matched part and add corresponding integer in res
        while(symbol[i] === s.substring(0, symbol[i].length)) {
            s = s.replace(symbol[i], '');
            res += values[i];
        }
    }
    return res;
};