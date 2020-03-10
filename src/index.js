module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 !== 0) return false;

    const checkBracketsPair = (a, b) => {
        for (let arr of bracketsConfig) {
            if (arr[0] === a && arr[1] === b) {
                return true;
            }
        }
        return false;
    };

    let wasRemoved = true;
    let arr = str.split("");

    while (wasRemoved) {
        wasRemoved = false;
        for (let i = arr.length - 1; i > 0; --i) {
            if (checkBracketsPair(arr[i - 1], arr[i])) {
                arr.splice(i - 1, 2);
                wasRemoved = true;
            }
        }
    }
    return arr.length === 0;
};
