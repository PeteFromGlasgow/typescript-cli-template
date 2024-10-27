import { Command } from 'commander'
import { getHelloWorld } from './index.js'

async function getProgram(output: (i: string | Buffer) => void) {
  const program = new Command()

  const helloWorld = getHelloWorld(output)

  program
    .command('hello-world <name>')
    .action(name => helloWorld(name))

  return program
}

export { getProgram }
