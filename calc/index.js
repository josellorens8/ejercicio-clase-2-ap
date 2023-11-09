function operacion(id) {
    const num1 = parseInt(document.getElementById('num1').value)
    const num2 = parseInt(document.getElementById('num2').value)
    const resultado = document.getElementById('resultado')

    if (!isNaN(num1) && !isNaN(num2) && num2 !== 0) {
        switch (id) {
            case "suma":
                resultado.innerHTML = num1 + num2
                break;
            case "resta":
                resultado.innerHTML = num1 - num2
                break;

            case "division":
                resultado.innerHTML = num1 / num2
                break;

            case "multiplicacion":
                resultado.innerHTML = num1 * num2
                break;
        }
    } else { resultado.innerHTML = "Ingrese valores válidos para realizar la operación" }


}