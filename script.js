var allDiv=document.querySelectorAll("div")
function stop()
{
    var H1=document.querySelector("h1")
    H1.innerHTML="STOP"
    var text=document.getElementById("text");
    text.style.backgroundColor="red"
    allDiv[0].style.backgroundColor="red";
    allDiv[1].style.backgroundColor="grey";
    allDiv[2].style.backgroundColor="grey";
}
function slow()
{
    var H1=document.querySelector("h1")
    H1.innerHTML="READY TO GO"
    var text=document.getElementById("text");
    text.style.backgroundColor="orange"
    allDiv[1].style.backgroundColor="orange";
    allDiv[0].style.backgroundColor="grey";
    allDiv[2].style.backgroundColor="grey";
}
function go()
{
    var H1=document.querySelector("h1")
    H1.innerHTML="GO"
    var text=document.getElementById("text");
    text.style.backgroundColor="green"
    allDiv[2].style.backgroundColor="green";
    allDiv[0].style.backgroundColor="grey";
    allDiv[1].style.backgroundColor="grey";
}