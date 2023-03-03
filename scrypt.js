function abrirmenu(){
    let BarraMenuAberto = document.getElementById ('barraMenu')
    
    if (BarraMenuAberto.style.width == '0px'){
        BarraMenuAberto.style.width = '180px';
    }
    else {BarraMenuAberto.style.width = '0px';
    };
}