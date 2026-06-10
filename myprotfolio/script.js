// Mobile Menu

const menuBtn =
document.getElementById("menuBtn");

const navLinks =
document.getElementById("navLinks");

menuBtn.addEventListener("click",()=>{

navLinks.classList.toggle("active");

});

// Scroll Reveal Animation

const sections =
document.querySelectorAll("section");

function revealSections(){

sections.forEach(section=>{

const top =
section.getBoundingClientRect().top;

const trigger =
window.innerHeight - 100;

if(top < trigger){

section.classList.add("show");

}

});

}

window.addEventListener(
"scroll",
revealSections
);

revealSections();

// Contact Form

document
.getElementById("contactForm")
.addEventListener("submit",function(e){

e.preventDefault();

alert(
"Thank you! Your message has been sent."
);

this.reset();

});

// Navbar Shadow

window.addEventListener("scroll",()=>{

const header =
document.querySelector("header");

if(window.scrollY > 50){

header.style.boxShadow =
"0 4px 10px rgba(0,0,0,.2)";

}
else{

header.style.boxShadow =
"none";

}

});