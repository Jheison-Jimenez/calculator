const add = (valor) => {
  document.getElementById('screem').value += valor
}

const deleateValue = () => {
  document.getElementById('screem').value = ''
}

const calculateValue = () => {
  const screemValue = document.getElementById('screem').value
  try {
    const resultado = eval(screemValue)
    document.getElementById('screem').value = resultado
  }
  catch (error) {
    document.getElementById('screem').value = 'error'
  }
}