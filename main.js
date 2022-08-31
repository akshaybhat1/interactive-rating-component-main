const finalRate=document.querySelector('#final-rate');
const userRating=document.querySelector('.rating');
let finalRating=undefined;
userRating.addEventListener('click',(e)=>{
    const target=e.target;
    if(target.matches('button')){
        target.style.backgroundColor='hsl(217, 12%, 63%)';
        target.style.color='white';
        finalRating=target.innerText;
        changeRate(finalRating);
    }
},{once:true})


const myContainer=document.querySelector('.card');
const wrapper=document.querySelector('.wrapper');
wrapper.setAttribute('class','noshow');

const submitBtn=document.querySelector('#submitButton');

submitBtn.addEventListener('click',(e)=>{
    const target=e.target;
    if (target.matches('button')){
        myContainer.setAttribute('class','noshow');
        wrapper.classList.remove('noshow');
    } 
})

const changeRate=(finalRating)=>{
    finalRate.innerText=finalRating;
}
