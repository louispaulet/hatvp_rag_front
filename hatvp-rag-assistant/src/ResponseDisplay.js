import React from 'react';

function ResponseDisplay({ response }) {
  return (
    <div className="response-container">
	<label htmlFor="response">Response:</label>
    <textarea id="response" value={response.answer} readOnly />

	  {response.declaration_id.length > 0 && (
	<p>(Declaration used to answer: "{response.declaration_id}")</p>
	)}
    </div>
  );
}

export default ResponseDisplay;
