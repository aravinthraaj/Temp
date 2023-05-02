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

console.log(quicksort([3, 2, 1,-1,-5]))
