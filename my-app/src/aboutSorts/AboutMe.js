import './about.css';
import {useState} from 'react';
import Modal from 'react-modal';
import {AiOutlineClose, AiFillContacts} from 'react-icons/ai';

// 1. keep backdrop 2. show aboutSort and x button to close.

function AboutMe() {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <button className='sortInfoButton' onClick={ () => setModalIsOpen(true) }><AiFillContacts className="side-icon"/> About/Contact me</button>
            <div className="infoBox">
                <Modal
                    closeTimeoutMS={150}
                    style = {
                        {
                            overlay: {
                                backgroundColor: 'rgba(0,0,0,0.4)'
                            },
                            content: {
                                background: '#2D1115',
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
                        <h2  className = "titles">How was this website made?<hr/><br/></h2>
                        
                        <p className = "paragraphs">
                           This website was made entirely on React! It's definitely a good beginner project for learning the basics of the technology.<br/><br/>
                        </p><br/>
                        <h2 className="titles">About me and my Programming<hr/><br/></h2>
                        
                        <p className="paragraphs">
                            I'm a computer science student at Cal State Fullerton. I've recently began learning about web development (as of December 2020). Prior to this, I have had some experience with Python, and I can code comfortably with C++.
                        </p><br/>
                        <h2 className="titles">Contact Me<hr/><br/></h2>
                        
                        <p className="paragraphs">
                            You can reach me through email at tong.johnson.28@gmail.com or on <a className="link"target='_blank' rel="noreferrer" href="https://www.linkedin.com/in/johnson-tong-11311917a">LinkedIn</a>. Here's my <a className="link"target='_blank' rel="nonreferrer" href="https://github.com/longtongj28">Github</a> if you'd like to check that out.
                        </p>
                    </div>
                    <button className="close-button" onClick={ () => setModalIsOpen(false) }><AiOutlineClose color="#EEEEEE" className="close-icon"/></button>
                </Modal>
            </div>
        </>
    )
}
export default AboutMe;