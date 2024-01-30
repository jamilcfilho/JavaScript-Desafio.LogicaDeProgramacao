//Desafios JavaScript na DIO

/* Descrição
Imagine um universo onde você é um Mestre Pokémon com o poder de criar novas criaturas através da combinação de nomes. Seu algoritmo é a chave para dar vida a esses seres incríveis. Você receberá uma primeira parte do nome de um Pokémon e sua tarefa é completá-la com o sufixo mágico adequado, revelando o nome completo do Pokémon.

Tarefa: Sua missão é criar uma função extraordinária chamada combinarNomePokemon. Essa função possui um toque mágico que transforma uma entrada simples em algo verdadeiramente especial.

Entrada
A entrada consistirá em uma única string representando a primeira parte do nome de um Pokémon.

Saída
A função deve retornar uma nova string que é a combinação da parte inicial(Préfixo) do nome do Pokémon com o sufixo final do nome, formando um nome de Pokémon completo. */

// Defina uma função chamada "combinandoNomesPokemons" que recebe um parâmetro chamado (palavra);
// Dentro da função, crie uma variável chamada "palavraPokemon" que é formada pela concatenação da "palavra" com a string "saur";  
// Após a váriavel, retorne a palavra pokemon; 

function combinandoNomesPokemons(palavra){
    let palavraPokemon = palavra + "saur"
    return palavraPokemon
  }
  
  
  // Entrada da palavra usando o gets():
  var nomeEntrada = gets();
  
  // Chamando a função "combinandoNomesPokemons" com o nome pokemon informado e armazenando o resultado na variável "palavraGerada":
  var palavraGerada = combinandoNomesPokemons(nomeEntrada);
  
  // Exibindo a palavra gerada:
  print(palavraGerada);