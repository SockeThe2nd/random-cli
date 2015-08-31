function init(Random){
    function getDate(min, max){
        return Random.date(min, max);
    }
    
    function date(options){
        var res;
        if(options.range){
            options.range[0] = new Date(options.range[0]);
            options.range[1] = new Date(options.range[1]);
            
            options.range.sort();
            
            var min = options.range[0];
            var max = options.range[1];
            if(options.exclude){
                min++;
                max--;
            }
            res = getDate(min,max);
        } else {
            res = getDate(new Date(0),new Date());
        }
        if(options.iso){
            return res.toISOString();
        }
        if(options.utc){
            return res.toUTCString();
        }
        if(options.local){
            return res.toLocaleString();
        }
        if(options.number){
            return res.getTime();
        }
        return res.toString();
    }
    
    return date;
}

module.exports = init;