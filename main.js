function isHot(temperature) {

  return temperature >= 80 ?  'Yes, it is indeed hot.' : 'No, it is not hot.'
}


function helloThere(name) {
  return name.length >= 6 ? 'Hi, '+name : 'Hello, '+ name
}


function goodbyeYou(name) {
  return typeof name === 'string' ? `Goodbye, `+name : 'Goodbye, stranger'
}


module.exports = {
  isHot,
  helloThere,
  goodbyeYou,
}