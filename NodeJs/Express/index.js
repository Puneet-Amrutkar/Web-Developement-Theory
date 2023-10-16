const express = require("express");
const path = require("path");
const app = express();
const port = 5001;
const bodyParser = require("body-parser");
const router = require("./userRoutes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/v1", router);

app.get('/', (req, res) =>
{
    res.sendFile(path.join(__dirname + "/index.html"));
});

app.listen(port, () => {
    console.log(`server working on port ${port}`);
});