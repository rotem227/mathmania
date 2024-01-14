import { useState } from 'react';

type Props = {
    onValidResult: () => void;
    expected: number;
}

const useExerciseResult = ({ onValidResult, expected }: Props) => {
    const [result, setResult] = useState('');
    const [isWrong, setIsWrong] = useState(false);
    const [isRevealed, setIsRevealed] = useState(false);

    const append = (value: string) => setResult((prev) => prev + value);

    const modify = (callback: (prev: string) => string) => {
        setResult((prev) => {
            const modifiedResult = callback(prev);

            return modifiedResult.toString();
        });
    };

    const reset = () => {
        setResult('');
        setIsWrong(false);
        setIsRevealed(false);
    };

    const reveal = () => {
        setIsRevealed(true);
        setResult(expected.toString());
    };

    const validate = () => {
        if (result === '') {
            return;
        }

        if (parseInt(result) !== expected) {
            setIsWrong(true);
            return;
        }

        reset();
        onValidResult();
    };

    return {
        result,
        isWrong,
        isRevealed,
        append,
        reset,
        reveal,
        validate,
        modify,
    };
};

export default useExerciseResult;