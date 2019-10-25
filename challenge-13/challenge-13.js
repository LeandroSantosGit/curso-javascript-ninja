# Desafio da semana #13

(function() {

	/*
	Envolva todo o código desse desafio em uma IIFE.
	*/

	/*
	Crie um array e mostre no console a representação em String desse array,
	usando o método visto na aula 13.
	*/
	console.log( 'O array em formato de string é:' );
	
	console.log([1, 2, 3, 4, 5].toString());

	/* Resultado:

	O array em formato de string é:
	1,2,3,4,5

	*/

	/*
	Crie 2 arrays `sul` e `sudeste`, que serão as regiões do Brasil.
	Cada array deve conter os estados dessa região.
	*/
	
	var sul = ['Santa Catarina', 'Paraná', 'Rio Grande do Sul'];
	var sudeste = ['São Paulo', 'Minas Gerais', 'Espirito Santo', 'Rio de Janeiro'];

	/*
	Crie uma variável chamada `brasil`, que irá receber as duas regiões
	concatenadas. Mostre o `brasil` no console.
	*/
	console.log( '\nAlguns Estados do Brasil:' );
	
	var brasil = sudeste.concat(sul);

	console.log(brasil);

	/* Resultado:

	Alguns Estados do Brasil:
	["São Paulo", "Minas Gerais", "Espirito Santo", "Rio de Janeiro", "Santa Catarina", "Paraná", "Rio Grande do Sul"]

	*/

	/*
	Adicione 3 novos estados da região Norte no início do array e mostre no console.
	*/
	console.log( '\nMais estados adicionados:' );
	
	brasil.unshift('Amazonas', 'Acre', 'Amapá');

	console.log(brasil);

	/* Resultado:

	Mais estados adicionados:
	["Amazonas", "Acre", "Amapá", "São Paulo", "Minas Gerais", "Espirito Santo", "Rio de Janeiro", "Santa Catarina", "Paraná", "Rio Grande do Sul"]

	*/

	/*
	Remova o primeiro estado do array `brasil` e mostre-o no console.
	*/
	console.log( '\nEstado removido:' );
	
	console.log(brasil.shift());

	/* Resultado:
	
	Estado removido:
	Amazonas

	*/

	/*
	Crie um novo array chamado `newSul`, que receba somente os estados do sul,
	pegando do array `brasil`. Não remova esses itens de `brasil`.
	*/
	
	var newSul = brasil.slice(6);

	/*
	Mostre no console os estados que estão em `newSul`.
	*/
	console.log( '\nEstados do Sul do Brasil:' );
	
	console.log(newSul);

	/* Resultado:

	Estados do Sul do Brasil:
	["Santa Catarina", "Paraná", "Rio Grande do Sul"]

	*/

	/*
	Mostre no console todos os estados que estão em `brasil`.
	*/
	console.log( '\nAlguns Estados do Brasil:' );
	
	console.log(brasil);

	/* Resultado:
	
	Alguns Estados do Brasil:
	["Acre", "Amapá", "São Paulo", "Minas Gerais", "Espirito Santo", "Rio de Janeiro", "Santa Catarina", "Paraná", "Rio Grande do Sul"]

	*/

	/*
	Crie um novo array chamado `nordeste`, que tenha os estados do nordeste.
	*/
	
	var nordeste = ['Alagoas', 'Paraíba', 'Bahia', 'Ceará', 'Maranhão', 'Pernambuco', 'Sergipe', 'Rio Grande do Norte', 'Piaui'];

	/*
	Mostre no console os estados do nordeste.
	*/
	console.log( '\nEstados do Nordeste:' );
	
	console.log(nordeste);

	/* Resultado:

	Estados do Nordeste:
	["Alagoas", "Paraíba", "Bahia", "Ceará", "Maranhão", "Pernambuco", "Sergipe", "Rio Grande do Norte", "Piaui"]

	*/

	/*
	Remova de `brasil` os estados do `sudeste`, colocando-os em uma variável
	chamada `newSudeste`.
	*/
	
	var newSudeste = brasil.splice(2, 4);

	/*
	Adicione os estados do `nordeste` ao array `brasil`. Esses estados devem
	ficar no mesmo nível que os estados já existentes, não em um array separado.
	*/
	
	brasil = brasil.concat(nordeste);

	/*
	Mostre no console os estados em `newSudeste`.
	*/
	console.log( '\nEstados em newSudeste:' );
	
	console.log(newSudeste);

	/* Resultado:

	Estados em newSudeste:
	["São Paulo", "Minas Gerais", "Espirito Santo", "Rio de Janeiro"]

	*/

	/*
	Mostre no console os estados do `brasil`.
	*/
	console.log( '\nAlguns estados do Brasil:' );
	
	console.log(brasil);

	/* Resultado:

	Alguns estados do Brasil:
	["Acre", "Amapá", "Santa Catarina", "Paraná", "Rio Grande do Sul", "Alagoas", "Paraíba", "Bahia", "Ceará", "Maranhão", "Pernambuco", "Sergipe", "Rio Grande do Norte", "Piaui"]

	*/

	/*
	usando forEach, percorra o array `brasil` e gere um novo array chamado
	`newBrasil`. Esse array deve ter cada item como um objeto, com as
	propriedades:
	- `id`: que será o índice do array `brasil`,
	- `estado`: que será o estado do array `brasil`.
	*/
	
	var newBrasil = [];

	brasil.forEach(function(item, index) {
		newBrasil.push({
			id: index,
			estado: item
		});
	});

	/*
	Mostre o array `newBrasil` no console
	*/
	console.log( '\nnewBrasil:' );
	
	console.log(newBrasil);

	/* Resultado:
	
	newBrasil:
	{id: 0, estado: "Acre"}
	{id: 1, estado: "Amapá"}
	{id: 2, estado: "Santa Catarina"}
	{id: 3, estado: "Paraná"}
	{id: 4, estado: "Rio Grande do Sul"}
	{id: 5, estado: "Alagoas"}
	{id: 6, estado: "Paraíba"}
	{id: 7, estado: "Bahia"}
	{id: 8, estado: "Ceará"}
	{id: 9, estado: "Maranhão"}
	{id: 10, estado: "Pernambuco"}
	{id: 11, estado: "Sergipe"}
	{id: 12, estado: "Rio Grande do Norte"}
	{id: 13, estado: "Piaui"}
	
	*/

	/*
	Percorra o array `brasil` e verifique se os estados tem mais de 7 letras cada,
	atribuindo o resultado à uma variável. Se tiver, mostre no console a frase:
	- "Sim, todos os estados tem mais de 7 letras!"
	Senão, mostre no console:
	- "Nem todos os estados tem mais de 7 letras!"
	*/
	console.log( '\nTodos os estados de `brasil` tem mais de 7 letras?' );
	
	var every = brasil.every(function(item) {
		return item.length > 7;
	});

	console.log(every ? 'Sim, todos os estados tem mais de 7 letras!' : 'Nem todos os estados tem mais de 7 letras!');

	/* Resultado:

	Todos os estados de `brasil` tem mais de 7 letras?
	Nem todos os estados tem mais de 7 letras!
	
	*/

	/*
	Percorra o array `brasil` e verifique se o Ceará está incluído, atribuindo o
	resultado à uma variável. Se esse estado existir no array, mostrar a frase no
	console:
	- "Ceará está incluído!"
	Senão, mostrar a frase:
	- "Ceará não foi incluído :("
	*/
	console.log( '\nCeará está incluído em `brasil`?' );
	
	var buscar = brasil.some(function(item) {
		return item === 'Ceará';
	});

	console.log(buscar ? 'Ceará está incluído!' : 'Ceará não foi incluído :(');

	/* Resultado:

	Ceará está incluído em `brasil`?
	Ceará está incluído!

	*/

	/*
	Percorra o array `newBrasil` e crie um novo array que some 1 no ID de cada
	objeto desse array, e adicione a frase abaixo na propriedade `estado`:
	- "[ESTADO] pertence ao Brasil."
	Atribua o novo array a uma variável chamada `map`.
	*/
	
	var map = newBrasil.map(function(item, index) {
		item.id++;
		item.estado + ' pertence ao Brasil.';

		return item;
	});

	Resolução 2:

	var map = newBrasil.map(function(item, index) {
		return {
			id: item.id + 1,
			item: item.estado + ' pertence ao Brasil.'
		};
	});

	/*
	Mostre no console o array criado acima:
	*/
	console.log( '\nnewBrasil agora com mais informações:' );
	
	console.log(map);

	/* Resultado:
	
	newBrasil agora com mais informações:
	{id: 1, estado: "Acre"}
	{id: 2, estado: "Amapá"}
	{id: 3, estado: "Santa Catarina"}
	{id: 4, estado: "Paraná"}
	{id: 5, estado: "Rio Grande do Sul"}
	{id: 6, estado: "Alagoas"}
	{id: 7, estado: "Paraíba"}
	{id: 8, estado: "Bahia"}
	{id: 9, estado: "Ceará"}
	{id: 10, estado: "Maranhão"}
	{id: 11, estado: "Pernambuco"}
	{id: 12, estado: "Sergipe"}
	{id: 13, estado: "Rio Grande do Norte"}
	{id: 14, estado: "Piaui"}

	*/

	/*
	Filtre o array criado acima, retornando somente os estados que tiverem
	ID par. Atribua o valor à uma variável chamada `filter`.
	*/
	
	var filter = map.filter(function(item, index) {
		return item.id % 2 === 0;
	});

	/*
	Mostre o array filtrado acima no console.
	*/
	console.log( '\nEstados com ID par:' );
	
	console.log(filter);

	/* Resultado:

	Estados com ID par:
	{id: 2, estado: "Amapá"}
	{id: 4, estado: "Paraná"}
	{id: 6, estado: "Alagoas"}
	{id: 8, estado: "Bahia"}
	{id: 10, estado: "Maranhão"}
	{id: 12, estado: "Sergipe"}
	{id: 14, estado: "Piaui"}
	
	*/
	
}) ();