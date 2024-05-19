function merge(nums1, m, nums2, n) {

    let i = m - 1; // A pointer to the last element in the m elements of nums1
    let j = n - 1; // A pointer to the last element in nums2
    let k = m + n - 1; // A pointer to the last element in the resulting array of nums 1

    // We go from the end of the nums1 and nums2 arrays
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }
        k--;
    }

    // If there are any remaining elements in nums2, copy them
    while (j >= 0) {
        nums1[k] = nums2[j];
        j--;
        k--;
    }
}

// Usage example:
const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

merge(nums1, m, nums2, n);
console.log(nums1); // [1, 2, 2, 3, 5, 6]
