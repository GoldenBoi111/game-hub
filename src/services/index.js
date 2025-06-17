// server.js or index.js
const express = require("express");
const cors = require("cors");

const app = express();

// Basic CORS setup — allows all origins (not secure for production)

app.use(
  cors({
    origin: "https://game-hub-vcky.vercel.app", // frontend origin
    methods: ["GET", "POST"], // allowed HTTP methods
    credentials: true, // if you're using cookies or auth headers
  })
);

app.get("/games", async (req, res) => {
  console.log("reached", req._parsedUrl, 18);
  try {
    const response = await fetch(
      "https://www.giantbomb.com/api/games/?api_key=5552ec3f0dabd509f3cccf32b4d9b0c763502f6e&format=json&" +
        req._parsedUrl.query
    );
    const data = await response.json();
    console.log(response);
    res.json(data);
  } catch (err) {
    console.error("Error fetching games:", error);
    res.status(500).json({ error: "Failed to fetch games" });
  }
});

app.get("/gamesPs5", async (req, res) => {
  console.log("reached", 33);
  try {
    const response = await fetch(
      "https://www.giantbomb.com/api/games/?api_key=5552ec3f0dabd509f3cccf32b4d9b0c763502f6e&format=json&platforms=176&offset=1800&" +
        req._parsedUrl.query +
        "filter:expected_release_year:" +
        year
    );
    const data = await response.json();
    console.log(response);
    res.json(data);
  } catch (err) {
    console.error("Error fetching games:", error);
    res.status(500).json({ error: "Failed to fetch games" });
  }
});
app.get("/gamesNS2", async (req, res) => {
  console.log("reached", 47);
  try {
    const response = await fetch(
      "https://www.giantbomb.com/api/games/?api_key=5552ec3f0dabd509f3cccf32b4d9b0c763502f6e&format=json&platforms=210&" +
        req._parsedUrl.query +
        "filter:expected_release_year:" +
        year
    );
    const data = await response.json();
    console.log(response);
    res.json(data);
  } catch (err) {
    console.error("Error fetching games:", error);
    res.status(500).json({ error: "Failed to fetch games" });
  }
});
app.get("/gamesXbx", async (req, res) => {
  console.log("reached", 61);
  try {
    const response = await fetch(
      "https://www.giantbomb.com/api/games/?api_key=5552ec3f0dabd509f3cccf32b4d9b0c763502f6e&format=json&platforms=179&" +
        req._parsedUrl.query +
        "filter:expected_release_year:" +
        year
    );
    const data = await response.json();
    console.log(response);
    res.json(data);
  } catch (err) {
    console.error("Error fetching games:", error);
    res.status(500).json({ error: "Failed to fetch games" });
  }
});

app.get("/gamesNS1", async (req, res) => {
  console.log("reached", 76);
  try {
    const response = await fetch(
      "https://www.giantbomb.com/api/games/?api_key=5552ec3f0dabd509f3cccf32b4d9b0c763502f6e&format=json&platforms=157&" +
        req._parsedUrl.query +
        "filter:expected_release_year:" +
        year
    );
    const data = await response.json();
    console.log(response);
    res.json(data);
  } catch (err) {
    console.error("Error fetching games:", error);
    res.status(500).json({ error: "Failed to fetch games" });
  }
});

app.get("/gamesXbx1", async (req, res) => {
  console.log("reached", 91);
  try {
    const response = await fetch(
      "https://www.giantbomb.com/api/games/?api_key=5552ec3f0dabd509f3cccf32b4d9b0c763502f6e&format=json&platforms=145&" +
        req._parsedUrl.query +
        "filter:expected_release_year:" +
        year
    );
    const data = await response.json();
    console.log(response);
    res.json(data);
  } catch (err) {
    console.error("Error fetching games:", error);
    res.status(500).json({ error: "Failed to fetch games" });
  }
});

app.get("/gamesPs4", async (req, res) => {
  console.log("reached", 106);
  try {
    const response = await fetch(
      "https://www.giantbomb.com/api/games/?api_key=5552ec3f0dabd509f3cccf32b4d9b0c763502f6e&format=json&platforms=146&" +
        req._parsedUrl.query +
        "filter:expected_release_year:" +
        year
    );
    const data = await response.json();
    console.log(response);
    res.json(data);
  } catch (err) {
    console.error("Error fetching games:", error);
    res.status(500).json({ error: "Failed to fetch games" });
  }
});

app.get("/gamesAnd", async (req, res) => {
  console.log("reached", 121);
  try {
    const response = await fetch(
      "https://www.giantbomb.com/api/games/?api_key=5552ec3f0dabd509f3cccf32b4d9b0c763502f6e&format=json&platforms=123&" +
        req._parsedUrl.query +
        "filter:expected_release_year:" +
        year
    );
    const data = await response.json();
    console.log(response);
    res.json(data);
  } catch (err) {
    console.error("Error fetching games:", error);
    res.status(500).json({ error: "Failed to fetch games" });
  }
});

app.get("/gamesiP", async (req, res) => {
  console.log("reached", 136);
  try {
    const response = await fetch(
      "https://www.giantbomb.com/api/games/?api_key=5552ec3f0dabd509f3cccf32b4d9b0c763502f6e&format=json&platforms=96&" +
        req._parsedUrl.query +
        "filter:expected_release_year:" +
        year
    );
    const data = await response.json();
    console.log(response);
    res.json(data);
  } catch (err) {
    console.error("Error fetching games:", error);
    res.status(500).json({ error: "Failed to fetch games" });
  }
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
