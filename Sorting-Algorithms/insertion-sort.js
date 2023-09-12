// Ques 3: Implement Insertion Sort in JavaScript
// Write a function to sort the given array nums in ascending order.
// Input: nums = [29,10,14,37,14,33,8,11]-›››>›Output: [8,10,11,14,14,29, 33,37]

/**
 * Insertion Sort Algorithm
 *
 * 1. Start from the second element: 
 *    - Assume the first element is sorted.
 *
 * 2. Compare the current element with the previous elements:
 *    - If the current element is smaller than the preceding element, 
 *      continue comparing with the elements before until reaching an 
 *      element smaller or the beginning of the array.
 *
 * 3. Shift elements:
 *    - During the comparison, shift each of the compared elements up 
 *      to make space for the current element. This is essentially finding 
 *      the correct position for the current element in the sorted portion 
 *      of the array.
 *
 * 4. Insert the current element:
 *    - Once the correct position is found (or the beginning of the array 
 *      is reached), insert the current element.
 *
 * 5. Repeat:
 *    - Continue this process for each element in the array.
 */



function insertionSort(nums) {
    for (let i = 1; i < nums.length; i++) { // Start from the second element
        let key = nums[i]; // This is the element we're looking to place
        let j = i - 1; // Start with the previous element

        // While the checked element is greater than our current 'key'
        // and we're still inside the array
        while (j >= 0 && nums[j] > key) {
            nums[j + 1] = nums[j]; // Shift the checked element up
            j = j - 1; // Move to the previous element
        }

        nums[j + 1] = key; // Place the 'key' in its correct location
    }
    return nums; // Return the sorted array
}

console.log(insertionSort([29,10,14,37,14,33,8,11]))