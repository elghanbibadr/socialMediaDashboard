const toggler=document.querySelector('.nav__toggle');
toggler.addEventListener('click',()=>{
    toggler.classList.toggle('moveCircle');
    document.body.classList.toggle('bgToWhite');
    document.querySelectorAll('h1').forEach(heading=>heading.classList.toggle('changingHeadingColor'));
    document.querySelectorAll('.card').forEach(otem=>otem.classList.toggle('cards'));
});