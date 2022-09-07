const Cards = require("./cards");

class cardlist {

    constructor()
    {
        this.cards = [
            new Cards('Pikachu','A1','10','20','3','6'),
            new Cards('Snorlax','A2','10','20','3','6'),
            new Cards('charmander','A3','10','20','3','6'),
            new Cards('bulbasaur','A4','10','20','3','6'),
            new Cards('eve','B1','10','20','3','6'),
            new Cards('charizard','B2','10','20','3','6'),
            new Cards('Raichu','B3','10','20','3','6'),
            new Cards('Dragonite','B4','10','20','3','6'),
        ]
    }

    addCard ( name, category, healt, power, speed, ability  )
    {
        const newCard = new Cards( name, category, healt, power, speed, ability )
        this.cards.push( newCard );
        return this.cards
    }

    deleteCard( id ) {
        this.cards = this.cards.filter( card => card.id !== id );

        return this.cards
    }

    getCards()
    {
        return this.cards;
    }


}

module.exports = cardlist;