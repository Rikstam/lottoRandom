var gen = require('random-seed');
var _ = require('lodash');
var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

// respond with "hello world" when a GET request is made to the homepage



var rows, randoms, i, r, rand, seed, ints;
//ints = [];


function createRandomLotteryRows(rows, seed){


  ints = [];

  rand = new gen();
  seed = rand.cleanString(seed);

  rows = rows;
  r=1;
  i=1;

  //create as many rows as in the rows var;
  while(r < rows){

  randoms = [];

  //create 7 ints
    while(i<8){
    //randomize the seed string
      seed = _.shuffle(seed);

    //push the random ints to array
      randoms.push(gen.create(seed));
      i++;
    }

    randoms.forEach(function(k){

      console.log(r + " " + k.intBetween(1,39));
      randomInt = k.intBetween(1,39);
      rand.done();
      ints.push(randomInt);
    });

    r++;
  }

  return ints;
}


app.get('/numbers', function(req, res) {

  var numbs = createRandomLotteryRows(3, "möhmö");
  res.send(numbs);

});

app.listen(port);
console.log('Magic happens on port ' + port);
