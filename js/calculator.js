var keys = document.querySelectorAll('#calculator span');
var operators = ['+', '-', '*', '÷'];
var decimalAdded = false;

//Add onclick event to all the keys and perform operators
for (var i = 0; i < keys.length; i++) {
  keys[i].onclick = function(e) {
    //Get the input and button values
    var input = document.querySelectorAll('.screen');
    var inputVal = input.innerHTML;
    var btnVal = this.innerHTML;
    //Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
    //If clear is pressed, erase everything
    if(btnVal == 'C') {
      input.innerHTML = '';
      decimalAdded = false;
      //Now, just append the key values (btnValue) to the input string and finally use javascript's eval function to get the result
      //If eval key is pressed, calculate and display the result
    } else if(btnVal == '=') {
      var equation = inputVal;
      var lastChar = equation[equation.length - 1];
        //Replace all instances of x and ÷ with * and / respectively. This can be done easily using regex and the 'g' tag which will replace all instances of the matches character/substring
        equation = equation.replace(/x/g, '*').replace(/÷/, '/');
      //Final thing to do is checking the last character of the equation. If it's an operator or a decimal, remove it
      if(operator.indexOf(lastChar) > -1 || lastChar == '.')
        equation = equation.replace(/.$/, '');
      if(equation)
      input.innerHTML = eval(equation);
      decimalAdded = false;
    }

    //indexOf works ony in IE9+
    else if(operators.indexOf(btnVal) > -1) {
      //Operator is clicked
      //Get the last character from the equation
      var lastChar = inputVal[inputVal.length - 1];

      //Only add operator if input is not empty and there is no operator at the last
      if(inputVal != '' && operators.indexOf(lastChar) == -1)
      input.innerHTML += btnVal;

      //Allow minus if the string is empty
      else if(inputVal == '' && btnVal == '-')
      input.innerHTML += btnVal;

      //Replace the last operator (if exists) with the newly pressed operator
      if(operators.indexOf(lastChar) > - 1 && inputVal.length > 1) {
        //Here, '.' matches any character while $ denotes the end of string, so anything (will be an operator in this case) at the end of string will get replaced by new operator
        input.innerHTML = inputVal.replace(/.$/, btnVal);
      }

      decimalAdded = false;
    }
    //Now only the decimal problem is left. We can solve it easily using a flag 'decimalAdded' which we'll set once the decimal is added and prevent more decimals to be added once it's set. It will reset when an operator, eval or clear key is pressed.
    else if(btnVal == '.') {
      if(!decimalAdded){
        input.innerHTML += btnVal;
        decimalAdded = true;
      }
    }
    //if any other key is pressed, just append it
    else {
      input.innerHTML += btnVal;
    }
    //prevent page jumps
    e.preventDefault();
  }
}
