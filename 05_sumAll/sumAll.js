const sumAll = function (a, b) {

    if (a < 0 || b < 0) {
        return "ERROR";
    }

    if (typeof a !== 'number' || typeof b !== 'number') {
        return "ERROR";
    }

    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        return "ERROR";
    }

    if (a > b) {
        [a, b] = [b, a]
    }
 
    let result = 0;
    for (let i = a; i <= b; i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
