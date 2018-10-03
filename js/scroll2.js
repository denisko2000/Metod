window.addEventListener("load",function(){
window.onwheel = function exp (e) {
    var wHeight = window.innerHeight;
    var step=window.innerHeight*11;
    
    if(e.deltaY<0){
        var i=0;
        var refreshId = setInterval(function(){
           // alert(i+" "+step)
           
            if(i<window.innerHeight&&window.pageYOffset!=0){
                var x = window.innerHeight;
                window.onwheel = function(e) {
                    if(e.deltaY>0){
                       i=window.innerHeight;
                       clearInterval(refreshId);
                       window.onwheel= exp;
                    }
                }
                scrollBy(0,-1)
                i++
                
                 }
             else{
                clearInterval(refreshId);
                window.onwheel= exp;
             }
        },1)    
      
    }
    else{
        var headers = document.getElementsByClassName("container-fluid lk");
        if(true){
            for(i=0;i<headers.length;i++){
                headers[i].style.height=30+"px";
            }
        }
        var i=0;
        var refreshId = setInterval(function(){
           // alert(i+" "+step)
           
            if(i<window.innerHeight&&window.pageYOffset!=step){
                var x = window.innerHeight;
                window.onwheel = function(e) {
                    if(e.deltaY<0){
                       i=window.innerHeight;
                       clearInterval(refreshId);
                       window.onwheel= exp;
                    }
                }
                scrollBy(0,1)
                i=i+1
                
                 }
             else{
                clearInterval(refreshId);
                window.onwheel= exp;
                 
             }
        },1)    
    }
    return false
}

window.onkeydown=function(event){
    var wHeight = window.innerHeight;
    var step=window.innerHeight*11;
    if(event.keyCode==40){
       
        wHeight=+ wHeight;
        var i=0;
        var refreshId = setInterval(function(){
            // alert(i+" "+step)
            
             if(i<window.innerHeight&&window.pageYOffset!=step){
                 var x = window.innerHeight;
                 
                 scrollBy(0,1)
                 i=i+1
                 
                  }
              else{
                 clearInterval(refreshId);
                
                  
              }
         },1)    
        return false
    }
    if(event.keyCode==38){
       
        var wHeight = window.innerHeight;
        var step=window.innerHeight*11;
        var i=0;
        var refreshId = setInterval(function(){
            // alert(i+" "+step)
            
             if(i<window.innerHeight&&window.pageYOffset!=0){
                 var x = window.innerHeight;
                 
                 scrollBy(0,-1)
                 i++
                 
                  }
              else{
                 clearInterval(refreshId);
                  
              }
         },1)    
        return false
    }
    
}
})
