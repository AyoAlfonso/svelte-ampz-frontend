'use strict';

var index$2 = require('./index-cb97644f.js');

function constructQry(url, fl) {
    url += "?";
    Object.keys(fl).forEach(e => {
        if (fl[e] && fl[e] !== "undefined" && fl[e].length > 0)
            url += `${e}=${fl[e]}&`;
    });
    return url;
}
function first(text) {
    if (!text) return text
    return text.substring(0, 1).toUpperCase()
}
function date(value) {
    const date = new Date(value);
    return date.toLocaleString(['en-US'], { month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}
function currency(value, currency, decimals) {
    const digitsRE = /(\d{3})(?=\d)/g;
    value = parseFloat(value);
    if (!isFinite(value) || (!value && value !== 0)) return ''
    currency = currency != null ? currency : index$2.currency.symbol;
    decimals = decimals != null ? decimals : 0;
    let stringified = Math.abs(value).toFixed(decimals);
    let _int = decimals
        ? stringified.slice(0, -1 - decimals)
        : stringified;
    let i = _int.length % 3;
    let head = i > 0
        ? (_int.slice(0, i) + (_int.length > 3 ? ',' : ''))
        : '';
    let _float = decimals
        ? stringified.slice(-1 - decimals)
        : '';
    let sign = value < 0 ? '-' : '';
    return sign + currency + ' ' + head +
        _int.slice(i).replace(digitsRE, '$1,') +
        _float
}

exports.constructQry = constructQry;
exports.currency = currency;
exports.date = date;
exports.first = first;
