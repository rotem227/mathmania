import { generateExcercise } from "../excercises-generator";

describe('Excercises Generator', () => {
    it('Should Generate numbers in an descending order', () => {
        const { firstNumber, secondNumber } = generateExcercise({ range: [1, 10], operators: ['add', 'divide', 'multiply', 'substract'] });

        expect(firstNumber).toBeGreaterThanOrEqual(secondNumber);
    });

    it('Should Generate a valid expected result', () => {
        const excercise = generateExcercise({ range: [1, 10], operators: ['add', 'divide', 'multiply', 'substract'] });
        const { firstNumber, secondNumber, action, expected } = excercise;
        const result = action(firstNumber, secondNumber);

        expect(result).toBe(expected);
    });
});