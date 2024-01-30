const cryptocurrencies = [
    { name: "Bitcoin", symbol: "BTC", price: 45000, description: "Descrição do Bitcoin" },
    { name: "Ethereum", symbol: "ETH", price: 3000, description: "Descrição do Ethereum" }
];


const currencies = [
    { code: "BRL", name: "Real Brasileiro" },
    { code: "USD", name: "Dólar Americano" },
];

document.addEventListener("DOMContentLoaded", function () {
    const cryptoSelect = document.getElementById("crypto-select");
    cryptocurrencies.forEach(crypto => {
        const option = document.createElement("option");
        option.value = crypto.symbol;
        option.textContent = crypto.name;
        cryptoSelect.appendChild(option);
    });