export function getBubbleSortAnimations(array) {
    const animations = [];
    let n = array.length;
    for (let i = 0; i < n-1; i++)
    {
        let flag = 0; // changes to 1 if swap occurs
        for (let j = 0; j < n-1- i; j++)
        {
            //before comparing array[j] and j+1, color them and uncolor them
            animations.push( [j, j+1] );
            

            if ( array[j] > array[j+1] )
            {
                
                animations.push( [ j, array[j+1] ] );
                animations.push( [ j+1, array[j] ] ); //in main code, change the arrayBar[j] to the pixel value of auxarr
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
                flag = 1;
            }
            else if ( array[j] <= array[j+1] ) {
                animations.push('no swap'); //placeholder if no value is swapped 
                animations.push('no swap');
            } 
            animations.push( [j, j+1] ); 
        }
        if (flag === 0) break; //no swap occured, end the loop, the array is sorted.
    }
    return animations;
  }