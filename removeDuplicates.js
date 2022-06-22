var removeDuplicates = function(nums) {
    if(nums.length<=1){
      return nums.length;
    } 
    
    let ele = nums[0];
    let count=1;
    for(let i=1;i<nums.length;i++){
      if(nums[i]!==ele){
          nums[count]=nums[i]
        ele=nums[i];
        count++;
      }
    }
     return count;
 };