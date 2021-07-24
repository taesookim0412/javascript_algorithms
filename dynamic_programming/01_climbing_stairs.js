/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n){
    const dp = new Array(n + 1);
    dp[1] = 1;
    dp[2] = 2;
    return helper(n, dp);
}

var helper = function(n, dp) {
    if (n == 1) {
        return 1
    }
    if (n == 2) {
        return 2
    }
    if (dp[n] === undefined){
        dp[n] = helper(n - 1, dp) + helper(n - 2, dp);
    }
    return dp[n];
};
