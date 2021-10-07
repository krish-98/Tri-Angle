const baseValue = document.querySelector("#base-value")
const heightValue = document.querySelector("#height-value")
const calculate = document.querySelector("#calculate")
const showMessage = document.querySelector("#show-message")


const areaOfTriangle = () => {
  const area = 1/2 * (Number(baseValue.value) * Number(heightValue.value))

  if (area > 0) {
    showMessage.innerText = `The Area is ${area}`
  } else {
    showMessage.innerText = `The value must be postive and greater than 0 `
  }
}


calculate.addEventListener("click", areaOfTriangle)