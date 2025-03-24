import { Command } from 'commander'
import { getHelloWorld } from './index.js'

// Helper function to check if we're in Node.js environment
function isNode(): boolean {
  return typeof globalThis.process === 'object' && globalThis.process.versions?.node
}

async function getProgram() {
  if (!isNode()) return null
  
  const program = new Command()
  const helloWorld = getHelloWorld(console.log)

  program
    .command('hello-world <name>')
    .action(name => helloWorld(name))

  return program
}

export { getProgram }
