const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 5000;

app.get("/", (req, res) => {
    res.send("Express Backend is Running");
});

app.get("/api/students", (req, res) => {
    const students = [
        {
            id: 1,
            name: "Purva",
            course: "Mechanical",
        },
        {
            id: 2,
            name: "Ahindra",
            course: "Robotics",
        },
        {
            id: 3,
            name: "Siddhi",
            course: "AIML",
        },
    ];

    res.json(students);
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
