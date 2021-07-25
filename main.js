let ubicaiconPrincipal = window.pageYOffset;
window.onscroll = function(){
    let DesplazamientoActual = window.pageYOffset;
    if(ubicaiconPrincipal >= DesplazamientoActual){
        document.getElementById('navbar').style.top ='0';
    }
    else{
        document.getElementById('navbar').style.top ='-100px';
    }
    ubicaiconPrincipal = DesplazamientoActual;
}