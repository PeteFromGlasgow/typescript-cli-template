export function getHelloWorld(output: (input: string | Buffer) => void) {
  return function (name: string) {
    output(`Hello ${name}!`)
  }
}
