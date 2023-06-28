//PRELOADER

window.onload = function(){
    var contenedor = document.getElementById('contenedor_carga')
    contenedor.style.visibility = 'hidden';
    contenedor
    .style.opacity = '0';}   

// SEARCH

document.getElementById("icon-search").addEventListener("click", mostrar_buscador);
document.getElementById("overlay").addEventListener("click", ocultar_buscador);
document.getElementById("fa-bars").addEventListener("click", mostrar_x);
document.getElementById("fa-xmark").addEventListener("click", mostrar_bars);


bars_search = document.getElementById("ctn-bars-search");
cover_ctn_search = document.getElementById("overlay");
inputSearch = document.getElementById("inputSearch");
box_search = document.getElementById("box-search");
fa_xmark = document.getElementById("fa-xmark");
fa_bars = document.getElementById("fa-bars");

function mostrar_buscador(){

    bars_search.style.top= "90px";
    overlay.style.display= "block";
    inputSearch.focus();}

function ocultar_buscador(){

    bars_search.style.top= "-10px";
    overlay.style.display= "none";
    inputSearch.value = "";
    box_search.style.display = "none";

                if (inputSearch.value === "") {
                    box_search.style.display = "none";
                };}

function mostrar_x(){

    fa_xmark.style.display= "block";
    fa_bars.style.display= "none";}

function mostrar_bars(){

    fa_xmark.style.display= "none";
    fa_bars.style.display= "block";}

    //Creando filtrado de busqueda

    document.getElementById("inputSearch").addEventListener("keyup", buscador_interno);

    function buscador_interno(){

        filter = inputSearch.value.toUpperCase();
        li = box_search.getElementsByTagName("li");

        //recorriendo elementos a filtrar mediante los "li"

        for (i = 0; i < li.length; i++){

            a = li[i].getElementsByTagName("a")[0];
            textValue = a.textContent || a.innerText;

            if(textValue.toUpperCase().indexOf(filter) > -1){

                li[i].style.display = "";
                box_search.style.display = "block";

                if (inputSearch.value === "") {
                    box_search.style.display = "none";
                };

            }else{
                li[i].style.display = "none";}}}

//SLIDER

let slider = document.querySelector(".slider-contenedor")
let sliderIndividual = document.querySelectorAll(".ctn-slider")
let contador = 1;
let width = sliderIndividual[0].clientWidth;
let intervalo = 4000;

window.addEventListener("resize", function(){

    width = sliderIndividual[0].clientWidth;

})

setInterval(function(){
    slides();
},intervalo);

function slides(){
    slider.style.transform = "translate("+(-width*contador)+"px)";
    slider.style.transition = "transform ease-in-out .7s"
    contador++;

    if(contador == sliderIndividual.length){

        setTimeout(function(){

            slider.style.transform = "translate(0px)";
            slider.style.transition = "transform 0s"
            contador=1;

        },1500)}}