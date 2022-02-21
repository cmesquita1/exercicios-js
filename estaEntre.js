function estaEntre(numero, minimo, maximo, inclusivo=false) {
    if(inclusivo==true && numero == minimo || numero == maximo) {
        return true; 
    }
    else if(inclusivo==false && numero == minimo || numero == maximo) {
        return false;   
    }
    else if(inclusivo==false && numero > minimo && numero < maximo) {
        return true;
    } 
    else return false;
}