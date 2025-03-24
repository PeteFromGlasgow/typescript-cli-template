export function getHelloWorld(output: (message: string) => void) {
  return function (name: string) {
    output(`Hello ${name}!`)
  }
}

export function getCalculator(output: (result: string) => void) {
  return function (num1: number, operator: string, num2: number) {
    const calculator = {
      add: () => num1 + num2,
      subtract: () => num1 - num2,
      multiply: () => num1 * num2,
      divide: () => num1 / num2
    }
    
    const result = calculator[operator as keyof typeof calculator]()
    output(`Result: ${num1} ${operator} ${num2} = ${result}`);
  }
}
