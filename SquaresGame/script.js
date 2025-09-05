let b1=document.getElementById("box1");
b1.addEventListener("mouseenter",function(){
    let r=Math.floor(Math.random()*100)
     b1.innerHTML=`<h1>${r}</h1>`;
})
b1.addEventListener("mouseleave",function(){
    b1.innerHTML=`<h1>1</h1>`;
})
let b2=document.getElementById("box2");
b2.addEventListener("mouseenter",function(){
    let r1=Math.floor(Math.random()*257);
    let r2=Math.floor(Math.random()*257);
    let r3=Math.floor(Math.random()*257);
    b2.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
})
b2.addEventListener("mouseleave",function(){
    b2.style.backgroundColor="white";
})
let b3=document.getElementById("box3");
b3.addEventListener("mouseenter",function(){
    let r1=Math.floor(Math.random()*257);
    let r2=Math.floor(Math.random()*257);
    let r3=Math.floor(Math.random()*257);
    b3.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
})
b3.addEventListener("mouseleave",function(){
    b3.style.backgroundColor="white";
})
let b4=document.getElementById("box4");
b4.addEventListener("mouseenter",function(){
    let r1=Math.floor(Math.random()*257);
    let r2=Math.floor(Math.random()*257);
    let r3=Math.floor(Math.random()*257);
    b1.style.backgroundColor=`rgb(${r1},${r2},${r3})`;
    b2.style.backgroundColor=`rgb(${r2},${r1},${r3})`;
    b3.style.backgroundColor=`rgb(${r3},${r2},${r1})`;
})
b4.addEventListener("mouseleave",function(){
    b1.style.backgroundColor="white";
    b2.style.backgroundColor="white";
    b3.style.backgroundColor="white";
})