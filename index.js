import express  from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from 'morgan'
import {port} from './config/index.js'
import router from "./routes/index.js";
const app = express();
app.use(morgan('combined'))
app.use(cors());
app.use(express.json());
app.use(helmet());
app.use('/api/v1',router)
const server = app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})