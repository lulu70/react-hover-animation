import * as React from 'react'
import useHover from './useHover'

const AnimationWrapper: React.FC<{
  reset?: boolean
  style?: React.CSSProperties | undefined
  config?: {
    [key in keyof React.CSSProperties]?: {
      initial: any
      onHover: any
    }
  }
  [x: string]: any
}> = ({ children, config, style, reset, ...rest }) => {
  const hookConfig = reset
    ? {
        opacity: {
          initial: '1',
          onHover: '1',
        },
        transform: {
          initial: 'scale(1)',
          onHover: 'scale(1)',
        },
        ...config,
      }
    : config
  const { animated, setHover, spring } = useHover(hookConfig)
  return (
    <animated.div
      {...rest}
      style={{ ...spring, ...style }}
      onPointerOver={() => {
        setHover(true)
      }}
      onPointerOut={() => {
        setHover(false)
      }}
    >
      {children}
    </animated.div>
  )
}

export default AnimationWrapper
