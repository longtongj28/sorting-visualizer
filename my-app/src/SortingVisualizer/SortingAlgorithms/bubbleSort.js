export function getBubbleSortAnimations(array) {
    const animations = [];
    let n = array.length;
    let auxArray = [];
    for (let i = 0; i < n; i++)
    {
        auxArray[i] = array[i];
    }
    for (let i = 0; i < n-1; i++)
    {
        let flag = 0; // changes to 1 if swap occurs
        for (let j = 0; j < n-1- i; j++)
        {
            //before comparing array[j] and j+1, color them and uncolor them
            animations.push( [j, j+1] );
            

            if ( auxArray[j] > auxArray[j+1] )
            {
                
                animations.push( [ j, auxArray[j+1] ] );
                animations.push( [ j+1, auxArray[j] ] ); //in main code, change the arrayBar[j] to the pixel value of auxarr
                let temp = auxArray[j];
                auxArray[j] = auxArray[j+1];
                auxArray[j+1] = temp;
                flag = 1;
            }
            else if ( auxArray[j] <= auxArray[j+1] ) {
                animations.push('no swap'); //placeholder if no value is swapped 
                animations.push('no swap');
            } 
            animations.push( [j, j+1] ); 
        }
        if (flag === 0) break; //no swap occured, end the loop, the auxArray is sorted.
    }
    return animations;
  }