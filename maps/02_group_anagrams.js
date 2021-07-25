var groupAnagrams = function(strs) {
    const res = {};
    for (let str of strs){
        const sorted_str = str.split('').sort();
        if (res[sorted_str] === undefined){
            res[sorted_str] = [str];
        }
        else{
            res[sorted_str].push(str);
        }
    }
    return Object.values(res);

};
