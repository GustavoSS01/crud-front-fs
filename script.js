$(document).ready(function(){
    	const forms = $('.needs-validation')

      $('#table-content').show()
      $('#form-content').hide()
      

		// Loop over them and prevent submission
		Array.from(forms).forEach(form => {
			form.addEventListener('submit', event => {
				event.preventDefault()
				if (!form.checkValidity()) {
					event.preventDefault()
					event.stopPropagation()
				}

				form.classList.add('was-validated')
			}, false)
		})
	});
