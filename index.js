import express from "express";



const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));



app.listen(port, () => {
    console.log("server running on port : " + port);
    console.log("http://localhost:3000/");
})