export const querySelector = <T extends HTMLElement>(
  selector: string,
  type?: new () => T
): T => {
  const elt = document.querySelector(selector);
  if (elt === null) {
    throw new Error(`Element not found  with selector ${selector}`);
  }
  if (type) {
    if (!(elt instanceof type)) {
      throw new Error(`Element found but not of type ${type.name}`);
    }
  }
  return elt as T;
};

export const setAttribute = (
  elt: Element,
  key: string,
  value: number
): void => {
  elt.setAttributeNS(null, key, value + "");
};

export const getKeys = <T extends object>(obj: T): (keyof T)[] => {
  return Object.keys(obj) as (keyof T)[];
};

export const sleep = (delay: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  });
};
