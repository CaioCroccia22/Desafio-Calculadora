document.getElementById('calcular').addEventListener('click', function() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);
    const operacao = document.getElementById('operacao').value;
  
    let resultado;
  
    if (operacao === 'somar') {
      resultado = num1 + num2;
    } else if (operacao === 'subtrair') {
      resultado = num1 - num2;
    } else if (operacao === 'multiplicar') {
      resultado = num1 * num2;
    } else if (operacao === 'dividir' && num2 !== 0) {
      resultado = num1 / num2;
    } else {
      resultado = 'Erro';
    }
  
    document.getElementById('resultado').textContent = resultado;
  });