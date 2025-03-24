import { Command } from 'commander'
import { getHelloWorld, getCalculator } from './index.js'

// Helper function to check if we're in Node.js environment
function isNode(): boolean {
  return typeof globalThis.process === 'object' && globalThis.process.versions?.node
}

async function getProgram() {
  if (!isNode()) return null
  
  const program = new Command()
  const helloWorld = getHelloWorld(console.log)
  const calculator = getCalculator(console.log)

  program
    .command('hello-world <name>')
    .action(name => helloWorld(name))
    
    .command('calculator <num1> <operator> <num2>')
    .action((num1, operator, num2) => calculator(Number(num1), operator, Number(num2)))

  return program
}

export { getProgram }
