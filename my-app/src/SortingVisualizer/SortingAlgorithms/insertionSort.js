import {swap} from './quickSort';

export function getInsertionSortAnimations(array) {
    const animations = [];
    insertionSort( array, animations );
    return animations;
  }

  function insertionSort( array, animations )
  {
    let n = array.length;
    for ( let i = 1; i < n; i ++)
    {
      let j = i;

      while ( j > 0 && array[j-1] > array[j])
      {
        animations.push( [ j-1, j ] );
        animations.push( [ j-1, array[j] ] );
        animations.push( [ j, array[j-1] ] );
        animations.push( [ j-1, j ] );
        swap( array, j - 1 , j);
        j--;
      }
    }
  }