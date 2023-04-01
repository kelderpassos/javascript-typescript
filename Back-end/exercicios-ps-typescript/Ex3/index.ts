
const MaisAntiga = (datas: string[]): string => {
  if (!datas) throw new Error('datas must\nt be undefined');
  if (datas.length === 0) throw new Error('An empty array is not allowed');
  
  const copy = [...datas].sort();

  return copy[0];
}

// Exemplos para teste. Sinta-se à vontade para completar com outros testes!

console.log(MaisAntiga(['2023-02-01', '2023-02-02'])); // '2023-02-01'
console.log(MaisAntiga(['2023-02-01', '2020-12-31', '2023-01-01'])); // '2020-12-31'
console.log(MaisAntiga(['2023-02-01', '2023-02-01'])); // '2023-02-01'
console.log(MaisAntiga(['2023-02-01', '2024-02-12' , '2023-02-01'])); // '2023-02-01'
console.log(MaisAntiga(['2023-02-01', '2023/02/01', '2020-12-31'])); // '2020-12-31'
console.log(MaisAntiga(['2023-02-01', 'string-invalida'])); // '2023-02-01'
console.log(MaisAntiga([])); // ERRO
