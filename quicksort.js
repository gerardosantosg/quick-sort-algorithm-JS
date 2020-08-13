// Quick Sort Algorithm
// Average Performance -----> O(n log n)
// Worst Case Performance -----> O(n^2)

function quickSort(originalArray) {
  if (originalArray.length <= 1) return originalArray;
  else {
    let left = [];
    let right = [];
    let pivot = originalArray.pop();
    for (let item of originalArray) {
      if (item < pivot) left.push(item);
      else right.push(item);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
}
