let ColorWheel = new Vue({
  el: '#ColorWheelCard',
  data: {
    description: 'This is a color wheel. It is constantly used to make a harmonic selection of a color palette.',
    selectedColor: undefined, // this variable recieves the last selected a color Object
    palette: new Map(), // this variable gets a map with sets of 'Color' { key: palette name, value: set of colors }
    lastPalettes: [], // a stack with the last previous palettes
    savedPalettes: new Map(),

    // Remove a color from palette
    removeColor : _color => {

    }

    // Remove all colors from palette
    clearPalette: ()=> {

    }

    // Save the actual palette on saved palettes


    // Save the actual palette on last palettes
    protectPalette: ()=> {

    }
  }
})