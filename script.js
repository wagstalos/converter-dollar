let valueDol = document.getElementById("dol");

const fetchDollar = () => {
  const BASE_URL = `http://economia.awesomeapi.com.br/json/last/USD-BRL`;
  fetch(BASE_URL)
    .then((response) => response.json())
    .then((json) => {
      //console.log(json);
      valueDol.textContent = json.USDBRL.ask;
      valor = valueDol.textContent;
      console.log(valor);
    });
};

fetchDollar();

//console.log(valueDol.textContent);

const form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);

const inputValue = document.getElementById("value-real");
const selectedCurrency = document.getElementById("currency");
const result = document.getElementById("result");
let valueConverted = 0;

function handleSubmit(e) {
  e.preventDefault();

  if (!inputValue.value || inputValue.value < 0) {
    alert("informe o valor correto");
    return;
  } else if (!selectedCurrency.value) {
    alert("Escolha uma moeda");
    return;
  }
  converter();
}

function converter() {
  if (selectedCurrency.value == "eur") {
    valueConverted = inputValue.value * 5.3;
    result.innerHTML = valueFormatter("pt-BR", "EUR");
  } else if (selectedCurrency.value == "dol") {
    valueConverted = inputValue.value * 5.09;
    result.innerHTML = valueFormatter("en-US", "USD");
  }

  //   inputValue.value = "";
  //   inputValue.value = "";
}

function valueFormatter(locale, currency) {
  const value = valueConverted.toLocaleString(`${locale}`, {
    style: "currency",
    currency: `${currency}`,
  });
  return `<span>🤑 </span>  ${value} <span>🤑 </span> `;
}
