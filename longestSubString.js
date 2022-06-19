
//https://leetcode.com/problems/longest-substring-without-repeating-characters/
var lengthOfLongestSubstring = function(s) {
    let count =0;
    let str='';
    for(let i=0;i<s.length;i++){
        let index = str.indexOf(s[i]);
        if(index===-1){
            str +=s[i];
        if(count<str.length){
            count =str.length;
           
        }
        
    }else{
        let sl = str.slice(0,index+1);
        str=str.replace(sl,"");
        str +=s[i];
    }
    }
    return count;
};
console.log(lengthOfLongestSubstring("abcabcbb"));