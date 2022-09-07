const { v4: uuid }  = require('uuid')

class players {

    constructor ( name ) {

        this.id      = uuid;
        this.name    = name

    }

}

module.exports= players;