const removeFromArray = function(arr, ...rest) {
    let ans = [...arr]
    rest.forEach(arg => {
        ans = ans.filter(el => el !== arg)
    })
    return ans
};

// Do not edit below this line
module.exports = removeFromArray;
