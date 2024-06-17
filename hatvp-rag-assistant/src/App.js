import React, { useState } from 'react';
import QuestionForm from './QuestionForm';
import ResponseDisplay from './ResponseDisplay';
import './App.css';

function App() {
  const [response, setResponse] = useState('');

  const handleResponse = (data) => {
    setResponse(data);
  };

  return (
    <div className="app-container">
      <h1>HATVP RAG ASSISTANT</h1>
      <p>Please wait a few seconds for the answer.</p>
      <QuestionForm onResponse={handleResponse} />
      <ResponseDisplay response={response} />
    </div>
  );
}

export default App;
