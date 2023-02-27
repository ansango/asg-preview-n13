//This function takes a string and replaces every character with a symbol with an empty string
//It also replaces any space with a dash
//It then returns the string in lowercase

export const kebabParser = (str: string) =>
  str
    .replace(/[`~!@#$%^&*()_|+=?;:'",.<>{}[]\\\/]/gi, '')
    .replace(/\s+/g, '-')
    .toLowerCase();
