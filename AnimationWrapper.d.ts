import * as React from 'react';
declare const AnimationWrapper: React.FC<{
    reset?: boolean;
    style?: React.CSSProperties | undefined;
    config?: {
        [key in keyof React.CSSProperties]?: {
            initial: any;
            onHover: any;
        };
    };
    [x: string]: any;
}>;
export default AnimationWrapper;
