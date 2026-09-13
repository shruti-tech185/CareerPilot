const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("CareerPilot AI Backend is running!");
});

app.post("/api/ask", async (req, res) => {

    const { question } = req.body;

    if (!question) {
        return res.status(400).json({
            error: "Question is required"
        });
    }

    res.json({
        answer:
            "ShrutiGuide AI received your question: " +
            question +
            ". Gemini AI will be connected here."
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`CareerPilot server running on port ${PORT}`);
});
