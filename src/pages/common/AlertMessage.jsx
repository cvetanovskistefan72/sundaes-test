import React from 'react'
import Alert from 'react-bootstrap/Alert'

const AlertMessage = ({variant, text}) => {
  return (
    <Alert key={variant} variant={variant}>
      {text}
    </Alert>
  );
}

export default AlertMessage;