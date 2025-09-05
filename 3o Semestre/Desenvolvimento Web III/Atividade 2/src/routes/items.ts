import { Router } from 'express';
import ShoppingItem from '../models/ShoppingItem';


const router = Router();


router.get('/', async (_req, res) => {
    const items = await ShoppingItem.find().sort({ createdAt: -1 });
    res.json(items);
});


router.post('/', async (req, res) => {
    try {
        const { name, quantity, value, purchased } = req.body;
        const item = await ShoppingItem.create({ name, quantity, value, purchased });
        res.status(201).json(item);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});


router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name, quantity, value, purchased } = req.body;
        const updated = await ShoppingItem.findByIdAndUpdate(
            id,
            { name, quantity, value, purchased },
            { new: true, runValidators: true }
        );
        if (!updated) return res.status(404).json({ error: 'Item não encontrado' });
        res.json(updated);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});


router.patch('/:id/purchased', async (req, res) => {
    try {
        const { id } = req.params;
        const item = await ShoppingItem.findById(id);
        if (!item) return res.status(404).json({ error: 'Item não encontrado' });
        item.purchased = !item.purchased;
        await item.save();
        res.json(item);
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await ShoppingItem.findByIdAndDelete(id);
        if (!deleted) return res.status(404).json({ error: 'Item não encontrado' });
        res.status(204).send();
    } catch (err: any) {
        res.status(400).json({ error: err.message });
    }
});


export default router;