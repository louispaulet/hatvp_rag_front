import React, { useState } from 'react';
import QuestionForm from './QuestionForm';
import ResponseDisplay from './ResponseDisplay';
import {ThreeDots} from 'react-loader-spinner';
import './App.css';

function App() {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleResponse = (data) => {
    setResponse(data);
    setLoading(false);
  };

  const handleLoading = (isLoading) => {
    setLoading(isLoading);
  };

  return (
    <div className="app-container">
      <h1>HATVP ASSISTANT 🧐</h1>
	  <em> Made with RAG (Retrieval Augmented Generation). </em>
      <p>Please wait a few seconds for the answer.</p>
      <QuestionForm onResponse={handleResponse} setLoading={handleLoading} />
      {loading && (
        <div className="loader-container">
          <ThreeDots type="ThreeDots" color="#000" height={50} width={50} />
          <p>Please wait around 10 seconds</p>
        </div>
      )}
      <ResponseDisplay response={response} />
    </div>
  );
}

export default App;
