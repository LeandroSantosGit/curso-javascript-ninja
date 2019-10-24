# Desafio da semana #12


(function() {
	/*
	Envolva todo o conteúdo desse arquivo em uma IIFE.
	*/

	/*
	Crie um objeto chamado `person`, com as propriedades:
	    `name`: String
	    `lastname`: String
	    `age`: Number
	Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
	de valor para cada propriedade.
	*/
	
	var person = {
		name: 'Leandro',
		lastname: 'Santos',
		age: 27
	};

	console.log( 'Propriedades de "person":' );

	/*
	Mostre no console, em um array, todas as propriedades do objeto acima.
	Não use nenhuma estrutura de repetição, nem crie o array manualmente.
	*/
	
	console.log(Object.keys(person));

	/* Resultado:
	
	Propriedades de "person":
	["name", "lastname", "age"]

	*/

	/*
	Crie um array vazio chamado `books`.
	*/
	
	var books = [];

	/*
	Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
	seguintes propriedades:
	`name`: String
	`pages`: Number
	*/
	console.log( '\nLista de livros:' );


	books.push({
		name: 'Java Como Programar',
		pages: 968
	});
	books.push({
		name: 'O Melhor Do JavaScript',
		pages: 160
	});
	books.push({
		name: 'Padrões JavaScript',
		pages: 240
	});
	

	/*
	Mostre no console todos os livros.
	*/
	
	console.log(books);

	/* Resultado:

	{name: "Java Como Programar", pages: 968}
	{name: "O Melhor Do JavaScript", pages: 160}
	{name: "Padrões JavaScript", pages: 240}

	*/

	console.log( '\nLivro que está sendo removido:' );
	/*
	Remova o último livro, e mostre-o no console.
	*/
	
	console.log(books.pop());

	/* Resultado:
	
	Livro que está sendo removido:
	{name: "Padrões JavaScript", pages: 240}
	
	*/

	console.log( '\nAgora sobraram somente os livros:' );
	/*
	Mostre no console os livros restantes.
	*/
	
	console.log(books);

	/* Resultado:
	
	Agora sobraram somente os livros:
	{name: "Java Como Programar", pages: 968}
	{name: "O Melhor Do JavaScript", pages: 160}

	*/

	/*
	Converta os objetos que ficaram em `books` para strings.
	*/
	
	books = JSON.stringify(books);

	console.log( '\nLivros em formato string:' );

	/*
	Mostre os livros nesse formato no console:
	*/
	
	console.log(books);

	/* Resultado:
	
	Livros em formato string:
	[{"name":"Java Como Programar","pages":968},{"name":"O Melhor Do JavaScript","pages":160}]

	*/

	/*
	Converta os livros novamente para objeto.
	*/

	console.log( '\nAgora os livros são objetos novamente:' );
	
	books = JSON.parse(books);

	/* Resultado: 

	Agora os livros são objetos novamente:
	{name: "Java Como Programar", pages: 968}
	{name: "O Melhor Do JavaScript", pages: 160}

	*/

	/*
	Mostre no console todas as propriedades e valores de todos os livros,
	no formato abaixo:
	    "[PROPRIEDADE]: [VALOR]"
	*/
	
	for (var i = 0; i < books.length; i++) {
		for (var propriedade in books[i]) {
			console.log(propriedade + ':' + books[i][propriedade]);
		}
	}

	/* Resultado:

	name:Java Como Programar
	pages:968
	name:O Melhor Do JavaScript
	pages:160

	*/

	/*
	Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
	seu nome. Adicione seu nome completo no array.
	*/
	
	var myName = ['L', 'e', 'a', 'n', 'd', 'r', 'o'];

	console.log( '\nMeu nome é:' );

	/*
	Juntando todos os itens do array, mostre no console seu nome.
	*/
	
	console.log(myName.join(''));

	/* Resultado:
	
	Meu nome é:
	Leandro

	*/

	console.log( '\nMeu nome invertido é:' );

	/*
	Ainda usando o objeto acima, mostre no console seu nome invertido.
	*/
	
	console.log(myName.reverse().join(''));

	/* Resultado:
	
	Meu nome invertido é:
	ordnaeL

	*/

	console.log( '\nAgora em ordem alfabética:' );
	/*
	Mostre todos os itens do array acima, odenados alfabéticamente.
	*/
	
	console.log(myName.sort());

	/* Resultado:
	
	Agora em ordem alfabética:
	["L", "a", "d", "e", "n", "o", "r"]
	
	*/

}) ();