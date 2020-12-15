import './about.css';
import {useState} from 'react';
import Modal from 'react-modal';
import {AiOutlineClose, AiFillQuestionCircle} from 'react-icons/ai';

// 1. keep backdrop 2. show aboutSort and x button to close.

function AboutMerge() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <button className='sortInfoButton' onClick={ () => setModalIsOpen(true) }><AiFillQuestionCircle className="side-icon"/> About Merge Sort</button>
            <div className="infoBox">
                <Modal
                    closeTimeoutMS={150}
                    style = {
                        {
                            overlay: {
                                backgroundColor: 'rgba(0,0,0,0.4)'
                            },
                            content: {
                                background: '#091540',
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
                        <h2  className = "titles">Basic Concept of Merge Sort<hr/><br/></h2>
                        
                        <p className = "paragraphs">
                           The basic isea of merge sort is that the algorithm continually splits the array until there is only 1 element left in each subarray.<br/>
                           Then, we want to merge the subarrays back together into a sorted array. Similar to quick sort, operations are done separately on the halves of the array, recursively.

                        </p><br/>
                        <h2 className="titles">Pseudocode of Merge Sort<hr/><br/></h2>
                        
                        <p className="paragraphs">
                           function mergeSort(array, auxarray, start, end)<br/>
                           &emsp;&emsp; if start == end return<br/>
                           &emsp;&emsp; let middle = floor(start+end/2) ~~~ how to calculate the middle index<br/><br/>
                           &emsp;&emsp; mergeSort(array, auxarray, start, middle) ~~~ first half of the array<br/>
                           &emsp;&emsp; mergeSort(array, auxarray, middle+1, end) ~~~ second half of the array<br/>
                           &emsp;&emsp; merge(array, auxarray, start, middle, end)<br/><br/>
                           function merge(array, start, middle, end)
                           &emsp;&emsp; let i = start, let j = middle + 1, let k = start<br/>
                           &emsp;&emsp; while ( i &lt;= middle and j &lt;= end)<br/>
                           &emsp;&emsp;&emsp;&emsp; if ( array[i] &lt;= array[j] )<br/>
                           &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; array[k++] = array[i++]<br/>
                           &emsp;&emsp;&emsp;&emsp; else<br/>
                           &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; array[k++] = auxarray[j++] <br/>
                           &emsp;&emsp; while ( i &lt;= middle ) ~~~ if the second half of the array is completed <br/>
                           &emsp;&emsp;&emsp;&emsp; array[k++] = auxarray[i++]<br/>
                           &emsp;&emsp; while ( j &lt;= end ) ~~~ if the first half of the array is completed <br/> 
                           &emsp;&emsp;&emsp;&emsp; array[k++] = auxarray[j++]<br/>
                        </p><br/>
                        <h2 className="titles">Big O Time Complexity<hr/><br/></h2>
                        
                        <p className="paragraphs">
                            The worst case time complexity for this algorithm is O(nlogn) and the average case is also O(nlogn). Similar to quick sort, this is the result of having to split the aray continuously in half and performing operations, which is O(logn), and having to traverse subarrays to rebuild/merge into the sorted array.<br/><br/>
                            Check out this <a className="link" target="_blank" href="https://www.youtube.com/watch?v=jlHkDBEumP0">lecture/video</a> for a much more detailed explanation on everything about this sorting algorithm.<br/><br/>
                            <a className="link backTop" rel="noreferrer"href="#top">Back to top</a>
                        </p>
                    </div>
                    <button className="close-button" onClick={ () => setModalIsOpen(false) }><AiOutlineClose color="#EEEEEE" className="close-icon"/></button>
                </Modal>
            </div>
        </>
    )
}
export default AboutMerge;