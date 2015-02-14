var gen = require('random-seed');
var _ = require('lodash');

rand = new gen();
var seed = rand.cleanString("rakkaus");

var i=1;
var randoms = [];

while(i<8){

  seed = _.shuffle(seed);
  randoms.push(gen.create(seed));
//rand = new gen();


  i++;


}
rand.done();
randoms.forEach(function(k){

  console.log(k.intBetween(1,39));

});
