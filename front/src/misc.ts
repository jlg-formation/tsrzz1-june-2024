export const querySelector = (selector: string) => {
  const elt = document.querySelector(selector);
  if (elt === null) {
    throw new Error(`Element not found  with selector ${selector}`);
  }
  return elt;
};
