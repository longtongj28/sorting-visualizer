import './about.css';
import {useState} from 'react';
import Modal from 'react-modal';
import {AiOutlineClose, AiFillQuestionCircle} from 'react-icons/ai';

// 1. keep backdrop 2. show aboutSort and x button to close.

function AboutQuick() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <button className='sortInfoButton' onClick={ () => setModalIsOpen(true) }><AiFillQuestionCircle className="side-icon"/> About Quick Sort</button>
            <div className="infoBox">
                <Modal
                    closeTimeoutMS={150}
                    style = {
                        {
                            overlay: {
                                backgroundColor: 'rgba(0,0,0,0.4)'
                            },
                            content: {
                                background: '#4A6C6F',
                                top: '60px',
                                bottom: '60px',
                                left: '60px',
                                border:'none',
                                right: '60px',
                            }
                        }
                    }
                    isOpen={modalIsOpen} 
                    onRequestClose={ () => setModalIsOpen(false)}>
                    <div id="top" className="aboutSortInfo">
                        <h2  className = "titles">Basic Concept of Quick Sort<hr/><br/></h2>
                        
                        <p className = "paragraphs">
                           First, a pivot element must be chosen. In my implementation, I chose the first element as the pivot element. <br/><br/>
                           Second, the array is partitioned until the left side of the pivot contains all elements less than the pivot element, and where the right side of the pivot has all the elements greater than it. Eventually, the pivot becomes the middle of the array.<br/><br/>
                           Third, the left side and the right side of the partitioned original array are also individually partitioned and sorted so that the first element of those subarrays becomes the middle pivot element.<br/><br/>
                           Recursively perform these operations until the array is sorted. Remember that the pivot element is already in its sorted position, so it doesn't need to move.
                           

                        </p>
                        <h2 className="titles">Pseudocode of Quick Sort<hr/><br/></h2>
                        
                        <p className="paragraphs">
                           function quickSort( array, lower_bound, upper_bound )<br/>
                            &emsp;&emsp; if (lower_bound &gt;= upper_bound) return; <br/><br/>
                            &emsp;&emsp; let loc_of_pivot = partition( array, lower_bound, upper_bound )<br/>
                            &emsp;&emsp; quickSort( array, lower_bound, loc_of_pivot - 1) ~~~partition from the beginning to the pivot spot<br/>
                            &emsp;&emsp; quickSort( array, loc_of_pivot + 1, upper_bound ) ~~~ and partition from the pivot spot to the end<br/><br/>
                            function partition(array, lower_bound, upper_bound)<br/>
                            &emsp;&emsp; let pivot = auxArray[lower_bound] ~~~In my implentation I used the first element of an array be the pivot<br/>
                            &emsp;&emsp; let start = lower_bound<br/>
                            &emsp;&emsp; let end = upper_bound<br/><br/>
                            &emsp;&emsp; while ( start &lt; end ) <br/>
                            &emsp;&emsp;&emsp;&emsp; while ( array[start] &lt;= pivot ) ~~~ Starting form the left, find the first element that is greater than the pivot <br/>
                            &emsp;&emsp; &emsp;&emsp; &emsp;&emsp; start++<br/>
                            &emsp;&emsp;&emsp;&emsp; while ( array[end] &gt; pivot ) ~~~ Staring from the right side of the array, find the first element that is less than the pivot  <br/>
                            &emsp;&emsp; &emsp;&emsp; &emsp;&emsp; end--<br/>
                            &emsp;&emsp;&emsp;&emsp; if (start &lt; end)<br/>
                            &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; swap(array[start], array[end]) ~~~ start must be found before end to be swapped, so it can't be past the pivot element<br/>
                            &emsp;&emsp; swap( array[lower_bound], array[end] ) ~~~~ swap the pivot element with 'end' index<br/>
                            &emsp;&emsp; return end
                        </p>
                        <h2 className="titles">Big O Time Complexity<hr/><br/></h2>
                        
                        <p className="paragraphs">
                           The worst case scenario for this is O(n^2, where the "lower_bound" above is always the greatest or smallest element. <br/>
                           The partitioning is O(logn) since we split the array into two subarrays continuously and employ a divide and conquer approach.<br/>
                           Thus, the average and best case is O(nlogn) time complexity, since the partitioning is O(logn) and we need to partition every element eventually.<br/><br/>
                            Check out this <a className="link" target="_blank" href="https://www.youtube.com/watch?v=QN9hnmAgmOc">lecture/video</a> for a much more detailed explanation on everything about this sorting algorithm.<br/><br/>
                            <a className="link backTop" rel="noreferrer"href="#top">Back to top</a>
                        </p>
                    </div>
                    <button className="close-button" onClick={ () => setModalIsOpen(false) }><AiOutlineClose color="#EEEEEE" className="close-icon"/></button>
                </Modal>
            </div>
        </>
    )
}
export default AboutQuick;