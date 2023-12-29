import React from "react";
import './index.css';


const ImageModal = ({ image, onClose }) => {
    
    return (
      <div className='modal-overlay' onClick={onClose}>
        <div className='modal-content'>
          <img src={image.urls.full} alt={image.alt_description} className='modal-image' />
          <div className='download-button'>
            <a href={image.links.download} target='_blank' rel='noopener noreferrer'>
              Download
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default ImageModal;