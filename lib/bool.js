function init(Random){
    function getBool(){
        return Random.bool();
    }
    
    function bool(options){
        if(options.yes){
            return getBool() ? "YES" : "NO";
        } else {
            return getBool();
        }
    }
    
    return bool;
}

module.exports = init;