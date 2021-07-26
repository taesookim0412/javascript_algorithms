/**
 * @param {number[]} nums
 * @return {boolean}
 */

//one pass
var canJump = function(nums) {
    let maxIndex = 0;
    for (let i = 0; i < nums.length; i++){
        maxIndex -= 1;
        maxIndex = Math.max(maxIndex, nums[i]);
        //Early termination
        if (maxIndex >= nums.length - 1 || i === nums.length - 1){
            return true;
        }
        // Base Case
        if (maxIndex === 0){
            return false;
        }
    }
    return true;
}

// //recursive
// let res = false;

// var canJump = function(nums, currentIdx=0) {
//     if (currentIdx >= nums.length - 1){
//         return true;
//     }
//     const currentJumpAmount = nums[currentIdx];
//     for (let i = 1; i < currentJumpAmount + 1; i++){
//         if (canJump(nums, currentIdx + i))
//             {
//                 return true;
//             }
//     }
//     return false;
// };
