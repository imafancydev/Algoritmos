const reverseString = (s) => {
    for (let i = 0, l = s.length - 1; i < l; i++, l--) {
        [s[i], s[l]] = [s[l], s[i]]
    }
};