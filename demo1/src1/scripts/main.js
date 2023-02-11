let myHeading = document.querySelector('h1')
myHeading.textContent = 'Hello World'

function multiply(num1, num2) {
  let result
  try {
    result = num1 * num2
  } catch (error) {
    console.log(error.message)
  }
  return result
}

let a = multiply(10, 20)
let b = multiply('10', 10)
console.log(a, b)

// document.querySelector('html').addEventListener('click',()=>{
//   console.log(this);
//   alert('点了HTML')
// })

let myButton = document.querySelector('button')
function setUserName() {
  let myName = prompt('请输入你的姓名')
  if (!myName) setUserName()
   else {
    localStorage.setItem('name', myName)
    myHeading.textContent = `Mozilla 酷毙了 ${myName}`
  }
  if (!localStorage.getItem('name')) setUserName()
  else {
    let storedName = localStorage.getItem('name')
    myHeading.textContent = `Mozilla 酷毙了 ${storedName}`
  }
}

myButton.onclick = () => {
  setUserName()
}
