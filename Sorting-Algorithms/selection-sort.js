// Ques 2: Implement Selection Sort in JavaScript
// Write a function to sort the given array nums in ascending order.
// Input: nums = [29,10,14,37,14] -----›››≥≥ Output: [10,14,14,29,37]

function selectionSort(nums) {
    let n = nums.length;

    for(let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for(let j = i + 1; j < n; j++) {
            if(nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        // Swap nums[i] with the smallest number found, nums[minIndex]
        if (minIndex !== i) {
            let temp = nums[i];
            nums[i] = nums[minIndex];
            nums[minIndex] = temp;
        }
    }

    return nums;
}

console.log(selectionSort([29,10,14,37,14]));
// Time Complexity = 0(n^2)
// Space Complexity = 0(1)



// Divide the List: Conceptually, divide the input list into two parts: a sorted section and an unsorted section. At the start, the sorted section is empty, while the unsorted section contains all the elements.

// Find the Smallest Element: Scan through the unsorted section and find the smallest element.

// Swap: Swap this smallest element with the first element in the unsorted section. After this step, the sorted section has grown by one element, while the unsorted section has shrunk by one element.

// Repeat: Continue the process of finding the smallest element in the unsorted section and swapping it with the first element of the unsorted section until the entire list is sorted.

// To provide a clearer understanding, let's walk through the sorting process with the provided example:

// Input: nums = [29,10,14,37,14]

// First Iteration:

// Sorted section: (empty)
// Unsorted section: [29,10,14,37,14]
// Smallest element in unsorted section: 10
// Swap the first element of unsorted section (29) with 10: [10,29,14,37,14]
// Second Iteration:

// Sorted section: [10]
// Unsorted section: [29,14,37,14]
// Smallest element in unsorted section: 14
// Swap the first element of unsorted section (29) with 14: [10,14,29,37,14]
// Third Iteration:

// Sorted section: [10,14]
// Unsorted section: [29,37,14]
// Smallest element in unsorted section: 14
// Swap the first element of unsorted section (29) with 14: [10,14,14,37,29]
// Fourth Iteration:

// Sorted section: [10,14,14]
// Unsorted section: [37,29]
// Smallest element in unsorted section: 29
// Swap the first element of unsorted section (37) with 29: [10,14,14,29,37]
// Fifth Iteration:

// Sorted section: [10,14,14,29,37]
// Unsorted section: (empty)
// No more elements to sort.
// Output: [10,14,14,29,37]

// By the end of this process, the entire list is sorted. As can be seen, the sorted section grows by one element with each iteration, while the unsorted section shrinks by one element. This continues until the entire list is sorted.