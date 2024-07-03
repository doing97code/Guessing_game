
const inp=document.getElementById("inp")
const rightText=document.querySelector(".rightText")
const chance=document.getElementById("chance")
const play=document.getElementById("play")
const btngame=document.getElementById("btngame")

chance.innerHTML=10

function generate(){
    let num= Math.ceil((Math.random()*100)+1);
    return num;
}
let newnum=generate();
function checker(){
    
    console.log(newnum)
    let val=inp.value;
    if (val==0 || val>100) {
        alert("Enter between 1 to 100");
    }
    
    if (newnum==val) {
        rightText.innerHTML="You guess right number";
    }else if(newnum<val){
        rightText.innerHTML="Enter lower value";
    }else{
        rightText.innerHTML="Enter bigger value";
    }
    chance.innerHTML--;
}
let prevvalue=inp.value;

btngame.onclick=function(){
    if(inp.value!=''&& chance.innerHTML>1 ){
        checker();
    }else if(chance.innerHTML<=1){
        chance.innerHTML=0;
        let name2=localStorage.getItem('name1');
        
        rightText.innerHTML=`${name2} , You lost`;
        play.style.display='flex';
        btngame.style.display='none';
        
    }else{
        alert("Enter number");

    }
    
}

play.onclick=function(){
    window.location.href='desr.html';
}