function init(Random){
    function getPick(arr){
        return Random.pick(arr);
    }
    
    function pick(arr){
        return getPick(arr);
    }
    
    return pick;
}

module.exports = init;