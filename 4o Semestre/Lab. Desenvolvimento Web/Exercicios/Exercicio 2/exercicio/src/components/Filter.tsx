import { useDispatch } from "react-redux";
import { setFilter, clearCompleted } from "../features/habits/habitsSlice";
import { Button } from "@mui/material";

export default function Filter() {
  const dispatch = useDispatch();

  return (
    <div>
      <Button onClick={() => dispatch(setFilter("all"))}>Todos</Button>
      <Button onClick={() => dispatch(setFilter("saude"))}>Saúde</Button>
      <Button onClick={() => dispatch(setFilter("estudo"))}>Estudo</Button>

      <Button color="error" onClick={() => dispatch(clearCompleted())}>
        Limpar concluídos
      </Button>
    </div>
  );
}