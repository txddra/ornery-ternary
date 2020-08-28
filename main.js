function isHot(temperature) {

  return temperature >= 80 ?  'Yes, it is indeed hot.' : 'No, it is not hot.'
}


function helloThere(name) {
  return name.length >= 6 ? 'Hi, '+name : 'Hello, '+ name
}


function goodbyeYou() {

}


module.exports = {
  isHot,
  helloThere,
  goodbyeYou,
}