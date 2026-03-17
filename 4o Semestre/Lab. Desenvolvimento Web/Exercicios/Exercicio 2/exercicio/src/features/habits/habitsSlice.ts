import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Habit } from "./types";

interface HabitState {
  habits: Habit[];
  filter: string;
}

const initialState: HabitState = {
  habits: [],
  filter: "all",
};

const habitsSlice = createSlice({
  name: "habits",
  initialState,
  reducers: {
    addHabit: (state, action: PayloadAction<Habit>) => {
      state.habits.push(action.payload);
    },

    editHabit: (state, action: PayloadAction<Habit>) => {
      const index = state.habits.findIndex(h => h.id === action.payload.id);
      if (index !== -1) {
        state.habits[index] = action.payload;
      }
    },

    deleteHabit: (state, action: PayloadAction<string>) => {
      state.habits = state.habits.filter(h => h.id !== action.payload);
    },

    toggleHabit: (state, action: PayloadAction<string>) => {
      const habit = state.habits.find(h => h.id === action.payload);
      if (habit) habit.completed = !habit.completed;
    },

    clearCompleted: (state) => {
      state.habits = state.habits.filter(h => !h.completed);
    },

    setFilter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    }
  },
});

export const {
  addHabit,
  editHabit,
  deleteHabit,
  toggleHabit,
  clearCompleted,
  setFilter
} = habitsSlice.actions;

export default habitsSlice.reducer;