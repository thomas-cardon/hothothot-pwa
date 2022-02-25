function parse(str) {
    let obj = JSON.parse(str);
    obj.timestamp = new Date(obj.timestamp);
    
    return obj;
}

HotSDK.parse = parse;