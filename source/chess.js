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
    let raw_string = ''.padEnd(n * n, '* ');
    let re = new RegExp('.{' + n + '}', 'g');


    let reverse_str = str => str.split('').reverse().join('');
    let string_arr = raw_string.match(re);
    if (n % 2 === 0) {
        string_arr = string_arr.map((value, index, array) => {
            if(index % 2 !== 0) {
                return reverse_str(string_arr[index]);
            }
            return string_arr[index];
        });
    }

    return string_arr.join('\n') + '\n';
}


console.log(chess(8));
