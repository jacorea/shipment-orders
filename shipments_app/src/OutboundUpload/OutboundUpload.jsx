// frontend/src/OutboundUpload.js
import { Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const OutboundUpload = ({ onFileUpload }) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (file) {
      onFileUpload(file, 'outbound');
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
    </div>
  );
};

export default OutboundUpload;
