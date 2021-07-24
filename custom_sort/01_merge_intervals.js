var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    const res = [];
    for (let interval of intervals){
        if (res.length > 0 && res[res.length-1][1] >= interval[0] && res[res.length-1][1] <= interval[1]){
            res[res.length - 1][1] = interval[1];
        }
        else if (res.length == 0){
            res.push(interval);
        }
        else if (interval[1] > res[res.length-1][1]){
            res.push(interval);
        }
    }
    return res;

};
