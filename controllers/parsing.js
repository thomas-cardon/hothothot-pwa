function parse(str) {
    let obj = JSON.parse(str);
    for(let capteur of obj.capteurs){
        capteur.Timestamp = new Date(capteur.Timestamp);
        if(!isNaN(capteur.Valeur)){
           throw new Error("La valeur fournie par le capteur n'est pas une valeur numérique");
        }
    }
    return obj;
}

HotSDK.parse = parse;