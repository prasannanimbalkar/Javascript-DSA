// Ques 1: Implement Bubble Sort in JavaScript
// Write a function to sort the given array nums in ascending order.
// Input: nums = [29,10,14,37,14] ->>>>>Output：［10,14,14,29,37］

const bubbleSort = (arr) => {
    const n = arr.length
    for (let i = 0; i < arr.length; i++) {
        for (j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }

    return arr
}
// Best Time Complexity = 0(n)
// Worst Time Complexity = 0(n^2)
// Average Time Complexity = 0(n^2)

// Space Complexity = 0(1)



// function bubbleSort(nums) {
//     let n = nums.length;
//     let swapped;

//     do {
//         swapped = false;
//         for(let i = 0; i < n - 1; i++) {
//             if(nums[i] > nums[i + 1]) {
//                 // Swap the numbers
//                 let temp = nums[i];
//                 nums[i] = nums[i + 1];
//                 nums[i + 1] = temp;
                
//                 swapped = true;
//             }
//         }
//         n--;  // Reduce the size of the unsorted portion
//     } while(swapped);  // Repeat until no swaps are made

//     return nums;
// }


console.log(bubbleSort([29,10,14,37,14,2]))