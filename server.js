const express = require('express')
const app = express()


const multer = require("multer")
const path = require('path')

const storage = multer.diskStorage({
    destination: (req, file, cb) =>{
        cb(null, 'Images')
    },
    filename: (req, file, cb) =>{
        console.log(file)
        cb(null, Date.now() + path.extname(file.originalname))
    }
})
 

const upload = multer({storage: storage})

app.post("/upload", upload.single('picture'), (req, res) => {
    res.send("Image Uploaded")
})

app.listen(3000)
console.log("Listening in port: 3000")