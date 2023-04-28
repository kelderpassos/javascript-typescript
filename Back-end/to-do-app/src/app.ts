import express from 'express';
import cors from 'cors';
import { taskRoute } from "./routes/TaskRoute";
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT || 3003

app.use(express.json())
app.use(cors())
app.use('/task', taskRoute)

app.listen(PORT, () => console.log(`Running on Port: ${PORT}`))

