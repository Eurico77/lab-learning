const convertToex = color => {

  const colors = {
    black: '#000000',
    blue: '#0000FF',
    brown: '#A52A2A',
    cyan: '#00FFFF',
    darkblue: '#00008B',
    darkcyan: '#008B8B',
    darkgray: '#A9A9A9',
  }

  return colors[color]
}


console.log(convertToex('#ffffff'));