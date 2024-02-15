// OutboundPage.js
import React from 'react';
import OutboundUpload from '../../OutboundUpload/OutboundUpload';
import { Typography } from '@mui/material';
import "./OutboundPage.styles.css"

const OutboundPage = () => {
  return (
    <div className="outbound">
      <Typography variant="h3">Import Outbound Orders</Typography>
      <OutboundUpload />
    </div>
  );
};

export default OutboundPage;
