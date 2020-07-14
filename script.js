let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const calculatorScreen = document.querySelector('.calculator-screen')

const updateScreen = (number) => {
  calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equalSign = document.querySelector(".equal-sign")
const percentBtn = document.querySelector(".percentage")

const inputNumber = (number) => {
  if (currentNumber === '0'){
    currentNumber=number
  } else {
    currentNumber+=number
  }
}
const inputOperator = (operator) => {
  if (calculationOperator === '') {
    prevNumber = currentNumber
  }
  calculationOperator = operator
  currentNumber= ''
}
const calculate = () => {
  let result = ''
  switch (calculationOperator){
    case '+' :
      result = parseFloat(prevNumber) + parseFloat(currentNumber)
      break
    case '-' :
      result = parseFloat(prevNumber) - parseFloat(currentNumber)
      break;
    case '/' :
      result = parseFloat(prevNumber) / parseFloat(currentNumber)
      break;
    case '*' :
      result = parseFloat(prevNumber) * parseFloat(currentNumber)
      break;
    case '%' :
      result = (parseFloat(prevNumber) / parseFloat(currentNumber)) * 100
      break;
    default:
      return
  }
  currentNumber = result
  calculationOperator = ''
}
const clearBtn = document.querySelector(".all-clear")
const clearAll = () => {
  prevNumber = ''
  calculationOperator = ''
  currentNumber = '0'
}


const decimal = document.querySelector('.decimal')
inputDecimal = (dot) => {
  if (currentNumber.includes('.')) {
    return
  }
  currentNumber += dot
}
decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value)
  updateScreen(currentNumber)
})


clearBtn.addEventListener ('click', () => {
  clearAll()
  updateScreen(currentNumber)
})

numbers.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value)
    updateScreen(currentNumber)
  })
})

operators.forEach((operator) => {
  operator.addEventListener("click",(event) => {
    inputOperator(event.target.value)
  })
})
percentBtn.addEventListener('click', (event) => {
  inputOperator(event.target.value)
})
equalSign.addEventListener('click',() => {
  calculate()
  updateScreen(currentNumber)
})
