export const strictEqualsRestriccionNan = (a, b) => {
  if (Number.isNaN(a) || Number.isNaN(b)) {
    return false;
  }
};
