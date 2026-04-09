# AI Content Generator

A full-stack web application that generates high-quality content using OpenAI's GPT API. Built with Node.js/Express backend and React frontend.

## Project Structure

```
Content_Generator/
├── backend/          # Express.js server
│   ├── src/
│   │   ├── server.js
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── routes/
│   │   ├── middleware/
│   │   └── utils/
│   ├── package.json
│   ├── .env.example
│   └── README.md
│
└── frontend/         # React application
    ├── src/
    │   ├── components/
    │   ├── pages/
    │   ├── services/
    │   ├── App.js
    │   └── index.js
    ├── public/
    ├── package.json
    ├── .env.example
    └── README.md
```

## Features

- **Generate Content**: Create blog posts, emails, social media content, product descriptions
- **Multiple Tones**: Choose from Professional, Casual, Friendly, or Formal tones
- **OpenAI Integration**: Uses GPT-3.5-turbo for content generation
- **User-Friendly Interface**: Clean, responsive React UI
- **API-Based Architecture**: RESTful API for easy integration

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Open Router API key (Free!)

### Backend Setup

1. Navigate to backend folder:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Get your free Google Gemini API key from [Google AI Studio](https://aistudio.google.com/) and add it:
OpenRouter_API_KEY=your_key_here
PORT=5000
FRONTEND_URL=http://localhost:3000
```

5. Start the server:
```bash
npm run dev
```

Server runs at: `http://localhost:5000`

### Frontend Setup

1. Navigate to frontend folder:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Start the development server:
```bash
npm start
```

App opens at: `http://localhost:3000`

## API Endpoints

### POST /api/content/generate

Generate content based on a prompt using Google Gemini.

**Request:**
```json
{
  "prompt": "Write a blog post about artificial intelligence",
  "contentType": "blog",
  "tone": "professional"
}
```

**Response:**
```json
{
  "success": true,
  "content": "Generated content text...",
  "prompt": "...",
  "contentType": "blog",
  "tone": "professional"
}
```

### GET /api/health

Check backend health status.

## Technologies Used

### Backend
- Express.js - Web framework
- Google Generative AI - AI content generation
- CORS - Cross-origin resource sharing
- dotenv - Environment variables
- Gemini 1.5 Flash - Free tier AI model

### Frontend
- React 18 - UI library
- Axios - HTTP client
- CSS3 - Styling

## Environment Variables

### Backend (.env)
```
GEMINI_API_KEY=your_gemini_api_key
PORT=5000
NODE_ENV=development
FRONTEND_URL=http://localhost:3000
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Content Types

- **general** - General purpose content
- **blog** - Blog post format
- **email** - Email content
- **social** - Social media posts
- **product** - Product descriptions
- **story** - Story or narrative content

## Tones

- **neutral** - Neutral and balanced
- **professional** - Professional and formal
- **casual** - Casual and conversational
- **friendly** - Friendly and warm
- **formal** - Very formal and official

## License

MIT License - feel free to use this for your projects!

## Support

For issues or questions, please check the individual README files in the backend and frontend folders.
