// fisher-yates

/**
  0  1  2 
[ 1, 2, 3, 4, 5]
Where ever the pointer is, pick a random index between 0 
and the pointers position and swap those two elements.
*/

function swap( arr, i1, i2 ) {
    return [ arr[ i1 ], arr[ i2 ] ] = [ arr[ i2 ], arr[ i1 ] ]
  }
  function randomIntUpTo(num) {
    return Math.round(num * Math.random())
  }
  
  export function shuffle( arr ) {
    for (let pointerPosition = 1; pointerPosition < arr.length; pointerPosition++ ) {
      let swapIndex = randomIntUpTo(pointerPosition)
      swap(arr, swapIndex, pointerPosition)
    }
    return arr
  }
  
  