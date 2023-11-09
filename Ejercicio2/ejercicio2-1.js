function suma (a,b,callback){
    let c = a +b;
    callback();
    }

// El tercer parametro es una funcion callback,
// que se pasa como argumento para que se ejecute después de realizar la suma


//son obligatorias en los casos en los que se necesita realizar alguna acción
//después de que una función haya completado su ejecución.

const imprimir = () => console.log("La suma se ha realizado correctamente")


suma(12, 4, imprimir)