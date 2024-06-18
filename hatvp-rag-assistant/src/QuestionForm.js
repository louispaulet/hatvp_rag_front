import React, { useState } from 'react';

function QuestionForm({ onResponse, setLoading }) {
  const [question, setQuestion] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true, 'Submitting your question...');

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 2 * 60 * 1000); // 2 minutes

    const fetchQuestion = async (retry = false) => {
      if (retry) {
        setLoading(true, 'Backend is starting, please wait some more...');
      }
      try {
        const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/ask`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ question }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        onResponse(data.answer); // Accessing the 'answer' property from the response
      } catch (error) {
        if (error.name === 'AbortError') {
          console.error('Fetch aborted due to timeout');
          onResponse('Request timed out. Please try again.');
          setLoading(false);
        } else if (error.message.includes('Failed to fetch') || error.message.includes('ERR_CONNECTION_REFUSED')) {
          console.error('Failed to fetch due to connection issue:', error);
          setTimeout(() => fetchQuestion(true), 5000); // Retry after 5 seconds
        } else {
          console.error('Failed to fetch:', error);
          onResponse('An error occurred while fetching the response.');
          setLoading(false);
        }
      }
    };

    fetchQuestion();
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
