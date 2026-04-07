import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Habit {
  id: number
  name: string
  category: string
}

interface HabitState {
  habits: Habit[]
  filtered: Habit[]
}

const initialState: HabitState = {
  habits: [],
  filtered: []
}

const habitSlice = createSlice({
  name: 'habits',
  initialState,
  reducers: {
    addHabit: (state, action: PayloadAction<Habit>) => {
      state.habits.push(action.payload)
      state.filtered = state.habits
    },
    removeHabit: (state, action: PayloadAction<number>) => {
      state.habits = state.habits.filter(h => h.id !== action.payload)
      state.filtered = state.habits
    },
    filterHabits: (state, action: PayloadAction<string>) => {
      if (!action.payload) {
        state.filtered = state.habits
      } else {
        state.filtered = state.habits.filter(
          h => h.category === action.payload
        )
      }
    }
  }
})

export const { addHabit, removeHabit, filterHabits } = habitSlice.actions
export default habitSlice.reducer