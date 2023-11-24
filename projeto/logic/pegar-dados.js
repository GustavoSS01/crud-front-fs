function getDados(){
  dados = JSON.parse(localStorage.getItem('pessoas')) || [] 
  return dados 
}