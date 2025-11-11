function fnconsersao(){

    let real = document.getElementById("valor").value
    let dolar = 5.29
    let euro = 6.11

    let resultadoDolar = real * dolar
    let resultadoEuro = real * euro

    document.getElementById("valorConvertido").innerText = "Dolár = R$ " + resultadoDolar
    document.getElementById("valorConvertidoU").innerText = "Euro = R$ " + resultadoEuro
}

