let claro = document.getElementById('Sun');
let oscuro = document.getElementById('moon');
let nav = document.querySelector('.navegacion');
let Contenido = document.getElementById('body');
let footer = document.querySelector('.Footer')

oscuro.addEventListener('click',()=>{
    nav.style.background='#182747'
    Contenido.style.background='#404258'
        footer.style.background='#182747'

})

claro.addEventListener('click',()=>{
    nav.style.background='#041C32'
    Contenido.style.background='steelblue'
    footer.style.background='#041C32'

})