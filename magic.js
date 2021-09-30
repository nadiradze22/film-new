var nav  = document.querySelector('nav');
var  scrollUp = document.querySelector('.scroll-up-arrow');

window.addEventListener('scroll', function(){
    var scrolled = this.scrollY;
    if(scrolled > 110){
        nav.style.height = '100px'
        nav.style.background = 'rgba(78, 62, 62, 0.8)'
        scrollUp.style.opacity = '1'
        scrollUp.style.top = '65%'
    }else{
        nav.style.height = '80px'
        nav.style.background = 'black'
        scrollUp.style.opacity = '0'
        scrollUp.style.top = '0%'
    }
});

scrollUp.addEventListener('click', ()=>  {
      window.scrollTo(0, 0)
})