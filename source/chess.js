'use strict';


/**
 * Function that returns a layout of chessboard with dimensions equal to n
 * @param {(number|string)} n - The size of the board
 * @returns {(null|string)} - Chessboard layout in string, where '*' is a black cell and ' ' is white.
 * If layout is impossible - returns null
 */
function chess(n) {

    if (Number.isNaN(parseInt(n))) {
        return null
    }

    if (parseInt(n) <= 1) {
        return null;
    }
    let rawString = ''.padEnd(n * n, '* ');
    let re = new RegExp('.{' + n + '}', 'g');


    let reverseStr = str => str.split('').reverse().join('');
    let stringArr = rawString.match(re);
    if (n % 2 === 0) {
        stringArr = stringArr.map((value, index, array) => {
            if (index % 2 !== 0) {
                return reverseStr(stringArr[index]);
            }
            return stringArr[index];
        });
    }

    return stringArr.join('\n') + '\n';
}