// Selecionando os elementos
const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

// Classe calculadora
class Calculator {
  constructor(previousOperationText, currentOperationText){
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;
    this.currentOperation = ""
  }


  // Declaração de metodos

  // adicionar o valor digitado (digit) para o calculator screen
  addDigit(digit){
    this.currentOperation = digit
    this.updateScreen()
  }



  // Troca os valores do calculator screen
  updateScreen(){
    
  }

}

// Criação do objeto calc, instância da classse calculator
const calc = new Calculator(previousOperationText, currentOperationText);

// 1 ) Ativar os botões

// Clique dos botões 
buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;
    // console.log(value); -> teste do click nos numeros
    // Operador + converte o valor que eu recebeer em numero
    if(+value >= 0 || value === "." ){
      calc.addDigit(value);
    }else{
      // Se não conseguir fazer a conversão para numero, significa que é uma operação
      console.log("Op: " + value);
    }



  });
});