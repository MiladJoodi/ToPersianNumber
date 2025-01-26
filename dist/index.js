"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ToPersianNumber = void 0;
const ToPersianNumber = (input) => {
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
exports.ToPersianNumber = ToPersianNumber;
