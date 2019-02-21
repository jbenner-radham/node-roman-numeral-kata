module.exports = function app(romanNumber) {
    /* eslint-disable sort-keys */
    const modifierMap = {
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    /* eslint-enable */

    const symbolMap = {
        I: 1,
        ...modifierMap
    };

    if (romanNumber.length === 1) {
        return symbolMap[romanNumber];
    }
};
