const validator = require('validator')
const add = require('./utils')


const name = 'Ricardo'

const sum = add.add (2, 2)

console.log(name)
console.log(add.name2)
console.log(sum)

console.log(validator.isEmail('Ricardo@mail.com'))

console.log(validator.isURL('Ricardo@mail.com'))
