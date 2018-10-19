
const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

var cont = 1;
var bitacoras = [];
var formulario = document.getElementById("bitacora");
//el formulario tiene una etiqueta form un fieldset 3 div y un input dentro de cada div hay label and input

formulario.addEventListener("submit",(evt)=>{
    evt.preventDefault();
    //preventDefault cancela el evento temporalmente sin envargo podemos volver a llamarlo

});

formulario.addEventListener("submit", (evt) => {
    evt.preventDefault(); 
    let bitacora = { 
    cant:cont, 
    fecha: formulario[1].value, 
    descripcion: formulario[2].value, 
    cantidad: formulario[3].value 
    //formulario en la posicion 1 contienen el valor de la feha
    //formulario en la posicion 2 contiene lo que el usuario describa en el textArea
    //formulario en la posicion 3 contiene la cantidad
  } 
 }); 
 