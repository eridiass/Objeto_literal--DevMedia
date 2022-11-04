var curiosidades = [
    { titulo: "Cuidados com a higiene bucal", conteudo: "Chuck Norris usa arame farpado como fio dental." },
    { titulo: "Fórmula para maratonar séries", conteudo: "Chuck Norris pode assistir um episódio de 60 minutos em 22 segundos." },
    { titulo: "Suicida que não morre", conteudo: "Chuck Norris foi homem-bomba 34 vezes." },
    { titulo: "Olhos que tudo veem", conteudo: "Chuck Norris já viu o homem invisível." },
    { titulo: "Manipulando o tempo", conteudo: "Chuck Norris não usa relógio. Ele decide que horas são." },
    { titulo: "Praticando esportes radicais", conteudo: "Chuck Norris faz bungee jump sem corda." },
    { titulo: "Não vale chorar", conteudo: "Chuck Norris faz cebolas chorarem." },
    { titulo: "Tempero de fogo", conteudo: "Chuck Norris usa pólvora como tempero." },
    { titulo: "Extinção dos dinossauros", conteudo: "Chuck Norris encarou os dinossauros uma vez, apenas uma." },
    { titulo: "Contando sem parar", conteudo: "Chuck Norris contou até o infinito. Duas vezes." }
];

//Quantidade de objetos da coleção
var tamanho_colecao = curiosidades.length;

//Funções math.random (número entre 0 e <1) + math.floor (arrendonda número p baixo, transformando em inteiro)
var numero_sorteado = Math.floor(Math.random() * tamanho_colecao);

//Será armazedo um dos objetos da coleção
var curiosidade_escolhida = curiosidades[numero_sorteado];

//Separação dos dados para posterior apresentação
var titulo_curiosidade = curiosidade_escolhida.titulo;
var conteudo_curiosidade = curiosidade_escolhida.conteudo;

console.log("CURIOSIDADE SOBRE CHUCK NORRIS");
console.log("Título: " + titulo_curiosidade);
console.log("Conteúdo: " + conteudo_curiosidade);