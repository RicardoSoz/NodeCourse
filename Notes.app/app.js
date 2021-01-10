const validator = require('validator')
const chalk = require('chalk')
const add = require('./utils')


const command = process.argv[2]

if(command === 'hola'){
    console.log(chalk.green.bold("Hola"))
}
