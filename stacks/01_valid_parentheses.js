function isValid(s){
    const openers = {
        ')': '(',
        '}': '{',
        ']': '['}
    const stack = [];
    for (let c of s){
        if (c === ')' || c === '}' || c === ']'){
            if (stack.length == 0){
                return false;
            }
            else if (stack.pop() !== openers[c]){
                return false;
            }
        }
        else{
            stack.push(c);
        }
    }

    return stack.length == 0;
}
