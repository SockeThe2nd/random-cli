function init(Random){
    function getInt(min, max){
        return Random.integer(min, max);
    }
    
    function int(options){
        if(options.range){
            options.range.sort();
            
            var min = options.range[0];
            var max = options.range[1];
            if(options.exclude){
                min++;
                max--;
            }
            return getInt(min,max);
        } else {
            return getInt(1,100);
        }
    }
    
    return int;
}

module.exports = init;