# AI Content Generator - Backend

Express.js backend for AI Content Generator using Google Gemini API.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Add your Google Gemini API key to `.env`:
```
GOOGLE_GEMINI_API_KEY=your_key_here
PORT=5000
FRONTEND_URL=http://localhost:3000
```

## Getting Google Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/)
2. Click "Get API Key"
3. Create a new API key
4. Copy the key and paste it in your `.env` file

## Running

Development mode with auto-reload:
```bash
npm run dev
```

Production mode:
```bash
npm start
```

## API Endpoints

### POST /api/content/generate
Generate content using Google Gemini AI

**Request:**
```json
{
  "prompt": "Write a blog post about...",
  "contentType": "blog",
  "tone": "professional"
}
```

**Response:**
```json
{
  "success": true,
  "content": "Generated content here...",
  "prompt": "...",
  "contentType": "blog",
  "tone": "professional"
}
```

## Dependencies

- Express.js - Web framework
- Google Generative AI - AI integration
- CORS - Cross-origin support
- dotenv - Environment variables
- Gemini 1.5 Flash Model - Free tier AI model
