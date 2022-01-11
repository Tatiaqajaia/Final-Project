let navigation=document.getElementById('navigation')
let burgerbutton=document.getElementById('burgerbar')

burgerbutton.addEventListener('click',function(){
    navigation.classList.toggle('active');
})

document.getElementById('send-btn').addEventListener('click',function(){
    alert('Thank You!')
})

// smooth scroll
var scroll = new SmoothScroll('a[href*="#"]');