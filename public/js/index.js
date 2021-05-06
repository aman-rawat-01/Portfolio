/*Show and hide menu*/
const navMenu = document.getElementById('nav-menu'),
    toggleMenu = document.getElementById('nav-toggle'),
    closeMenu = document.getElementById('nav-close');

/* Show */

toggleMenu.addEventListener('click', ()=>{
    navMenu.classList.toggle('show');
});

// HIDDEN

closeMenu.addEventListener('click', ()=>{
    navMenu.classList.remove('show');
});


/*Activate and Remove menu*/


//REMOVING CLASS 'SHOW' USING FOREACH lOOP

const navLink = document.querySelectorAll('.nav__link');


navLink.forEach( n => n.addEventListener('click', ()=>{
    
        navMenu.classList.remove('show');
    
}));

//REMOVING CLASS 'SHOW' USING FOR LOOP
/*
const navLink = document.querySelectorAll('.nav__link').length;
for(var i=0; i<navLink; i++)
{
    document.querySelectorAll('.nav__link')[i].addEventListener('click', ()=>{
        navMenu.classList.remove('show');
    });
}
*/



/*Add and Remove Active class on scroll and click*/


const sections = document.querySelectorAll("section[id]")

window.addEventListener("scroll", scrollActive)
 
    function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight //current section or nav-item
        const sectionTop = current.offsetTop - 50
        let sectionId = current.getAttribute("id")

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){  // "<=" : less than equal to

            document.querySelector(".nav__menu a[href*="+ sectionId +"]").classList.add("active")
        }
        else{
            document.querySelector(".nav__menu a[href*="+ sectionId +"]").classList.remove("active")
        }
    })
}


