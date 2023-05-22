import React from 'react';

function Downloadimg({ getUploadedFile }) {
    const onChange = (e) => {
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
            files = e.dataTransfer.files;
        } else if (e.target) {
            files = e.target.files;
        }
        if (files.length === 0) {
            return alert("Please select a file.");
        }
        const reader = new FileReader();
        reader.onload = () => {
            getUploadedFile(reader.result);
        };
        reader.readAsDataURL(files[0]);
    };
    return (
        <div>
            <div>
                <input type='file' accept='image/*' onChange={onChange} multiple />
            </div>
        </div>
    );
}

export default Downloadimg;
