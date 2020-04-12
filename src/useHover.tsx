import * as React from 'react'
import { useSpring, animated } from 'react-spring'

export interface Props {
  minimumScale?: number | string
  minimumOpacity?: number | string
  colors?: {
    color: string
    hoverColor: string
  }
  backgroundColors?: {
    color: string
    hoverColor: string
  }
}

const useHover = ({
  minimumScale,
  minimumOpacity,
  colors,
  backgroundColors,
}: Props = {}) => {
  const [hover, setHover] = React.useState(false)

  const hasTwoColors = colors && colors.color && colors.hoverColor && true
  const hasTwoBGColors =
    backgroundColors &&
    backgroundColors.color &&
    backgroundColors.hoverColor &&
    true
  const minScale = minimumScale ? minimumScale : 0.95
  const minOpacity = minimumOpacity ? minimumOpacity : 0.6

  const springInitialProps = {
    transform: `scale(1)`,
    opacity: '1',
    color: colors && hasTwoColors ? colors.color : '',
    backgroundColor:
      backgroundColors && hasTwoBGColors ? backgroundColors.color : '',
  }
  const [spring, setSpring] = useSpring(() => springInitialProps)
  setSpring({
    transform: `scale(${hover ? minScale : '1'})`,
    opacity: hover ? `${minOpacity}` : '1',
    color:
      colors && hasTwoColors ? (hover ? colors.hoverColor : colors.color) : '',
    backgroundColor:
      backgroundColors && hasTwoBGColors
        ? hover
          ? backgroundColors.hoverColor
          : backgroundColors.color
        : '',
  })
  return {
    setHover,
    spring,
    animated,
  }
}

export default useHover
