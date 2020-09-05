import fs from 'fs'
import { OutputTarget } from '../Summary'

export class HtmlReport implements OutputTarget {
    print(report: string): void {
        const html = `
<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Report</title>
</head>
<body>
    <div>
        <h1>Analysis Output</h1>
        <div>${report}</div>
    </div>
</body>
</html>`
        fs.writeFileSync('report.html', html)
    }
}
