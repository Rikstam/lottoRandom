var gen = require('random-seed');
var _ = require('lodash');
var express = require('express');
var app = express();

var port = process.env.PORT || 8080;

var router = express.Router();

var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
//app.use(bodyParser.urlencoded({ extended: true }));
//app.use(bodyParser.json());

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });



function createRandomLotteryRows(numberOfRows, seed){

  var rows, randomizer, i, r, rand, lotteryRows;

  lotteryRows = [];

    rand = new gen();
    seed = rand.cleanString(seed);

    rows = numberOfRows;
    r=0;


  //create as many rows as in the rows var;




  while(r < rows){

    var row = {};

    //create 7 ints
    var numbers = [];
            i=1;
        while(i<8){
            //randomize the seed string
            var shuffledSeed = _.shuffle(seed);

             //push the random ints to array
            randomizer = (gen.create(shuffledSeed));
            var randomizedInt = randomizer.intBetween(1,39);

            //console.log("round:" + r + " " + i + " " +  randomizedInt);

            numbers.push(randomizedInt);

            i++;
        }

    row.numbers = numbers;

    lotteryRows.push(row);

    r++;
      console.log(seed);
      console.log(r);
      console.log(lotteryRows);
  }

  return lotteryRows;
}

router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


router.get('/', function(req, res){
    res.json({ message: 'hooray! welcome to our api!' });
});

app.use('/api', router);

router.route('/numbers')

    .post(urlencodedParser,function(req, res){

       // var numbs = createRandomLotteryRows(req.body.rows, req.body.seedString);
        if (!req.body) {return res.sendStatus(400);}

        console.log(req.body);
        var rows = req.body.rows;
        var seedString = req.body.seedString;

        if(rows.length > 255) {return res.sendStatus(400);}

        if(rows > 20) {return res.sendStatus(400);}
        if(seedString.length > 255) {return res.sendStatus(400);}


        if( rows && seedString ){
            var numbs = createRandomLotteryRows(rows, seedString);
            res.json(numbs);
        }



    })
    .get(function(req, res) {

    var numbs = createRandomLotteryRows(4, "möhmö");
    res.json(numbs);

});

app.use(express.static(__dirname + '/public'));
app.listen(port);
console.log('Magic happens on port ' + port);
