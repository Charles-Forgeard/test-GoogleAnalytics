import express from 'express';
import googleAnalytics from './google_analytics/googleAnalytics.js';
const app = express();


app.get('/',(req,res)=>{
    res.status(200).send("server development in progress")
})

app.get('/datas',async (req,res)=>{
    try{
        const data = await googleAnalytics(); 
        console.log(JSON.stringify(data));
        res.status(200).send(data);
    }catch(error){
        console.error(error)
        res.status(500).send(error.message);
    }
})

export default app;