const players = require("./players");

class playerlist {

    constructor()
    {
        this.players = [
            new players('pepito'),
            new players('pepito'),
            new players('pepito'),
            new players('pepito'),
            new players('pepito'),
            new players('pepito'),
            new players('pepito'),
            new players('pepito'),
        ]
    }

    addplayer ( name  )
    {
        const newCard = new players( name, category, healt, power, speed, ability )
        this.players.push( newCard );
        return this.players
    }

    deleteplayer( id ) {
        this.players = this.players.filter( player => player.id !== id );

        return this.cards
    }

    getPlayers()
    {
        return this.players
    }

}

module.exports = playerlist;