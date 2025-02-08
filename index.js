import express from 'express'
const app = express();
app.use(express.json());
app.use(express.static('xurgess-dot-com/dist/xurgess-dot-com/browser'))
const port = 8080
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})