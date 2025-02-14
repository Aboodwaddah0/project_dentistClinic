const form =document.querySelector('.left-side');
const signUpBtn=document.querySelector('.creat-btn');
const form2 =document.querySelector('.right-side');
const form3 =document.querySelector('.f');


signUpBtn.addEventListener('click',()=>{
    form3.classList.toggle('active');
    form.classList.toggle('toggle-right');
    form2.classList.toggle('toggle-left');
    form.classList.toggle('not-active');
})



