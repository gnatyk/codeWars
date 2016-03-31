function sumSquares(array) { 
  var result = array.map(function(num) {
   return num**2;
   });  
   var sunSqu = result.reduce(function(a, b) {
    return  a + b;
  });
  
  return sunSqu; 
}

