import React from 'react';

function ResponseDisplay({ response }) {
  return (
    <div className="response-container">
      <label>Response:</label>
      <textarea value={response} readOnly />
    </div>
  );
}

export default ResponseDisplay;
