import { MatchReader as MatchReaderForInheritance } from './inheritance/MatchReader'
import { CsvFileReader } from './CsvFileReader'
import { MatchReader } from './MatchReader'
import { ConsoleReport } from './reportTargets/ConsoleReport'
import { WinsAnalysis } from './analyzers/WinsAnalysis'
import { Summary } from './Summary'

// ____________
// Abstract class and inheritance
const reader = new MatchReaderForInheritance('football.csv')
reader.read()
// Two Separate classes using ts "Interface"
const csvFReader = new CsvFileReader('football.csv')
const matchReader = new MatchReader(csvFReader)
matchReader.load()
// ____________

// ############
// Run as usual
const summary = new Summary(new WinsAnalysis('Man United'), new ConsoleReport())
summary.buildAndPrintReport(matchReader.matches)

// Run the instance inside that class by using a static method
const sumHtml = Summary.HtmlReportWithAnalysis('Man United')
sumHtml.buildAndPrintReport(matchReader.matches)
// ############
