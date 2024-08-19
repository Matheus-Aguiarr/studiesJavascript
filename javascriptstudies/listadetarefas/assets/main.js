const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

//Função que cria meus elementos de </li>
function criaLi() {
    // Cria o elemento
    const li = document.createElement('li');
    // Retorna o elemento 
    return li;

}

// Fazendo a tarefa ser criada também com a tecla enter
inputTarefa.addEventListener('keypress', function (e) {
    // verifica se o código da tecla pressionada é enter
    if (e.code === 'Enter') {
        // cria a tarefa 
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value)
    }
})

// função para limpar o input após enviar tarefa
function limpaInput() {
    //limpa input
    inputTarefa.value = '';
    // faz o javascript colocar aquela barrinha piscante no input
    inputTarefa.focus()
}

// função que cria o botao de apagar
function criaBotaoApagar(li) {
    // dá um espaço entre o texto que ja esta la e o botao
    li.innerText += '  ';
    // cria o elemento de botao
    const botaoApagar = document.createElement('button')
    // coloca o texto dentro do botao
    botaoApagar.innerText = 'Apagar';
    // cria uma class para meu butao usando setattribute. 
    botaoApagar.setAttribute('class', 'apagar')
    li.appendChild(botaoApagar);
}

//Função que cria minhas tarefas 
function criaTarefa(textoInput) {
    const li = criaLi();
    // Faz com que o texto do input seja colocado dentro do html.
    li.innerText = textoInput;
    // coloca a minha Li criada, como uma "child" da minha <ul>.
    tarefas.appendChild(li);
    // executa a funcao de limpar input
    limpaInput();
    // executa a funcao que cria o botao de delete
    criaBotaoApagar(li)
    salvarTarefa()
}


btnTarefa.addEventListener('click', function (e) {
    // verifica se a tarefa criada não é vazia
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
})

// funcao de click em qualquer lugar do documento
document.addEventListener('click', function (e) {
    // verifica que lucar foi clicado e guarda na variavel el 
    const el = e.target
    // verifica se o local clicado tem a classe de apagar
    if (el.classList == 'apagar') {
        //  verifica quem é o pai do elemento apagar, e então o remove do documento
        el.parentElement.remove()
        salvarTarefa()
    }
})

function salvarTarefa() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaDeTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto);
    }
    //JSON.stringify converte um elemento para uma string do formato json
    const tarefasJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefasJSON);
}

function adicionaTarefasSalvas() {
    const tarefas = localStorage.getItem('tarefas')
    // json.parse converte de volta para um objeto javascript e deixa de ser um json
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)
    }
}
adicionaTarefasSalvas()