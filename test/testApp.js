const assert = require('chai').assert;
//const sayHello = require('../app').sayHello;
//const addNumbers = require('../app').addNumbers;
const app = require('../app');

//Results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);
contentArrobaResult = app.contentArroba();

/** 
 * This is the test for string Hello
 * @type {string}
 * */
describe('App', function(){

    describe('sayHello()',function(){
         //Evaluaque en app exista la palabra
     it ('sayHello should return hello', function(){
        //let result = sayHello();
        assert.equal(sayHelloResult,'hello');

    });
    //Evalua que el tipo sea un string
    it ('sayHello should return type string', function(){
        //let result = sayHello();
        assert.typeOf(sayHelloResult, 'string');
    });

    });

    describe('addNumber()',function(){

         //Evalua que la operacion matematica de como resultado 5
     it ('addNumbers should be above 5', function(){
        //let result = addNumbers (5,5);
        assert.isAbove(addNumbersResult, 5);
    });
    //Evalua que el tipo sea number
    it ('addNumber should return type number', function(){
       //let result = addNumbers(5,5);
       assert.typeOf(addNumbersResult, 'number');
   });

    });
   
    
    //Evalua la precencia de Arroba
    describe('contentArroba()',function(){

        
    it ('contentArroba should return @', function(){
       
        assert.equal(contentArrobaResult,'@');
   });
  
   it ('contentArroba should return type string', function(){
      
      assert.typeOf(contentArrobaResult, 'string');
  });

   });



});