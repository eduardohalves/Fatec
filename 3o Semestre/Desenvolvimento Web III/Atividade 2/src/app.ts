import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import itemsRouter from './routes/items';
import path from 'path';

const app = express();

app.use(cors());
app.use(express.json());


const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/shopping-list';
mongoose
    .connect(MONGO_URI)
    .then(() => console.log('Conectado ao MongoDB'))
    .catch((err) => console.error('Erro ao conectar ao MongoDB:', err));

app.use('/api/items', itemsRouter);

app.use(express.static(path.join(__dirname, '../public')));

export default app;