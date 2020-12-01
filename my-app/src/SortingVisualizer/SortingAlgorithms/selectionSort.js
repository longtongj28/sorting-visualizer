import {swap} from './quickSort';

export function getSelectionSortAnimations(array) {
    const animations = [];
    selectionSort( array, animations );
    return animations;
}

function selectionSort( array, animations )
{
    let n = array.length;

    for ( let i = 0; i < n-1; i++)
    {
        let min = i;
        for (let j = i + 1; j < n; j++)
        {
            if (array[j] < array[min]) min = j;
        }
        if (min !== i)
        {
            animations.push( [i, min]);
            animations.push( [ i, array[min] ]);
            animations.push( [ min, array[i] ]);
            animations.push( [i, min]);
            swap(array, i, min);
        }
    }
}