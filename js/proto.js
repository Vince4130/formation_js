Number.prototype.even = function() {
    return this.valueOf() % 2 === 0;
}

/**
 * Description
 * 
 * @var
 * @name String
 * @kind method
 * @type {StringConstructor}
 */
String.prototype.toCapitalize = function() {
    
    var chaine = this.valueOf();

    var words = chaine.split(' ');

    for(var i=0; i < words.length; i++) {
        words[i] = words[i].slice(0,1).toUpperCase() + words[i].slice(1);
    }
    
    return words.join(' ')
}

/**
 * Description
 * 
 * @var
 * @name Date
 * @kind class
 * @type {DateConstructor}
 */
Date.prototype.dateEnFrancais = function() {
    
    var d     = this;
    var year  = d.getFullYear();
    var day   = d.getDay();
    var month = d.getMonth();

    var days   = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
    var months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novemnbre', 'décembre'];

    var jour = days[day];
    var mois = months[month];

    var date = jour + ' ' + d.getDate() + ' ' + mois + ' ' + year;

    return date.toCapitalize();
}


/**
 * Description
 * 
 * @var
 * @name Date
 * @type {DateConstructor}
 */
Date.prototype.frenchDate = function() {
    
    var d = this;

    var options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return d.toLocaleDateString('fr-FR', options).toCapitalize();
}