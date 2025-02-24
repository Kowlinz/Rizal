const activePage = window.location.pathname;
const collection = document.getElementsByClassName("example");
const navLinks = document.querySelectorAll('nav ul li a').forEach(link => {

if(link.href.includes(`${activePage}`)){
    console.log(`${activePage}`);
    link.classList.add('active');
}
});

const loader = document.querySelectorAll(".placeholder");

window.setTimeout(removePlaceholder, 4000);

function removePlaceholder(){
    loader.forEach((element) =>{
        element.style.display = "none";
    })
}