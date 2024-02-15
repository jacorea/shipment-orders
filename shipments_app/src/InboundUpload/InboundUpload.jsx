// frontend/src/InboundUpload.js
import React, { useState } from 'react';
import { Button } from '@mui/material';


const InboundUpload = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      onFileUpload(file, 'inbound');
    } else {
      alert('Please select a file before uploading.');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <Button onClick={handleUpload} variant="outlined" >
        Upload
      </Button>
      {/* <button onClick={handleUpload}>Upload</button> */}
    </div>
  );
};

export default InboundUpload;
