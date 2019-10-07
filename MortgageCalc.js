var term;
var rate;
var principal;
var monthlyPayment;

window.onload = function()
{
  document.getElementById("principal").focus();
  document.getElementById("sbt").onclick = getValues;
};

//use toFixed(2) to set the precision of the mPayment. Use it on an int.
function getValues()
{
  term = document.getElementById("term").value;
  rate = document.getElementById("rate").value;
  principal = document.getElementById("principal").value;
  rate /= 1200;
  term *= 12;
  monthlyPayment = principal*(rate * Math.pow((1 + rate), term))/(Math.pow((1 + rate), term) - 1);
  document.getElementById("monthlyPayment").value = "$" + monthlyPayment.toFixed(2);
};
