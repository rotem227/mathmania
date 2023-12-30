import { useState, useMemo } from 'react';
import { generateExcercise, ExcerciseConfig } from '../utils/excercises-generator';

export { operators } from '../utils/excercises-generator';

const useExcercises = ({ range, operators }: ExcerciseConfig) => {
    const [index, setIndex] = useState(0);
    const excercises = useMemo(() => {
        return Array(10).fill(true).map(() => generateExcercise({ range, operators }));
    }, []);

    const next = () => setIndex((prev) => ++prev);

    return {
        next,
        excercises,
        excercise: excercises[index],
        index,
        total: excercises.length,
        isCompleted: index + 1 === excercises.length,
    };
};

export default useExcercises;