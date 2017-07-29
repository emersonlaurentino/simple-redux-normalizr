export const validateArr = (input) => {
  const isArr = Array.isArray(input);

  if (!isArr) {
    throw new Error('Expected an array.');
  }

  return input;
};
