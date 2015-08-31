function init(Random){
    function getFloat(min, max, inclusive){
        return Random.real(min, max, inclusive);
    }
    
    function float(options){
        var float;
        if(options.range){
            options.range.sort();
            
            var min = options.range[0];
            var max = options.range[1];
            
            float = getFloat(min,max, !options.exclude);
        } else {
            float = getFloat(1,100, true);
        }
        
        if(options.digits || options.digits === 0){
            float = float.toFixed(options.digits);
        }
        
        return float;
    }
    
    return float;
}

module.exports = init;