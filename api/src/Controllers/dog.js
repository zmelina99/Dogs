const {Dog, Temperament} = require('../db')
const axios = require('axios')
const {BASE_URL, DOG_URL, API_KEY} = require('../../constants')
const { v1: uuidv1 } = require('uuid');


async function addDog(req, res, next){
    const {name, weight, height, life_span, temperaments} = req.body;
     if(!name || !height || !weight){
        return res.send('Oops, the form is empty')
    } 
    try {
        const createdDog = await  Dog.create({
            id: uuidv1(),
            name, 
            height, 
            weight,
            life_span,
        })
        console.log(createdDog)
        await createdDog.addTemperament(temperaments)
        return res.json(createdDog)
    }
    catch(error){
        next(error)
    } 
}
module.exports = {
    addDog,
}