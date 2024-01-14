import { generateExercises, operatorsData, OperatorKey } from "../exercises-generator";

const operators = Object.keys(operatorsData) as OperatorKey[];

describe('Exercises Generator', () => {
    it('Should Generate the required exercises number', () => {
        const exercisesNumber = 9;
        const exercises = generateExercises(exercisesNumber, { range: [1, 10], operators });

        expect(exercises.length).toBeGreaterThanOrEqual(exercisesNumber);
    });

    it('Should Generate a valid expected result', () => {
        const exercises = generateExercises(5, { range: [1, 10], operators });

        exercises.forEach((exercise) => {
            const { firstNumber, secondNumber, action, expected } = exercise;
            const result = action(firstNumber, secondNumber);

            expect(result).toBe(expected);
        });
    });

    it('Should Generate numbers in a descending order', () => {
        const exercises = generateExercises(5, { range: [1, 10], operators });

        exercises.forEach((exercise) => {
            const { firstNumber, secondNumber } = exercise;

            expect(firstNumber).toBeGreaterThanOrEqual(secondNumber);
        });
    });

    it.each(operators)(`Should generate only: '%i' exercises`, (operator) => {
        const exercises = generateExercises(5, { range: [1, 10], operators: [operator] });

        const validateSymbol = exercises.every(({ symbol }) => symbol === operatorsData[operator].symbol);

        expect(validateSymbol).toBe(true);
    });
});
