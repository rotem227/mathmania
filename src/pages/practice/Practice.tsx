import { FC, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';

import useExcercises from "../../hooks/useExcercises";
import Keys, { KeyValue, SUBMIT_VALUE, DELETE_VALUE, NEGATIVE_VALUE } from './components/Keys';
import useStore from '../../hooks/useStore';

const Practice: FC = () => {
    const navigate = useNavigate();
    const [state] = useStore();
    const { excercise, index, total, next } = useExcercises({ range: [1, 10], operators: state.operators });
    const { firstNumber, secondNumber, symbol, expected } = excercise;
    const [isWrong, setIsWrong] = useState(false);
    const [isRevealed, setIsRevealed] = useState(false);

    const resultRef = useRef<HTMLInputElement>(null);
    const allDone = index + 1 === total;
    const getCounterStyle = (value: number | string) => ({ '--value': value } as React.CSSProperties);

    const setResult = (value: string) => resultRef.current!.value = value;

    const reset = () => {
        setResult('');
        setIsWrong(false);
        setIsRevealed(false);
    };

    const handleSubmitResult = (result: string) => {
        if (result === '') {
            reset();
            return;
        }

        const parsedResult = parseInt(result);

        if (parsedResult !== expected) {
            setIsWrong(true);
            return;
        }

        reset();
        next();
    };

    const handleValue = (value: KeyValue) => {
        // Clearing the current value after wrong answer.
        if (isWrong) {
            reset();
        }

        const currentResultValue = resultRef.current?.value!;

        switch (value) {
            case SUBMIT_VALUE:
                handleSubmitResult(currentResultValue);
                break;
            case DELETE_VALUE:
                reset();
                break;
            case NEGATIVE_VALUE:
                setResult(handleNegativeInput(currentResultValue));
                break;
            default:
                setResult(currentResultValue + value.toString());
        }
    };

    return (
        <>
            <div className="flex justify-between gap-3 items-center mb-1">
                <div className="flex gap-2">
                    <span className="countdown">
                        <span style={getCounterStyle(index + 1)}></span>
                    </span>
                    <span className="countdown">
                        /
                    </span>
                    <span className="countdown">
                        <span style={getCounterStyle(total)}></span>
                    </span>
                </div>

                <button
                    className="btn btn-secondary btn-outline btn-sm"
                    onClick={() => {
                        setIsRevealed(true);
                        setResult(expected.toString());
                    }}
                >
                    REVEAL
                </button>
            </div>

            <div className="stats bg-neutral w-full mt-4 border-primary border-[1px]">
                <div className="stat">
                    <div className="stat-value text-primary text-4xl text-center">
                        <p>
                            {allDone ? 'Well Done!' : `${firstNumber} ${symbol} ${secondNumber}`}
                        </p>
                        {allDone ? <button className="btn btn-primary btn-sm mt-6" onClick={() => navigate('/')}>Exit</button> : null}
                    </div>
                </div>
            </div>

            {
                !allDone && (
                    <>
                        <div className="w-full my-4">
                            <input
                                ref={resultRef}
                                type="text"
                                placeholder="?"
                                className={clsx([
                                    'input',
                                    'input-bordered',
                                    'w-full',
                                    'text-center',
                                    'bg-base-300',
                                    'text-xl',
                                    isWrong ? 'input-error' : 'input-info',
                                    isWrong ? 'text-error' : 'text-info',
                                    isRevealed && 'border-secondary',
                                    isRevealed && 'text-secondary'
                                ])}
                                readOnly={true}
                            />
                        </div>

                        <Keys onClick={handleValue} />
                    </>
                )
            }
        </>
    );
}

function handleNegativeInput(inputValue: string) {
    if (inputValue === '-') {
        // When the current value is minus and the user probably wants to toggle to emoty value.
        return '';
    } else if (inputValue) {
        const negativeResult = parseInt(inputValue) * -1;

        return negativeResult.toString();
    }

    // When the inputValue is empty the user should see an indication for a negative number and should see the minus symbol in the input.
    return '-';
}

export default Practice;