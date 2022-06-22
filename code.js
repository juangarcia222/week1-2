//function for countdowntimer v1 for wk1-2
function start(){
    console.log('start() function started');
    // created variable currtime set it equal to 10
    var currtime =10;
    console.log(currtime);
    document.getElementById("countdownstatus").innerHTML = currtime;
    setTimeout(function(){
        currtime = currtime - 1;
        //what we do after the delay
        document.getElementById("countdownstatus").innerHTML = currtime 
        console.log(currtime);
}, 1000)
//9
setTimeout(function(){
    currtime = currtime - 1;
    //what we do after the delay
    document.getElementById("countdownstatus").innerHTML = currtime 
    console.log(currtime);
}, 2000)
//8
setTimeout(function(){
    currtime = currtime - 1;
    //what we do after the delay
    document.getElementById("countdownstatus").innerHTML = currtime 
    console.log(currtime);
}, 3000)
//7
setTimeout(function(){
    currtime = currtime - 1;
    //what we do after the delay
    document.getElementById("countdownstatus").innerHTML = currtime 
    console.log(currtime);
}, 4000)
//6
setTimeout(function(){
    currtime = currtime - 1;
    //what we do after the delay
    document.getElementById("countdownstatus").innerHTML = currtime 
    console.log(currtime);
}, 5000)
//5
setTimeout(function(){
    currtime = currtime - 1;
    //what we do after the delay
    document.getElementById("countdownstatus").innerHTML = currtime 
    console.log(currtime);
}, 6000)
//4
setTimeout(function(){
    currtime = currtime - 1;
    //what we do after the delay
    document.getElementById("countdownstatus").innerHTML = currtime 
    console.log(currtime);
}, 7000)
//3
setTimeout(function(){
    currtime = currtime - 1;
    //what we do after the delay
    document.getElementById("countdownstatus").innerHTML = currtime 
    console.log(currtime);
}, 8000)
//2
setTimeout(function(){
    currtime = currtime - 1;
    //what we do after the delay
    document.getElementById("countdownstatus").innerHTML = currtime 
    console.log(currtime);
}, 9000)
//blastoff
setTimeout(function(){
    currtime = currtime - 1;
    //what we do after the delay
    document.getElementById("countdownstatus").innerHTML = currtime 
    console.log(currtime);
}, 10000)
}