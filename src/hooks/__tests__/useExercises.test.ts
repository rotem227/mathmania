import { renderHook, act } from '@testing-library/react';
import useExercises from '../useExcercises';

describe('useExercises', () => {
    it('Should generates 10 exercises by default', () => {
        const { result } = renderHook(() => useExercises({ range: [1, 10], operators: ['add', 'divide', 'multiply', 'substract'] }));

        expect(result.current.total).toBe(10);
    });

    it('Should generates a valid exercise', () => {
        const { result } = renderHook(() => useExercises({ range: [1, 10], operators: ['add', 'divide', 'multiply', 'substract'] }));

        const { firstNumber, secondNumber, expected, action } = result.current.excercise;

        expect(action(firstNumber, secondNumber)).toBe(expected);
    });

    it('Should start with the first exercise and proceed to the second exercise', () => {
        const { result } = renderHook(() => useExercises({ range: [1, 10], operators: ['add', 'divide', 'multiply', 'substract'] }, 5));

        expect(result.current.excercise).toEqual(result.current.exercises[0]);
        expect(result.current.index).toBe(0);

        act(result.current.next);

        expect(result.current.excercise).toEqual(result.current.exercises[1]);
        expect(result.current.index).toBe(1);
    });

    it('Should indicate that all exercises have been completed', () => {
        const { result } = renderHook(() => useExercises({ range: [1, 10], operators: ['add', 'divide', 'multiply', 'substract'] }, 2));

        expect(result.current.isCompleted).toBe(false);

        act(result.current.next);

        expect(result.current.isCompleted).toBe(true);
    });

    it('Should validate that there is no option to proceed to next exercise when all completed', () => {
        const exercisesNumber = 2;
        const { result } = renderHook(() => useExercises({ range: [1, 10], operators: ['add', 'divide', 'multiply', 'substract'] }, exercisesNumber));

        expect(result.current.isCompleted).toBe(false);

        act(result.current.next);
        act(result.current.next);

        expect(result.current.index + 1).toBe(exercisesNumber);
    });
});