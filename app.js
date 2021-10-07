const inputOne = document.querySelector("#input-1")
const inputTwo = document.querySelector("#input-2")
const inputThree = document.querySelector("#input-3")
const checkTriangle = document.querySelector("#check-triangle") 
const showMessage = document.querySelector("#show-message")

checkTriangle.addEventListener("click", () => {
  const userTriangle = Number(inputOne.value) + Number(inputTwo.value) + Number(inputThree.value)

  if (userTriangle === 180) { 
    showMessage.innerText = "Yay!, that's make a triangle"
  } else {
    showMessage.innerText = "Oops!, that doesn't make a proper triangle"
  }
})