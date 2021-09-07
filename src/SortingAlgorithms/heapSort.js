//heapSort adapted from https://www.geeksforgeeks.org/heap-sort/
export function getHeapSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array; 
    sort(array,animations);
    animations.push([0,"magenta"])
    return animations;
  }

  function sort(arr,animations)
  {
      var n = arr.length;
      // Build heap (rearrange array)
      for (var i = Math.floor(n / 2) - 1; i >= 0; i--)
          heapify(arr, n, i,animations);

      // One by one extract an element from heap
      for (i = n - 1; i > 0; i--) {
          // Move current root to end
          var temp = arr[0];
          arr[0] = arr[i];
          arr[i] = temp;
          animations.push([0,arr[0],i,arr[i]])
          animations.push([i,"magenta"])

          // call max heapify on the reduced heap
          heapify(arr, i, 0,animations);
      }
  }

  // To heapify a subtree rooted with node i which is
  // an index in arr[]. n is size of heap
  function heapify(arr, n, i,animations)
  {
      var largest = i; // Initialize largest as root
      var l = 2 * i + 1; // left = 2*i + 1
      var r = 2 * i + 2; // right = 2*i + 2

      // If left child is larger than root
      if (l < n && arr[l] > arr[largest])
          largest = l;
          animations.push([largest,"black"])

      // If right child is larger than largest so far
      if (r < n && arr[r] > arr[largest])
          largest = r;
          animations.push([largest,"green"])

      // If largest is not root
      if (largest !== i) {
          var swap = arr[i];
          arr[i] = arr[largest];
          arr[largest] = swap;
          animations.push([largest,arr[largest],i,arr[i]])
          animations.push([i,"red"])
          animations.push([largest,"blue"])

          // Recursively heapify the affected sub-tree
          heapify(arr, n, largest,animations);
      }
  }