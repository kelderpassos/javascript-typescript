
const ContaAparicoes = (frase: string, palavra: string): number => {
  if (!frase || !palavra) throw new Error("Parameters cannot be undefined");

  if (typeof frase !== 'string' || typeof palavra !== 'string')
    throw new Error("Parameters must be strings");    

  const charsList = frase.split(palavra);

  return charsList.length - 1
}


// Exemplos para teste. Sinta-se à vontade para completar com outros testes!

console.log(ContaAparicoes('Banana', 'a')); // 3
console.log(ContaAparicoes('Banana', 'na')); // 2
console.log(ContaAparicoes('Banana', 'ka')); // 0
console.log(ContaAparicoes('BBBBBBBBB', 'BB')); // 4
console.log(ContaAparicoes('Banana', 'ana')); // 1