export function getQuickSortAnimations( array ) {
    const animations = [];

    let n = array.length;

    let lower = 0;
    let upper = n - 1;
    
    quickSort( array, lower, upper, animations ); 

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


    while ( start < end )
    {
        while ( auxArray[start] <= pivot ) // traverse along the auxArray from left to right until found element greater than pivot
        {

            start++;
        }

        while ( auxArray[end] > pivot ) // traverse along the auxArray from right to left until found element less than pivot
        {
            end--;
        }

        if ( start < end )
        {
            animations.push( [start, end] );
            animations.push( [start, auxArray[end] ] );
            animations.push( [end, auxArray[start] ] );
            animations.push( [start, end] );

            swap( auxArray, start, end ); // start must be found before end
        }
    }
    animations.push( [lower, end] );
    animations.push( [lower, auxArray[end] ] );
    animations.push( [end, auxArray[lower] ] );
    animations.push( [lower, end] );
    
    swap( auxArray, lower, end ); // swap the pivot element with the 'end' index

    return end;
}

export function swap( auxArray, start, end ) 
{
    let temp = auxArray[start];
    auxArray[start] = auxArray[end];
    auxArray[end] = temp;
}