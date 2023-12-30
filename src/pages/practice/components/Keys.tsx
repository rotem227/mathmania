import { FC, ComponentProps } from "react";
import clsx from 'clsx';
import { Kbd, KbdProps } from 'react-daisyui';

export const SUBMIT_VALUE = 'submit';
export const DELETE_VALUE = 'delete';
export const OPPOSITE_VALUE = '+/-';
export const DECIMAL_VALUE = '.';

const keyboardValues = [7, 8, 9, 4, 5, 6, 1, 2, 3, OPPOSITE_VALUE, 0, DECIMAL_VALUE] as const;

export type KeyValue = typeof keyboardValues[number];

const KeyButton: FC<KbdProps> = ({ className, children, ...props }) => {
    return (
        <Kbd size="lg" {...props} className={clsx('cursor-pointer active:border-info transition-colors', className)}>
            {children}
        </Kbd>
    );
};

type Props = ComponentProps<'div'> & {
    onPress: () => void;
    onValue: (arg: KeyValue) => void;
    onSubmit: () => void;
    onDelete: () => void;
    onOpposite: () => void;
}

const Keys: FC<Props> = ({ onPress, onValue, onSubmit, onDelete, onOpposite, className }) => {
    const handleKey = (value: KeyValue) => {
        onPress();

        if (value === OPPOSITE_VALUE) {
            onOpposite();
        } else {
            onValue(value);
        }
    };

    return (
        <div className={className}>
            <div className="grid grid-cols-3 gap-3 my-1 w-full">
                {
                    keyboardValues.map((value) => (
                        <KeyButton key={'key' + value} onClick={() => handleKey(value)}>{value}</KeyButton>
                    ))
                }
            </div>

            <div className="grid grid-cols-2 gap-3 my-3 w-full">
                <KeyButton
                    className="text-warning"
                    onClick={() => {
                        onPress();
                        onDelete();
                    }}
                >
                    DELETE
                </KeyButton>

                <KeyButton
                    className="text-success"
                    onClick={() => {
                        onPress();
                        onSubmit();
                    }}
                >
                    SUBMIT
                </KeyButton>
            </div>
        </div>
    )
}

export default Keys