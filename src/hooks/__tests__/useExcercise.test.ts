import { renderHook } from '@testing-library/react';
import useExcercises from '../useExcercises';

describe('useExcercise', () => {
    it('Generates an excercise', () => {
        const excercise = renderHook(() => useExcercises({ range: [1, 10] }));

        expect(excercise).toBeTruthy();
    });
});