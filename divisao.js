function dividirPorZero(numero) {
    try {
      if (numero === 0) {
        throw new Error("Não é possível dividir por zero.");
      }
      return 10 / numero;
    } catch (erro) {
      console.error("Ocorreu um erro:", erro.message);
      return "Erro ao dividir por zero.";
    }
  }
  
  const resultado1 = dividirPorZero(5);
  console.log("Resultado 1:", resultado1); // Imprimirá 2
  
  const resultado2 = dividirPorZero(0);
  console.log("Resultado 2:", resultado2); // Imprimirá a mensagem de erro
  