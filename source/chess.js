'use strict';

function chess(n) {
    if (parseInt(n) === 1) {
        return null;
    }
    let ret = "";
    let was_black_start = false;
    for (let i = 0; i < parseInt(n); i++) {
        let was_black = was_black_start;
        for (let j = 0; j < parseInt(n); j++) {
            ret += was_black?" ":"*";
            was_black = !was_black;
        }
        ret += "\n";
        was_black_start = !was_black_start;
    }
    return ret;
}