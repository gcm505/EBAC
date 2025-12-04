function calcularDesconto(){

 //Entrada de dados
    let valorOriginal = document.getElementById("valor").value;
    let desconto = document.getElementById("desconto").value;

//Processamento
    let valoDesconto = (valorOriginal * desconto) / 100;
    let valorFinal = valorOriginal - valoDesconto;

//Saida
    document.getElementById("resultado").textContent = "Valor final: " + valorFinal;

}


