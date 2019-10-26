# Desafio da semana #13

(function() {
	/*
	Envolva todo o código desse desafio em uma IIFE.
	*/

	/*
	Crie um array chamado numberObjects. Esse array deve ter 10 elementos. Cada
	elemento será um objeto no formato:
	{ number: [NUMBER] }
	Os números devem ser de 1 a 10.
	Mostre esse array no console.
	*/
	console.log( 'Number Objects Array:' );
	
	//Resolução 1:

	var numberObjects = [];
	var num = 1

	while(num <= 10) {
		numberObjects.push({number: num});
		num++;
	}

	console.log(numberObjects);

	//Resolução 2:

	var numberObjects = [];

	for (var i = 1; i <= 10; i++) {
		numberObjects.push({number: i});
	}

	console.log(numberObjects);

	/* Resultado:
	
	Number Objects Array:
	0: {number: 1}
	1: {number: 2}
	2: {number: 3}
	3: {number: 4}
	4: {number: 5}
	5: {number: 6}
	6: {number: 7}
	7: {number: 8}
	8: {number: 9}
	9: {number: 10
	
	*/

	/*
	Crie um array chamado `justNumbers`, que terá como elementos somente os
	números do array criado acima. Mostre esse novo array no console.
	*/
	console.log( '\nJust Numbers:' );
	
	var justNumbers = numberObjects.map(function(item) {
		return item.number;
	});

	console.log(justNumbers);

	/* Resultado
	
	Just Numbers:
	0: 1
	1: 2
	2: 3
	3: 4
	4: 5
	5: 6
	6: 7
	7: 8
	8: 9
	9: 10
	
	*/

	/*
	Crie um novo array chamado `justMod2Or3`, que receberá do array criado acima
	somente os números que forem divisíveis por 2 ou 3. Mostre esse novo array
	no console.
	*/
	console.log( '\nJust module of division by 2 or 3:' );

	var justMod2Or3 = justNumbers.filter(function(item) {
		return item % 2 === 0 || item % 3 === 0;
	});

	console.log(justMod2Or3);

	/* Resultado:

	Just module of division by 2 or 3:
	[2, 3, 4, 6, 8, 9, 10]
	
	*/

	/*
	Declare uma variável chamada operation que receba, do array criado acima,
	um valor reduzido pela seguinte operação:
	- Somar 1 ao último valor retornado;
	- Multiplicar o resultado pelo valor atual.
	O cálculo deve começar com zero.
	Mostre o resultado no console.
	*/
	console.log( '\nOperation:' );
	
	var operation = justMod2Or3.reduce(function(acomulado, atual) {
		return (acomulado + 1) * atual;
	}, 0);

	console.log(operation);

	/* Resultado:
	
	Operation:
	177940
	
	*/

	/*
	Faça o mesmo cálculo passado acima, mas começando do último item para o
	primeiro. O nome da variável deve ser operation2. Mostre o resultado no
	console.
	*/
	console.log( '\nOperation 2:' );
	
	var operation2 = justMod2Or3.reduceRight(function(acomulado, atual) {
		return (acomulado + 1) * atual;
	}, 0);

	console.log(operation2);

	/* Resultado:
	
	Operation 2:
	115376
	
	*/

	/*
	Crie um array chamado `name`. Cada elemento desse array deve ser uma sílaba
	do seu nome. Vamos reduzir esse array, juntando todas as sílabas, mas usando
	a "língua do P".
	PS.: Lembra da língua do "P"? Não? A língua do "P" é uma brincadeira
	infantil, onde você coloca a letra "P" antes de cada sílaba de uma palavra
	falada, como se você estivesse falando em código xD
	*/
	console.log( '\nSeu nome na língua do "P":' );
	
	var name = ['Le', 'an', 'dro'];

	var linguaP = name.reduce(function(acomulado, atual) {
		return acomulado + 'P' + atual;
	}, '');

	console.log(linguaP);

	/* Resultato:
	
	Seu nome na língua do "P":
	"PLePanPdro";

	*/

	/*
	Crie uma variável chamada `inversedName`, que reduzirá o array em uma string
	e atribuirá o seu nome invertido (usando o array criado acima).
	*/
	console.log( '\nInversed Name:' );
	
	//Resolução 1:

	var inversedName = name.reduceRight(function(acomulado, atual) {
		return acomulado + atual;
	});

	//Resolução 2:

	var inversedName = name.reverse().join('');

	console.log(inversedName);

	/* Resultado:

	Inversed Name:
	"dro,an,Le";
	
	*/

	/*
	Mostre no console o array `numberObjects`.
	*/
	console.log( '\nNumber objects' );
	
	console.log(numberObjects);

	/* Resultado:

	0: {number: 1}
	1: {number: 2}
	2: {number: 3}
	3: {number: 4}
	4: {number: 5}
	5: {number: 6}
	6: {number: 7}
	7: {number: 8}
	8: {number: 9}
	9: {number: 10
	
	*/

	/*
	Verifique se existem em algum índice de numberObjects um objeto ìgual a
	{ number: 2 }. Se houver, mostre no console:
	- "Existe um objeto { number: 2 } em numberObjects!"
	Senão, mostre a frase:
	- "Não existe um objeto { number: 2 } em numberObjects :("
	Consegue prever o resultado? Deixe uma mensagem no console tentando explicar
	o que acontece ;)
	*/
	console.log( '\nExiste um { number: 2 } em numberObjects?' );
	
	//Resolução 1:

	if (numberObjects.indexOf({number: 2}) > -1) {
		console.log('Existe um objeto { number: 2 } em numberObjects!');
	} else {
		console.log('Não existe um objeto { number: 2 } em numberObjects :(');
	}

	/* Resultado:

	Existe um { number: 2 } em numberObjects?
	Não existe um objeto { number: 2 } em numberObjects :(
	
	*/

	/* Objeto tem referencia unica de memoria, por tanto para comparar objetos
	é preciso cirar uma variável para receber { number: 2 }, assim ambos apontaram
	para a mesmo ligar na memoria;
	*/

	//Resolução 2:

	var objeto = numberObjects[1];

	if (numberObjects.indexOf(objeto) > -1) {
		console.log('Existe um objeto { number: 2 } em numberObjects!');
	} else {
		console.log('Não existe um objeto { number: 2 } em numberObjects :(');
	}

	/* Resultado:

	Existe um objeto { number: 2 } em numberObjects!

	*/

	//Resolução 3:

	if (numberObjects.indexOf(numberObjects[1]) > -1) {
		console.log('Existe um objeto { number: 2 } em numberObjects!');
	} else {
		console.log('Não existe um objeto { number: 2 } em numberObjects :(');
	}

	/* Resultado:
	
	Existe um objeto { number: 2 } em numberObjects!
	
	*/

	/*
	Fazendo o mesmo do exercício acima, mas começando a buscar do último índice,
	será que obtemos um resultado diferente? Faça a busca a partir do índice 2.
	*/
	console.log( '\nE buscando a partir do último índice, o { number: 2 } existe?' );

	//Resolução 1:

	if (numberObjects.lastIndexOf({number: 2 }, 2) > -1) {
		console.log('Existe um objeto { number: 2 } em numberObjects!');
	} else {
		console.log('Não existe um objeto { number: 2 } em numberObjects :(');
	}

	/* Resultado:

	E buscando a partir do último índice, o { number: 2 } existe?
	Não existe um objeto { number: 2 } em numberObjects :(
	
	*/

	//Resolução 2:

	if (numberObjects.lastIndexOf(numberObjects[1]) > -1) {
		console.log('Existe um objeto { number: 2 } em numberObjects!');
	} else {
		console.log('Não existe um objeto { number: 2 } em numberObjects :(');
	}

	/* Resultado:

	E buscando a partir do último índice, o { number: 2 } existe?
	Não existe um objeto { number: 2 } em numberObjects :(
	
	*/

	/*
	Verifique se `justMod2Or3` é um array. Se for, mostre-o no console, no
	formato de String.
	*/
	console.log( '\njustMod2Or3 é um array? Se for, a representação dele em String é:' );
	
	if (Array.isArray(justMod2Or3)) {
		console.log(justMod2Or3.toString());
	}

	/* Resultado:

	justMod2Or3 é um array? Se for, a representação dele em String é:
	2,3,4,6,8,9,10
	
	*/
	
}) ();