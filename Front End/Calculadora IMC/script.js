function calcularIMC(){

 //Entrada de dados
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;

//Processamento
    let imc = peso / (altura * altura);

//Saida
    document.getElementById("resultado").textContent = "IMC: " + imc;

}
