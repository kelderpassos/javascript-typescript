const validations = (parameter1: number[], parameter2: number): void => {
  if (!parameter1 || parameter2) throw new Error("array or quantidade must\nt be undefined");
  if (typeof parameter2 !== 'number') throw new Error("quantidade must be a number");
  if (parameter2 <= 0) throw new Error('quantidade must be higher than 0')
}

const QuebraLista = (array: number[], quantidade: number): number[][] => {
  validations(array, quantidade);

  const newList: number[][] = [];

  for (let index = 0; index < array.length; index = index + quantidade) {
    newList.push(array.slice(index, index + quantidade));
  };
  
  return newList;
}


// Exemplos para teste. Sinta-se à vontade para completar com outros testes!

console.log(QuebraLista([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
console.log(QuebraLista([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
console.log(QuebraLista([2, 4, 6, 8, 10, 12, 14, 16], 4)); // [[2, 4, 6, 8], [10, 12, 14, 16]]
console.log(QuebraLista([2, 4, 6, 8, 10, 12, 14, 16], 40)); // [[2, 4, 6, 8, 10, 12, 14, 16]]
console.log(QuebraLista([], 4)); // []
console.log(QuebraLista([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 0)); // Erro
console.log(QuebraLista([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], -1)); // Erro