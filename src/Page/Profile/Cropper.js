import React, { useRef, useState } from 'react';
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";


function Cropper1({ src, getCroppedFile }) {
    const cropperRef = useRef(null);
    const [loading, setLoading] = useState(true);
    const [scaleX, setScaleX] = useState(1);
    const [scaleY, setScaleY] = useState(1);

    const handleClick = () => {
        const imageElement = cropperRef?.current;
        const cropper = imageElement?.cropper;
        const img = cropper.getCroppedCanvas().toDataURL();
        getCroppedFile(img);
    };
    const rotate = () => {
        const imageElement = cropperRef?.current;
        const cropper = imageElement?.cropper;
        cropper.rotate(90);
    };
    const flip = (type) => {
        const imageElement = cropperRef?.current;
        const cropper = imageElement?.cropper;
        if (type === "h") {
            cropper.scaleX(scaleX === 1 ? -1 : 1);
            setScaleX(scaleX === 1 ? -1 : 1);
        } else {
            cropper.scaleY(scaleY === 1 ? -1 : 1);
            setScaleY(scaleY === 1 ? -1 : 1);
        }
    };
    return (
        <div>
            {loading && (
                <div className='w-full backdrop-blur-lg h-[400]'></div>
            )}

            <div>
                <button onClick={rotate}>Rotate</button>
                <button onClick={() => flip("h")}>Flip h</button>
                <button onClick={() => flip("v")}>Flip v</button>
            </div>


            <div>
                <Cropper
                    src={src}
                    style={{ height: 400, width: "100%" }}
                    // Cropper.js options
                    initialAspectRatio={16 / 9}
                    guides={false}
                    ready={() => {
                        setLoading(false);
                    }}
                    ref={cropperRef}
                />
            </div>
            <div>
                <button onClick={handleClick}>Crop</button>
            </div>
        </div>
    );
}

export default Cropper1;
