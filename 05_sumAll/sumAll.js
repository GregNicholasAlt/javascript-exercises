const sumAll = function(s,e) {
    if(![s,e].every(el => typeof el === 'number' && el >= 0)){
        return 'ERROR'
    }
    if (e<s){
        let temp = e;
        e = s;
        s = temp;
    }
    let sum = 0
    for(let i=s; i<=e; i++){
        sum += i
    }
    return sum
};

// Do not edit below this line
module.exports = sumAll;
