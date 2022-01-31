window.addEventListener("scroll", ()=>{
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 0);
})
const ham = document.querySelector('.ham');
const links = document.querySelector('.link-conteiner');
const barras = document.querySelectorAll('.ham span');
const as = document.querySelectorAll('.links');
const body = document.querySelector('.body-mostrado');



for (i = 0; i< as.length ; i++){
    as[i].addEventListener('click', () => {
    links.classList.toggle('activado');
    body.classList.toggle('body-oculto');
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
    });
}
ham.addEventListener('click', () => {
    links.classList.toggle('activado');
    body.classList.toggle('body-oculto');
    barras.forEach(child => {child.classList.toggle('animado')});
    ham.classList.toggle('girar');
});
