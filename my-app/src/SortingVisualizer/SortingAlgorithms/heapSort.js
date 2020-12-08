import {swap} from './quickSort';

export function getHeapSortAnimations(array) {
    const animations = [];

    let n = array.length;
   
    heapSort(array, n, animations);
    return animations;
}
//using max heap concept to sort
function heapSort(array, n, animations)
{
  
  //first we have to build the max heap based tree
  //start at the first node that isn't a leaf node.
  for (let i = Math.floor(n/2-1); i >= 0; i--)
  {
    heapify(array, n, i, animations);
  }
  //Next, we have to "delete" all of the nodes on the tree, starting from the root.
  //To do so, we swap the "last" node with the root.
  //While doing so, we want to make sure the remaining nodes are in max heap conditions.
  for ( let i = n-1; i > 0; i--)
  {
    animations.push( [ 0, i ] );
    animations.push( [ 0, array[i] ] );
    animations.push( [ i, array[0] ] );
    animations.push( [ 0, i ] );

    swap(array, 0, i);
    heapify(array, i, 0, animations);
  }
}

// moves the largest element in a tree to the root
function heapify(array, n, i, animations)
{
  let largest = i;
  let left = 2*i + 1;
  let right = 2*i + 2;


  while ( left < n && array[left] > array[largest] )
  {
    largest = left;
  }

  while ( right < n && array[right] > array[largest] )
  {
    largest = right;
  }
  let heapSwaps = [];
  if (largest !==  i)
  {
    animations.push( [ largest, i ] ); // on
    animations.push( [ largest, array[i] ] ); // swap
    animations.push( [ i, array[largest] ] );
    animations.push( [ largest, i ] ); // off
    swap( array, largest , i);

    heapify( array, n, largest, animations);
  }
}

