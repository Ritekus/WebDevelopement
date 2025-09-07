const form=document.querySelector('form');
form.addEventListener("submit",function(e){
    e.preventDefault();
const height=pareseInt(document.querySelector('#heights').value);
const weight=parseInt(document.querySelector('#weights').value);
const results=document.querySelector('#results')

if(height==='' || height<0 || isNaN(height)){
    results.innerHTML="Invalid height";
}
if(weight==='' || weight<0 || isNaN(weight)){
    results.innerHTML="Invalid weight";
}
else{
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    results.innerHTML=`<span>${bmi}</span>`;
}
});