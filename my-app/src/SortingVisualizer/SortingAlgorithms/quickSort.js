export function getQuickSortAnimations( array ) {
    const animations = [];
    const auxArray = [];

    let n = array.length;
    for (let i = 0; i < n; i++)
    {
        auxArray[i] = array[i];
    }

    let lower = 0;
    let upper = n - 1;
    
    quickSort( auxArray, lower, upper, animations ); 

    return animations;
}

function quickSort( auxArray, lower, upper, animations )
{
    if ( lower >= upper ) return;
    

    let loc_of_pivot = partition(auxArray, lower, upper, animations);
    quickSort( auxArray, lower, loc_of_pivot -1, animations );          // looks something like this: [......loc_of_pivot......]
    quickSort( auxArray, loc_of_pivot + 1, upper, animations );        // no need to mess with the pivot anymore, it's in the right spot
}

function partition(auxArray, lower, upper, animations) {
    
    

    let pivot = auxArray[lower];
    let start = lower; // index where the first element that is greater than the pivot is from the left
    let end = upper;   // index where the first element that is less than the pivot is from the right
    
    animations.push(lower); // (1)
    let traverse = [];      // (2)
    let swaps = [];
    let turnOffTraverse = []; 
    let selectLowerEnd = [];
    let second_swaps = [];

    while ( start < end )
    {
        traverse.push( [start, end] );
        turnOffTraverse.push( [start, end] );
        while ( auxArray[start] <= pivot ) // traverse along the auxArray from left to right until found element greater than pivot
        {

            start++;
        }

        while ( auxArray[end] > pivot ) // traverse along the auxArray from right to left until found element less than pivot
        {
            end--;
        }
        // highlight and swap the heights of the two bars
        if ( start < end )
        {
            swaps.push( [start, auxArray[end] ] );
            swaps.push( [end, auxArray[start] ] );
            swap( auxArray, start, end ); // start must be found before end
        }
    }
    selectLowerEnd.push( [lower, end] );
    second_swaps.push( [lower, auxArray[end] ] );
    second_swaps.push( [end, auxArray[lower] ] );
    
    
    swap( auxArray, lower, end ); // swap the pivot element with the 'end' index

    animations.push(traverse);
    animations.push(swaps);
    animations.push(turnOffTraverse);
    animations.push(selectLowerEnd);
    animations.push(second_swaps);
    animations.push( [lower, end] ); //change colors back

    return end;
}

function swap( auxArray, start, end ) 
{
    let temp = auxArray[start];
    auxArray[start] = auxArray[end];
    auxArray[end] = temp;
}