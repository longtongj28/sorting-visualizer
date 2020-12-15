import React from 'react';
import './sortingvisualizer.css';
import Navbar from '../components/Navbar/Navbar';
import { BrowserRouter as Router} from 'react-router-dom';
import {getMergeSortAnimations} from  './SortingAlgorithms/mergeSort.js';
import {getBubbleSortAnimations} from  './SortingAlgorithms/bubbleSort.js';
import {getHeapSortAnimations} from  './SortingAlgorithms/heapSort.js';
import {getQuickSortAnimations} from  './SortingAlgorithms/quickSort.js';
import {getInsertionSortAnimations} from './SortingAlgorithms/insertionSort.js';
import {getSelectionSortAnimations} from './SortingAlgorithms/selectionSort';
import {AiFillGithub} from 'react-icons/ai';
import {FaStopCircle} from 'react-icons/fa';

 
// Change this value for the number of bars (value) in the array.

// This is the main color of the array bars.
const PRIMARY_COLOR = '#DAD2BC';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = '#2EBFA5';

const SECONDARY_COLOR_TWO = '#C5D86D';


export default class sortingvisualizer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array: [],
            arrayBars: 50,
            speed: 30,
        };
    }
    handleChangeSpeed = (e) => {
        this.setState({speed: e.target.value})
    }
    handleChangeBars = (e) => {
        this.setState( {arrayBars: e.target.value} );
        this.resetArray();
    }

    componentDidMount() 
    {
        this.resetArray();
    }

    resetArray() 
    {
        const array = [];
        for (let i = 0; i < this.state.arrayBars; i++) {
            array.push(randomIntBetween(7,550));
        }
        this.setState({array});

        let numOfDisabled = document.getElementsByClassName("btn disabled").length;
        console.log(numOfDisabled);
        let resetButtons;
        if (numOfDisabled > 0) resetButtons = true; 
        this.toggleButtons(resetButtons,"all");
    }

    toggleButtons(onOrOff, allOrGen, animationsLength) {
        const buttons = document.getElementsByClassName('btn disabled');
        const settingSliders = document.getElementsByClassName("slider");
        if (onOrOff === false) {
            const sortButtons = document.getElementsByClassName("btn sort");
            while (sortButtons.length > 0) {
                sortButtons[0].className = "btn disabled";
            }
            for (let i = 0; i < settingSliders.length; i++)
            {
                settingSliders[i].disabled = true;
            }
            const genArrayButton = document.getElementsByClassName('btn');
            genArrayButton[0].className = "btn disabled";
        }
        else if (onOrOff === true && allOrGen === 'gen') {
            setTimeout( () => {
                buttons[0].className = "btn";
                for (let i = 0; i < settingSliders.length; i++)
                {
                    settingSliders[i].disabled = false;
                }
            }, animationsLength * this.state.speed)
        }
        else if (onOrOff === true && allOrGen === "all") {
            while (buttons.length > 0) {
                buttons[0].className = "btn sort";
            }
        }
    }

    // sorts
    // The array animation arrays are ordered like this: [index1, heightofindex2, index2, heightofindex1].
    mergeSort() 
    {
        const animations = getMergeSortAnimations(this.state.array);

        this.toggleButtons(false);
        this.toggleButtons(true,"gen", animations.length);

        for (let i = 0; i < animations.length; i++) 
        {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = (i % 3 === 0 || i % 3 === 2);
          if (isColorChange) 
          {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            if ( i%3 === 0)
            {
                setTimeout(() => {
                barOneStyle.backgroundColor = SECONDARY_COLOR;
                barTwoStyle.backgroundColor = SECONDARY_COLOR_TWO;
                }, i * this.state.speed);
            }
            if (i%3 === 2)
            {
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                    }, i * this.state.speed);
            }
          }
          else 
          {
            setTimeout(() => {
              const [barOneIdx, newHeight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * this.state.speed);
          }
        }
    }

    quickSort() 
    {
        const animations = getQuickSortAnimations(this.state.array);
        this.toggleButtons(false);
        this.toggleButtons(true,"gen", animations.length);
        this.showSwap(animations);
    }

    bubbleSort() 
    {
        const animations = getBubbleSortAnimations(this.state.array);
        this.toggleButtons(false);
        this.toggleButtons(true,"gen", animations.length);

        for (let i = 0; i < animations.length; i++) 
        {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = (i % 4 === 0) || (i % 4 === 3); // if first or second value of animations, proceed

          if (isColorChange) 
          {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
           
            if (i%4 === 0)
            {
                setTimeout(() => {
                    barOneStyle.backgroundColor = SECONDARY_COLOR;
                    barTwoStyle.backgroundColor = SECONDARY_COLOR_TWO;
                }, i * this.state.speed);
            }

            if (i%4 === 3)
            {
                setTimeout(() => {
                    barOneStyle.backgroundColor = PRIMARY_COLOR;
                    barTwoStyle.backgroundColor = PRIMARY_COLOR;
                }, i * this.state.speed);
            }
          }

          else if ( (i % 4 === 1 ||  i % 4 === 2) && animations[i] !== 'no swap')  // if third or fourth value AND swapping occured, change the bars
          {              
            const [barOneIdx, newHeight] = animations[i];

            setTimeout(() => {
              const barOneStyle = arrayBars[barOneIdx].style;
              barOneStyle.height = `${newHeight}px`;
            }, i * this.state.speed);
          }
        }
        
    }

    heapSort() {
        const animations = getHeapSortAnimations(this.state.array);
        this.toggleButtons(false);
        this.toggleButtons(true,"gen", animations.length);
        this.showSwap(animations);
    }

    insertionSort() {
        const animations = getInsertionSortAnimations(this.state.array);
        this.toggleButtons(false);
        this.toggleButtons(true,"gen", animations.length);
        this.showSwap(animations);
    }

    selectionSort() {
        const animations = getSelectionSortAnimations(this.state.array);
        this.toggleButtons(false);
        this.toggleButtons(true,"gen", animations.length);
        this.showSwap(animations);
    }

    showSwap(animations) {
        for ( let i = 0; i < animations.length; i++)
        {
            const arrayBars = document.getElementsByClassName('array-bar');
            let order = i%4;
            if (order === 0)
            {
                let indexOne = animations[i][0];
                let indexTwo = animations[i][1];
                
                setTimeout( () => {
                    arrayBars[indexOne].style.backgroundColor = SECONDARY_COLOR;
                    arrayBars[indexTwo].style.backgroundColor = SECONDARY_COLOR_TWO;
                }, i * this.state.speed);
            }
            else if (order === 3)
            {
                let indexOne = animations[i][0];
                let indexTwo = animations[i][1];

                setTimeout( () => {
                    arrayBars[indexOne].style.backgroundColor = PRIMARY_COLOR;
                    arrayBars[indexTwo].style.backgroundColor = PRIMARY_COLOR;
                }, i * this.state.speed);
            }
            else if ( order === 1|| order === 2 )
            {
                let indexToChange = animations[i][0];
                let newHeight = animations[i][1];

                setTimeout( () => {
                    arrayBars[indexToChange].style.height = `${newHeight}px`;
                }, i * this.state.speed);
            }
        }
    }

    render() {
        const {array} = this.state;

        return (
            [
            <header className="top">
                <button title="Stop animation and reset array" className="stop-button"><a id="stop-link" href="https://longtongj28.github.io/sorting-visualizer/"><FaStopCircle id="stop-icon"/></a></button>
                <div className ="speedSlider">
                    <div className="name-slider">Speed</div>
                        <input title="Drag left to make animation faster" className="slider" type="range" min={1} max ={100}value={this.state.speed} onChange={this.handleChangeSpeed}/>
                </div>
                <div className="barSlider">
                    <div className="name-slider">Bars</div>
                        <input title="Drag right to increase the number of bars" className="slider" type="range" min={10} max ={70}value={this.state.arrayBars} onChange={this.handleChangeBars}/>
                </div>
                <Router>
                    <Navbar/>
                </Router>
                <a id="github-link" target ="_blank" rel = "nonreferrer" href= "https://github.com/longtongj28/sorting-visualizer"><AiFillGithub title="Github Repository for the site"id="github-icon"/></a>
                <a className="homelink" href='https://longtongj28.github.io/sorting-visualizer/'></a>
                <h1 id = "title">Sorting Algorithms</h1>
                <div className = "button-bar">
                    <button className="btn" onClick = {() => this.resetArray()}> Generate New Array</button>
                    <button className="btn sort" onClick = {() => this.quickSort()}>Quick Sort</button>
                    <button className="btn sort" onClick = {() => this.bubbleSort()}>Bubble Sort</button>
                    <button className="btn sort" onClick = {() => this.mergeSort()}>Merge Sort</button>
                    <button className="btn sort" onClick = {() => this.heapSort()}>Heap Sort</button>
                    <button className="btn sort" onClick = {() => this.insertionSort()}>Insertion Sort</button>
                    <button className="btn sort" onClick = {() => this.selectionSort()}>Selection Sort</button>
                </div>
            </header>,

            <div className="array-container">
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
            </div>
                ]
        );
    }
}

function randomIntBetween( min, max ) {
    return Math.floor(Math.random() * (max - min + 1 ) + min);
}