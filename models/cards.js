const { v4: uuid }  = require('uuid')

class Cards {

    constructor ( image, name, category, healt, power, speed, ability ) {

        this.id          = uuid;
        this.image      = image;
        this.name        = name;
        this.category    = category;
        this.healt       = healt;
        this.power       = power;
        this.speed       = speed;
        this.ability     = ability;

    }

}

module.exports= Cards;