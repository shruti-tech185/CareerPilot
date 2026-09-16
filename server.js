const express = require("express");
const cors = require("cors");
const { GoogleGenAI } = require("@google/genai");

const app = express();

app.use(cors());
app.use(express.json());

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

app.get("/", (req, res) => {
    res.send("CareerPilot AI Backend is running!");
});

app.post("/api/ask", async (req, res) => {

    try {

        const { question } = req.body;

        if (!question) {
            return res.status(400).json({
                error: "Question is required"
            });
        }

        const response = await ai.models.generateContent({
            model: "gemini-3.8-flash",
            contents: question
        });

        res.json({
            answer: response.text
        });

    } catch (error) {

        console.error("Gemini API Error:", error);

        res.status(500).json({
            error: "AI response could not be generated."
        });

    }

});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`CareerPilot server running on port ${PORT}`);
});
