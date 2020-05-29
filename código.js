'use strict';
window.onload = function(){
    crearSuma();
    var nodoRadioSuma = document.getElementById('suma');
    var nodoTipoOperacion = document.getElementsByName('tipoOperacion');
    var btnSiguiente = document.getElementById('botonSiguiente');
    var btnComprobar = document.getElementById('botonResultado');
    

    btnComprobar.addEventListener('click', comprobarChecked);
    
    btnSiguiente.addEventListener('click', function(){
        if(nodoRadioSuma.checked){
        crearSuma();
        } else {
        crearResta();
        }
    });

    document.addEventListener('keypress', function(codTecla){
        var foco = document.activeElement.id;
        if(codTecla.keyCode==13 & foco=='propuestaResultado'){comprobarChecked();}
        });
                                        
    nodoTipoOperacion[0].addEventListener('click', crearSuma);
    
    nodoTipoOperacion[1].addEventListener('click', crearResta);
    
    function comprobarChecked(){
        if(nodoRadioSuma.checked){
            comprobarResultado('suma');
        }else{
            comprobarResultado('resta');
        }
    }
}


function apariencia(hayError){
    if(hayError){
        document.getElementById('propuestaResultado').disabled = false;
        document.getElementById('propuestaResultado').focus();
        document.getElementById('mensaje').innerHTML = '';
        document.getElementById('propuestaResultado').value = '';
        document.getElementById('botonSiguiente').disabled = true;
    } else {
        document.getElementById('botonSiguiente').disabled = false;
        document.getElementById('botonSiguiente').focus();
        document.getElementById('propuestaResultado').disabled = true;	
    }
    
}

function crearSuma(){
    var sumando = [];
    apariencia(true);				
    sumando[0] = Math.floor(Math.random()*(9-1))+1;
    sumando[1] = Math.floor(Math.random()*(9-1))+1;
    document.getElementById('operacion').innerHTML = sumando[0] + ' + ' + sumando[1] + ' = ';
}

function crearResta(){
    var minuendo = 0;
    var sustraendo = 0;
    apariencia(true);				
    minuendo = Math.floor(Math.random()*(10-1))+1;
    sustraendo = Math.floor(Math.random()*(minuendo-1))+1;
    document.getElementById('operacion').innerHTML = minuendo + ' - ' + sustraendo + ' = ';
}


function comprobarResultado(sumaResta){
    var msgBienMal = document.getElementById('mensaje');
    var resultadoPropuesto = Number(document.getElementById('propuestaResultado').value);
    var operacionPropuesta = document.getElementById('operacion').textContent;
    if(sumaResta=='suma'){
        var resultado = Number(operacionPropuesta.slice(0,1)) + Number(operacionPropuesta.slice(4,5));
    }else{
        var resultado = Number(operacionPropuesta.slice(0,1)) - Number(operacionPropuesta.slice(4,5));
    }				
    if(resultado==resultadoPropuesto){
        msgBienMal.style.color = 'green';
        msgBienMal.innerHTML = '¡Correcto!';
        apariencia(false);				
    }else{
        msgBienMal.style.color = 'red';
        msgBienMal.innerHTML = '¡Incorrecto!';
    }
}