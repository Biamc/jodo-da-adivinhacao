//variables
const h2Text = document.querySelector('.screen-2 h2')
const buttonTry = document.querySelector('#button-try')
const buttonReset = document.querySelector('#button-reset')
const screen1 = document.querySelector('.screen-1')
const screen2 = document.querySelector('.screen-2')
let attempts = 1
let numberChosen = Math.round(Math.random() * 10)
  console.log(numberChosen)


  //events
buttonTry.addEventListener('click', handelTryClick)
buttonReset.addEventListener('click', handelResetClick)
document.addEventListener('keypress', reset)

//functions
function handelTryClick (event) {

  event.preventDefault() // não faça o o padrão desse evento

  let inputValue = document.querySelector('input').value
  
  if (numberChosen == Number(inputValue)){
  toggleScreen()
  h2Text.innerHTML = `<h2>Acertou em ${attempts} tentativas</h2>`
  } else if (Number(inputValue) < 0 || Number(inputValue) > 10) {
    alert('Digite un número entre 0 e 10')
  } else if (inputValue.length == "" || !(Number(inputValue))){
    alert('Erro. Digite um número válido')
  }

  document.querySelector('input').value = ""
  attempts++
}

function handelResetClick (){
  toggleScreen()
  numberChosen = Math.round(Math.random() * 10)
  attempts = 1
}

function toggleScreen () {
  screen1.classList.toggle('hide')
  screen2.classList.toggle('hide')
} // o .togglr faz com que a classe se nao tiver seja adicionada, e no caso dela ter ela é removida

function reset (e) {
  if (e.key == 'Enter' && screen1.classList.contains('hide')) {
    handelResetClick()
  }
  
}

/*
O preventDefaul será usado para evitar que o submit realize o evento de submeter o form e recarregar a página, o que o Mayk fala é que se eu soltar um botão dentro de um form, ele por padrão será o submit, pois todo form deve ter um, mas com isso que ele fez
<input type="button" value"Cancelar" />
ele traz o botão apenas como botão, podendo ser utilizado para outras funções além de submeter.
o type="button" não pode descartar o event.preventDefault(e), pois servem para duas coisas diferente, o preventDefaul não é para cancelar o submit, mas para permitir que o submit seja configurado da forma que eu quiser, por exemplo quando trabalhamos SPA, que não queremos que a página seja recarregada, como aconteceria no padrão.
*/