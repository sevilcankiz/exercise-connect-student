require("dotenv").config();
const express = require("express")
const app = express()
const cors = require("cors")
const db = require("./db")
const PORT = process.env.PORT || 8080;
const studentsRouter = require("./routes/students");


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//connection to db
db();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use("/student", studentsRouter);

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})