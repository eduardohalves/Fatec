import { Schema, model, Document } from 'mongoose';


export interface IShoppingItem extends Document {
name: string;
quantity: number;
value: number;
purchased: boolean;
createdAt: Date;
}


const ShoppingItemSchema = new Schema<IShoppingItem>({
name: { type: String, required: true, trim: true },
quantity: { type: Number, required: true, min: 0, default: 1 },
value: { type: Number, required: true, min: 0, default: 0 },
purchased: { type: Boolean, required: true, default: false },
createdAt: { type: Date, default: Date.now }
});


export default model<IShoppingItem>('ShoppingItem', ShoppingItemSchema);