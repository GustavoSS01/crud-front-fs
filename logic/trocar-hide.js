function troca(){
  $('#loader').show()
  $('#table-content').hide()
  setTimeout(()=>{
    $('#loader').hide()
    $('#form-content').show()
  }, 500)
}
function destroca(){
  $('#loader').show()
  $('#form-content').hide()
  setTimeout(()=>{
    $('#loader').hide()
    $('#table-content').show()
  },500)
}


