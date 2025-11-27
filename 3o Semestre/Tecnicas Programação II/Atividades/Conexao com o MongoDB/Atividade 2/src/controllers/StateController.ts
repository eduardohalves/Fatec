import { Request, Response } from "express";
import { State } from "../models";

class StateController {
  async create(req: Request, res: Response): Promise<Response> {
    try {
      const doc = new State(req.body);
      const resp = await doc.save();
      return res.json(resp);
    } catch (e: any) {
      if (e.code === 11000) return res.json({ message: "Nome do estado já existe" });
      return res.json({ message: e.message });
    }
  }

  async list(_: Request, res: Response): Promise<Response> {
    const data = await State.find().sort({ name: "asc" });
    return res.json(data);
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;
    try {
      const resp = await State.findByIdAndDelete(id);
      return res.json(resp ?? { message: "Registro inexistente" });
    } catch (e: any) {
      return res.json({ message: e.message });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id, name, abbreviation, cities } = req.body;
    try {
      const doc = await State.findById(id);
      if (!doc) return res.json({ message: "Estado inexistente" });
      if (name !== undefined) doc.name = name;
      if (abbreviation !== undefined) doc.abbreviation = abbreviation;
      if (cities !== undefined) doc.cities = cities;
      const resp = await doc.save();
      return res.json(resp);
    } catch (e: any) {
      if (e.code === 11000) return res.json({ message: "Nome do estado já existe" });
      return res.json({ message: e.message });
    }
  }
}

export default new StateController();
