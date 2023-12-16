import { FC } from "react";
import clsx from 'clsx';

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

const KeyButton: FC<JSX.IntrinsicElements['kbd']> = ({ className, children, ...props }) => {
    return (
        <kbd {...props} className={clsx('kbd kbd-lg cursor-pointer active:border-info transition-colors', className)}>
            {children}
        </kbd>
    );
};

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
                        <KeyButton key={'key' + value} onClick={() => onClick(value)}>{value}</KeyButton>
                    ))
                }
            </div>
            <div className="grid grid-cols-2 gap-3 my-3 w-full">
                <KeyButton onClick={() => onClick(DELETE_VALUE)} className="text-warning">DELETE</KeyButton>
                <KeyButton onClick={() => onClick(SUBMIT_VALUE)} className="text-success">SUBMIT</KeyButton>
            </div>
        </div>
    )
}

export default Keys