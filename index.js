import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs", { generatedName: null });
});

app.post("/submit", (req, res) => {
    const inputText = req.body.text;
    console.log(`Generated Name: ${inputText}`);
    res.render("index.ejs", { generatedName: inputText });
});

app.listen(port, () => {
    console.log(`Server running on the port ${port}`);
});