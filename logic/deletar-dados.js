function deletar(id){ // função deletar que pega o Id a ser deletado
  pessoas = getDados() // chamado da função getDados e retornando os dados do local storage
  pessoas.splice(id,1) // remove do array pessoa que foi trazido do array e o id do item a ser deletado
  localStorage.setItem("pessoas", JSON.stringify(pessoas)) // salva no localstorage
  monteTabela() // monta a tabela
}