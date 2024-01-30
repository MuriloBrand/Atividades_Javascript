function formatarInformacoesDoLivro(livro) {
    const { titulo, autor, paginas } = livro;
    const mensagem = `O livro ${titulo}, escrito por ${autor}, tem ${paginas} páginas.`;
    console.log(mensagem);
  }
  
  const livroExemplo = {
    "titulo": "A Metamorfose",
    "autor": "Franz Kafka",
    "paginas": 100
  };
  
  formatarInformacoesDoLivro(livroExemplo);
  