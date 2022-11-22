const matchscore = require('../models/matchscore.model')
const jsonTocsv = require('json-to-csv-export')

module.exports = async(req,res,next)=>{
    try {
        let data = await matchscore.find()
        res.render("database",{database:data})
    } catch (error) {
        res.json(error)
    }
}