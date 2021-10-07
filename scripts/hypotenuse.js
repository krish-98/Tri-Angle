const baseValue = document.querySelector("#base-value")
const heightValue = document.querySelector("#height-value")
const calculateHypo = document.querySelector("#calculate-hypo")
const showMessage = document.querySelector("#show-message")

const calculateHypotenuse = (a, b) => {
 const hypotenuse = Math.sqrt(a**2 + b**2)
 return hypotenuse
}

calculateHypo.addEventListener("click", () => {
  if(Number(baseValue.value) && Number(heightValue.value) > 0) {
    const hypo = calculateHypotenuse(baseValue.value, heightValue.value)
    showMessage.innerText = `The length of hypotenuse is  ${hypo}`
  }    
})

