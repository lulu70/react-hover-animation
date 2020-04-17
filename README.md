# react-hover-animation

> A react wrapper component that detects hover and adds animation from the awesome [react-spring](https://www.react-spring.io/).<br/>
> Works both on the web and mobile touch events.

[![NPM](https://img.shields.io/npm/v/react-hover-animation.svg)](https://www.npmjs.com/package/react-hover-animation) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Example:

[https://react-hover-animation-example.netlify.com/](https://react-hover-animation-example.netlify.com/)

## Install

### npm:

```bash
npm install --save react-hover-animation
```

### yarn:

```bash
yarn add react-hover-animation
```

## Usage

### Basic usage

```jsx
import React from 'react'
import { AnimationWrapper } from 'react-hover-animation'

const App = () => {
  return (
    <AnimationWrapper>
      <h1>I animate on hover</h1>
    </AnimationWrapper>
  )
}
export default App
```

### Default behavior

The wrapper component comes with a build-in behavior on hover,
Animation will play and change the element opacity from _1_ to _0.6_ and change the element scale from _1_ to _0.95_.<br>
In order to change the default behavior, you can either pass the [reset](#reset) prop to reset these defaults or pass a [config](#config) object with styles for _initial_ and _onHover_ state.

### Optional props

- `style`: A style object for the wrapper component - **styles will override the hover styles on the config object**.
- <span id="config">`config`</span>: A config object to declare more styles to change on hover or overrides the [default behavior](#default-behavior),<br>
  **must provide to each CSS property two values of the same type(initial and onHover)**.
  - `initial`: The initial style.
  - `onHover`: The style on hover.
- <span id="reset">`reset`</span>: A boolean that will reset the [default behavior](#default-behavior).
- <span id="animation-config">`animaionConfig`</span>: Config for the animation, can be either a regular [react-spring-config-object](https://www.react-spring.io/docs/hooks/api/#configs) or a string with the name of one of the [react-spring-config-presets](https://www.react-spring.io/docs/hooks/api/#presets) (default, gentle, wobbly, stiff, slow, molasses).

### Usage with props

```jsx
import React from 'react'
import { AnimationWrapper } from 'react-hover-animation'

const App = () => {
  return (
    <AnimationWrapper
      /* 
      normal react attributes like "className" are allowed 
      */
      className='animation-wrapper'
      /* 
      styles will override the hover styles 
      */
      style={{
        textAlign: 'center',
        borderRadius: '5px',
        padding: '5px',
        backgroundColor: 'lightblue',
      }}
      /* 
      must provide to each css property two values of the same type (initial and onHover)  
      */
      config={{
        color: {
          initial: 'black',
          onHover: 'red',
        },
      }}
      /* 
      resets the default behavior  
      */
      reset={true}
      /* 
      animation config using an object 
      */
      animationConfig={{
        duration: 500,
      }}
      /* 
      animation config using a preset
      */
      /* 
      animationConfig='molasses'
      */
    >
      <h1>I animate on hover</h1>
    </AnimationWrapper>
  )
}
export default App
```

### The useHover hook

If you don't want to render a wrapper div you can also import a custom hook and apply the animation directly on the element.<br>
Optional config object can be passed as an argument to the hook with either styles or [animation config](#animation-config) object.

```jsx
import React from 'react'
import { useHover } from 'react-hover-animation'

const App = () => {
  /* 
    first call the hook
  */
  const { spring, animated, setHover } = useHover({
    /* 
    optional styles...
    */
    color: {
      initial: 'black',
      onHover: 'red',
    },
    /* 
    animation config using an object 
    */
    animationConfig: {
      duration: 500,
    },
    /* 
    animation config using a preset
    */
    /* 
    animationConfig: 'molasses',
    */
  })
  return (
    /* 
    add 'animated' to the element
    */
    <animated.h1
      /* 
      add spring to the style object
      */
      style={spring}
      /* 
     add these two event handlers
     */
      onPointerOver={() => {
        setHover(true)
      }}
      onPointerOut={() => {
        setHover(false)
      }}
    >
      I animate on hover
    </animated.h1>
  )
}
export default App
```

## License

MIT © [lulu70](https://github.com/lulu70)

---
