var reverseWords = function(s) {
    let words = s.trim().split(" ");
    words = words.filter(a => a != '');
    words.reverse();
    return words.join(" ");

};
