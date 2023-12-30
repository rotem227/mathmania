import { FC } from 'react';
import clsx from 'clsx';
import { Stats, StatsProps } from 'react-daisyui';

const ExcerciseDisplay: FC<StatsProps> = ({ children, className, ...props }) => {
    return (
        <Stats {...props} className={clsx(['stats', 'bg-neutral', 'w-full', 'mt-4', 'border-primary', 'border-[1px]', className])}>
            <Stats.Stat>
                <Stats.Stat.Item variant="value" className="text-primary text-4xl text-center">
                    {children}
                </Stats.Stat.Item>
            </Stats.Stat>
        </Stats>
    );
};

export default ExcerciseDisplay;