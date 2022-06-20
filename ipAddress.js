//day 2., question 2,https://leetcode.com/problems/defanging-an-ip-address/


var defangIPaddr = function(address) {
    let str =""
    for(let i=0;i<address.length;i++){
        if(address[i]!=="."){
            str+=address[i]
        }else{
            str+="[.]"
        }      }
   return str;
  
};