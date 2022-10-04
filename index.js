import { strictEquals } from "./strictEquals.js";
import { strictEqualsRestriccionNan } from "./strictEqualsRestriccionNan.js";

console.log(strictEquals(1, 1));
console.log(strictEqualsRestriccionNan(NaN, NaN));
console.log(strictEquals(0, -0));
console.log(strictEquals(-0, 0));
console.log(strictEquals(1, "1"));
console.log(strictEquals("true", "false"));
console.log(strictEquals("false", "false"));
console.log(strictEquals("water", "oil"));
