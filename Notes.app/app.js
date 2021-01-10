const validator = require('validator')
const chalk = require('chalk')
const add = require('./utils')


const name = 'Ricardo'

const sum = add.add (2, 2)

console.log(name)
console.log(add.name2)
console.log(sum)

console.log(chalk.green.bold(validator.isEmail('Ricardo@mail.com')))

console.log(chalk.red.bold(validator.isEmail('Ricardo@mail.com')))
