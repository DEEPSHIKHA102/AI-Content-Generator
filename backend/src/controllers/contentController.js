const axios = require("axios");

const generateContent = async (req, res) => {
  try {
    const { prompt, contentType, tone } = req.body;

    if (!prompt) {
      return res.status(400).json({ error: "Prompt is required" });
    }

    // Build smart prompt
    const fullPrompt = `
You are an expert content generator.

Task: ${contentType}

Tone: ${tone}

User Request: ${prompt}

Generate high-quality content based on the above.
`;

    //  OpenRouter API call
    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-3.5-turbo", // free & stable
        messages: [{ role: "user", content: fullPrompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      },
    );

    const generatedContent = response.data.choices[0].message.content;

    res.json({
      success: true,
      content: generatedContent,
    });
  } catch (error) {
    console.error("FULL ERROR:", error.response?.data || error.message);

    res.status(500).json({
      error: "Content generation failed",
      details: error.response?.data || error.message,
    });
  }
};

module.exports = { generateContent };
