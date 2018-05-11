function theBeatlesPlay (beatle, instrument){
  var hePlaysThis = [];
  
  for (let n = 0; n < beatle.length; n++){
    hePlaysThis[n] = `${beatle[n]} plays ${instrument[n]}`;
  }
  return hePlaysThis;
}

