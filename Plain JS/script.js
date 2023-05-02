import { Name, Age } from "./DatastructuresAlgorithm/bubblesort"
const button = document.querySelector("button")

button.addEventListener("click", () => {
  const arr = document.querySelector("#array").value.split(",").map(Number)
  document.querySelector("h2").innerHTML = quicksort(arr)
  console.log(quicksort(arr))
})

let val = Name("John")
let age = Age(26)
console.log(val + " and " + age)

// const bubbleSort = (array) => {
//   let swapped
//   do {
//     swapped = false
//     for (let i = 0; i < array.length; i++) {
//       if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
//         ;[array[i], array[i + 1]] = swap(array[i], array[i + 1])
//         swapped = true
//       }
//     }
//   } while (swapped)
//   return array
// }

const quicksort = (array) => {
  if (array.length <= 1) return array
  let pivot = array[array.length - 1]
  let left = []
  let right = []
  for (let i = 0; i < array.length - 1; i++) {
    array[i] < pivot ? left.push(array[i]) : right.push(array[i])
  }
  return [...quicksort(left), pivot, ...quicksort(right)]
}

let selected

const optionsList = []
const optionInput = document.querySelector("#select")
optionInput.addEventListener("click", () => {
  document
    .querySelector("#options-container")
    .classList.toggle("options-container")
})
const options = document.querySelectorAll(".select").forEach((node) => {
  node.addEventListener("click", () => {
    selected = node.innerHTML
    optionInput.value = selected
    console.log(selected)
    document
      .querySelector("#options-container")
      .classList.toggle("options-container")
  })
  optionsList.push(node.innerHTML)
})

console.log(optionsList)
