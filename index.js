const express= require('express')
const app = express()

app.get('/ping', (req,res)=>{

    res.status(200)
    res.json({'ping' : " 🍑 "})

})

app.get('*', (req,res)=>{
res.status(400).json('" 🍑 "," 🍑 "," 🍑 "')

})

const port = process.env.PORT || 5001;
app.listen(port, ()=>{

    console.log(`listening on port ${port}`)
})