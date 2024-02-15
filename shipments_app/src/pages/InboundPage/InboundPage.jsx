// InboundPage.js
import React from 'react';
import InboundUpload from '../../InboundUpload/InboundUpload';
import { Typography } from '@mui/material';
import "./InboundPage.styles.css"

const InboundPage = () => {
  return (
    <div className="inbound">
      <Typography variant="h3">Import Inbound Shipments</Typography>
      <InboundUpload />
    </div>
  );
};

export default InboundPage;
