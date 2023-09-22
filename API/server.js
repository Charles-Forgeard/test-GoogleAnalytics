import {createServer} from "http";
import app from "./app.js";

const httpServer = createServer(app);
const port = 3000;

httpServer.on('listening',()=>{
    console.log(`Server listening on port ${port}`)
});

httpServer.listen(port);
