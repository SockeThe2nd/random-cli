function init(Random) {
    function getString(n, pool) {
        return Random.string(n, pool);
    }

    function string(options) {
        if(options.pool){
            return getString(options.n, options.pool);
        } else {
            return getString(options.n);
        }
    }

    return string;
}

module.exports = init;