function editar(id){
  pessoas = getDados()

  $('#salvar-btn').text("Editar") // muda o valor do botao "salvar" para "editar"

  $("#index").val(id) // adicionar ao input oculto o valor do id (JQUERY)
  nome = $("#name").val(pessoas[id].nome)
  peso = $("#weigth").val(pessoas[id].peso) 
	idade = $("#age").val(pessoas[id].idade)
  troca()
}