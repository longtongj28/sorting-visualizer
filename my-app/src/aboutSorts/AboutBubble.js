import './about.css';
import {useState} from 'react';
import Modal from 'react-modal';
import {AiOutlineClose, AiFillQuestionCircle} from 'react-icons/ai';

// 1. keep backdrop 2. show aboutSort and x button to close.

function AboutBubble() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <button className='sortInfoButton' onClick={ () => setModalIsOpen(true) }><AiFillQuestionCircle className="side-icon"/> About Bubble Sort</button>
            <div className="infoBox">
                <Modal
                    closeTimeoutMS={150}
                    style = {
                        {
                            overlay: {
                                backgroundColor: 'rgba(0,0,0,0.4)'
                            },
                            content: {
                                boxShadow: '2px 2px 30px black',
                                background: '#2C2C34',
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
                    <div className="aboutSortInfo">
                        <h2 id="top" className = "titles">Basic Concept of Bubble Sort<hr/><br/></h2>
                        
                        <p className = "paragraphs">
                            1. In an unsorted array, have two pointers point to the first two elements and compare them and swap into ascending order if necessary.
                            <br/>
                            <br/>
                            2. Then, increment the two pointers and do the same comparison and swap if necessary.
                            <br/>
                            <br/>
                            3. Repeat step 2 until the end of the array has been reached.
                            <br/>
                            <br/>
                            4. Then, repeat steps 1-3 all over again, but this time, go until you've reached the second to last element (length - 1).
                                Remember arrays start count from zero, so you'll have to subtract 1 again if you are coding it.
                            <br/>
                            <br/>
                            5. Cool fact/trick: the reason why it's called "bubble sort" is because the largest element of the array will "bubble" its way to the end of the array.
                                This explains the reasoning behind step 4 and why we only need to go to the second to last element. The last element is already the largest!
                            <br/>
                            <br/>
                        </p>
                        <h2 className="titles">Pseudocode of Bubble Sort<hr/><br/></h2>
                        
                        <p className="paragraphs">
                            for every element "i" of index 0 to arrayLength-1,<br/><br/>
                            &emsp;&emsp;for every element "j" of index 0 to arrayLength - 1 - i, (see step 5 from "Basic Concept" above for the intuition)<br/><br/>
                            &emsp;&emsp;&emsp;&emsp;if the element at j is greater than the element after it (j+1), swap them.<br/><br/>
                            &emsp;&emsp;if no swap has occured during an iteration, that means the array is sorted, and we can forgo the remaining loop, improving the time complexity.<br/><br/>
                        </p>
                        <h2 className="titles">Big O Time Complexity<hr/><br/></h2>
                        
                        <p className="paragraphs">
                            This sorting algorithm is easy to understand, and is a nice "brute force" solution. However, the time complexity is
                            O(n^2) in its worst case, and is slightly improved with some modifications, which I have included in the pseudocode. You can tell through the nested for loop that, for each element for the array, iterates the whole array again.<br/><br/>
                            Check out this <a className="link"target='_blank' rel="noreferrer" href="https://www.youtube.com/watch?v=o4bAoo_gFBU">lecture/video</a> for a much more detailed explanation on everything about this sorting algorithm.<br/><br/>
                            <a className="link backTop" href="#top">Back to top</a>
                        </p>
                    </div>
                    <button align="center" className="close-button" onClick={ () => setModalIsOpen(false) }><AiOutlineClose color="#EEEEEE" className="close-icon"/></button>
                </Modal>
            </div>
        </>
    )
}
export default AboutBubble;