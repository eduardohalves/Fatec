import { useState } from "react";
import { useDispatch } from "react-redux";
import { addHabit } from "../features/habits/habitsSlice";
import { v4 as uuidv4 } from "uuid";
import { TextField, Button } from "@mui/material";

export default function HabitForm() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!name) return;

    dispatch(addHabit({
      id: uuidv4(),
      name,
      category,
      completed: false
    }));

    setName("");
    setCategory("");
  };

  return (
    <div>
      <TextField
        label="Hábito"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        label="Categoria"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      />
      <Button onClick={handleAdd} variant="contained">
        Adicionar
      </Button>
    </div>
  );
}