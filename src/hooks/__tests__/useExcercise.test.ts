import { renderHook } from '@testing-library/react';
import useExcercises from '../useExcercises';

describe('useExcercise', () => {
    it('Generates an excercise', () => {
        const excercise = renderHook(() => useExcercises({ range: [1, 10], operators: ['add', 'divide', 'multiply', 'substract'] }));

        expect(excercise).toBeTruthy();
    });
});