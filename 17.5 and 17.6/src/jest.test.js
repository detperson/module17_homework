import { multiply } from './jest'

// test('multiply 1 * 0 to equal 1', () => {
//     const result = multiply(1, 0)
//     expect(result).toBe(0);
// });

// Тоже самое по другому написали
xdescribe(
    'test multiply',
    () => {
        it('multiply 1 * 0 to equal 0', () => {
            const result = multiply(1, 0)
            expect(result).toBe(0);
        }),
        it('multiply 1 * 1 to equal 1', () => {
            const result = multiply(1, 1)
            expect(result).toBe(1);
        })
    }
);