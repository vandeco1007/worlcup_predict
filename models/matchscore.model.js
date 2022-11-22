const mongoose = require('mongoose')
const matchSchema = mongoose.Schema({
    playerId:{
        type:String,
        required: true
    },
    team1:{
        type:String,
    },
    result1:{
        type:String,
    },
    team2:{
        type:String,
    },
    result2:{
        type:String,
    },
    team3:{
        type:String,
    },
    result3:{
        type:String,
    },
    team4:{
        type:String,
    },
    result4:{
        type:String,
    },
})

module.exports = mongoose.model('matchscore',matchSchema)