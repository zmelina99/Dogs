const { Dog, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Dog model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Dog.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Dog.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      describe('weight', () => {
        it('should throw an error if weight is null', (done) => {
          Dog.create({name: 'pug'})
            .then(() => done(new Error('It requires a valid weight')))
            .catch(() => done());
        });
        describe('height', () => {
          it('should throw an error if height is null', (done) => {
            Dog.create({name: 'pug',  weight:200})
              .then(() => done(new Error('It requires a valid height')))
              .catch(() => done());
          });
      it('should work when its a valid name, weight and height', () => {
        Dog.create({ name: 'Pug', weight: 300, height:200 });
      });
    });
  });
});
}) 
})
