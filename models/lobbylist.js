const lobby = require("./lobby");

function NewLobby(){
    var letters = "0123456789ABCDEF";

    var room = '#';

    for (var i = 0; i < 6; i++)
    room += letters[(Math.floor(Math.random() * 16))];

    return room;
}


class lobbylist {

    constructor(){

        this.lobby = [
            new lobby( NewLobby() ),
            new lobby( NewLobby() ),
            new lobby( NewLobby() ),
        ];

    }

    newLobby( id ){

        const newLobby = new lobby( id )

        this.lobby.push( newLobby );

        return this.lobby
    }

    getlobbys(){
        return this.lobby
    }

    increasePlayers( id )
    {
        this.lobby = this.lobby.map( lobby => {
            if (lobby.id == id) {
                lobby.players += 1;
            }

            return lobby
        });
    }

    restPlayers( id )
    {
        this.lobby = this.lobby.map( lobby => {
            if (lobby.id == id) {
                lobby.players -= 1;
            }

            return lobby
        });
    }
}

module.exports = lobbylist;