function calc1() {/*Função 1 adição*/
    var valor1 = document.querySelector('#input1').value;/*Armazenar valor de input 1*/
    var valor2 = document.querySelector('#input2').value;/*Armazenar valor de input 2*/
    var result1 = parseFloat(valor1) + parseFloat(valor2);/*Função em si*/
    document.querySelector('.result').innerHTML = 'Resultado: ' + result1;/*Imprimir resultado para user*/
}