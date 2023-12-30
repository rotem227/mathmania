import { FC } from 'react';
import clsx from 'clsx';
import { Stats, StatsProps, Button, ButtonProps } from 'react-daisyui';

type EndedMessageComponent = FC<StatsProps> & {
    Button: FC<ButtonProps>;
}

const EndedMessage: EndedMessageComponent = ({ children, className, ...props }) => {
    return (
        <Stats {...props} className={clsx(['stats', 'bg-neutral', 'w-full', 'mt-4', 'border-primary', 'border-[1px]', className])}>
            <Stats.Stat>
                <Stats.Stat.Item variant="value" className="text-primary text-4xl text-center">
                    <p>Well Done!</p>

                    {children}
                </Stats.Stat.Item>
            </Stats.Stat>
        </Stats>
    );
};

EndedMessage.Button = ({ children, ...props }) => {
    return (
        <Button color="primary" size="sm" className="mt-6 mx-2" {...props}>
            {children}
        </Button>
    );
};


export default EndedMessage;