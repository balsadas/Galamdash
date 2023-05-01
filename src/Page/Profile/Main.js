import React from 'react';
import Popup from './Popup';
import Downloadimg from './Downloadimg';


function Main() {
    const [open, setOpen] = React.useState(false);
    const [image, setImage] = React.useState(
        "./photo/photo17.jpg"
    );

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <div>
            <div>
                <img src={image} alt="cropped" height={400} />
            </div>

            
        <Downloadimg
          getUploadedFile={(image) => {
            setOpen(true);
            setImage(image);
          }}
        />
        <Popup
          open={open}
          handleClose={handleClose}
          image={image}
          getCroppedFile={(image) => {
            setImage(image);
            handleClose();
          }}
        />

        </div>
    );
}

export default Main;
