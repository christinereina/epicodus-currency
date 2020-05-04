import $ from "jquery";
import { CurrencyExchanger } from "./exchanger";

$(document).ready(function() {
  $('#exchangeRate').submit(function() {
    event.preventDefault();
    let userUSD = $('#userAmt').val();
    let convert = $('#convertAmt').val();

(async () => {
  let exchangeService = new exchangeService();
  const response = await exchangeService.getExchangeRate();
  getElements(response);
  console.log(response);
})();

// function getElements (response) {
//   if (response) {
//     )
//   } else {

//   }
// }

});
});