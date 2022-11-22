const matchscore = require('../models/matchscore.model')

module.exports = async(req,res,next)=>{
    let {...body} = req.body
    try {
        let checklist = await matchscore.findOne({ 'playerId': body.playerId })
        if(!checklist){
            let create = await matchscore.create({
                playerId: body.playerId,
                team1: body.team1,
                result1: "Team 1: "+body.team1score+" Team 2: "+body.team2score,
                team2: body.team2,
                result2: "Team 3: "+body.team3score+" Team 4: "+body.team4score,
                team3: body.team3,
                result3: "Team 5: "+body.team5score+" Team 6: "+body.team6score,
                team4: body.team4,
                result4: "Team 7: "+body.team7score+" Team 8: "+body.team8score,
            })
            // res.json(create)
            
            res.render("success",{result:create})
        }else{
            let team1 = []
            if(body.team1==undefined){
                team1[0] = checklist.team1
            }else{
                if(body.team2==''){
                    team1[0] = checklist.team1
                }else{
                    team1[0] = body.team1
                }
            }

            let result1 = []
            if(body.team1score==undefined){
                result1[0] = checklist.result1
            }else{
                if(body.team1score==''){
                    result1[0] = checklist.result1
                }else{
                    result1[0] = "Team 1: "+body.team1score+" Team 2: "+body.team2score
                }
            }
//----------Team 2 ------------------//
            let team2 = []
            if(body.team2==undefined){
                team2[0] = checklist.team2
            }else{
                if(body.team2==''){
                    team2[0] = checklist.team2
                }else{
                    team2[0] = body.team2
                }
            }

            let result2 = []
            if(body.team3score==undefined){
                result2[0] = checklist.result2
            }else{
                if(body.team3score==''){
                    result2[0] = checklist.result2
                }else{
                    result2[0] = "Team 3: "+body.team3score+" Team 4: "+body.team4score
                }
            }
//--------------Team 3----------------/
            let team3 = []
            if(body.team3==undefined){
                team3[0] = checklist.team3
            }else{
                if(body.team3==''){
                    team3[0] = checklist.team3
                }else{
                    team3[0] = body.team3
                }
            }

            let result3 = []
            if(body.team5score==undefined){
                result3[0] = checklist.result3
            }else{
                if(body.team5score==''){
                    result3[0] = checklist.result3
                }else{
                    result3[0] = "Team 5: "+body.team5score+" Team 6: "+body.team6score
                }
            }

//---------------Team 4 -------------/

            let team4 = []
            if(body.team3==undefined){
                team4[0] = checklist.team4
            }else{
                if(body.team3==''){
                    team4[0] = checklist.team4
                }else{
                    team4[0] = body.team4
                }
            }

            let result4 = []
            if(body.team7score==undefined){
                result4[0] = checklist.result4
            }else{
                if(body.team7score==''){
                    result4[0] = checklist.result4
                }else{
                    result4[0] = "Team 7: "+body.team7score+" Team 8: "+body.team8score
                }
            }

//---------------Team 5 -------------/

            let update = {
                playerId: body.playerId,
                team1: team1[0],
                result1: result1[0],
                team2: team2[0],
                result2: result2[0],
                team3: team3[0],
                result3: result3[0],
                team4: team4[0],
                result4: result4[0],
            }
            let edit = await matchscore.findOneAndUpdate({ 'playerId': body.playerId },update , {
                new: true
              });
              res.render("success",{result:edit})
        }
    } catch (error) {
        console.log(error)
        res.render("failure",{result:"Quý khách vui lòng điền đầy đủ thông tin."})
    }
}