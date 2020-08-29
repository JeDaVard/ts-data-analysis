import { MatchReader as MatchReaderForInheritance } from './inheritance/MatchReader'
import { MatchResult } from './MatchResult'
import { CsvFileReader } from './CsvFileReader'
import { MatchReader } from './MatchReader'

// ____________
// Abstract class and inheritance
const reader = new MatchReaderForInheritance('football.csv')
reader.read()
// Two Separate classes using ts "Interface"
const csvFReader = new CsvFileReader('football.csv')
const matchData = new MatchReader(csvFReader)
matchData.load()
// ____________
