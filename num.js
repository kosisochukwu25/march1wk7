const para = document.querySelectorAll('p')


let num1 =20
let num2 =5
let num3 =14
let num4 =28

let x,y,z,w

para[0].innerHTML = '<em>Add num1 and num2</em>:' +(num1 +num2)

para[1].innerHTML = '<em>Subtract num2 from num4</em>:' +(num4 -num2)

para[2].innerHTML = '<em>Divide num4 by num3</em>:' +(num4/num3)

para[3].innerHTML = '<em>Multiply num3 by 10</em>:' +(num3 * 10)

para[4].innerHTML = '<em>Divide num2 by num3</em>:' +(num2 / num3).toFixed(2)

para[5].innerHTML = '<em>Num1 to power 4</em>:' +(num1**4)

para[6].innerHTML = '<em>Remainder of num1 divded by num3</em>:' +(num1 % num3)

// ASSIGNMENT OPERATORS
// increase num1 with the value of num4
// num1 = num1 + num4

// num1 += num4

// mulitpy num3 by num2 and return the ans as the new value of num3

// num3 /= num2

// divide num3 by 10 and use that as the new value for num3 

// num3 /= 10



console.log(num1)
console.log(num3)