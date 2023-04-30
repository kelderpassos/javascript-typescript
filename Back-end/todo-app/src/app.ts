import express from 'express'
import cors from 'cors'
// import { taskRoute } from "./routes/TaskRoute";
import 'dotenv/config'

export const app = express()

app.use(express.json())
app.use(cors())


