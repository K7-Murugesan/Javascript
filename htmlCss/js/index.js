function findPairsWithSum(arr, targetSum) {
    const result = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === targetSum) {
          result.push([arr[i], arr[j]]);
        }
      }
    }
    return result;
  }
  
  const arr = [2, 1, 3, 6];
  const targetSum = 4;
  
  const pairs = findPairsWithSum(arr, targetSum);
  
  console.log(`Pairs with sum ${targetSum}:`, pairs);
  