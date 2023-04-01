class Usuario
{
    Email: string;
    Nome: string;
    Senha: string;

    constructor(email: string, nome: string)
    {
        this.Email = email;
        this.Nome = nome;
        this.Senha = (Math.random() + 1).toString(36).substring(12);
    }
}

const OrdenaUsuarios = (array: Usuario[]): Usuario[] => {
  if (!array) throw new Error("array must\nt be undefined");
  
  for (let i = 0; i < array.length; i++) {
    if (!(array[i] instanceof Usuario)) throw new Error("array must contain only instances of Usuario");
    for (let j = 0; j < array.length; j++) {
      if (i !== j) {
        if (array[i].Nome === array[j].Nome) {
          throw new Error('Users cannot have the same name');            
        }
      }
    }    
  }

  return array.sort((userA, userB) => userA.Nome.localeCompare(userB.Nome));
}


// Exemplos para teste. Sinta-se à vontade para completar com outros testes!
// Obs: Como a função retorna uma lista de objetos, a resposta abaixo apenas representa o(s) objeto(s) retornados!

class Employee {
  public Senha: string
  constructor (public Email: string, public Nome: string) {
    this.Senha = (Math.random() + 1).toString(36).substring(12);
  }
}

console.log(OrdenaUsuarios([
    new Usuario('jc@cmu.com.br', 'João Carlos'),
    new Usuario('ana@cmu.com.br', 'Ana Maria'),
    new Usuario('pedro@cmu.com.br', 'Pedro Almeida'),
    new Usuario('joaozin@cmu.com.br', 'João Marcelo')])); // [Usuario{'Ana Maria'}, Usuario{'João Carlos'}, Usuario{'João Marcelo'}, Usuario{'Pedro Almeida'}]

console.log(OrdenaUsuarios([])); // []

console.log(OrdenaUsuarios([
    new Usuario('jc@cmu.com.br', 'João Carlos'),
    new Usuario('ana@cmu.com.br', 'Ana Maria'),
    new Usuario('pedro@cmu.com.br', 'Pedro Almeida'),
    new Usuario('joaozin@cmu.com.br', 'João Carlos')])); // ERRO

console.log(OrdenaUsuarios([
    new Usuario('jc@cmu.com.br', 'João Carlos'),
    new Usuario('ana@cmu.com.br', 'Ana Maria'),
    new Usuario('pedro@cmu.com.br', 'Pedro Almeida'),
    new Employee('ann@cmu.com.br', 'Ann Mary')])); // ERRO
