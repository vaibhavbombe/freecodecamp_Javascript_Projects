//Return true if the passed string looks like a valid US phone number.

//The user may fill out the form field any way they choose as long as it has the format of a valid US number. The following are examples of valid formats for US numbers (refer to the tests below for other variants):

//Solution: 

function telephoneCheck(str) {
    if (!balancedParens(str)){
    return false;
  }
  
  var newStr = str.replace(/\s/g, '');
  
  var patt = /^1?\(?\d{3}-?\)?\d{3}-?\d{4}$/;
  
  return patt.test(newStr);

}



telephoneCheck("555-555-5555");

function balancedParens(string){  
  var stack = [];
  var pairs = {
    '[':']',
    '{':'}',
    '(':')'
  };
  var closers = {
    ')': 1,
    ']': 1,
    '}': 1
  };
  for(var i = 0; i < string.length; i++){
    var cur = string[i];
    if(pairs[cur]){
      console.log(cur,"----",pairs[cur]);
      stack.push(pairs[cur]);
    } else if(cur in closers){
      if(stack[stack.length -1] === cur){
        stack.pop();
      } else{
        return false;
      }
    }
  }
  return !stack.length;
}

telephoneCheck("555-555-5555");