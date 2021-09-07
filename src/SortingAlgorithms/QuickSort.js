//Quicksort algorithm adapted from https://github.com/ignacio-chiazzo/Algorithms-Leetcode-Javascript/blob/master/SortingAlgorithms/QuickSort.js

export function getQuickSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array; 
    quickSort(array,0,array.length-1,animations)
    return animations;
  }


  function swap(items, leftIndex, rightIndex,animations){
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
    animations.push([leftIndex,items[leftIndex],rightIndex,items[rightIndex]])
}
function partition(items, left, right,animations) {
    
    var pivotIndex   = Math.floor((right + left) / 2), //middle element
        pivot   = items[pivotIndex],
        i       = left, //left pointer
        j       = right; //right pointer
    while (i <= j) {
        while (items[i] < pivot) {
            animations.push([i,"black"])
            animations.push([i,"green"])
            i++;
        }
        while (items[j] > pivot) {
            animations.push([j,"black"])
            animations.push([j,"green"])
            j--;
        }
        if (i <= j) {
            swap(items, i, j,animations); //swapping two elements
            i++;
            j--;
        }
    }
    return i;
}

function quickSort(items, left, right,animations) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right,animations); //index returned from partition
        animations.push([index,"blue"]);
        animations.push([index,"green"]);
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(items, left, index - 1,animations);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(items, index, right,animations);
        }
    }
    return items;
}