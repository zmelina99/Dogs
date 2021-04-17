//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {BASE_URL, DOG_URL, API_KEY} = require('./constants');
const axios = require('axios');
const {Dog, Temperament} =  require('./src/db.js');;

// Syncing all the models at once.
conn.sync({ force: true }).then((next) => {

 console.log('database connection OK')
 server.listen(3001, () => {
   console.log('%s listening at 3001'); // eslint-disable-line no-console
   const dogApi = axios.get(BASE_URL)
       .then((response) => {
       let [dogApiResponse] = response
       let all = dogApiResponse.data
       
      console.log(all)
       const temperaments = all.temperament.split(" ")
       let tempArray = []
  for (let i = 0; i < temperaments.length; i ++){
   tempArray.push(temperaments[i])
  let temperament =  Temperament.create({
            name: `${tempArray.pop[i]},`,
          });
        } 
   })        
  });
});


  