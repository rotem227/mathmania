import { FC } from "react";

export const SUBMIT_VALUE = 'submit';
export const DELETE_VALUE = 'delete';
export const NEGATIVE_VALUE = '+/-';
export const DECIMAL_VALUE = '.';

const keyboardValues = [
    7,
    8,
    9,
    4,
    5,
    6,
    1,
    2,
    3,
    NEGATIVE_VALUE,
    0,
    DECIMAL_VALUE,
] as const;

export type KeyValue = typeof keyboardValues[number] | typeof DELETE_VALUE | typeof SUBMIT_VALUE;

type Props = {
    onClick: (arg: KeyValue) => void;
    className?: string;
}

const Keys: FC<Props> = ({ onClick, className }) => {
    return (
        <div className={className}>
            <div className="grid grid-cols-3 gap-3 my-1 w-full">
                {
                    keyboardValues.map((value) => (
                        <kbd key={'key' + value} onClick={() => onClick(value)} className="kbd kbd-lg">{value}</kbd>
                    ))
                }
            </div>
            <div className="grid grid-cols-2 gap-3 my-3 w-full">
                <kbd onClick={() => onClick(DELETE_VALUE)} className="kbd kbd-lg text-warning">DELETE</kbd>
                <kbd onClick={() => onClick(SUBMIT_VALUE)} className="kbd kbd-lg text-success">SUBMIT</kbd>
            </div>
        </div>
    )
}

export default Keys