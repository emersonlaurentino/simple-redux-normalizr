var normalizr = (function (exports) {
'use strict';

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

return exports;

}({}));
