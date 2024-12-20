import React from 'react';
import './assets/css/modal.css';

function Modal({ closeModal }) {
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">Your Post's Caption</div>
                <textarea className="modal-textarea" placeholder="Type 10-15 words to get started..."></textarea>
                <button className="modal-close" onClick={closeModal}>Save & Close</button>
            </div>
        </div>
    );
}

export default Modal;