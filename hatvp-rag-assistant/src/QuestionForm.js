import React, { useState } from 'react';

function QuestionForm({ onResponse }) {
  const [question, setQuestion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://127.0.0.1:5000/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });
    const data = await response.json();
    onResponse(data);
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
