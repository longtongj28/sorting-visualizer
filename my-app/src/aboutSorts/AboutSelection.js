import './about.css';
import {useState} from 'react';
import Modal from 'react-modal';
import {AiOutlineClose, AiFillQuestionCircle} from 'react-icons/ai';

// 1. keep backdrop 2. show aboutSort and x button to close.

function AboutSelection() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <button className='sortInfoButton' onClick={ () => setModalIsOpen(true) }><AiFillQuestionCircle className="side-icon"/> About Selection Sort</button>
            <div className="infoBox">
                <Modal
                    closeTimeoutMS={150}
                    style = {
                        {
                            overlay: {
                                backgroundColor: 'rgba(0,0,0,0.4)'
                            },
                            content: {
                                background: '#C57B57',
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
                        <h2  className = "titles">Basic Concept of Selection Sort<hr/><br/></h2>
                        
                        <p className = "paragraphs">
                           1. Iterate through the entire array. <br/><br/>
                           2. At the current element, compare it to every element after it.<br/><br/>
                           3. If an element smaller than the current element was found, swap that element with the element currently being traversed. If the minimum is still the originally traversed element, continue onto the next element without swapping.<br/><br/>

                        </p>
                        <h2 className="titles">Pseudocode of Selection Sort<hr/><br/></h2>
                        
                        <p className="paragraphs">
                            for every element i of the array,<br/>
                            &emsp;let min = i.<br/>
                            &emsp;for every element j after i,<br/>
                            &emsp;&emsp;&emsp;if there is an element smaller,<br/>
                            &emsp;&emsp;&emsp;&emsp;min = j<br/>
                            &emsp;if ( min != i )<br/>
                            &emsp;&emsp;&emsp;swap( array[min], array[j] )<br/><br/>
                        </p>
                        <h2 className="titles">Big O Time Complexity<hr/><br/></h2>
                        
                        <p className="paragraphs">
                            This algorithm has an O(n^2) time complexity in all cases. This is because for every element, you must check every element after it to complete an iteration. In general, this algorithm performs worse than insertion sort, although the algorithms are very similar.<br/><br/>
                            Check out this <a className="link" target="_blank" href="https://www.youtube.com/watch?v=9oWd4VJOwr0">lecture/video</a> for a much more detailed explanation on everything about this sorting algorithm.<br/><br/>
                            <a className="link backTop" rel="noreferrer"href="#top">Back to top</a>
                        </p>
                    </div>
                    <button className="close-button" onClick={ () => setModalIsOpen(false) }><AiOutlineClose color="#EEEEEE" className="close-icon"/></button>
                </Modal>
            </div>
        </>
    )
}
export default AboutSelection;