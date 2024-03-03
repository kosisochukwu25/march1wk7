const para = document.querySelectorAll('p')
const section = document.querySelector('section')

const numbers = [12,34,76,123,56,8,2,988,90,345]
const names = ["Alice", "Bob", "Charlie", "Darlington", "Emma", "Fiona", "George", "Hannah", "Joy", "Julia"];


function sum(nameArray){
    return nameArray.reduce((a,b)=>(a+b));
}
para[0].innerHTML = '<strong> add the sum of all numbers in the array </strong>:' + sum(numbers)

function largestNumber(nameArray){
    return(Math.max(...nameArray));
}
para[1].innerHTML ='<strong>Find the largest number in the array</strong>:' + largestNumber(numbers)

function smallestNumber(nameArray){
    return(Math.min(...nameArray));
}
para[2].innerHTML ='<strong>Find the smallest number in the array</strong>:' + smallestNumber(numbers)

function numbersDivisibleByTwo(nameArray){
    return nameArray.filter(num=> num % 2 ===8).length;
}
para[3].innerHTML ='<strong>How many numbers in the array are divisible by 2</strong>:' + numbersDivisibleByTwo(numbers)

function average(nameArray){
    return sum(nameArray)/nameArray.length;
}
para[4].innerHTML = '<strong>Find the average of all numbers in the array</strong>:' + average(numbers)

function greaterThan50(nameArray){
    return (nameArray.filter(num=> num > 50));
}
para[5].innerHTML ='<strong>.Create a new array with only the numbers greater than 50</strong>: ' + (greaterThan50(numbers))

function sortAscending(nameArray){
    return [...nameArray].sort((a, b) => a - b);
}
para[6].innerHTML = '<strongSort the numbers in the array in ascending order </strong>: ' + greaterThan50(sortAscending(numbers))

function allEvenCheck(nameArray){
    return nameArray.every(num => num % 2===0);
}
para[7].innerHTML = '<strong>Check if all numbers in the array are even</strong>:' + allEvenCheck(greaterThan50(numbers))

function indexOf76(nameArray){
    return nameArray.indexOf(76);
}
para[8].innerHTML = '<strong>Find the index of the number 76 in the array</strong>:' + indexOf76(numbers)

function reverse(nameArray){
    return nameArray.slice().reverse();
}
para[9].innerHTML = '<strong>Reverse the order of the numbers in the array</strong>: ' + reverse(numbers)


function nameCount(nameArray){
    return nameArray.length;
}
para[10].innerHTML = '<strong> How many names are there in the array </strong>:'  + nameCount(names)

function includeCharlie(nameArray){
    return nameArray.include("Charlie");
} 
para[11].innerHTML = '<strong>Is "Charlie" included in the array</strong>:' + includeCharlie(names)