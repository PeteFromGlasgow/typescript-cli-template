export function getHelloWorld(output: (message: string) => void) {
  return function (name: string) {
    output(`Hello ${name}!`)
  }
}

// Please add a new high order function here that works as a calculator. AI!
