import $ from "jquery";
import "./styles.css";
import { CurrencyExchanger } from "./../src/exchanger.js";

$(document).ready(function() {

  $('#form').submit(function(event) {
    event.preventDefault();
    const amount = $("#usd").val();
    const convertCurrency = $("#convert").val();

    (async () => {
      let currencyExchanger = new CurrencyExchanger();
      const response = await currencyExchanger.getCurrency();
      getConversion(response);
    })();

    function getConversion(response) {
      if (convertCurrency === "AED") {
        $('#output').text(`Your USD ${amount} is ${response.conversion_rates.AED} Dirham 🇦🇪 `);
       } else if (convertCurrency === "ARS") {
          $('#output').text(`Your USD ${amount} is ${response.conversion_rates.ARS} Peso 🇦🇷`);
        } else if (convertCurrency === "AUD") {
          $('#output').text(`Your USD ${amount} is ${response.conversion_rates.AUD} Dollar🇦🇺 `);
        } else if (convertCurrency === "BGN") {
          $('#output').text(`Your USD ${amount} is ${response.conversion_rates.BGN} Lev 🇧🇬`);
        } else if (convertCurrency === "BRL") {
          $('#output').text(`Your USD ${amount} is ${response.conversion_rates.BRL} Real🇧🇷 `);
        } else if (convertCurrency === "BSD") {
          $('#output').text(`Your USD ${amount} is ${response.conversion_rates.BSD} Dollar 🇧🇸`);
      } else if (convertCurrency === "NaN") {
        $('#output').text(`There was an error handling your request.`);
      }
   }
  });
});