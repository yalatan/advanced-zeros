module.exports = function getZerosCount(number, base) {
  // your implementation
  var number;
  var base; 
  let count = 0;
  
  let result;
  
  // выделяем в  base  простые числа
            var arrBase = [];
            nextPrime:
              for (var i = 2; i <= base; i++) {
  
              for (var j = 2; j < i; j++) {
                if (i % j == 0) continue nextPrime;
                
              } arrBase.push(+i);
              }                                            
              //console.log( arrBase + "     arrBase");
  // находим состав base из простых чисел
   let newBase = [];
  for(var r = 0; r < arrBase.length; r++){
    var step = 1;
    while( base % arrBase[r] == 0){
      
          newBase.push(+arrBase[r]); 
          base = base / arrBase[r]; 
        }; 
      
  }; 
  // console.log( newBase + "     newBase");
 // console.log('    ');
  
  // подсчет количества повторений числа в факториале
  function findCount(){
    count = 0; n= 1;
     while(number >= Math.pow(newBase[asd], n)) {								 		 
       count += Math.floor( number/Math.pow(newBase[asd], n))
       n++;
  };
  return count;
  };
  
  
  
    
  asd = 0;
  let elem = 1;
  arrSum = [];	
  
   
  while( asd < newBase.length){
  elem = 1;
  while (newBase[asd] == newBase[asd+1] && asd < newBase.length){
      elem++;
      asd++;
       }
  findCount();
  count = Math.floor(count/elem);
  arrSum.push(count);
  asd++;
  };
 
  
   result = Math.min.apply(null,arrSum);
   
   
  // console.log("RESULT    " + result);
   
   
       
       
  return result;
     
    
    
    
    






}