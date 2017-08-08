'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItem = exports.denormalize = exports.normalize = undefined;

var _validates = require('./utils/validates');

var normalize = exports.normalize = function normalize(input, key) {
  return (0, _validates.validateArr)(input).reduce(function (result, item) {
    result[item[key]] = item;

    return result;
  }, {});
};

var denormalize = exports.denormalize = function denormalize(input) {
  return Object.values(input);
};

var getItem = exports.getItem = function getItem(input, key, attribute) {
  return attribute ? input[key][attribute] : input[key];
};