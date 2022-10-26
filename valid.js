function validarForm() {
    if (document.formulario.nombre.value.length == 0) {
        alert("Tiene que escribir su nombre")
        document.formulario.nombre.focus()
        return 0;
    }

    if (document.formulario.apellido.value.length == 0) {
        alert("Tiene que escribir su apellido")
        document.formulario.apellido.focus()
        return 0;
    }


    if (formulario.genero[0].checked == true || 
        formulario.genero[1].checked == true|| 
        formulario.genero[2].checked == true){
    } else{
        alert("Tiene que completar el campo genero");
        return 0;
    }


    if (document.formulario.mail.value.length == 0) {
        alert("Tiene que escribir su email")
        document.formulario.mail.focus()
        return 0;
    }

    var fecha = document.getElementById('fecha').value
    if (fecha === "") {
        alert("Tiene que selecciona una fecha de nacimiento")
        document.formulario.fecha.focus()
    }


    if (document.formulario.estudios.selectedIndex == 0) {
        alert("Tiene que selecciona un nivel de estudios")
        document.formulario.estudios.focus()
        return 0;
    }

    alert("Muchas gracias por enviar el formulario");
    document.formulario.submit();
}