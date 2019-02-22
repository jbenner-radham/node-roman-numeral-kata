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

    const symbols = romanNumber.split('');
    const toInt = (symbol) => symbolMap[symbol];

    return symbols.reduceRight((accumulator, currentSymbol, index) => {
        const currentInt = toInt(currentSymbol);
        const rightmostIndex = symbols.length - 1;

        if (index === rightmostIndex) {
            return currentInt;
        }

        const rightSymbol = symbols[index + 1];
        const rightInt = toInt(rightSymbol);

        if (currentInt >= rightInt) {
            const sum = accumulator + currentInt;
            const modifierValues = Object.values(modifierMap);
            const isEqualToSum = (value) => value === sum;

            if (modifierValues.some(isEqualToSum)) {
                return NaN;
            }

            return modifierValues.every(modifierValue => (modifierValue - currentInt) !== sum)
                ? sum
                : NaN;
        }

        return accumulator - currentInt;
    }, 0);
};
