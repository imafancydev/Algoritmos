const firstUniqChar = (s) => {
    let characterCounter = new Map();
    for (let i = 0; i < s.length; i++) {
        characterCounter.set(s[i], (characterCounter.get(s[i]) || 0) + 1)
    }
    for (let i = 0; i < s.length; i++) {
        let value = characterCounter.get(s[i]);
        if (value === 1) {
            return i;
        }
    }
    return -1;
};