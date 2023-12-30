import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import clsx from 'clsx';
import { Button } from 'react-daisyui';

import useStore from '../../hooks/useStore';
import useExcercises from "../../hooks/useExcercises";
import EndedMessage from './components/EndedMessage';
import Keys from './components/Keys';
import ExcerciseValueInput from './components/ExcerciseValueInput';
import ExcerciseDisplay from './components/ExcerciseDisplay';
import ExcerciseCounter from './components/ExcerciseCounter';
import useExcerciseResult from '../../hooks/useExcerciseResult';

const Practice: FC = () => {
    const navigate = useNavigate();
    const [state] = useStore();
    const { excercise, index, total, next, isCompleted } = useExcercises({ range: state.range, operators: state.operators });
    const { firstNumber, secondNumber, symbol, expected } = excercise;
    const { result, isWrong, isRevealed, reveal, append, validate, modify, reset } = useExcerciseResult({ onValidResult: next, expected });

    return (
        <>
            <div className={clsx(['flex', 'justify-between', 'items-center', 'gap-3', 'mb-1', 'transition-all', isCompleted && 'text-success'])}>
                <ExcerciseCounter current={index + 1} total={total} />

                {
                    !isCompleted && (
                        <Button color="secondary" size='sm' variant='outline' onClick={reveal}>
                            REVEAL
                        </Button>
                    )
                }
            </div>

            {
                isCompleted
                    ? (
                        <EndedMessage>
                            <EndedMessage.Button onClick={() => navigate('/')} color="error">Go Home</EndedMessage.Button>
                            <EndedMessage.Button onClick={() => navigate('/practice')} color="success">Try Again</EndedMessage.Button>
                        </EndedMessage>
                    )
                    : (
                        <>
                            <ExcerciseDisplay>{firstNumber} {symbol} {secondNumber}</ExcerciseDisplay>

                            <div className="w-full my-4">
                                <ExcerciseValueInput value={result} isWrong={isWrong} isRevealed={isRevealed} />
                            </div>

                            <Keys
                                onDelete={reset}
                                onPress={() => isWrong && reset()}
                                onSubmit={validate}
                                onOpposite={() => modify((currentValue) => handleOpposite(currentValue))}
                                onValue={(value) => append(value.toString())}
                            />
                        </>
                    )
            }
        </>
    );
}

function handleOpposite(inputValue: string) {
    if (inputValue === '-') {
        // When the current value is minus and the user probably wants to toggle to empty value.
        return '';
    }

    if (inputValue) {
        const negativeResult = parseInt(inputValue) * -1;

        return negativeResult.toString();
    }

    // When the inputValue is empty the user should see an indication for a negative number and should see the minus symbol in the input.
    return '-';
}

export default Practice;