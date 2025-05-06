//sorteador de funções para quando tiver 15 pessoas na sala

var btn = document.querySelector("#mostrar_tabela");
var tabela = document.querySelector("#tabelas");
var texto_vazio = document.querySelector("#texto_default");

btn.addEventListener('click', function() {
    if(texto_vazio.style.display === "block"){
        texto_vazio.style.display = "none";
        tabela.style.display = "flex";
    } else {
        texto_vazio.style.display = "block";
    }
});

var funcoes = ["Limpar a mesa do instrutor", "Varrer a sala", "Varrer a sala", "Limpar os armários", "Limpar os armários", "Limpar Rodapé",
"Limpar Rodapé","Limpar a TV", "Limpar os lockers", "Limpar os lockers", "Fiscal", "Verificar etiquetas", "Verificar etiquetas", "Organizar os Fios", "Organizar as cadeiras"];

variavel = document.querySelectorAll('#sortear_tabela')

function misturar(array){
    var m = array.length, t, i;
    while (m){
        i = Math.floor(Math.random() * m--);

        t = array[m];
        array[m] = array[i];
        array[i] = t;
    }
    return array;
}

funcoes_misturado = misturar(funcoes)

var cont = 0

document.querySelectorAll('#sortear_tabela').forEach(element => {
    let funcao = funcoes_misturado[cont]
    element.textContent = funcao;
    cont ++
});
