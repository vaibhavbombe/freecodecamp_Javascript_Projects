//A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

//solution:

function palindrome(str) {
  
  str = str.toLowerCase(); 
  str = str.replace(/[^a-z0-9]/g, '');
  var backward = str.split('');
  backward = backward.reverse().join('').toString();
  
  if(backward === str){
    return true;
  } else {
    return false;
  }
}

palindrome("eye");
