import { Request, Response } from "express";
import { Car } from "../models";

class CarController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const doc = new Car(req.body);
      const resp = await doc.save();
      return res.json(resp);
    } catch (e: any) {
      return res.json({ message: e.message });
    }
  }

  async list(_: Request, res: Response): Promise<Response> {
    const data = await Car.find().sort({ model: "asc" });
    return res.json(data);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
    const resp = await Car.findByIdAndDelete(id);
    return res.json(resp ?? { message: "Registro inexistente" });
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id, model, year, owner } = req.body;

    try {
      const doc = await Car.findById(id);
      if (!doc) return res.json({ message: "Carro inexistente" });

      doc.model = model;
      doc.year = year;
      doc.owner = owner;

      return res.json(await doc.save());
    } catch (e: any) {
      return res.json({ message: e.message });
    }
  }
}

export default new CarController();
