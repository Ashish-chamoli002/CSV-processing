"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var matchResult_1 = require("./matchResult");
var MatchReader_1 = require("./MatchReader");
var CSVFileReaderbck_1 = require("./CSVFileReaderbck");
//const csvFileReader = new matchReader('football.csv');
// csvFileReader.read();
var csvFileReader = new CSVFileReaderbck_1.CsvFileReaderbk('football.csv');
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var mu = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] == 'Man United' && match[5] == matchResult_1.MatchResult.HomeWin) {
        mu++;
    }
    else if (match[2] == 'Man United' && match[5] == matchResult_1.MatchResult.AwayWin) {
        mu++;
    }
}
console.log("Man unites wins " + mu);
