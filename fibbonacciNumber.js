https://leetcode.com/problems/fibonacci-number/


var fib = function(n) {
 
    let left=0,right=1,add =0;
    if(n===0||n===1){
      return n;
    }
    for(let i=2;i<=n;i++){
      add=left+right;
      left=right;
      right=add;
      
    }
    return add;
  
    
      
  };