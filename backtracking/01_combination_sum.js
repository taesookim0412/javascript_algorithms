let res = new Set();
var combinationSum = function (candidates, target) {
    res = new Set();
    backtrack([], 0, candidates, target);
    return [...res];
};

function backtrack(path, new_i, candidates, target = 0, currentSum = 0) {
    if (currentSum === target) {
        res.add(path);
        return;
    } else if (currentSum > target) {
        return;
    }
    for (let i = new_i; i < candidates.length; i++) {
        backtrack([...path, candidates[i]], i, candidates, target, currentSum + candidates[i]);
    }
}

console.log(
    combinationSum([2, 3, 6, 7],
        7)
)
