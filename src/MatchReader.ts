import {dateStringtoDate} from './utils';
import {MatchResult} from './matchResult';

type Matchdata =[ Date, string, string , number,number, MatchResult, string];

interface DataReader {
        read(): void;
        data: string[][];
}

export class MatchReader {
    matches : Matchdata[] = [];
    constructor (public reader : DataReader){}

    load(): void {
        this.reader.read();
        this.reader.data.map((row : string[]):Matchdata=>{
            return[
                dateStringtoDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as MatchResult,
                row[6]
    
            ]
        });
    }

    
}