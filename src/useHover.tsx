import * as React from 'react'
import { useSpring, animated, config, SpringConfig } from 'react-spring'
export { SpringConfig }
export interface ConfigPresets {
  /** default: { tension: 170, friction: 26 } */
  default: SpringConfig
  /** gentle: { tension: 120, friction: 14 } */
  gentle: SpringConfig
  /** wobbly: { tension: 180, friction: 12 } */
  wobbly: SpringConfig
  /** stiff: { tension: 210, friction: 20 } */
  stiff: SpringConfig
  /** slow: { tension: 280, friction: 60 } */
  slow: SpringConfig
  /** molasses: { tension: 280, friction: 120 } */
  molasses: SpringConfig
}

const useHover = (
  props:
    | {
        animationConfig?: keyof ConfigPresets | SpringConfig
      }
    | {
        [key in keyof React.CSSProperties]?: {
          initial: any
          onHover: any
        }
      } = {}
) => {
  const [hover, setHover] = React.useState(false)
  const springProps = Object.entries(props).reduce(
    (acc, entry) => {
      const key = entry[0]
      const value = entry[1]
      if (key === 'animationConfig') {
        if (typeof value === 'string') {
          return {
            ...acc,
            config: config[value],
          }
        }
        if (typeof value === 'object') {
          return {
            ...acc,
            config: value,
          }
        }
      }
      const hasTwoValues = value?.initial && value?.onHover && true
      if (!hasTwoValues) return acc
      return {
        ...acc,
        [key]: hover ? value?.onHover : value?.initial,
      }
    },
    {
      transform: hover ? 'scale(0.95)' : 'scale(1)',
      opacity: hover ? '0.6' : '1',
    }
  )
  const spring = useSpring(springProps)

  return {
    spring,
    animated,
    setHover,
  }
}

export default useHover
