function init(Random) {
    function getHex(n, uppercase) {
        return Random.hex(n, uppercase);
    }

    function hex(options) {
        return getHex(options.n, options.uppercase);
    }

    return hex;
}

module.exports = init;