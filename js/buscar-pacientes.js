var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "//api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {
        var erroAjax = document.querySelector("#erro-ajax");

        if (xhr.status == 200){
            erroAjax.classList.add("invisivel");
            var resposta = xhr.responseText;
            console.log(resposta);
            //transforma a string em array
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(function (paciente) {
            adicionarPacienteNaTabela(paciente);
        });
    }else{
        console.log(xhr.status);
        console.log(xhr.responseText);
        erroAjax.classList.remove("invisivel");
    }
        // console.log(typeof  resposta);

       // console.log(xhr.responseText);
    });

    xhr.send();
});