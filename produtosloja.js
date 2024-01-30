function calcularTotal(produtos) {
    const precoTotal = produtos.reduce((total, produto) => total + produto.preco, 0);
    return precoTotal.toFixed(2);
  }
  
  const produtos = [
    { nome: "Camisa", preco: 50.0 },
    { nome: "Calça", preco: 80.0 },
    { nome: "Jaqueta", preco: 150.0 },
    { nome: "Meia", preco: 10.0 }
  ];
  
  const total = calcularTotal(produtos);
  console.log(`O preço total dos produtos é: R$ ${total}`);
  