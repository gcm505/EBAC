function calcularIMC(){

 //Entrada de dados
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    let indice = "";
//Processamento
    let imc = peso / (altura * altura);
    if (imc < 18.4){
        indice = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9){
        indice = "Normal";
    } else if (imc >= 25 && imc <= 29.9){
        indice = "Sobrepeso";
    } else if (imc >= 30 && imc <= 39.9){
        indice = "Obesidade";
    } else {
        indice = "Obesidade Severa";
    }
//Saida
    document.getElementById("resultado").textContent = "IMC: " + imc.toFixed(2);
    document.getElementById("indice").textContent = "Indice: " + indice;

}