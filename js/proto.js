Number.prototype.even = function() {
    return this.valueOf() % 2 === 0;
}

String.prototype.toCapitalize = function() {
    
    var chaine = this.valueOf();

    var words = chaine.split(' ');

    for(var i=0; i < words.length; i++) {
        words[i] = words[i].slice(0,1).toUpperCase() + words[i].slice(1);
    }
    
    return words.join(' ')
}