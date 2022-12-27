/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

// my code
var intersect = function (nums1, nums2) {
  const answer = [];
  if (nums1.length > nums2.length) {
    for (let i = 0; i < nums2.length; i++) {
      for (let j = 0; j < nums1.length; j++) {
        if (nums2[i] === nums1[j]) {
          answer.push(nums2[i]);
          nums1[j] = -1;
          break;
        }
      }
    }
  } else {
    for (let i = 0; i < nums1.length; i++) {
      for (let j = 0; j < nums2.length; j++) {
        if (nums1[i] === nums2[j]) {
          answer.push(nums1[i]);
          nums2[j] = -1;
          break;
        }
      }
    }
  }

  return answer;
};

// other code
/**
var intersect = function(nums1, nums2) {
    target = [];
    if (nums1.length > nums2.length) {
        nums2.forEach((num) => {
            if (nums1.includes(num)) {
                target.push(num)
                nums1.splice(nums1.indexOf(num), 1);
            }
        })
    } else {
        nums1.forEach((num) => {
            if (nums2.includes(num)) {
                target.push(num)
                nums2.splice(nums2.indexOf(num), 1);
            }
        })
    }
    return target
};
*/
