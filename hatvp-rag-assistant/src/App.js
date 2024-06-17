import React, { useState } from 'react';
import QuestionForm from './QuestionForm';
import ResponseDisplay from './ResponseDisplay';
import { ThreeDots } from 'react-loader-spinner';
import './App.css';
import NameList from './filterNameList'; // Import the NameList component

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
	  <h2> Wondering who is in the dataset? </h2>
	  <p> You might not find what you are looking for. </p>
	  <p> Check to see if that person is included in the current version.</p>
      <NameList /> {/* Include the NameList component */}
    </div>
  );
}

export default App;