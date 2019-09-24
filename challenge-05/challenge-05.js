# Desafio da semana #4

```js
/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var dadosArray = [15, null, 'Leandro', {a: 1}, function() {}];

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/

function arrayFunction( refence ) {
	return refence;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log( arrayFunction(dadosArray) [1] );

// Resultado:

null

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/

function returnIndice( array, index ) {
	return array[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var valores = [18, 25.5, 'letra', [5, 4], {c: 1}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(returnIndice( valores, 0 ));
console.log(returnIndice( valores, 1 ));
console.log(returnIndice( valores, 2 ));
console.log(returnIndice( valores, 3 ));
console.log(returnIndice( valores, 4 ));
console.log(returnIndice( valores, 5 ));

// Resultado:

18
25.5
letra
[5, 4]
{c: 1}

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/

function book( livro ) {
	var todosLivros = {
		'Html5 e Css3 - Guia Prático e Visual': {
			quantidadePaginas: '576',
			autor: 'Elizabeth Castro, Bruce Hyslop',
			editora: 'Alta Books'
		},
		'JavaScript: O Guia Definitivo': {
			quantidadePaginas: '1080',
			autor: 'David Flanagan',
			editora: 'Bookman'
		},
		'Aprendendo a Desenvolver Aplicações Web': {
			quantidadePaginas: '360',
			autor: 'Semmy Purewal',
			editora: 'novatec'
		}
	};

	return !livro ? todosLivros : todosLivros[ livro ];
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book());

// Resultado:

Aprendendo a Desenvolver Aplicações Web: {quantidadePaginas: "360", autor: "Semmy Purewal", editora: "novatec"}
Html5 e Css3 - Guia Prático e Visual: {quantidadePaginas: "576", autor: "Elizabeth Castro, Bruce Hyslop", editora: "Alta Books"}
JavaScript: O Guia Definitivo: {quantidadePaginas: "1080", autor: "David Flanagan", editora: "Bookman"}

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

var nomeLivro = 'JavaScript: O Guia Definitivo';

console.log('O livro ' + nomeLivro + ' tem ' + book(nomeLivro).quantidadePaginas + ' páginas!');

// Resultado:

O livro JavaScript: O Guia Definitivo tem 1080 páginas!

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log('O autor do livro ' + nomeLivro + ' é ' + book(nomeLivro).autor + '.');

// Resultado:

O autor do livro JavaScript: O Guia Definitivo é David Flanagan.

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log('O livro ' + nomeLivro + ' foi publicado pela editora ' + book(nomeLivro).editora + '.');

// Resultado:

O livro JavaScript: O Guia Definitivo foi publicado pela editora Bookman.

```