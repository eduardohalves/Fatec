import { Request, Response } from "express";
import { Person } from "../models";

class PersonController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const doc = new Person(req.body);
      const resp = await doc.save();
      return res.json(resp);
    } catch (e: any) {
      return res.json({ message: e.message });
    }
  }

  async list(_: Request, res: Response): Promise<Response> {
    const data = await Person.find().sort({ name: "asc" });
    return res.json(data);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
    const resp = await Person.findByIdAndDelete(id);
    return res.json(resp ?? { message: "Registro inexistente" });
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id, name, number } = req.body;

    try {
      const doc = await Person.findById(id);
      if (!doc) return res.json({ message: "Pessoa inexistente" });

      doc.name = name;
      doc.number = number;

      return res.json(await doc.save());
    } catch (e: any) {
      return res.json({ message: e.message });
    }
  }
}

export default new PersonController();
