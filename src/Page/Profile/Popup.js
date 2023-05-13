import React from 'react';
import Cropper1 from './Cropper';


function Popup({ open, image, handleClose, getCroppedFile }) {
  return (
    <div>
      <div
      open={open}
      onClose={handleClose}
      >
         <Cropper1
              handleClose={handleClose}
              src={image}
              getCroppedFile={getCroppedFile}
            />
      </div>
    </div>
  );
}

export default Popup;
