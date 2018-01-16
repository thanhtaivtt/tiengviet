'use strict';

var match = [
    ['tr', 'c'],
    ['q', 'k'],
    ['d', 'z'],
    ['c(?!h)', 'k'],
    ['gi', 'z'],
    ['ch', 'c'],
    ['ngh?', 'q'],
    ['\u0111', 'd'],
    ['gh', 'g'],
    ['nh', 'n\''],
    ['kh', 'x'],
    ['ph', 'f'],
    ['r', 'z'],
    ['th', 'w'],
];

function capitalize(a) {
    return a.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
};

function convert(val, match) {
    return val.replace(new RegExp(match[0], 'g'), match[1]).replace(new RegExp(capitalize(match[0]), 'g'), capitalize(match[1])).replace(new RegExp(match[0].toUpperCase(), 'g'), match[1].toUpperCase());
};

function build(val) {
    if ('string' !== typeof val) val = String(val);

    var tmp = val;
    match.forEach(function (index) {
        tmp = convert(tmp, index);
    });

    return tmp;
}

module.exports = build