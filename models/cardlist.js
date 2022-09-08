const Cards = require("./cards");

class cardlist {

    constructor()
    {
        this.cards = [
            new Cards('https://wilvanastore.com/public/img/pokemons/1A.png','Pikachu','A1','8','5','4','6'),
            new Cards('https://wilvanastore.com/public/img/pokemons/2A.png','Zapdos','A2','5','2','10','7'),
            new Cards('https://wilvanastore.com/public/img/pokemons/3A.png','Morpeko','A3','10','1','3','6'),
            new Cards('https://wilvanastore.com/public/img/pokemons/4A.png','Yamper','A4','4','5','7','9'),
            new Cards('https://wilvanastore.com/public/img/pokemons/1B.png','Bulbasaur','B1','10','3','6','5'),
            new Cards('https://wilvanastore.com/public/img/pokemons/2B.png','RowLet','B2','2','1','4','8'),
            new Cards('https://wilvanastore.com/public/img/pokemons/3B.png','Pansage','B3','1','4','4','7'),
            new Cards('https://wilvanastore.com/public/img/pokemons/4B.png','Yamper','B4','4','2','6','4'),
            new Cards('https://wilvanastore.com/public/img/pokemons/1C.png','Charmander','C1','5','5','7','4'),
            new Cards('https://wilvanastore.com/public/img/pokemons/2C.png','Salandit','C2','7','6','9','5'),
            new Cards('https://wilvanastore.com/public/img/pokemons/3C.png','Litten','C3','2','3','4','7'),
            new Cards('https://wilvanastore.com/public/img/pokemons/4C.png','Cyndaquil','C4','2','6','6','3'),
            new Cards('https://wilvanastore.com/public/img/pokemons/1D.png','OSHAWOTT','D1','2','4','6','4'),
            new Cards('https://wilvanastore.com/public/img/pokemons/2D.png','Popplio','D2','3','5','6','5'),
            new Cards('https://wilvanastore.com/public/img/pokemons/3D.png','Sobble','D3','2','2','6','2'),
            new Cards('https://wilvanastore.com/public/img/pokemons/4D.png','Mantine','D4','4','4','6','8'),
            new Cards('https://wilvanastore.com/public/img/pokemons/1E.png','Mew','E1','5','5','8','9'),
            new Cards('https://wilvanastore.com/public/img/pokemons/2E.png','Popplio','E2','4','4','6','3'),
            new Cards('https://wilvanastore.com/public/img/pokemons/3E.png','Mimikyu','E3','4','5','6','3'),
            new Cards('https://wilvanastore.com/public/img/pokemons/4E.png','Mewtoo','E4','6','7','8','9'),
            new Cards('https://wilvanastore.com/public/img/pokemons/1F.png','Zorua','F1','4','2','8','9'),
            new Cards('https://wilvanastore.com/public/img/pokemons/2F.png','DarkRai','F2','4','5','8','6'),
            new Cards('https://wilvanastore.com/public/img/pokemons/3F.png','SABLEYE','F3','2','2','4','4'),
            new Cards('https://wilvanastore.com/public/img/pokemons/4F.png','YVetal','F4','8','7','6','7'),
            new Cards('https://wilvanastore.com/public/img/pokemons/1G.png','Jigglypuff','1G','2','3','5','3'),
            new Cards('https://wilvanastore.com/public/img/pokemons/2G.png','Mr. Mime','2G','4','5','4','5'),
            new Cards('https://wilvanastore.com/public/img/pokemons/3G.png','Xerneas','3G','5','5','6','8'),
            new Cards('https://wilvanastore.com/public/img/pokemons/1G.png','DIANCIE','4G','4','5','8','9'),
            new Cards('https://wilvanastore.com/public/img/pokemons/1H.png','MAGNEMITE','1H','6','3','4','7'),
            new Cards('https://wilvanastore.com/public/img/pokemons/2H.png','MAGNEMITE','2H','9','8','6','3'),
            new Cards('https://wilvanastore.com/public/img/pokemons/3H.png','ZAMAZENTA','3H','4','5','8','7'),
            new Cards('https://wilvanastore.com/public/img/pokemons/4H.png','Skarmory','4H','3','2','5','9'),
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