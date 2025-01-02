const express = require("express");
const path = require("path");
const app = express();
const PORT = 3001;

// Serve static files from the specified directory
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.send("Welcome to Backend Server");
});
app.get("/static",(req,res)=>{
    res.sendFile("C:/Advanced Full Stack Training/Backend/public/index.html")
});

app.get('/json', (req, res) => {
    res.json({ server: "Welcome to Backend", url: "localhost", port: PORT });
});

app.listen(PORT, () => {
    console.log(`Backend Server Started \n Url: http://localhost:${PORT}`);
});
