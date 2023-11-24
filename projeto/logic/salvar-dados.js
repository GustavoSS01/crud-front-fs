function salvar(){
	pessoas = getDados() // pega o que tem local

	//nome = document.getElementById("name").value // pega o valor do input // vanilla js
  
  // jquery
  nome = $("#name").val() // pega o valor do input
	peso = $("#weigth").val() // pega o valor do input 
	idade = $("#age").val() // pega o valor do input 

	item = {nome, peso, idade} // criando o objeto

  status = $('#salvar-btn').text()

  if(status == "Salvar"){
    pessoas.push(item) // colocando objeto no arrau
	  
  }else{
    id = $("#index").val()
    pessoas[id] = item // substitui no arrey o item "anterior"/existente pelo novo item editado
  }
  
  if($("#name").val() != "" && $("#age").val() != "" && $("#weigth").val() != ""){
		
    localStorage.setItem("pessoas", JSON.stringify(pessoas)) // armazenando localmente
		monteTabela()
    
		$("form").trigger("reset")
		$("#salvar-btn").text("Salvar") // muda o valor do botão de Salvar para Editar

    destroca()
    
		setTimeout(()=>{
			$("form").removeClass("was-validated")
		},1)
	}
  
}
