const express =  require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true}));
app.engine("ejs", require("ejs").renderfile);
app.set("view engine", "ejs");

const family =["diaz", "anna", "hanna"];


app.get("/", (req, res) =>{
    res.sendFile(__dirname + "/public/html/indeex.html");
});

app.get("/about", (req, res) =>{
    var name = req.querry.name;
    console.log(name)
    res.send("<h1>hello " + name + ".</h1>");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res
        .status(500)
        .redner("error",{
            message: "there was an error in the prosecing of your request",
        });
})
app.listen(3000, () =>{
    console.log("listening on port 3000");
});