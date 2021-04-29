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
       let dogApiResponse = response 
       let all = dogApiResponse.data  
      let set = new Set()
      all.map( breed => {
        if (breed.temperament){
          let temperaments = breed.temperament.split(", ")
        for (let i = 0; i < temperaments.length; i++){
            set.add(temperaments[i])
        }
        }
      }) 
      console.log(set)
      const myArr = Array.from(set)
      for (let i=0; i < myArr.length;i++){
      var temperament =  Temperament.create({
        name: myArr[i]
      })
    }
   })        
  });
});


//SELECT * FROM mytable LIMIT 10;

  