// 2956. Find Common Elements Between Two Arrays



// You are given two integer arrays nums1 and nums2 of sizes n and m, respectively. Calculate the following values:

// answer1 : the number of indices i such that nums1[i] exists in nums2.
// answer2 : the number of indices i such that nums2[i] exists in nums1.
// Return [answer1,answer2].





/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var findIntersectionValues = function(nums1, nums2) {
    
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)

    let answer1 = 0
    let answer2 = 0


    for(let num of nums1){
        if(set2.has(num)){
            answer1 += 1
        }
    }

    for(let num of nums2){
        if(set1.has(num)){
            answer2 += 1
        }
    }

    return [answer1, answer2]
};