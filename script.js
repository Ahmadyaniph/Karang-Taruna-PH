const navbar = document.getElementsByTagName('nav')[0];
window.addEventListener('scroll', function() {
    console.log(window.scrollY);
    if (window.scrollY>1){
        navbar.classList.replace('fixed-top','position-static');
    }
});