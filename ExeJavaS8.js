let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

//Exercicio 1
//percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

//for (let index = 0; index < numbers.length; index++) {
//    console.log(numbers[index]);   
//}

//Exercicio 2
//some todos os valores contidos no array e imprima o resultado;

/*let count = 0;
for (let index = 0; index < numbers.length; index++) {
    count = count + numbers[index];    
}

console.log(count);*/

//Exercicio 3
//calcule e imprima a média aritmética dos valores contidos no array;

/*let count = 0;
for (let index = 0; index < numbers.length; index++) {
    count = count + numbers[index];    
}
    count = count/numbers.length;
    console.log(count);*/

//Exercicio 4
//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: 
//"valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";    

    /*let count = 0;
    for (let index = 0; index < numbers.length; index++) {
        count = count + numbers[index];    
    }
    if(count/numbers.length > 20){
     console.log("Valor maior que 20");   
    }else{ 
        console.log("Valor menor ou igual a 20");
    }*/

//Exercicio 5
//Utilizando for , descubra qual o maior valor contido no array e imprima-o;
/*let maiorNumero = 0;
    for (let index = 0; index < numbers.length; index++) {
    
    if(index === 0){ 
    maiorNumero = numbers[index];
    } 
    
    if(numbers[index] > maiorNumero  ){
      maiorNumero = numbers[index];
    }     
} 
    console.log("Maior numero da lista");
     console.log(maiorNumero);
*/    

//Exercicio 6
// descubra qual o menor valor contido no array e imprima-o;
let menorNumero = 0;
    for (let index = 0; index < numbers.length; index++) {
    
    if(index === 0){ 
    menorNumero = numbers[index];
    } 
    
    if(numbers[index] < menorNumero  ){
      menorNumero = numbers[index];
    }     
} 
    console.log("Menor numero da lista");
     console.log(menorNumero);
   
//Exercicio 7
//


