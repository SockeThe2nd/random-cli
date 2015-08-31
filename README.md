# random-cli

## Synopsis

Supplies a cli for [ckknight](https://www.npmjs.com/~ckknight)'s [random-js](https://github.com/ckknight/random-js) module.

## Installation

To run this application [NodeJS](https://nodejs.org/) is required.

After installing NodeJS, use the command `npm install random-cli -g` to download the current version of the random-cli and its depending modules.

## Usage

random-cli [options] [command]

Commands:

    bool|b [options]         Returns a random boolean value
    integer|i [options]      Returns a random integer from a range from 1 to 100
    float|f [options]        Returns a random float from a range from 1 to 100
    pick|p [options] [list]  Returns one entry from the given list
    string|s [options] <n>   Returns a random string with the length <n>
    hex|h [options] <n>      Returns a random hexstring with the length <n>
    date|d [options]         Returns a random date

Options:

    -h, --help       output usage information
    -V, --version    output the version number
    -c, --count <n>  Performs the given command <n>-times
    -a, --array      Returns result as an array


Run `random-cli [command] -h` to get additional help for the given command.

## Examples

### Need an answer to a yes/no-question?
Use `random-cli b -y`

### Need to know what to eat for dinner?
Use `random-cli p Pizza, Chinese Takeout, Spaghetti, Sandwich`

### So it's chinese takeout for today, but which number to order?
Use `random-cli i -r 1..240`

### Want to play monopoly, but you are short of dices?
Use `random-cli i -c 2 -a -r 1..6`

### Need a random HEX-number for whatever reason (yeah, I'm out of ideas)?
Use `random-cli h 6`