function sumSquares(array) {
var square = 0;
  var result = array.map(function(num) {
   return square += num**2;    
   });
   return( result[result.length -1]);
}
