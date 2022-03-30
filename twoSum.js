var twoSum = function(nums, target) {
    
    const obj = {}
    
    for(let i = 0; i < nums.length - 1; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[j] + nums[i] === target) {
                obj.target = [i, j]
                return obj.target
            } 
        }
    }
    return
};  