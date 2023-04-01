
const FiltraTerminadasEmA = (array: string[]): string[] => {
  if (!array) throw new Error("An array of strings must be sent");
  
  let matches: string[] = [];
  
  for (const word of array) {
    if (typeof word !== 'string') throw new Error(`Element ${word} is not a string`);

    if(word.charAt(word.length - 1).toLowerCase() === 'a') {
      matches.push(word);        
    }    
  };

  return matches;
}

// Exemplos para teste. Sinta-se à vontade para completar com outros testes!

console.log(FiltraTerminadasEmA(['Pera', 'Maçã', 'Banana', 'Uva', 'Abacate'])); // ['Pera', 'Banana', 'Uva']
console.log(FiltraTerminadasEmA(['BANANA', 'AZEITE', 'Sacola', 'MERCADO'])); // ['BANANA', 'Sacola']
console.log(FiltraTerminadasEmA([])); // []
