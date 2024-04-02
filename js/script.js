// Selecionando os elementos
const previousOperationText = document.querySelector("#previous-operation");
const currentOperationText = document.querySelector("#current-operation");
const buttons = document.querySelectorAll("#buttons-container button");

// Classe calculadora
class Calculator {
  constructor(previousOperationText, currentOperationText) {
    this.previousOperationText = previousOperationText;
    this.currentOperationText = currentOperationText;
    this.currentOperation = "";
  }


  // Declaração de metodos

  // adicionar o valor digitado (digit) para o calculator screen
  addDigit(digit) {
    // Verificar se a operação atual tem um ponto
    if (digit === "." && this.currentOperationText.innerText.includes(".")) {
     return;
    }
    this.currentOperation = digit;
    this.updateScreen();
  }

  // Metodo para executar todas as operações da calculadora
  processOperation(operation) {

    // Aqui foi pego os dois valores e passado para conversão numérica
    let operationValue;
    const previous = +this.previousOperationText.innerText;
    const current = +this.currentOperationText.innerText;


    switch (operation) {

      case "+":
        operation = previous + current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      default:
        return;

    }



  }


  // Troca os valores do calculator screen
  updateScreen(operation = null, 
              operationValue = null, 
              current = null, 
              previous = null
  )  {
    console.log(operationValue, operation, current, previous)
    if(operationValue === null){
    // Numeros que a gente digite aparece no layout
    this.currentOperationText.innerText += this.currentOperation;
  }
    else{
      // Check se o valor é zero
      if(previous === 0){
        operationValue = current;
      }
      // Joga o resultado da operação(current value) para cima(previous)
      this.previousOperationText.innerText = `${operationValue} ${operation}`
      this.currentOperationText.innerText = "";
    }
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
    if (+value >= 0 || value === ".") {
      calc.addDigit(value);
    } else {
      // Se não conseguir fazer a conversão para numero, significa que é uma operação
      calc.processOperation(value);
    }



  });
});