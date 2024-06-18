import React, { useState } from 'react';
import QuestionForm from './QuestionForm';
import ResponseDisplay from './ResponseDisplay';
import { ThreeDots } from 'react-loader-spinner';
import './App.css';
import NameList from './filterNameList'; // Import the NameList component

function App() {
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState('');

  const handleResponse = (data) => {
    setResponse(data);
    setLoading(false);
  };

  const handleLoading = (isLoading, message = '') => {
    setLoading(isLoading);
    setLoadingMessage(message);
  };

  return (
    <div className="app-container">
      <h1>HATVP ASSISTANT 🧐</h1>
      <em> Made with RAG (Retrieval Augmented Generation). </em>
      <p> ⚠️ This is a low cost project. <br />
        Please wait 1 minute for the first answer. <br />
        And about 5-10 seconds per subsequent question. <br />
      </p>
      <QuestionForm onResponse={handleResponse} setLoading={handleLoading} />
      {loading && (
        <div className="loader-container">
          <ThreeDots type="ThreeDots" color="#000" height={50} width={50} />
          <p>{loadingMessage}</p>
        </div>
      )}
      <ResponseDisplay response={response} />
      <h2> Wondering who is in the dataset? </h2>
      <p> You might not find what you are looking for. <br />
        Check to see if that person is included in the current version.</p>
      <NameList /> {/* Include the NameList component */}
    </div>
  );
}

export default App;
