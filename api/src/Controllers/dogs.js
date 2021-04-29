const {Dog, Temperament} = require('../db')
const axios = require('axios')
const {BASE_URL, DOG_URL, API_KEY} = require('../../constants')
const { Sequelize } = require('sequelize');
const Op = Sequelize.Op;
const operatorsAliases = {
  $like: Op.like,
  $not: Op.not
}

//Ok, trae  todos los perros  
//CREAR PERRO EN MI BASE DE DATOS  
function getDogs(req, res, next){
    if(Object.keys(req.query).length === 0){ //BUSCAR EN CP3
    const dogApi = axios.get(BASE_URL);
    const myDogs = Dog.findAll({include: [Temperament]});
    Promise.all([dogApi, myDogs])
        .then((response) => {
        let [dogApiResponse, myDogsResponse] = response
        let all = myDogsResponse.concat(dogApiResponse.data)
        
            return res.json(all)
    })
    .catch((err) => next(err))
    }
    else {
    const {name} = req.query
    const dogApi = axios.get( `https://api.thedogapi.com/v1/breeds/search?q=${name}`);
    const myDogs =  Dog.findAll({
        where: { 
            name: { 
                [Op.like]: `%${name}%` 
            }, 
        },
    include: [Temperament]
})
    Promise.all([dogApi, myDogs])
        .then((response) => {
        let [dogApiResponse, myDogsResponse] = response
        let all = myDogsResponse.concat(dogApiResponse.data)
        if (all.length === 0){
            return res.status(404).send("Oops, we haven't found any breeds matching that name")
        }
            return res.json(all)
    })
    .catch((err) => next(err))
    }
} 

function getDogsParams(req, res, next){
    const {dogId} = req.params
    const dogApi = axios.get(BASE_URL);
    const myDogs = Dog.findAll( {include: [Temperament]});
    Promise.all([dogApi, myDogs])
        .then((response) => {
        let [dogApiResponse, myDogsResponse] = response
        let all = myDogsResponse.concat(dogApiResponse.data)
        match = all.filter(breed => {
           return breed.id == dogId}); 
            return res.send (match)
    })
    .catch((err) => next(err))
} 



module.exports = {
    getDogs,
    getDogsParams
}
/* //paginacion sequelize Limits and Pagination
The limit and offset options allow you to work with limiting / pagination:

// Fetch 10 instances/rows
Project.findAll({ limit: 10 });

// Skip 8 instances/rows
Project.findAll({ offset: 8 });

// Skip 5 instances and fetch the 5 after that
Project.findAll({ offset: 5, limit: 5 });
Usually these are used alongside the order option. */