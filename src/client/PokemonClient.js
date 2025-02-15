function obtenerAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

const obtenerArregloNumerico = () => {
    const arreglo = [];
    for (let i = 0; i < 4; i++) {
        arreglo.push(obtenerAleatorio(1, 600));
    }
    return arreglo;
}

const obtenerArregloPokemons = async (arreglo) => {
    const nom1 = await consumirApi(arreglo[0]);
    const nom2 = await consumirApi(arreglo[1]);
    const nom3 = await consumirApi(arreglo[2]);
    const nom4 = await consumirApi(arreglo[3]);

    const obj1 = {
        nombre: nom1,
        id: arreglo[0]
    };
    const obj2 = {
        nombre: nom2,
        id: arreglo[1]
    };
    const obj3 = {
        nombre: nom3,
        id: arreglo[2]
    };
    const obj4 = {
        nombre: nom4,
        id: arreglo[3]
    };

    return [obj1, obj2, obj3, obj4];
}

const consumirApi = async (id) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await response.json();
    return data.name;
}

const consultarPokemos= async()=>{
    return await obtenerArregloPokemons(obtenerArregloNumerico())
}
// metodo fachada
export const consultarPokemosFachada = async() =>{
    return await consultarPokemos();//llamamos a la funcion interna 
}

export function obtenerAleatorioFachada(min,max){
    return obtenerAleatorio(min,max);
}

//Esto se usa solo para cuando quiero expontar un a sola funcion
//export default consultarPokemosFachada; //exportamos la funcion fachada

