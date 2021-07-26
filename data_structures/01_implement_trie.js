let trieMap = {};

function Trie(){
    trieMap = {tail: false};
}

Trie.prototype.insert = function(word){
    let curr = trieMap;
    for (let char of word){
        if (curr[char] === undefined){
            curr[char] = {tail: false};
        }
        curr = curr[char];
    }
    curr.tail = true;
}

Trie.prototype.search = function(word){
    let curr = trieMap;
    for (let char of word){
        if(curr[char] === undefined){
            return false;
        }
        curr = curr[char];
    }
    return curr.tail === true;
}

Trie.prototype.startsWith = function(word){
    let curr = trieMap;
    for (let char of word){
        if(curr[char] === undefined){
            return false;
        }
        curr = curr[char];
    }
    return true;
}
