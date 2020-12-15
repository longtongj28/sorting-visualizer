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
                    closeTimeoutMS={150}
                    style = {
                        {
                            overlay: {
                                backgroundColor: 'rgba(0,0,0,0.4)'
                            },
                            content: {
                                background: '#B9314F',
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
                        <h2  className = "titles">Basic Concept of Heap Sort<hr/><br/></h2>
                        
                        <p className = "paragraphs">
                            The heap sort algorithm makes use of organizing data into a "max heap."<br/><br/>
                            A max heap is a binary tree, where the greatest node is located at the root.<br/><br/>
                            So, given an array, we need to first turn it into a max heap tree.<br/><br/>
                            1. To do this, we first need to "heapify" all the nodes that aren't leaf nodes. (the leaf nodes are already sorted according to max heap)<br/><br/>
                                                               <div className="tree-example">
                                                                   (0)<br/><br/>
                                                          (1)&emsp;(2)<br/><br/>
                                                        (3)&nbsp; (4)&emsp;(5)&nbsp; (6)<br/><br/>
                                                        </div>
                            We can calculate the index of the first non-leaf node (2) by floor(num_of_nodes/2 - 1). In the above example, it's floor(7/2-1) = 2.<br/><br/>
                            2. Then, we need to "delete" the root AND heapify the tree since we modified it. <br/><br/>
                            To "delete" a node from an array, we can simply swap the last node with the root. In the picture above, it would swap the (0) with (6). (the first and last element of array)<br/><br/>
                            3. Repeat step 2 until there are no more nodes left. Above, it should happen 3 times, for (2), (1), and (0). If done correctly, the tree should be deleted from greatest to least.<br/><br/>

                            <h3 className="sub-headers">How do we "heapify"?</h3><br/>
                            1. After finding the node we want to heapify, we want to section off the node and its children and ONLY focus on those nodes (max of 3 nodes). Deleting nodes in arrays means swapping them, we also don't want to be touching the nodes that are "deleted." (usually, they are towards the end of the array)<br/><br/>
                            2. While we're in the subtree, let our largest value equal the root, and compare with the left and right children. Change the largest value to the a child if it is larger.<br/><br/>
                            3. If the largest value has changed from the original root value, we swap the nodes at the root and where the new largest location is found.<br/><br/>
                            4. Now, our subtree (max 3 nodes) has become a max heap. However, if there are grandchildren to the root we were working with, we need to recursively heapify the rest of the subtree beyond what we originally worked with.<br/><br/>

                        </p>
                        <h2 className="titles">Pseudocode of Heap Sort<hr/><br/></h2>
                        
                        <p className="paragraphs">
                            // Build our max heap (reorganize our array) <br/>
                            // Heapify starting from our first non-leaft node, decrement until our 0th index.<br/><br/>
                            for every non-leaf node, array indices from (floor(num_of_nodes/2 -1)) to 0,<br/>
                            &emsp; &emsp; heapify the node and its subtree.<br/><br/>
                            for every node in our tree<br/>
                            &emsp; &emsp; swap the root with the last node. (this is synonymous with "deleting" in a tree)<br/>
                            &emsp; &emsp; heapify the array (since we modified the tree structure)<br/><br/><br/>
                            // heapify function<br/>
                            // this function moves the largest element in a tree to the root.<br/>
                            // The size_of_tree is dynamic and changes depending on the subtree that you are currently on. Likewise, root_index depends on the subtree as well.<br/><br/>
                            heapify(array, size_of_tree, root_index):<br/>
                            &emsp; index_of_largest = root_index<br/>
                            &emsp; left_child_of_root = 2*root_index + 1<br/>
                            &emsp; right_child_of_root = 2*root_index + 2<br/><br/>

                            &emsp; While the left_child_of_root is &lt; the size of the tree AND array[right_child_of_root] &gt; array[index_of_largest]<br/>
                            &emsp;&emsp;&emsp; index_of_largest = left_child_of_root<br/><br/>
                            
                            &emsp; While the right_child_of_root is &lt; the size of the tree AND array[right_child_of_root] &gt; array[index_of_largest]<br/>
                            &emsp;&emsp;&emsp; index_of_largest = right_child_of_root<br/><br/>

                            &emsp;  if index_of_largest is not root_index, that means it changed,<br/>
                            &emsp;&emsp;&emsp;swap the placed of the index_of_largest and the root_index<br/>
                            &emsp;&emsp;&emsp;heapify(array, size_of_tree, index_of_largest)<br/><br/>
                        </p>
                        <h2 className="titles">Big O Time Complexity<hr/><br/></h2>
                        
                        <p className="paragraphs">
                            The heap sort algorithm is a bit complicated due to the use of trees and recursion. The time complexity of the heapify function is O(logn).
                            This is because the function makes use of a bianry tree, where every node is sorted to a particular order and has 2 children.<br/>
                            The time complexity of the building of the max heap of the array takes O(n) time compelxity, since there are two for loops.
                            However, the heapify operations inside the for loops take O(logn) time.<br/>
                            Thus, the overall time complexity would be O(2 * n * logn), which can be simplified to O(nlogn).<br/><br/>
                            Check out this <a className="link" target="_blank" rel="noreferrer" href="https://www.youtube.com/watch?v=Q_eia3jC9Ts">lecture/video</a> for a much more detailed explanation on everything about this sorting algorithm.<br/><br/>
                            <a className="link backTop" href="#top">Back to top</a>
                        </p>
                    </div>
                    <button className="close-button" onClick={ () => setModalIsOpen(false) }><AiOutlineClose color="#EEEEEE" className="close-icon"/></button>
                </Modal>
            </div>
        </>
    )
}
export default AboutHeap;