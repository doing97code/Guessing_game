const btn=document.getElementById("btn")
const namenick=document.querySelector('.namenick');

btn.onclick=function(){
    let name1=document.getElementById("name1").value;
let nick=document.getElementById("nick").value;
    if(namenick.value==''){
        alert("Enter your name & nick name");
    }else{
        window.location.href="game.html";
    }
    localStorage.setItem("name1",name1);  
    localStorage.setItem("nick",nick);
    console.log(name1)
}
console.log("suvo h3ere")