/**
 * Converts a number representation in Roman numerals to Arabic numerals.
 *
 * @param {string} romanNumber - A number represented in Roman numerals.
 * @returns {number}
 */
module.exports = function convert(romanNumber) {
    /* eslint-disable sort-keys */
    const intermediatesMap = {
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
        ...intermediatesMap
    };

    const symbols = romanNumber.split('');
    const toArabic = (symbol) => symbolMap[symbol];

    return symbols.reduceRight((accumulator, currentSymbol, index) => {
        const currentValue = toArabic(currentSymbol);
        const rightmostIndex = symbols.length - 1;

        if (index === rightmostIndex) {
            return currentValue;
        }

        const rightSymbol = symbols[index + 1];
        const rightValue = toArabic(rightSymbol);

        if (rightValue > currentValue) {
            return accumulator - currentValue;
        }

        const sum = accumulator + currentValue;
        const intermediateValues = Object.values(intermediatesMap);
        const isEqualToSum = (value) => value === sum;
        const isSubtractiveNotation = (value) => (value - currentValue) === sum;
        const isValid = !intermediateValues.some(isEqualToSum)
            && !intermediateValues.some(isSubtractiveNotation);

        return isValid
            ? sum
            : NaN;
    }, 0);
};
