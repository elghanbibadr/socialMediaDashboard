const toggler=document.querySelector('.nav__toggle');
toggler.addEventListener('click',()=>{
    toggler.classList.toggle('moveCircle');
    document.body.classList.toggle('bgToWhite');
    document.querySelectorAll('h1').forEach(heading=>heading.classList.toggle('changingHeadingColor'));
    document.querySelectorAll('h2').forEach(heading=>heading.classList.toggle('changingHeadingColor'));
    document.querySelectorAll('.items').forEach(otem=>otem.classList.toggle('magic'));
    console.log( document.querySelectorAll('.items'))
});