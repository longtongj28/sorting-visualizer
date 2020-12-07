import './about.css';
import {useState} from 'react';
import Modal from 'react-modal';
import {AiOutlineClose, AiFillQuestionCircle} from 'react-icons/ai';

// 1. keep backdrop 2. show aboutSort and x button to close.

function AboutHeap() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <button className='sortInfoButton' onClick={ () => setModalIsOpen(true) }><AiFillQuestionCircle className="side-icon"/> About Heap Sort</button>
            <div className="infoBox">
                <Modal 
                    isOpen={modalIsOpen} 
                    onRequestClose={ () => setModalIsOpen(false)}>
                    <div className="aboutSortInfo">
                        <h2>Basic Concept of Bubble Sort</h2>
                        <p>1. In an unsorted array, have two pointers point to the first two elements and compare them and swap into ascending order if necessary.
                        2. Then, increment the two pointers and do the same comparison and swap if necessary.
                        3. Repeat step 2 until the end of the array has been reached.
                        4. Then, repeat steps 1-3 all over again, but this time, go until you've reached the second to last element (length - 1).
                            Remember arrays start count from zero, so you'll have to subtract 1 again if you are coding it.
                        5. Cool fact/trick: the reason why it's called "bubble sort" is because the largest element of the array will "bubble" its way to the end of the array.
                            This explains the reasoning behind step 4 and why we only need to go to the second to last element. The last element is already the largest!
                        </p>
                        <h2>Pseudocode of Bubble Sort</h2>
                        <p>
                            for every element "i" of index 0 to arrayLength-1,
                            for every element "j" of index 0 to arrayLength - 1 - i, (see step 5 above for the intuition)
                            if the element at j is greater than the element after it (j+1), swap them.
                            if no swap has occured during an iteration, that means the array is sorted, and we can forgo the remaining loop, improving the time complexity.
                        </p>
                        <h2>Big O Time Complexity</h2>
                        <p>
                            This sorting algorithm is easy to understand, and is a nice "brute force" solution. However, the time complexity is
                            O(n^2) in its worst case, and is slightly improved with some modifications. (see Pseudocode)
                        </p>
                    </div>
                    <AiOutlineClose onClick={ () => setModalIsOpen(false) }/>
                </Modal>
            </div>
        </>
    )
}
export default AboutHeap;