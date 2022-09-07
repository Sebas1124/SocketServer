const { v4: uuid }  = require('uuid')

class Cards {

    constructor ( name, category, healt, power, speed, ability ) {

        this.id      = uuid;
        this.name    = name;
        this.category= category;
        this.healt   = healt;
        this.power   = power;
        this.speed   = speed;
        this.ability = ability;

    }

}

module.exports= Cards;