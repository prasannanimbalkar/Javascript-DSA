// Sort() Method in Javascript
const fruits = ["dragon fruit", "apple", "date", "cherry", "banana"];
console.log(fruits.sort());




const nums = [10, 5, 18, 1, 27];

const compareFunction = (a, b) => {
     // 1. <0 => a comes first
    // 2.0 => nothing changes
    // 3. >0 => b comes first
    return a - b;
}
console.log(nums.sort())
console.log(nums.sort(compareFunction));





const people = [
    { name: "John", age: 25 },
    { name: "Jane", age: 30 },
    { name: "Doe", age: 40 },
    { name: "Alice", age: 42 },
    { name: "Bob", age: 35 },
    { name: "Charlie", age: 28 },
    { name: "Diana", age: 32 },
    { name: "Eddie", age: 29 },
    { name: "Fay", age: 24 },
    { name: "George", age: 38 }
];

const compareFunctionForobj = (a, b) => {
    // 1. <0 => a comes first
    // 2.0 => nothing changes
    // 3. >0 => b comes first
    return a.age - b.age;
}
console.log(people.sort(compareFunctionForobj));
console.log(people.sort());
