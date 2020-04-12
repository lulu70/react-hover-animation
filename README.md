# react-hover-animation

> A react wrapper component that detects hover and adds animation from the awesome [react-spring](https://www.react-spring.io/).
> Works both on the web and mobile touch events.

[![NPM](https://img.shields.io/npm/v/react-hover-animation.svg)](https://www.npmjs.com/package/react-hover-animation) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Example:

[https://react-hover-animation-example.netlify.com/](https://react-hover-animation-example.netlify.com/)

## Install

```bash
npm install --save react-hover-animation
```

## Usage

### Basic usage

```jsx
import React from 'react'
import { AnimationWrapper } from 'react-hover-animation'

const App = () => {
  return (
    <div>
      <AnimationWrapper>
        <h1>I animate on hover</h1>
      </AnimationWrapper>
    </div>
  )
}
export default App
```

### Optional props

| Name               | Type   | Default |
| ------------------ | ------ | ------- |
| `style`            | object | none    |
| `minimumOpacity`   | number | 0.6     |
| `minimumScale`     | number | 0.95    |
| `colors`           | object | none    |
| `backgroundColors` | object | none    |

- `style`: Style object for the wrapper component - _styles will overrides the hover styles_.
- `minimumOpacity`: The minimum opacity of the wrapper component on hover animation - _set to 1 for no opacity change_.
- `minimumScale`: The minimum scale of the wrapper component on hover animation - _set to 1 for no scale change_.
- `colors`: The hover and normal font colors **must provide two values**.
  - `hoverColor`: The hover font color.
  - `color`: The normal font color.
- `backgroundColors`: The hover and normal backgroundColors **must provide two values**.
  - `hoverColor`: The hover background color.
  - `color`: The normal background color.

### Usage with props

```jsx
import React from 'react'
import { AnimationWrapper } from 'react-hover-animation'

const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        backgroundColor: 'grey',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <AnimationWrapper
        className='animation-wrapper'
        // styles will overrides the hover styles
        style={{
          textAlign: 'center',
          borderRadius: '5px',
          padding: '5px',
        }}
        // set to 1 for no opacity change
        minimumOpacity={0.6}
        // set to 1 for no scale change
        minimumScale={0.95}
        // must provide two values
        colors={{
          color: 'black',
          hoverColor: 'white',
        }}
        // must provide two values
        backgroundColors={{
          color: 'white',
          hoverColor: 'black',
        }}
      >
        <h1>I animate on hover</h1>
      </AnimationWrapper>
    </div>
  )
}
export default App
```

### The useHover hook

If you don't want to render a wrapper div you can also import a custom hook and apply the animation directly on the element.
same props can be passed as an object to the hook.

```jsx
import React from 'react'
import { useHover } from 'react-hover-animation'

const WithHook = () => {
  const { spring, animated, setHover } = useHover({
    // optional props
    minimumOpacity: 0.6,
    minimumScale: 0.95,
    colors: {
      color: 'black',
      hoverColor: 'white',
    },
    backgroundColors: {
      color: 'white',
      hoverColor: 'black',
    },
  })
  return (
    <div
      style={{
        height: '100vh',
        backgroundColor: 'grey',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* add  (animated) to the element */}
      <animated.h1
        // add spring to the style object
        style={spring}
        // add these two event handlers
        onPointerOver={() => {
          setHover(true)
        }}
        onPointerOut={() => {
          setHover(false)
        }}
      >
        I animate on hover
      </animated.h1>
    </div>
  )
}
export default WithHook
```

## License

MIT © [lulu70](https://github.com/lulu70)

---
