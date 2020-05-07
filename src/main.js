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
        $('#output').text(`Your USD ${amount} is ${(response.conversion_rates.AED*amount).toFixed(2)} Dirham 🇦🇪`);
       } else if (convertCurrency === "ARS") {
          $('#output').text(`Your USD ${amount} is ${(response.conversion_rates.ARS*amount).toFixed(2)} Peso 🇦🇷`);
        } else if (convertCurrency === "AUD") {
          $('#output').text(`Your USD ${amount} is ${(response.conversion_rates.AUD*amount).toFixed(2)} Dollar🇦🇺 `);
        } else if (convertCurrency === "BGN") {
          $('#output').text(`Your USD ${amount} is ${(response.conversion_rates.BGN*amount).toFixed(2)} Lev 🇧🇬`);
        } else if (convertCurrency === "BRL") {
          $('#output').text(`Your USD ${amount} is ${(response.conversion_rates.BRL*amount).toFixed(2)} Real🇧🇷`);
        } else if (convertCurrency === "BSD") {
          $('#output').text(`Your USD ${amount} is ${(response.conversion_rates.BSD*amount).toFixed(2)} Dollar 🇧🇸`);
        } else if (typeof(response) === "string") {
            $("#output").html(response);
          } 
        }
  });
});