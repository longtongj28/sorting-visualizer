import React from 'react';
import './sortingvisualizer.css';
import {getMergeSortAnimations} from  './SortingAlgorithms/mergeSort.js';
import {getBubbleSortAnimations} from  './SortingAlgorithms/bubbleSort.js';
//import {getHeapSortAnimations} from  './SortingAlgorithms/heapSort.js';
import {getQuickSortAnimations} from  './SortingAlgorithms/quickSort.js';
//import {getInsertionSortAnimations} from './SortingAlgorithms/insertionSort.js';

//TODO:
// lower the default number of bars so you can actually see, and lower speed.
// Change this value for the speed of the animations.



const ANIMATION_SPEED_MS = 10;

// Change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 70;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'pink';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'blue';


export default class sortingvisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }


    componentDidMount() 
    {
        this.resetArray();
    }


    resetArray() 
    {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntBetween(10,550));
        }
        this.setState({array});
    }

    mergeSort() 
    {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) 
        {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = (i % 3 === 0 || i % 3 === 2);
          if (isColorChange) 
          {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;

            setTimeout(() => {
            barOneStyle.backgroundColor = color;
            barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          }
          else 
          {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
    }

    quickSort() 
    {
        //animations.push(lower); // (1)
        // let traverse = [];      // (2)
        // let swaps = [];
        // let turnOffTraverse = []; 
        // let selectLowerEnd = [];
        // let second_swaps = [];
        // [lower, end]
        const animations = getQuickSortAnimations(this.state.array);
        console.log(this.state.array);
        console.log(animations);
        for (let i = 0; i < animations.length; i++)
        {
            const arrayBars = document.getElementsByClassName('array-bar');
            let order = i%7;
            // show the pivot
            if ( order === 0 )
            {
                setTimeout( () => {
                    arrayBars[ animations[i] ].style.backgroundColor = SECONDARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
            // show the traversing of start and end pointers
            else if ( order === 1 || order === 2 || order === 3 || order === 5 )
            {
                for ( let j = 0; j < animations[i].length; j++ )
                {
                    let firstProperty = animations[i][j][0]; // index in both cases
                    let secondProperty = animations[i][j][1];// index in first case, height in second
                    if (order === 1)
                    {
                        setTimeout( () => {
                            arrayBars[ firstProperty ].style.backgroundColor = '#99E1D9';
                            arrayBars[ secondProperty ].style.backgroundColor = '#99E1D9';
                        }, i * ANIMATION_SPEED_MS);
                    }
                    else if ( order === 2  || order === 5 )
                    {
                        console.log(firstProperty);
                        console.log(secondProperty);
                        setTimeout( () => {
                            arrayBars[ firstProperty ].style.height = `${secondProperty}px`;
                        }, i * ANIMATION_SPEED_MS);
                    }
                    else
                    {
                        setTimeout( () => {
                            arrayBars[ firstProperty ].style.backgroundColor = PRIMARY_COLOR;
                            arrayBars[ secondProperty ].style.backgroundColor = PRIMARY_COLOR;
                        }, i * ANIMATION_SPEED_MS);
                    }
                }
            }
            else if ( order === 4)
            {
                let firstIndex = animations[i][0][0];
                let secondIndex = animations[i][0][1];
                setTimeout( () => {
                    arrayBars[ firstIndex ].style.backgroundColor = '#99E1D9';
                    arrayBars[ secondIndex ].style.backgroundColor = '#99E1D9';
                }, i * ANIMATION_SPEED_MS);
            }
            else if (order === 6)
            {
                let a = animations[i][0];
                let b = animations[i][1];
                setTimeout( () => {
                    arrayBars[ a ].style.backgroundColor = PRIMARY_COLOR;
                    arrayBars[ b ].style.backgroundColor = PRIMARY_COLOR;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }



    bubbleSort() 
    {

        // animations format: [ [two bars compared, color change], 
        //                      [ second bar to height change ], [ first bar to height change ],   aka swap
        //                      [ two bars change back to original color]]
        
        // The last two elements of the array are 'no swap' instead of values if no swapping occured.

        const animations = getBubbleSortAnimations(this.state.array);

        for (let i = 0; i < animations.length; i++) 
        {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = (i % 4 === 0) || (i % 4 === 3); // if first or second value of animations, proceed

          if (isColorChange) 
          {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 4 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR; //first of the 4 changes color, then the second changes back (4th animation)
            
            setTimeout(() => {
                barOneStyle.backgroundColor = color;
                barTwoStyle.backgroundColor = color;
            }, i * ANIMATION_SPEED_MS);
          }

          else if ( (i % 4 === 1 ||  i % 4 === 2) && animations[i] !== 'no swap')  // if third or fourth value AND swapping occured, change the bars
          {              
            const [barOneIdx, newHeight] = animations[i];

            setTimeout(() => {
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * ANIMATION_SPEED_MS);
          }
        }
        
    }



    heapSort() {}

    insertionSort() {}



    render() {
        const {array} = this.state;

        return (
            [<div className="array-container">
                {array.map( (value, idx) => (
                    <div
                        className="array-bar"
                        key={idx}
                        style={{
                            height: `${value}px`,
                            backgroundColor: PRIMARY_COLOR,
                        }}
                    ></div>
                ))}
            </div>,

            <div className='header'>
                <h1>Sorting Visualizer</h1>
                <button className="btn" onClick = {() => this.resetArray()}>Generate New Array</button>
                <button className="btn" onClick = {() => this.quickSort()}>Quick Sort</button>
                <button className="btn" onClick = {() => this.bubbleSort()}>Bubble Sort</button>
                <button className="btn" onClick = {() => this.mergeSort()}>Merge Sort</button>
                <button className="btn" onClick = {() => this.heapSort()}>Heap Sort</button>
                <button className="btn" onClick = {() => this.insertionSort()}>Insertion Sort</button>
                <hr></hr>
            </div>
                ]
        );
    }
}

function randomIntBetween( min, max ) {
    return Math.floor(Math.random() * (max - min + 1 ) + min);
}