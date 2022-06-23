var isPalindrome = function(x) {
    let str =x+''
    let splitString = str.split("");
     let reverseArray = splitString.reverse();
     let joinArray = reverseArray.join("");
     if(x=== +joinArray){
       return true;
     }
     return false
   
};