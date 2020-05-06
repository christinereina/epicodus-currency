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
      console.log(response);
    })();
  });
});

    

//     function getConversion(response) {
//       if (response) {
//         return $('.ZAR').text(`The humidity in ${city} is ${response.main.humidity}%`);
//       } else {
//       return "error";
//       }
//     }

//   });
// });