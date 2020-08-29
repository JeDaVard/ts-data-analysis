import { OutputTarget } from '../Summary'

export class ConsoleReport implements OutputTarget {
    constructor() {}
    print(data: string): void {
        console.log(data)
    }
}
