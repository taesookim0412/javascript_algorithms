var rob = function(nums) {
    if (nums.length <= 2){
        return Math.max(...nums);
    }
    const dp = new Array(nums.length + 1)
    dp[0] = 0
    dp[1] = nums[0]
    dp[2] = nums[1]

    for (let i = 3; i < nums.length + 1; i++){
        //dp[3] = max(dp[1], dp[0]) + nums[2]
        dp[i] = Math.max(dp[i-2], dp[i - 3]) + nums[i - 1]
    }
    return Math.max(dp[dp.length - 1], dp[dp.length - 2]);
};
