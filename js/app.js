var inputArea = document.querySelector("#inputArea"),
  outputArea = document.querySelector("#outputArea");

inputArea.addEventListener('input', function () {

  var str = inputArea.value.trim();
  var res = str.split(/[+*-/]/);

  var num1 = res[0];
  var num2 = res[1];
  var operator;
  str.replace(/(\d+)\s?([*+-/])\s?(\d+)/, function (match,num1,opt,num2){
    console.log(num1);
    console.log(opt);
    console.log(num2);
    operator=opt;
    

});
  if (str !== '') {
    if (operator=='+') {
      var result = parseInt(num1) + parseInt(num2);
      if (!isNaN(result)) {
        outputArea.value = result;
      }

    } else if (operator=='-') {
      var result = parseInt(num1) - parseInt(num2);
      if (!isNaN(result)) {
        outputArea.value = result;
      }

    } else if (operator=='*') {
      var result = parseInt(num1) * parseInt(num2);
      if (!isNaN(result)) {
        outputArea.value = result;
      }

    } else if (operator=='/') {
      var result = parseInt(num1) / parseInt(num2);
      if (!isNaN(result)) {
        outputArea.value = result;
      }

    } else {

      outputArea.value = "typing..";
    }
  } else {
    outputArea.value = '';
  }


});