//description - as a product manager, you are tasked to find at what point a product versioned has failed the quality check. Every subsequent version after the initial failed version will fail as well. You are given an API called isBadVersion(version) that takes in a specific version and determines whether that version failed or not. The versions are represented as 1 - n and you must right a function that uses this API the least amount of times possible to guarentee to find the inital bad version
//params - {number} n 
//return - {number}
//solution - use binary search algorithm to find the first bad version

var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let left = 1; // Starting version number
        let right = n; // Ending version number

        while (left < right) {
            const mid = left + Math.floor((right - left) / 2);
            if (isBadVersion(mid)) {
                right = mid; // The first bad version is to the left
            } else {
                left = mid + 1; // The first bad version is to the right
            }
        }

        return left; // Left will point to the first bad version
    };
};
