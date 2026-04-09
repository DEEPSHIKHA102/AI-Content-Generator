import React, { useState } from 'react';
import { generateContent } from '../services/apiService';
import './ContentGenerator.css';

function ContentGenerator() {
  const [prompt, setPrompt] = useState('');
  const [contentType, setContentType] = useState('general');
  const [tone, setTone] = useState('neutral');
  const [generatedContent, setGeneratedContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerate = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const result = await generateContent(prompt, contentType, tone);
      setGeneratedContent(result.content);
    } catch (err) {
      setError(err.error || 'Failed to generate content. Please try again.');
      console.error('Error:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(generatedContent);
    alert('Content copied to clipboard!');
  };

  const handleClear = () => {
    setPrompt('');
    setGeneratedContent('');
    setError('');
  };

  return (
    <div className="content-generator">
      <h1>AI Content Generator</h1>

      <form onSubmit={handleGenerate} className="generator-form">
        <div className="form-group">
          <label htmlFor="prompt">Enter your prompt:</label>
          <textarea
            id="prompt"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Write a blog post about artificial intelligence..."
            required
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="contentType">Content Type:</label>
            <select
              id="contentType"
              value={contentType}
              onChange={(e) => setContentType(e.target.value)}
            >
              <option value="general">General</option>
              <option value="blog">Blog Post</option>
              <option value="email">Email</option>
              <option value="social">Social Media</option>
              <option value="product">Product Description</option>
              <option value="story">Story</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="tone">Tone:</label>
            <select
              id="tone"
              value={tone}
              onChange={(e) => setTone(e.target.value)}
            >
              <option value="neutral">Neutral</option>
              <option value="professional">Professional</option>
              <option value="casual">Casual</option>
              <option value="friendly">Friendly</option>
              <option value="formal">Formal</option>
            </select>
          </div>
        </div>

        <div className="button-group">
          <button type="submit" disabled={loading} className="btn-primary">
            {loading ? 'Generating...' : 'Generate Content'}
          </button>
          <button type="button" onClick={handleClear} className="btn-secondary">
            Clear
          </button>
        </div>
      </form>

      {error && <div className="error-message">{error}</div>}

      {generatedContent && (
        <div className="output-section">
          <h2>Generated Content:</h2>
          <div className="content-output">
            <p>{generatedContent}</p>
          </div>
          <button onClick={handleCopy} className="btn-copy">
            Copy to Clipboard
          </button>
        </div>
      )}
    </div>
  );
}

export default ContentGenerator;
