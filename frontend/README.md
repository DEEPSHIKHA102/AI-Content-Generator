# AI Content Generator - Frontend

React.js frontend for AI Content Generator application.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Create `.env` file:
```bash
cp .env.example .env
```

3. Update `.env`:
```
REACT_APP_API_URL=http://localhost:5000/api
```

## Running

Development mode:
```bash
npm start
```

This opens the app at `http://localhost:3000`

Building for production:
```bash
npm run build
```

## Features

- Generate AI content using OpenAI
- Multiple content types (Blog, Email, Social Media, etc.)
- Adjustable tone (Professional, Casual, Friendly, Formal)
- Copy generated content to clipboard
- Responsive design

## Dependencies

- React.js - UI library
- Axios - HTTP client
- CSS - Styling
