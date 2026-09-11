const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    app: "AUTOPSY",
    status: "online"
  });
});

app.post("/api/generate", async (req, res) => {

  const { prompt, duration, ratio } = req.body;

  if (!prompt) {
    return res.status(400).json({
      error: "Prompt is required"
    });
  }

  /*
    اصل AI Video API یہاں connect ہوگی۔

    ابھی API key یا secret یہاں مت ڈالیں۔
    ہم اسے محفوظ environment variable میں رکھیں گے۔
  */

  res.json({
    success: true,
    message: "AUTOPSY backend is ready",
    prompt,
    duration,
    ratio
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`AUTOPSY server running on port ${PORT}`);
});
