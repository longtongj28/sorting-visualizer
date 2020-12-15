import './about.css';
import {useState} from 'react';
import Modal from 'react-modal';
import {AiOutlineClose, AiFillQuestionCircle} from 'react-icons/ai';

// 1. keep backdrop 2. show aboutSort and x button to close.

function AboutInsertion() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <button className='sortInfoButton' onClick={ () => setModalIsOpen(true) }><AiFillQuestionCircle className="side-icon"/> About Insertion Sort</button>
            <div className="infoBox">
                <Modal
                    closeTimeoutMS={150}
                    style = {
                        {
                            overlay: {
                                backgroundColor: 'rgba(0,0,0,0.4)'
                            },
                            content: {
                                background: '#330036',
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
                        <h2  className = "titles">Basic Concept of Insertion Sort<hr/><br/></h2>
                        
                        <p className = "paragraphs">
                           1. Iterate through the entire array. <br/><br/>
                           2. For each element, compare it with every element behind it UNTIL you've found the first element smaller than it, <br/>&emsp;OR you've reached the beginning of the array and run out of options.<br/><br/>
                           3. Swap the element at the index currently being checked, and the element found meeting one or both of the conditions from step 2.<br/><br/>
    

                        </p>
                        <h2 className="titles">Pseudocode of Insertion Sort<hr/><br/></h2>
                        
                        <p className="paragraphs">
                            for every element i of the array,<br/>
                            &emsp;let j = i.<br/>
                            &emsp;while( j &gt; 0 and array[j-1] &gt; array[j])<br/>
                            &emsp;&emsp;&emsp;swap(array[j-1], array[j]);<br/>
                            &emsp;&emsp;&emsp;j--;<br/><br/>
                        </p>
                        <h2 className="titles">Big O Time Complexity<hr/><br/></h2>
                        
                        <p className="paragraphs">
                            On average, this sorting algorithm takes O(n^2). This can be explained by the for loop iterating every element, and checking elements before the index currently traversed. In the worst case, the algorithm would need to check every element before the index currently traversed.<br/><br/>
                            Check out this <a className="link" target="_blank" href="https://www.youtube.com/watch?v=yCxV0kBpA6M">lecture/video</a> for a much more detailed explanation on everything about this sorting algorithm.<br/><br/>
                            <a className="link backTop" rel="noreferrer"href="#top">Back to top</a>
                        </p>
                    </div>
                    <button className="close-button" onClick={ () => setModalIsOpen(false) }><AiOutlineClose color="#EEEEEE" className="close-icon"/></button>
                </Modal>
            </div>
        </>
    )
}
export default AboutInsertion;