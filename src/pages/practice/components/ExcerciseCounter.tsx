import { FC, ComponentProps } from "react";
import clsx from "clsx";
import { Countdown } from "react-daisyui";

type ExcerciseDisplayProps = ComponentProps<'div'> & {
    current: number;
    total: number;
}

const ExcerciseDisplay: FC<ExcerciseDisplayProps> = ({ className, current, total, ...props }) => {
    return (
        <div {...props} className={clsx(['gap-2', className])}>
            <Countdown value={current} />
            <span className="countdown">/</span>
            <Countdown value={total} />
        </div>
    );
};

export default ExcerciseDisplay;