import { generateExcercise, operatorsData } from "../excercises-generator";

describe('Excercises Generator', () => {
    it('Should Generate numbers in an descending order', () => {
        const { firstNumber, secondNumber } = generateExcercise({ range: [1, 10] });

        expect(firstNumber).toBeGreaterThanOrEqual(secondNumber);
    });

    it('Should Generate a random operator', () => {
        const { symbol, action } = generateExcercise({ range: [1, 10] });
        const result = Object.values(operatorsData).find((operator) => operator.symbol === symbol && operator.action === action);

        expect(result).toBeTruthy();
    });

    it('Should Generate a valid expected result', () => {
        const excercise = generateExcercise({ range: [1, 10] });
        const { firstNumber, secondNumber, action, expected } = excercise;
        const result = action(firstNumber, secondNumber);

        expect(result).toBe(expected);
    });
});