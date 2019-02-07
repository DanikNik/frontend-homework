'use strict';


/**
 * Function that returns a layout of chessboard with dimensions equal to n
 * @param {(number|string)} n - The size of the board
 * @returns {(null|string)} - Chessboard layout in string, where '*' is a black cell and ' ' is white.
 * If layout is impossible - returns null
 */

function chess(n) {

    if (isNaN(parseInt(n))){
        return null
    }

    if (parseInt(n) <= 1) {
        return null;
    }
    let ret = String();
    let was_black_start = false;
    for (let i = 0; i < parseInt(n); i++) {
        let was_black = was_black_start;
        for (let j = 0; j < parseInt(n); j++) {
            ret += was_black ? " " : "*";
            was_black = !was_black;
        }
        ret += "\n";
        was_black_start = !was_black_start;
    }
    return ret;
}

