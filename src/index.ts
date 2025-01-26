export const ToPersianNumber = (input: number | string): string => {
    if (typeof input === "number") {
      return new Intl.NumberFormat("fa-IR").format(input);
    }
  
    if (typeof input === "string") {
      return input.replace(/\d/g, (digit) => {
        return new Intl.NumberFormat("fa-IR").format(Number(digit));
      });
    }
  
    return input;
  };
  