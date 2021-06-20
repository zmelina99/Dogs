<p align='left'>
    <img src='https://static.wixstatic.com/media/85087f_0d84cbeaeb824fca8f7ff18d7c9eaafd~mv2.png/v1/fill/w_160,h_30,al_c,q_85,usm_0.66_1.00_0.01/Logo_completo_Color_1PNG.webp' </img>
</p>

# Individual Project - Henry Dogs

<p align="left">
  <img height="200" src="./dog.png" />
</p>

## OObjectives

- App built using React, Redux, Node y Sequelize.
- Connect all the contents learnt in the bootcamp
- Use clean code 
- Work with GIT 
- Use and practice Testing



## Getting started



You'll be given a `boilerplate`with the general structure for the server and the client.


## BoilerPlate

The boilerplate has two folders: `api` y `client`. The folder named API contains the code ffor the Backend and the folder named client contains the code for the Frontend.



## What to do:

The main idea is to create an App where the user can browse different dog breeds and their relevant inforation using an external API.
 [the dog api](https://thedogapi.com/) and with this API, being able to: 

  - Browse dogs 
  - Filter and sort dogs
  - Add a new dog



__IMPORTANT__: 
To filter and sort, you have to build your own routes, it is not allowed to use the endpoints coming form the API. You must do at least one od te filters or sortings from the Frontend.

### Allowed Endpoints

  - GET https://api.thedogapi.com/v1/breeds
  - GET https://api.thedogapi.com/v1/breeds/search?q={raza_perro}

### Minimal requirements:

The following are the minimal requiements to pass the test: 

__IMPORTANT__: It  is not allowed to use external libraries for the CSS, you are only allowed to use: CSS, CSS-modules, styled-components

#### Necessary technologies:
- [ ] React
- [ ] Redux
- [ ] Express
- [ ] Sequelize - Postgres

#### Frontend

You must develop an App using React/Redux that contains the following screens/routes:

__Initial Page__: You must build a landing page with:
- [ ] En image that represents the project
- [ ] Button to go to Home (`Main route`)

__Main  route__: Must contain:
- [ ] Search input to find dog breed by name
- [ ] List of dogs where you can see their: 
  - Picture
  - Name
  - Temperament
- [ ] Buttons to filter by temperaments, existing breeds or breeds created by the user 
- [ ] Buttons to sort  by ascending and descending weight and alphabetical order
- [ ] Pagination to browse and search for the next breeds

__IMPORTANT__: In the main route, the user should be able to see the dogs coming from the API and the dogs created by the users

__Dog details route__: must contain: 
- [ ] Image
- [ ] Name
- [ ] Temperament
- [ ] Height
- [ ] Weight
- [ ] Life-span

__Dog creation route__: must contain: 
- [ ] A form with the following inputs:
  - Name
  - Height
  - Weight
  - Life-span
- [ ]Option to select one or more temperaments 
- [ ] Botón to  create a new dog breed

#### Data-base 

The model must have the following entities (The ones with a * ae mandatory):

- [ ] Breed with the following properties:
  - ID *
  - Name *
  - Height *
  - Weight *
  - Life-span
- [ ] Temperaments with the following entities:
  - ID
  - Name

The relations must be MANY-TO-MANY


#### Backend

You should develop a Node/Express server containing:

__IMPORTANT__: It is not allowed to use the filtering, sorting and pagination coming from the external API You must develop all of these functionalities.

- [ ] __GET /dogs__:
  - Get a list of the first 8 dog breeds
  - Should return all the necessary details for the main route
- [ ] __GET /dogs?name="..."__:
  - Get a list of the first 8 dogs that contain the word received as a Query parameter
  - If there is no dog breed, return a message that informs it. 
- [ ] __GET /dogs/{idRaza}__:
  - Get the detail of a specific dog breed
  - Must bring only the details requested in the dog breed details route
  - Include related temperaments
- [ ] __GET /temperament__:
  - Get all the temperaments
  - You must  get the temperaments from the external API, then store them in your database and use them from there.
- [ ] __POST /dog__:
  - Receives the details from the form of the creation route by body
  - Creates a new breed in the Database 

#### Testing
- [ ] At least one  of the components in the Frontend has testing
- [ ] At least one  of the routes in the Backend has testing
- [ ] At least one  of the models of the DataBase has testing
