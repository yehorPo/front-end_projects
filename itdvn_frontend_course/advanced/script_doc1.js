function Module(){}

   Module.change = function(){
      var counter = document.body.childNodes;
      for(var i = 0; i < counter.length;i++){
         if(counter[i].nodeType == 1){
             counter[i].innerHTML = "PARAGRAPH";
         }
     }
         
      }
