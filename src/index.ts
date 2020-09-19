import {MatchResult} from './matchResult';
import { MatchReader } from './MatchReader';
import { CsvFileReaderbk } from './CSVFileReaderbck'

//const csvFileReader = new matchReader('football.csv');
// csvFileReader.read();
const csvFileReader = new CsvFileReaderbk('football.csv');
const matchReader = new MatchReader(csvFileReader);

matchReader.load();

let mu = 0;
for (let match of matchReader.matches){
    if(match[1] == 'Man United' && match[5]== MatchResult.HomeWin){
        mu++;
    }else if(match[2] == 'Man United' && match[5]== MatchResult.AwayWin){
        mu++;
    }
}
console.log(`Man unites wins ${mu}`);