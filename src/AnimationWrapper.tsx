import * as React from 'react'
import useHover from './useHover'

const AnimationWrapper: React.FC<{
  reset: boolean
  style: React.CSSProperties | undefined
  config: {
    [key in keyof React.CSSProperties]: {
      initial: string
      onHover: string
    }
  }
}> = ({ children, config, style, reset, ...props }) => {
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
      {...props}
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
