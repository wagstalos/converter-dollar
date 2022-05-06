let valueDol = document.getElementById("dol");
let BASE_URL = "https://economia.awesomeapi.com.br/json/last/USD-BRL";

fetch(BASE_URL)
  .then((response) => response.json())
  .then((json) => {
    valueDol.textContent = json.USDBRL.ask;
  });

// setTimeout(() => {
//   console.log(valueDol.textContent)
// },300);

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
    valueConverted = inputValue.value * valueDol.textContent;
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
