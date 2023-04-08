import express, { application, json } from 'express';
import router from './routes/routes'

const app = express();
app.set('port', process.env.PORT || 3000);


const data = {
    "name": "nombre",
    "tweets": ["texto1", "texto2", "texto3"]
}

app.get('/', (req, res) => res.json(data))

//Middlewares
app.use(json())


//Routes
app.use(router)

export default app;