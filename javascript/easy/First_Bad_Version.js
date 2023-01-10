/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

// my code
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */

  return function (n) {
    let left = 1;
    let right = n;
    let mid;

    while (left <= right) {
      mid = Math.floor((left + right) / 2);
      if (!isBadVersion(mid)) {
        left = mid + 1;
      } else {
        if (!isBadVersion(mid - 1)) return mid;
        right = mid - 1;
      }
    }
    return mid;
  };
};

// other code
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    //Ý TƯỞNG LÀ CỨ KIỂM TRA XME THẰNG Ở GIỮA CHUỖI CÓ PHẢI LÀ BADVERSION KHÔNG, NẾU CÓ
    /// NẾU CÓ THÌ TÌM TỪ ĐẦU ĐẾN THẰNG Ở GIỮA THÔI (END = MID)
    // NẾU KHÔNG THÌ THÌ LẠI TÌM TỪ GIỮA (START = MID +1)
    let start = 1;
    let end = n;
    while (start < end) {
      let mid = start + Math.floor((end - start) / 2);
      if (isBadVersion(mid)) {
        end = mid;
      } else {
        start = mid + 1;
      }
    }
    return start;
  };
};
