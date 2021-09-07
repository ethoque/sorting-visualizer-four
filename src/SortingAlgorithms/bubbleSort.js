//bubbleSort adapted from https://www.geeksforgeeks.org/bubble-sort/
export function getBubbleSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array; 
    bubbleSort(array,animations);
    animations.push([0,"turquoise"])
    animations.push([1,"turquoise"])
    return animations;
  }

  function swap(arr, xp, yp)
{
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
  
// An optimized version of Bubble Sort
function bubbleSort( arr, animations)
{
var i, j;
var n = arr.length
for (i = 0; i < n-1; i++)
{
    if(i>0){
    animations.push([arr.length-i,"turquoise"])
    }
    for (j = 0; j < n-i-1; j++)
    {
        if (arr[j] > arr[j+1])
        {
        swap(arr,j,j+1);
        animations.push([j,arr[j],j+1,arr[j+1]])

        }
    }
  
}
}