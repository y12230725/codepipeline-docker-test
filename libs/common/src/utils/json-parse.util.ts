export const jsonParse = (str: string | undefined) => {
  try {
    return JSON.parse(str);
  } catch (err) {
    return str;
  }
};
