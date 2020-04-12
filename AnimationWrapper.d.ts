import * as React from 'react';
import { Props } from './useHover';
interface WrapperProps extends Props {
    style?: React.CSSProperties | undefined;
}
declare const AnimationWrapper: React.FC<WrapperProps>;
export default AnimationWrapper;
