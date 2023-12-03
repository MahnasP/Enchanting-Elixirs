import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  /*try {
    const recipe1 = await axios.get(
      "www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const recipe2 = await axios.get(
      "www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    const recipe3 = await axios.get(
      "www.thecocktaildb.com/api/json/v1/1/random.php"
    );
    res.render("", {
      rec1: recipe1.data,
      rec2: recipe2.data,
      rec3: recipe3.data,
    });
  } catch (error) {
    res.sendStatus(404);
  }
  */
    res.render("index.ejs");
});



app.listen(port, () => {
  console.log("server running on port : " + port);
  console.log("http://localhost:3000/");
});
