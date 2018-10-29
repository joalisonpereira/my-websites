var navbar=document.querySelector(".nav-all");
window.addEventListener("scroll", function(){
    if(window.scrollY>200){
    	navbar.classList.add('navbar-dark');
    }else{
    	navbar.classList.remove('navbar-dark');
    }
});
