import { useState, useMemo } from 'react';
import { generateExcercise, ExcerciseConfig } from '../utils/excercises-generator';

export { operators } from '../utils/excercises-generator';

const excerciseFallback = { firstNumber: 0, secondNumber: 0, symbol: '+', expected: 0 };

const useExcercises = ({ range, operators }: ExcerciseConfig) => {
    const [index, setIndex] = useState(0);
    const excercises = useMemo(() => {
        return Array(10).fill(true).map(() => generateExcercise({ range, operators }));
    }, []).filter(Boolean);

    const next = () => setIndex((prev) => ++prev);

    return {
        next,
        excercises,
        excercise: excercises[index] || excerciseFallback,
        index,
        total: excercises.length,
    };
};

export default useExcercises;