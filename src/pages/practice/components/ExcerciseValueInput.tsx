import { forwardRef } from "react";
import clsx from "clsx";
import { Input, InputProps } from 'react-daisyui';

type ExcerciseValueInputProps = InputProps & {
    isWrong?: boolean;
    isRevealed?: boolean;
}

const ExcerciseValueInput = forwardRef<HTMLInputElement, ExcerciseValueInputProps>(({ className, isWrong, isRevealed, ...props }, ref) => {
    return (
        <Input
            type="text"
            placeholder="?"
            readOnly={true}
            {...props}
            ref={ref}
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
                isRevealed && 'text-secondary',
                className,
            ])}
        />
    );
});

export default ExcerciseValueInput;