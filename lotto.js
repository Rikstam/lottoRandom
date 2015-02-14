var gen = require('random-seed');
var _ = require('lodash');
var express = require('express');
var app = express();

var port = process.env.PORT || 8080;


//ints = [];


function createRandomLotteryRows(numberOfRows, seed){

  var rows, randomizer, i, r, rand, lotteryRows;

  lotteryRows = [];

    rand = new gen();
    seed = rand.cleanString(seed);

  rows = numberOfRows;
  r=1;


  //create as many rows as in the rows var;




  while(r < rows){

    var row = {};

    //create 7 ints
    var numbers = [];
            i=1;
        while(i<8){
            //randomize the seed string
            seed = _.shuffle(seed);

             //push the random ints to array
            randomizer = (gen.create(seed));
            var randomizedInt = randomizer.intBetween(1,39);

            console.log("round:" + r + " " + i + " " +  randomizedInt);

            numbers.push(randomizedInt);

            i++;
        }

    row.numbers = numbers;

    lotteryRows.push(row);

    r++;
  }

  return lotteryRows;
}


app.get('/numbers', function(req, res) {

  var numbs = createRandomLotteryRows(4, "möhmö");
  res.send(numbs);

});

app.listen(port);
console.log('Magic happens on port ' + port);
