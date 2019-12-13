'use strict';

require('./index-7460d1f3.js');

const apiUrl = 'https://api.litekart.in';
const nodeApiUrl =  'http://localhost:3000';
const HOST = 'https://www.hopyshopy.com';
const currency = { symbol: '₹', code: 'INR' };
const sorts = [
    { name: "Relevance", val: null },
    { name: "Whats New", val: "-createdAt" },
    { name: "Price low to high", val: "price" },
    { name: "Price high to low", val: "-price" }
];

exports.HOST = HOST;
exports.apiUrl = apiUrl;
exports.currency = currency;
exports.nodeApiUrl = nodeApiUrl;
exports.sorts = sorts;
