# Desafio da semana #4

```js
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

// Resolução 1
var isTruthy = function(a) {
	if (a) {
		return true;
	}

	return false;
};

// Resolução 2

var isTruthy = function(valor) {
	return valor ? true : false;
};

// Resolução 3

var isTruthy = function(parametro) {
	return !!parametro;
};

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

// Resultado:

isTruthy(false);
// false

isTruthy(null);
// false

isTruthy(undefined);
// false

isTruthy('');
// false

isTruthy(0);
// false

isTruthy(NaN);
// false

isTruthy(-0);
// false

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/

// Resultado:

isTruthy(true);
// true

isTruthy([]);
// true

isTruthy({});
// true

isTruthy(!false);
// true

isTruthy(function() {});
// true

isTruthy('Javascript');
// true

isTruthy(10 + 2);
// true

isTruthy([1,2,3]);
// true

isTruthy({ a: 1, b:2 });
// true

isTruthy(10 * 5);
// true

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var carro = {
	marca: 'VW',
	modelo: 'Gol',
	placa: 'JWP-4118',
	ano: 2008,
	cor: 'Preto',
	quantasPortas: 4,
	assentos: 5,
	quantidadePessoas: 0
}


/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudarCor = function( novaCor ) {
	carro.cor = novaCor;
};

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.obterCor = function() {
	return 'A cor do carro: ' + carro.cor;
};

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/

carro.obterModelo = function() {
	return 'O modelo do carro: ' + carro.modelo;
};

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.obterMarca = function() {
	return 'Marca do carro: ' + carro.marca;
};

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaModelo = function() {
	return 'Esse carro é um ' + carro.obterMarca() + ' ' + carro.obterModelo();
};

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

carro.addPessoas = function( numPessoas ) {

	var pessoaTotal = carro.quantidadePessoas + numPessoas;
	var assentosLivre = carro.assentos - carro.quantidadePessoas;
	var pluralSingular = assentosLivre === 1 ? ' pessoa' : ' pessoas';

	if (carro.quantidadePessoas === carro.assentos && pessoaTotal >= carro.assentos) {
		return 'O carro já está lotado';
	} 

	if (pessoaTotal > carro.assentos) {
		return 'Só cabem mais ' + assentosLivre + pluralSingular + '!';
	}

	carro.quantidadePessoas += numPessoas;

	return 'Já temos ' + carro.quantidadePessoas + ' pessoas no carro!';
};


/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/

carro.obterCor();

// Resultado:

"A cor de carro: Preto"

// Mude a cor do carro para vermelho.

carro.mudarCor('Azul');

// E agora, qual a cor do carro?

carro.obterCor();

// Resultado:

"A cor de carro: Azul"

// Mude a cor do carro para verde musgo.

carro.mudarCor('verde musgo');

// E agora, qual a cor do carro?

carro.obterCor();

// Resultado:

"A cor de carro: verde musgo"

// Qual a marca e modelo do carro?

carro.obterMarcaModelo();

// Resultado:

"Esse carro é um Marca do carro: VW O modelo do carro: Gol"

// Adicione 2 pessoas no carro.

carro.addPessoas(2);

// Resultado:

"Já temos 2 pessoas no carro!"

// Adicione mais 4 pessoas no carro.

carro.addPessoas(4);

// Resultado:

"Só cabem mais 3 pessoas!"

// Faça o carro encher.

carro.addPessoas(3);

// Resultado:

"Já temos 5 pessoas no carro!"

// Tire 4 pessoas do carro.

carro.addPessoas(-4);

// Resultado:

"Já temos 1 pessoas no carro!"

// Adicione 10 pessoas no carro.

carro.addPessoas(10);

// Resultado:

"Só cabem mais 4 pessoas!"

// Quantas pessoas temos no carro?

carro.quantidadePessoas;

// Resultado:

1
```
