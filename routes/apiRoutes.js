//require everything here




app.get("/scrape", function (req, res) {
    //axios.get to hit hte website as a whole then pick out the individual elements with the $ = cheerio bits
})

app.get("/articles", function (req, res) {
    //db.Article.find({}) 
})

app.get("/articles/:id", function (req, res) {
    //db.Article.findOne
})

app.post("/articles/:id", function (req, res) {
    //db.Note.create(req.body)
})

//export here?