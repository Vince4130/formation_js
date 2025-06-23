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

Date.prototype.dateEnFrancais = function() {
    
    var d     = new Date();
    var year  = d.getFullYear();
    var day   = d.getDay();
    var month = d.getMonth();

    var days   = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    var months = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novemnbre', 'décembre'];

    var jour = days[day];
    var mois = months[month];

    var date = jour + ' ' + d.getDate() + ' ' + mois + ' ' + year;

    return date;
    
}