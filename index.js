export const normalize = (input, key = "id") => input.reduce((result, item) => {
  result[item[key]] = item;

  return result;
}, {});

export const denormalize = (input) => Object.values(input);

export const getItem = (input, key, attribute) =>
  attribute ? input[key][attribute] : input[key];
