let hamburger = document.getElementById('hamburger');
let closeOp = document.getElementById('close-op');
let navbarLinks = document.querySelectorAll('.link');
let navContainer = document.querySelector('.container-links');
console.log(navContainer)

closeOp.style.display = 'none';

hamburger.addEventListener('click', ()=>{
    hamburger.style.display = 'none';
    for (let i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].style.display = 'block';
       // navContainer.style.backgroundColor = "#BADA55";
        //navContainer.style.transform = `translateY(200px)`
       // navbarLinks[i].style.backgroundColor = "#BADA55";
    }
    closeOp.style.display = 'block';
});

closeOp.addEventListener('click', ()=>{
    hamburger.style.display = 'block';
    for (let i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].style.display = 'none';
    }
    closeOp.style.display = 'none';
})

