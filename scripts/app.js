

function newGame(){
    
    document.getElementById("score").innerHTML=0;
    changeLyrics();
}

function changeLyrics(){
    var select=document.getElementById("artists").value;

    if(select=="Choose"){
        alert("Choose your Artist");
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
    

    document.getElementById("lyrics").innerHTML=lyrics[a][b][c];
    document.getElementById("lyrics").innerHTML+="<br><br><b>By: "+lyrics[a][0] +"<br>From: "+ lyrics[a][1]+"</b>";

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

    if(ground){
                
        document.getElementById("score").innerHTML=a+1;
    }
    else{
        if(a==0){

            changeLyrics();
            return;
        }
        document.getElementById("score").innerHTML=a-1;
    }

    changeLyrics();
}

function scoreFake(){
    
    var a=Number(document.getElementById("score").innerHTML);

    if(!ground){
                
        document.getElementById("score").innerHTML=a+1;
    }
    else{
        if(a==0){
            changeLyrics();
            return;
        }
        document.getElementById("score").innerHTML=a-1;
    }
    changeLyrics();
}


