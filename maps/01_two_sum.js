/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let vals = {};
    for (let i = 0; i < nums.length; i++){
        const num = nums[i];
        const diff = (target - num).toString();
        //vals[diff] is the same as vals[diff.toString()]
        if (vals[diff] !== undefined){
            return [vals[diff], i]
        }
        vals[num] = i;
    }
    return []
};


