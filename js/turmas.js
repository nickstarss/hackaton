document.addEventListener("DOMContentLoaded", function () {
    var turmaSelect = document.getElementById("turma");
    var aprendizSelect = document.getElementById("aprendiz");
    var aprendizOptions = aprendizSelect.getElementsByTagName("option");
//Lista de aprendizes
    var turmaAprendizMap = {
        "Selecione uma opção": [],
        "DS8": ["Ana Mária", "Aprendiz 1", "Aprendiz 2"],
        "DS9": ["Juliana J.", "Marcela","Giuliana"],
        "DS10": ["Juliana V.", "Emanuelle","Letícia"]
    };
    turmaSelect.addEventListener("change", function () {
        var turmaSelecionada = turmaSelect.value;
        var aprendizesTurma = turmaAprendizMap[turmaSelecionada] || [];
        for (var i = 0; i < aprendizOptions.length; i++) {
            var option = aprendizOptions[i];
            option.style.display = aprendizesTurma.includes(option.value) ? "block" : "none";
        }
    });
});