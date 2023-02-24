var colors = ["white","#ACACAC","#D2D2D2","#3D3D3D","#454545","black"]
var bgcolors = ["black","#454545","#3D3D3D","#D2D2D2","#ACACAC","white"]
var i = 0

function startworker(){
    interval = setInterval(function(){
        var dates = new Date();
        var bgcolor = bgcolors[i]
        var color = colors[i]
        i += 1
        if(i >= 6){
            i = 0 
        }
        postMessage({date:dates,bgcolor:bgcolor,color:color}) 
    },1000)
}

function stopworker(){
    clearInterval(interval)
}

onmessage = function(e){
    if(e.data==="start"){
        startworker();
    }
    else if (e.data==="stop"){
        stopworker();
    }
}