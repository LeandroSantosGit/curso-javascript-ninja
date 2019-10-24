# Desafio da semana #11

```js

(function() {
	// Envolva todo o código desse arquivo em uma IIFE (incluindo esse comentário).

	/*
	Crie uma variável chamada `once`, que recebe `false` como seu valor.
	Crie um loop que execute enquanto essa variável for verdadeira. Dentro do
	loop, mostre no console a mensagem:
	'Entrou ao menos uma vez!'
	Qual loop você deve usar para que essa mensagem seja mostrada no console?
	*/
	
	var once = false;

	do {
		console.log('Entrou ao menos uma vez!');
	} while(once);

	/* Resultado:
	
	Entrou ao menos uma vez!

	*/

	/*
	Crie um objeto chamado `person`, que receba as seguintes propriedades:
	- 'name', 'age', 'weight' e 'birthday'. Preencha com os valores corretos
	para o nome, idade, peso e data de nascimento dessa pessoa.
	*/
	
	var person = {
		name: 'Leandro Santos',
		age: 27,
		weight: 75,
		birthday: '17/02'
	};

	/*
	Use um loop para percorrer o objeto criado acima, mostrando no console
	a frase:
	'The [PROPERTY] of person is [VALUE]'
	Aproveite e crie uma variável `counter` que vai contar quantas propriedades
	esse objeto tem.
	Após o loop, mostre a frase:
	'The person has [COUNTER] properties'
	*/
	var contador = 0;

	for (var prop in person) {
		console.log('The ' + prop + ' of person is ' + person[prop] + '');
		contador++;
	}

	console.log('The person has ' + contador + ' properties');

	/* Resultado:

	The name of person is Leandro Santos
	The age of person is 27
	The weight of person is 75
	The birthday of person is 17/02
	The person has 4 properties

	*/

	/*
	Crie uma função chamada `moreThan`, que vai verificar se a pessoa (objeto
	criado acima) é mais velha que a idade passada por parâmetro.
	Se verdadeiro, retornar `true`. Senão, retornar false.
	Após a função, mostrar a mensagem no console:
	'The person has more than 25 years old? [TRUE/FALSE]'
	*/

	Resolução 1:
	
	function moreThan(age) {
		if (person.age > 25) {
			return true;
		}

		return false;
	}

	console.log('The person has more than 25 years old? ', moreThan(25) );

	Resolução 2:

	function moreThan(age) {
		
		return person.age > age ? true : false;
	}

	console.log('The person has more than 25 years old? ', moreThan(25) );

	Resolução 3:

	function moreThan(age) {
		
		return person.age > age;
	}

	console.log('The person has more than 25 years old? ', moreThan(25) );

	/* Resultado:

	The person has more than 25 years old?  true

	*/

	/*
	Faça um loop de 0 a 20, que adicione cada número como um item de um
	array chamado `numbers`. Se o contador for maior que 10, saia do loop.
	Mostre no console os números no array.
	*/
	console.log( 'De 0 a 10:' );
	
	var numbers = [];

	for (var i = 0; i < 20; i++) {
		if (i > 10) {
			break;
		}
		numbers.push(i);
	}

	console.log(numbers);

	/* Resultado:

	De 0 a 10:
	[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

	*/

	/*
	Faça outro loop de 0 a 20, que adicione a um array chamado `numbers` (já
	criado acima, só precisa ser reiniciado) números de 0 a 20, inclusive
	esses. Se o número for ímpar, pular para o próximo número.
	Mostrar no console os números do array.
	*/
	console.log( 'Pares de 0 a 20:' );
	
	numbers = [];
	var i = 0;

	for (i = 1; i <= 20; i++) {
		if (i % 2 !== 0) {
			continue;
		}
		numbers.push(i);
	}

	console.log(numbers);

	/* Resultado:

	Pares de 0 a 20:
	[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

	*/

}) ();

```