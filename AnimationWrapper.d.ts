import * as React from 'react';
declare const AnimationWrapper: React.FC<{
    reset: boolean;
    style: React.CSSProperties | undefined;
    config: {
        [key in keyof React.CSSProperties]: {
            initial: string;
            onHover: string;
        };
    };
}>;
export default AnimationWrapper;
