const {Temperament} = require('../db')



function getTemp(req, res, next){
    const myTemp = Temperament.findAll()
        .then((response) => {
        let myTempResponse = response        
            return res.send (myTempResponse)
    })
    .catch((err) => next(err))
    }

    module.exports = {
      getTemp
    }