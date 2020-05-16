var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "//api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function () {
        var resposta = xhr.responseText;
        console.log(resposta);
        //transforma a string em array
        var pacientes = JSON.parse(resposta);
        pacientes.forEach( function (paciente) {
            adicionarPacienteNaTabela(paciente);
        });
        // console.log(typeof  resposta);

       // console.log(xhr.responseText);
    });

    xhr.send();
});