import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import personasRoutes from './routes/personas.routes'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())

app.use(personasRoutes)

export default app;