"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = require("../src/module/sum");
describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect((0, sum_1.default)(1, 2)).toBe(3);
    });
});
//# sourceMappingURL=sum.test.js.map