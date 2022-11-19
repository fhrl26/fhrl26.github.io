
window.onscroll = function() {myFunction()};
function myFunction() {
    // Change style of navbar on scroll
    const nav = document.querySelector('nav');
    const navbar = document.querySelector(".nav-utama");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        nav.style.animation = 'slideNavbar .5s';
        navbar.classList.add('style');
    } else {
        nav.style.display ='block';
        navbar.classList.remove('style');
        nav.style.animation = 'none';
    }


    // My skill parallax
    const about = document.querySelector('.container-about');
    const mySkill = document.querySelectorAll('.bg-static');
    const top = about.offsetTop;
    const span = document.querySelectorAll('.bg-static span');
    if (document.body.scrollTop > top - 50 || document.documentElement.scrollTop > top - 50) {    
        mySkill.forEach(function(e){
            setTimeout(function(){
                e.classList.add('slide');
            }, 50);
        });
 
        span.forEach(function(e, i){ 
        setTimeout(function(){     
            e.style.animation = 'slidePersentase'+ i + ' 2s forwards';

        }, 200 * i);

        });
    }



    // Portfolio Parallax
    const portfolio = document.querySelector('.portfolio');
    const portfolioTop = portfolio.offsetTop;
    const thumbnails = document.querySelectorAll('.thumbnail');
    if (document.body.scrollTop > portfolioTop -400|| document.documentElement.scrollTop > portfolioTop - 400) {
       thumbnails.forEach(function(e, i){
        setTimeout(function(){
            e.classList.add('muncul');
        }, 500 * i);
       });
    }

}


// Modal 
const thumbnails = document.querySelectorAll('.thumbnail');
const close = document.querySelector('.modal i');
const img = document.getElementById('img1');
let p = document.getElementById('caption');
const modal = document.querySelector('.modal');
const container = document.querySelector('.img-portfolio');

// Show the modal, image, and caption
container.addEventListener('click', function(e){
    if ( e.target.alt == 'The mist over the mountains' ) {
        modal.style.display = 'block';
        img.style.animation = 'zoomFade 1s'
        img.src = e.target.src;
        p.innerHTML = e.target.alt;
    } 
    
    else if ( e.target.alt == 'Coffee beans' ) {
        modal.style.display = 'block';
        img.style.animation = 'zoomFade 1s'
        img.src = e.target.src;
        p.innerHTML = e.target.alt;
    } 
    
    else if ( e.target.alt == 'Bear closeup' ) {
        modal.style.display = 'block';
        img.style.animation = 'zoomFade 1s'
        img.src = e.target.src;
        p.innerHTML = e.target.alt; 
    }

    else if ( e.target.alt == 'Quiet ocean' ) {
        modal.style.display = 'block';
        img.style.animation = 'zoomFade 1s'
        img.src = e.target.src;
        p.innerHTML = e.target.alt;
    }

    else if ( e.target.alt == 'The mist' ) {
        modal.style.display = 'block';
        img.style.animation = 'zoomFade 1s'
        img.src = e.target.src;
        p.innerHTML = e.target.alt;
    }

    else if ( e.target.alt == 'My beloved typewriter' ) {
        modal.style.display = 'block';
        img.style.animation = 'zoomFade 1s'
        img.src = e.target.src;
        p.innerHTML = e.target.alt;
    }

    else if ( e.target.alt == 'Empty ghost train' ) {
        modal.style.display = 'block';
        img.style.animation = 'zoomFade 1s'
        img.src = e.target.src;
        p.innerHTML = e.target.alt;
    }

    else if ( e.target.alt == 'Sailing' ) {
        modal.style.display = 'block';
        img.style.animation = 'zoomFade 1s'
        img.src = e.target.src;
        p.innerHTML = e.target.alt;
    }
});


// Close Modal 
close.addEventListener('click', function(){
    modal.style.display = 'none';
});



// Navbar On Small Screen 
// Toggle Navbar
const bars = document.querySelector('.fa-bars');
const listBar = document.querySelector('.menu');
bars.addEventListener('click',function(){
    listBar.classList.toggle('muncul');
});

// Hide List Menu 
const list = document.querySelectorAll('.menu li');
const logo = document.querySelector('.logo');
logo.addEventListener('click', function(){
    listBar.classList.remove('muncul');
})
list.forEach(function(e){
    e.addEventListener('click', function(){
        listBar.classList.remove('muncul');
    });
});
