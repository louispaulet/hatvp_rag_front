import React from 'react';

function ResponseDisplay({ response }) {
  return (
    <div className="response-container">
      <label htmlFor="response">Response:</label>
      <textarea id="response" value={response} readOnly />
    </div>
  );
}

export default ResponseDisplay;
