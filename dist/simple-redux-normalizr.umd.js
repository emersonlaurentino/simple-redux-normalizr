(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(factory((global.normalizr = {})));
}(this, (function (exports) { 'use strict';

var validateArr = function validateArr(input) {
  var isArr = Array.isArray(input);

  if (!isArr) {
    throw new Error('Expected an array.');
  }

  return input;
};

var normalize = function normalize(input, key) {
  return validateArr(input).reduce(function (result, item) {
    result[item[key]] = item;

    return result;
  }, {});
};

var denormalize = function denormalize(input) {
  return Object.values(input);
};

var getItem = function getItem(input, key, attribute) {
  return attribute ? input[key][attribute] : input[key];
};

exports.normalize = normalize;
exports.denormalize = denormalize;
exports.getItem = getItem;

Object.defineProperty(exports, '__esModule', { value: true });

})));
