function theBeatlesPlay (beatle, instrument){
  var hePlaysThis = [];
  
  for (let n = 0; n < beatle.length; n++){
    hePlaysThis[n] = `${beatle[n]} plays ${instrument[n]}`;
  } // You want to make sure that doesn't return something like "Guitar plays John Lennon" XD
  return hePlaysThis;
}

function johnLennonFacts (factoids) {
  var i = 0, newArray = [];
  //Note: this also works if I just alter the factoids array.
  
  while (i < factoids.length) {
    newArray[i] = `${factoids[i]}!!!`;
    ++i;
  }
  return newArray;
}
