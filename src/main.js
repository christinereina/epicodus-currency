import $ from "jquery";
import "./styles.css";
import { CurrencyExchanger } from "./../src/exchanger.js";

$(document).ready(function() {

  $('#form').submit(function(event) {
    event.preventDefault();
    const amount = $("#usd").val();
    console.log(amount);
    const convertCurrency = $("#convert").val();

    (async () => {
      console.log("Made it here.");
      let currencyExchanger = new CurrencyExchanger();
      const response = await currencyExchanger.getCurrency();
      getConversion(response);
      console.log(response);
    })();

    function getConversion(response) {
      if (response) {
        $('#output').text(`Your USD ${amount} is ${response.conversion_rates.AED}`);
      } else {
        $('#output').text(`There was an error handling your request.`);
      }
   }
  });
});