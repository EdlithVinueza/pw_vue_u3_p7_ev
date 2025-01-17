function obtenerAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const obtenerArregloNumerico = (n = 4, max = 600) => {
    const arreglo = [];
    for (i = 0; i < n; i++) {
        arreglo.push(obtenerAleatorio(1, max));
    }
    return arreglo;
}

const obtenerArregloPokemons=(arreglo)=>{
    const arregloPokemos=[]; //arreglo de objetos
    const obj1={
       
    }
    const obj2={
       
    }
    const obj3={
       
    }
    const obj4={
       
    }
    arregloPokemos[0]=obj1;
    arregloPokemos[1]=obj2;
    arregloPokemos[2]=obj3;
    arregloPokemos[3]=obj4;

     
}

