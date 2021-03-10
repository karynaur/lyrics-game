

function newGame(){
    
    document.getElementById("score").innerHTML=0;
    document.getElementById("alert").innerHTML="";
    changeLyrics();
}

function changeLyrics(){
    var score=document.getElementById("score").innerHTML;
    var attempt=document.getElementById("attempt").innerHTML;
    if(attempt==0){
    document.getElementById("accuracy").innerHTML="Your accuracy is 0.00%";

    }
    else{
        document.getElementById("accuracy").innerHTML="Your accuracy is " +  ((score/attempt)*100).toFixed(2) + "%";
    }
    var select=document.getElementById("artists").value;

    if(select=="Choose"){
       document.getElementById("alert").innerHTML="Choose your artist!"
       document.getElementById("score").innerHTML=0;
       document.getElementById("attempt").innerHTML=0;
       document.getElementById("accuracy").innerHTML="";
    }
    else if(select=="All Artists"){
        x=0;y=95;
    }
    else if(select=="Justin Bieber"){
        x=0;y=8;}
    else if(select=="Adele") 
        {x=9;y=15;}
    else if (select=="Drake") 
        {x=16;y=21;}
    else if (select=="The Weeknd" )
        {x=22;y=27;}
    else if (select=="Taylor Swift") 
        {x=28;y=33;}
    else if (select=="Ariana Grande" )
       { x=34;y=36;}
    else if (select=="Ed Sheeran" )
        {x=37;y=43;}
    else if (select=="Coldplay") 
       { x=44;y=50;}
    else if (select=="Miley Cyrus") 
        {x=51;y=57;}
    else if (select=="Backstreet Boys" )
      {  x=58;y=64;}
    else if( select=="Eminem" )
      {  x=65;y=71;}
    else if (select=="Kanye West" )
      {  x=72;y=78;}
    else if (select=="21 Savage") 
        {x=79;y=81;}
    else if (select=="Linkin Park" )
        {x=82;y=88;}
    else {x=89;y=95;}

    var a=Math.floor(Math.random()*(y-x+1))+x
    var b=Math.floor(Math.random()*2)+2
    var c=Math.floor(Math.random()*(lyrics[a][b].length-1))+1;
    
    try {
        document.getElementById("lyrics").innerHTML=lyrics[a][b][c];
        document.getElementById("lyrics").innerHTML+="<br><br><b>By: "+lyrics[a][0] +"<br>From: "+ lyrics[a][1]+"</b>";
            
    } catch (e) {
    
        newGame();
    }
    

    if(b==2){
        globalThis.ground=true  
    }
    else{
        globalThis.ground=false
    }
}
ground=true
function scoreReal(){
    var a=Number(document.getElementById("score").innerHTML);
    var b=Number(document.getElementById("attempt").innerHTML);
    document.getElementById("attempt").innerHTML=b+1;
    document.getElementById('alert').innerHTML=""
    if(ground){
        document.getElementById("alert").innerHTML="Thats right!"
                
        document.getElementById("score").innerHTML=a+1;
    }
    else{
        document.getElementById("alert").innerHTML="Oh no :("
        if(a==0){

            changeLyrics();
            return;
        }
    }

    changeLyrics();
}

function scoreFake(){
    
    var b=Number(document.getElementById("attempt").innerHTML);
    document.getElementById("attempt").innerHTML=b+1;
    document.getElementById("alert").innerHTML=""
    var a=Number(document.getElementById("score").innerHTML);

    if(!ground){
        document.getElementById("alert").innerHTML="You got this!"
                
        document.getElementById("score").innerHTML=a+1;
    }
    else{
        document.getElementById("alert").innerHTML="Oops!"
        if(a==0){
            changeLyrics();
            return;
        }
    }

    changeLyrics();
}

document.getElementById("dark").addEventListener("click",dark);
function dark(){
    document.body.style="background-image: linear-gradient(to top, #181717 0%, black 100%);"
    document.getElementById("text").style="font-size: 20;";
    let main=document.getElementsByClassName("main");


    for(var i=0;i<main.length;i++){
        main[i].style.color="aliceblue"
    }
    
    let flex=document.getElementsByClassName("flex-child");
    
    for(var i=0;i<flex.length;i++){
        flex[i].style.border="2px solid aliceblue";
    }
}

document.getElementById("light").addEventListener("click",light);
function light(){
    document.body.style="background-color: #d0ac8c;"
    document.getElementById("text").style="font-size: 20;font-weight: bold;";
    let main=document.getElementsByClassName("main");

    for(var i=0;i<main.length;i++){
        main[i].style.color="black"
    }
    
    let flex=document.getElementsByClassName("flex-child");
    
    for(var i=0;i<flex.length;i++){
        flex[i].style.border="2px solid black";
    }
}