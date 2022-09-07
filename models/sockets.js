const lobbylist = require('./lobbylist');
const cardlist = require('./cardlist');
const playerlist = require('./playerlist');


class Sockets {

    constructor( io ) {

        this.io = io;

        this.lobbylist = new lobbylist();
        this.cardlist = new cardlist();
        this.playerlist = new playerlist();

        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {

            console.log('cliente conectado');

            // Recuperar lobbys
            socket.emit('current-lobbys', this.lobbylist.getlobbys() );

            //recuperar Cards
            socket.emit('current-cards', this.cardlist.getCards() );

            //Recuperar players
            socket.emit('current-cards', this.playerlist.getPlayers() );


            // GetNewPlayer
            socket.on('NewPlayer', (id) =>{
                this.lobbylist.increasePlayers(id);
                this.io.emit('current-lobbys', this.lobbylist.getlobbys() );
            })

            //GetNewLobby

            socket.on('newLobby', (id) => {
                this.lobbylist.newLobby(id);
                this.io.emit('current-lobbys', this.lobbylist.getlobbys() );
            });
        });
    }


}


module.exports = Sockets;