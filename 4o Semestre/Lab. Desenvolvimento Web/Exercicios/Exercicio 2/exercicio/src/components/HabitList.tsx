import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../app/store";
import { deleteHabit, toggleHabit } from "../features/habits/habitsSlice";
import { Checkbox, Button } from "@mui/material";

export default function HabitList() {
  const { habits, filter } = useSelector((state: RootState) => state.habits);
  const dispatch = useDispatch();

  const filtered = filter === "all"
    ? habits
    : habits.filter(h => h.category === filter);

  return (
    <div>
      {filtered.map(h => (
        <div key={h.id}>
          <Checkbox
            checked={h.completed}
            onChange={() => dispatch(toggleHabit(h.id))}
          />

          <span style={{
            textDecoration: h.completed ? "line-through" : "none"
          }}>
            {h.name} ({h.category})
          </span>

          <Button onClick={() => dispatch(deleteHabit(h.id))}>
            Excluir
          </Button>
        </div>
      ))}
    </div>
  );
}