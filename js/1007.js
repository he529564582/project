function car(){
    var speed = 0
    function fn(){
      speed++
      console.log(speed)
    }
    return fn
  }
  
  var speedUp = car()
  speedUp()   //1
  speedUp()   //2


  function car(){
      var speed = 0
      function fn(){
          speed++
          console.log(speed)
      }
      return fn
  }



var fnArr = [];
for (var i = 0; i < 10; i ++) {
  fnArr[i] =  function(){
    return i
  };
}
console.log( fnArr[3]() ) // 10
 
var fnArr = []
for( var i=0;i<10;i++){
   fnArr[i]= (function(j){
        return function(){
            return j;
        }
   })(i)
}
console.log(fnArr[3]())

var fnArr =[]
for( var i=0;i<10;i++){
    (function(i){
        fnArr[i]= function(){
            return i
        }
    })(i)
}
console.log(fnArr[3]())

var fnArr =[]
for(let i= 0;i<10; i++){
    fnArr[i]=function(){
        return i;
    }
}
console.log(fnArr[3]())


var fnArr= []
for(var i= 0;i<10;i++){
    fnArr[i]= (function(j){
        return function(){
            return j;
        }
    })(i)
}
console.log(fnArr[3]())


var fnArr= []
for(var i= 0;i<10;i++){
  (function(i){
      fnArr[i] = function(){
          return i;
      }
  }) (i)
}
console.log(fnArr[3]())

var fnArr =[]
for(let i=0;i<10;i++){
    fnArr[i] = function(){
        return i;
    }
}
console.log(fnArr[3]())

var Car = (function(){
    var speed = 0;
    function set(s){
        speed = s
    }
    function get(){
       return speed
    }
    function speedUp(){
       speed++
    }
    function speedDown(){
       speed--
    }
    return {
       setSpeed: setSpeed,
       get: get,
       speedUp: speedUp,
       speedDown: speedDown
    }
 })()
 Car.set(30)
 Car.get() //30
 Car.speedUp()
 Car.get() //31
 Car.speedDown()
 Car.get()  //30

 var car = (function(){
     var speed = 0
     function set(s){
         speed= s
     }
     function get(){
         return speed
     }
     function speedUp(){
         speed++
     }
     function speedDown(){
        speed--
     }
 })()
 car.set(30)
 car.get()//30
 car.speedUp()
 car.get()//31
 car.speedDown()
 car.get()//30
 

 for(var i=0;i<5;i++){
    (function(j){
        setTimeout(function(){
            console.log('delayer:' + j )
        },0)
    })(i)
}
for(var i=0; i<5; i++){
    (function(j){
      setTimeout(function(){
        console.log('delayer:' + j )
      }, 0)    
    })(i)
  }

   var fnArr = []
   for(var i =0 ;i<10;i++){
       fnArr[i] = (function(){
           return function(){
               return j;
           }
       })(i)
   }
   console.log(fnArr[3]())


   var fnArr = []
   for(var i =0 ;i<10;i++){
       (function(i){
           fnArr[i] = function(){
               return i
           }
       })(i)
   }
   console.log(fnArr[3]())

   var fnArr = []
   for(let i =0 ;i<10;i++){
       fnArr[i] = function(){
           return i
       }
   }
   console.log(fnArr[3]())



   
   for(var i =0 ;i<10;i++){
       (function(j){
           setTimeout(function(){
               console.log('delayer:' + j)
           },0)
       })(i)
   }
   function sum(a){
       return  function (b){
           return a+b
       }
   }

   function car(){
       var speed = 0
       function fn(){
           speed++
           console.log(speed)
       }
       return fn
   }
   var speedUp = car()
   speedUp()    //1
   speedUp()    //2

   


   function car(){
       var speed = 0
       function fn(){
           speed++
           console.log(speed)
       }
       return fn
   }
   var speedUp = car()
   speedUp() //1
   speedUp() //2


   var  fnArr = []
   for(var i = 0;i<10;i++){
       fnArr[i] = function(){
           return i
       }
   }
   console.log(fnArr[3]())  //10

   var fnArr =[]
   for(var i = 0;i < 10;i++){
       fnArr[i] = (function(j){
           return function(){
               return j
           }
       })(i)
   }
   console.log(fnArr[3]()) // 3

   var fnArr = []
   for(var i=0;i<10;i++){
       (function(i){
           fnArr[i] = function(){
               return i
           }
       })(i)
   }
   console.log(fnArr[3]()) //3

   var fnArr = []
   for(let i = 0;i<10; i++){
       fnArr[i]= function(){
           return i
       }
   }
    console.log(fnArr[3]()) // 3

    function car(){
        var speed = 0
        function fn(){
            speed++
            console.log(speed)
        }
        return fn
    }
    var speedUp =car()
    speedUp() //1
    speedUp() //2



    var fnArr =[]
    for(var i =0;i<10;i++){
        fnArr[i]= function(){
            return i
        }
    }
    console.log(fnArr[3]()) //10

    var fnArr =[]
    for(var i = 0; i<10; i++){
        fnArr[i] = (function(j){
            return function(){
                return j
            }
        })(i)
    }
    console.log(fnArr[3]()) //3

    var fnArr = []
    for(var i = 0;i<10;i++){
        (function(i){
            fnArr[i] = function(){
                return i;
            }
        })(i)
    }
    console.log(fnArr[3]()) // 3


    