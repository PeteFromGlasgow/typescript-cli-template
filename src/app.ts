import { getProgram } from './cli.js'

(await getProgram(i => console.log(i))).parse()
