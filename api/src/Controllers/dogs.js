const {Dog} = require('../db')
const axios = require('axios')
const {BASE_URL, DOG_URL, API_KEY} = require('../../constants')

function getDogs(req, res, next){
    const dogApi = axios.get(BASE_URL);
    const myDogs = Dog.findAll();
    Promise.all([dogApi, myDogs])
        .then((response) => {
        let [dogApiResponse, myDogsResponse] = response
        let all = myDogsResponse.concat(dogApiResponse.data)
        
            return res.send (all)
    })
    .catch((err) => next(err))
} //MAL
/* function getDogs(req, res, next){
    const dogApi = axios.get(BASE_URL + DOG_URL);
    const myDogs = Dog.findAll();
    Promise.all([dogApi, myDogs])
        .then((response) => {
         let [dogApiResponse, myDogsResponse] = response
        return res.send (
            myDogsResponse.concat(dogApiResponse.data.result)
        )
    })
    .catch((err) => next(err))
}  */

function getDogsQuery(req, res, next){
    const dogApi = axios.get(BASE_URL + DOG_URL);
    const myDogs = Dog.findAll();
    const {name} = req.query.name
    Promise.all([dogApi, myDogs])
        .then((response) => {
        let [dogApiResponse, myDogsResponse] = response
        let all = myDogsResponse.concat(dogApiResponse.data)
        if (all.length === 0){
            return res.status(404).send("Oops, we haven't found any breeds matching that name")
        }
        match = all.filter(breed => breed.name === name); 
            return res.send (match)
    })
    .catch((err) => next(err))
} 

function getDogsParams(req, res, next){
    const dogApi = axios.get(BASE_URL + DOG_URL);
    const myDogs = Dog.findAll();
    const {dogId} = req.params
    Promise.all([dogApi, myDogs])
        .then((response) => {
        let [dogApiResponse, myDogsResponse] = response
        let all = myDogsResponse.concat(dogApiResponse.data)
        match = all.filter(breed => breed.id === dogId); 
            return res.send (match)
    })
    .catch((err) => next(err))
} 


async function addDog(req, res, next){
    const dog = req.body;
    if(!dog){
        return res.send('Oops, the form is empty')
    }
    try {
        const createdDog = await  Dog.create(dog)
        return res.send(createdDog)
    }
    catch(error){
        next(error)
    } 
}




module.exports = {
    addDog, 
    getDogs,
    getDogsQuery,
    getDogsParams
}