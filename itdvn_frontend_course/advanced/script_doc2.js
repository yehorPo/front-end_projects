function Module(){}
Module.write = function(){
    var counter = document.body.childNodes;
    if(counter.length==10){
        for(var i = 0;i<counter.length;i++){
            counter[i].remove();
        }
    }else{
        var p = document.createElement('div');
        p.innerHTML = "<p>123</p>";
        document.body.appendChild(p);
    }
}
