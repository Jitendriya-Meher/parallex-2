
const text = document.getElementById('text');
const starts = document.getElementById('starts');
const moon = document.getElementById('moon');
const mount1 = document.getElementById('mount1');
const mount2 = document.getElementById('mount2');
const mount3 = document.getElementById('mount3');

window.addEventListener("scroll", function(e){

    // console.log("scrolling...");

    const scrolValue = window.scrollY;
    console.log(scrolValue);

    text.style.marginTop = scrolValue*2.5 + "px";

    const moonWidth = Math.max(0,100-scrolValue/3);
    moon.style.width = moonWidth + "%"; 
    moon.style.transform = `rotate(${scrolValue/3}deg)`; 

    mount1.style.marginLeft = scrolValue*-1 + "px";
    mount2.style.marginTop = scrolValue*0.5 + "px";
    mount3.style.marginLeft = scrolValue*1 + "px";
    
})