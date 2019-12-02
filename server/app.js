const express = require('express')
const path = require("path")
const app = express()
const babel = require ('@babel/core')
const fs = require('fs')

const PORT = 3000

app.use("/assets", express.static(path.join(__dirname, "assets")));



app.get("/", (req, res, next)=>{
  console.log(__dirname)
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'))
})

app.get("/api/calendar", (req, res, next) => {
  res.send(db.getDates());
});


app.listen(PORT, ()=> {
    console.log("Listening to port 3000")
})