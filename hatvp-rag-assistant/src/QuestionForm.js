import React, { useState } from 'react';

function QuestionForm({ onResponse, setLoading }) {
  const [question, setQuestion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/ask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      onResponse(data.answer);  // Accessing the 'answer' property from the response
    } catch (error) {
      console.error('Failed to fetch:', error);
      onResponse('An error occurred while fetching the response.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="question">Ask a question</label>
      <input
        type="text"
        id="question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        required
      />
      <button type="submit">SUBMIT</button>
    </form>
  );
}

export default QuestionForm;
