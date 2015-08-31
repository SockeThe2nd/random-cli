var app = require('commander');
var Random = require('random-js');

var r = new Random(Random.engines.mt19937().autoSeed());

var bool = require('./lib/bool')(r);
var int = require('./lib/int')(r);
var float = require('./lib/float')(r);
var pick = require('./lib/pick')(r);
var string = require('./lib/string')(r);
var hex = require('./lib/hex')(r);
var date = require('./lib/date')(r);

app.version(require('./package.json').version);

app.option("-c, --count <n>", "Performs the given command <n>-times", parseInt)
        .option("-a, --array", "Returns result as an array");

app.command('bool')
        .alias('b')
        .description("Returns a random boolean value")
        .option("-y, --yes", "Returns 'YES' and 'NO'")
        .action(function (options) {
            wrapper(bool, options);
        });

app.command('integer')
        .alias('i')
        .description("Returns a random integer from a range from 1 to 100")
        .option("-r, --range <a>..<b>", "Returns a random integer from a range from <a> to <b>", range)
        .option("-e, --exclude", "Excludes the borders from the given range")
        .action(function (options) {
            wrapper(int, options);
        });

app.command('float')
        .alias('f')
        .description("Returns a random float from a range from 1 to 100")
        .option("-r, --range <a>..<b>", "Sets the range from <a> to <b>", range)
        .option("-e, --exclude", "Excludes the borders from the given range")
        .option("-d, --decimals <n>", "Rounds the result to <n> decimal places", parseInt)
        .action(function (options) {
            wrapper(float, options);
        });

app.command('pick [list]')
        .alias('p')
        .description("Returns one entry from the given list")
        .option("-s, --seperator [seperator]", "Sets the seperator for the griven listentries")
        .action(function (list, options) {
            var sep = options.seperator ||',';
            list = list.split(sep);
            wrapper(pick, list);
        });
        
app.command('string <n>')
        .alias('s')
        .description("Returns a random string with the length <n>")
        .option("-p, --pool [pool]", "Sets the available pool of characters")
        .action(function (n, options) {
            options.n = n;
            wrapper(string, options);
        });

app.command('hex <n>')
        .alias('h')
        .description("Returns a random hexstring with the length <n>")
        .option("-u, --uppercase", "Returns uppercase characters")
        .action(function (n, options) {
            options.n = n;
            wrapper(hex, options);
        });
        
app.command('date')
        .alias('d')
        .description("Returns a random date")
        .option("-r, --range <a>..<b>", "Sets the range from <a> to <b>", range)
        .option("-i, --iso", "Returns the date as a string, using the ISO standard")
        .option("-u, --utc", "Returns the date as a string, according to universal time")
        .option("-l, --local", "Returns the date as a string, using locale conventions")
        .option("-n, --number","Returns the date as the number of milliseconds since midnight Jan 1, 1970")
        .action(function (options){
            wrapper(date, options);
        });

app.parse(process.argv);

function wrapper(fnc, options) {
    if (!app.count) {
        console.log(fnc(options));
    } else {
        if (app.array) {
            var res = [];
            for (var i = 0; i < app.count; i++) {
                res.push(fnc(options));
            }
            console.log(res);
        } else {
            for (var i = 0; i < app.count; i++) {
                console.log(fnc(options));
            }
        }
    }
}

function range(val) {
    var arr = val.split('..').map(Number);
    if (arr.length > 2) {
        arr.splice(2, arr.length - 2);
    }
    return arr;
}