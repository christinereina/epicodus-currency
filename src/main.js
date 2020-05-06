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
        $('#output').text(`Your USD ${amount} is ${response.conversion_rates.AED}`);
       } else if (convertCurrency === "ARS") {
          $('#output').text(`Your USD ${amount} is ${response.conversion_rates.ARS}`);
        } else if (convertCurrency === "AUD") {
          $('#output').text(`Your USD ${amount} is ${response.conversion_rates.AUD}`);
        } else if (convertCurrency === "BGN") {
          $('#output').text(`Your USD ${amount} is ${response.conversion_rates.BGN}`);
        } else if (convertCurrency === "BRL") {
          $('#output').text(`Your USD ${amount} is ${response.conversion_rates.BRL}`);
        } else if (convertCurrency === "BSD") {
          $('#output').text(`Your USD ${amount} is ${response.conversion_rates.BSD}`);
      } else (convertCurrency === "NaN") {
        $('#output').text(`There was an error handling your request.`);
      }
   }
  });
});