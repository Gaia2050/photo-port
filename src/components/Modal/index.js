import React from 'react';

function Modal({onClose, currentPhoto}) {
    const {name, category, description, index} = currentPhoto;

    return (
        //JSX
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/large/${category}/${index}.jpg`)} alt="current category"/>
                <p>Photo {description}</p>
                <button onClick={onClose} type="button">
                    Close
                </button>
            </div>
        </div>
    );
}

export default Modal;
