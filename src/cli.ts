import { Command } from 'commander'
import { getHelloWorld } from './index.js'

async function getProgram() {
  
  const program = new Command()
  const helloWorld = getHelloWorld(console.log)

  program
    .command('hello-world <name>')
    .action(name => helloWorld(name))
    
  return program
}

export { getProgram }
