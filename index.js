function theBeatlesPlay (beatle, instrument){
  var hePlaysThis = [];
  
  for (let n = 0; n < beatle.length; n++){
    hePlaysThis[n] = `${beatle[n]} plays ${instrument[n]}`;
  } // You want to make sure that doesn't return something like "Drums plays Ringo Starr" XD
  return hePlaysThis;
}

