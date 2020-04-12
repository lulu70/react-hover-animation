import * as React from 'react'
import useHover, { Props } from './useHover'
import * as PropTypes from 'prop-types'

interface WrapperProps extends Props {
  style?: React.CSSProperties | undefined
}
const AnimationWrapper: React.FC<WrapperProps> = ({
  colors,
  backgroundColors,
  minimumScale,
  minimumOpacity,
  style,
  ...props
}) => {
  const { animated, setHover, spring } = useHover({
    minimumScale,
    colors,
    backgroundColors,
    minimumOpacity,
  })
  return (
    <animated.div
      {...props}
      style={{ display: 'inline-block', ...spring, ...style }}
      onPointerOver={() => {
        setHover(true)
      }}
      onPointerOut={() => {
        setHover(false)
      }}
    />
  )
}

AnimationWrapper.propTypes = {
  colors: PropTypes.shape({
    color: PropTypes.string.isRequired,
    hoverColor: PropTypes.string.isRequired,
  }),
  backgroundColors: PropTypes.shape({
    color: PropTypes.string.isRequired,
    hoverColor: PropTypes.string.isRequired,
  }),
  minimumScale: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minimumOpacity: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  style: PropTypes.object,
}

export default AnimationWrapper
