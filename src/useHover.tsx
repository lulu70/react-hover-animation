import * as React from 'react'
import { useSpring, animated } from 'react-spring'

const useHover = (
  props: {
    [key in keyof React.CSSProperties]: {
      initial: string
      onHover: string
    }
  } = {}
) => {
  const [hover, setHover] = React.useState(false)
  const initialProps = Object.entries(props).reduce(
    (acc, entry) => {
      const key = entry[0]
      const value = entry[1]
      const hasTwoValues = value?.initial && value?.onHover && true
      if (!hasTwoValues) return acc
      return {
        ...acc,
        [key]: value?.initial,
      }
    },
    { transform: 'scale(1)', opacity: '1' }
  )

  const [spring, setSpring] = useSpring(() => initialProps)
  const onHoverProps = Object.entries(props).reduce((acc, entry) => {
    const key = entry[0]
    const value = entry[1]
    const hasTwoValues = value?.initial && value?.onHover && true
    if (!hasTwoValues) return acc
    return {
      ...acc,
      [key]: hover ? value?.onHover : value?.initial,
    }
  }, {})
  setSpring({
    transform: `scale(${hover ? '0.95' : '1'})`,
    opacity: hover ? '0.6' : '1',
    ...onHoverProps,
  })
  return {
    spring,
    animated,
    setHover,
  }
}

export default useHover
