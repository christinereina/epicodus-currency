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
        $('#output').text(`Your USD ${amount} is ${response.conversion_rates.AED*amount} Dirham 🇦🇪 `);
       } else if (convertCurrency === "ARS") {
          $('#output').text(`Your USD ${amount} is ${response.conversion_rates.ARS*amount} Peso 🇦🇷`);
        } else if (convertCurrency === "AUD") {
          $('#output').text(`Your USD ${amount} is ${response.conversion_rates.AUD*amount} Dollar🇦🇺 `);
        } else if (convertCurrency === "BGN") {
          $('#output').text(`Your USD ${amount} is ${response.conversion_rates.BGN*amount} Lev 🇧🇬`);
        } else if (convertCurrency === "BRL") {
          $('#output').text(`Your USD ${amount} is ${response.conversion_rates.BRL*amount} Real🇧🇷 `);
        } else if (convertCurrency === "BSD") {
          $('#output').text(`Your USD ${amount} is ${response.conversion_rates.BSD*amount} Dollar 🇧🇸`);
      }
   }
  });
});