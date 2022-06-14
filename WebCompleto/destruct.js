const pessoa = {
  nome: "thigas",
  idade: 20,
  endereco: {
    logradouro: "Rua J",
    numero: 10,
  },
};

const { nome, idade } = pessoa;
console.log(nome, idade);

const { nome: n, idade: i } = pessoa;
console.log(n, i);

const { endereco: { logradouro, numero }} = pessoa;
console.log(logradouro);
console.log(numero);