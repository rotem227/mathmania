import { useState, useMemo } from 'react';
import { generateExercises, ExerciseConfig } from '../utils/exercises-generator';

export { operators } from '../utils/exercises-generator';

const useExercises = ({ range, operators }: ExerciseConfig, exercisesNumber = 10) => {
    const [index, setIndex] = useState(0);
    const exercises = useMemo(() => generateExercises(exercisesNumber, { range, operators }), []);

    const next = () => setIndex((prev) => {
        if (prev === exercisesNumber - 1) {
            return prev;
        }

        return ++prev;
    });

    return {
        next,
        exercises,
        excercise: exercises[index],
        index,
        total: exercises.length,
        isCompleted: index + 1 === exercises.length,
    };
};

export default useExercises;