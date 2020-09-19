import { CsvFileReader } from "./CSVFileReader";
import { dateStringtoDate } from "../utils";
import { MatchResult } from "../matchResult";
import { CsvFileReaderclass } from "./CSVFileReader";


type Matchdata =[ Date, string, string , number,number, MatchResult, string];
export class matchReader extends CsvFileReaderclass<Matchdata>{
    mapRow(row: string[]):Matchdata {
        return[
            dateStringtoDate(row[0]),
            row[1],
            row[2],
            parseInt(row[3]),
            parseInt(row[4]),
            row[5] as MatchResult,
            row[6]

        ]
    }
}