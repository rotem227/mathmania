import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import useStore from '../../hooks/useStore';
import { operators } from '../../utils/excercises-generator';

const availableOperators = Object.keys(operators);

const rangeIndexesMap = {
    'min': 0,
    'max': 1,
};

const Settings: FC = () => {
    const navigate = useNavigate();
    const [state, setState] = useStore();

    const handleOperator = (operator) => {
        setState((prev) => {
            const newState = { ...prev };

            newState.operators = [...newState.operators];

            const operatorIndex = newState.operators.indexOf(operator);

            if (operatorIndex > -1) {
                newState.operators.splice(operatorIndex, 1);
            } else {
                newState.operators.push(operator);
            }

            return newState;
        });
    };

    const handleRange = (type: keyof typeof rangeIndexesMap, value: string) => {
        setState((prev) => {
            const newState = { ...prev };

            newState.range = [...newState.range];

            const index = rangeIndexesMap[type];

            newState.range[index] = parseInt(value);

            return newState;
        });
    };

    return (
        <div className="flex flex-col gap-6">
            <h1 className="text-5xl font-bold">Settings</h1>

            <div className="flex flex-col gap-4">
                <h3>Range:</h3>
                <div className="join">
                    <div>
                        <div>
                            <input
                                value={state.range[0]}
                                onChange={(e) => handleRange('min', e.target.value)}
                                type="number"
                                className="input input-bordered join-item"
                                placeholder="Min number"
                            />
                        </div>
                    </div>
                    <div>
                        <div>
                            <input
                                value={state.range[1]}
                                onChange={(e) => handleRange('max', e.target.value)}
                                type="number"
                                className="input input-bordered join-item"
                                placeholder="Max number"
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-4">
                <h3>Operators:</h3>
                {
                    availableOperators.map((operator) => (
                        <div className="flex gap-4" key={operator}>
                            <input
                                id={operator}
                                type="checkbox"
                                className="toggle toggle-md"
                                checked={state.operators.includes(operator)}
                                onChange={() => handleOperator(operator)}
                            />
                            <label htmlFor={operator} className="capitalize">{operator}</label>
                        </div>
                    ))
                }
            </div>

            <div>
                <button disabled={state.operators.length === 0} className="btn btn-primary" onClick={() => navigate('/')}>Done</button>
            </div>
        </div>
    )
}

export default Settings;
