import { getPercents } from "../../../utils/17.6/percentOfNumber.js";

describe('test percent', () => {
    it('10 percent of 200 equal 20', () => expect(getPercents(10, 200)).toBe(20));
})

describe('test percent 2', () => {
    it('30 percent of 200 equal 60', () => expect(getPercents(30, 200)).toBe(60));
})

describe('test null percent 3', () => {
    it('10 percent of null equal 0', () => expect(getPercents(10, null)).toBe(0));
})