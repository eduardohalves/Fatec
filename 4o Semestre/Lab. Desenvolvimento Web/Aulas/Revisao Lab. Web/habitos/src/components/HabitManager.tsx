import { useDispatch, useSelector } from 'react-redux'
import { addHabit, removeHabit, filterHabits } from '../slices/habitSlice'
import { useState } from 'react'
import type { RootState } from '../store'

export default function HabitManager() {
  const dispatch = useDispatch()
  const habits = useSelector<RootState, Array<{ id: number; name: string; category: string }>>(
    (state) => state.habits.filtered
  )

  const [name, setName] = useState('')
  const [category, setCategory] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    dispatch(
      addHabit({
        id: Date.now(),
        name,
        category
      })
    )

    setName('')
    setCategory('')
  }

  return (
    <div>
      <h2>Gerenciar Hábitos</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Categoria"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Adicionar</button>
      </form>

      <select onChange={(e) => dispatch(filterHabits(e.target.value))}>
        <option value="">Todos</option>
        <option value="Saúde">Saúde</option>
        <option value="Estudo">Estudo</option>
        <option value="Lazer">Lazer</option>
      </select>

      <ul>
        {habits.map((h: any) => (
          <li key={h.id}>
            {h.name} - {h.category}
            <button onClick={() => dispatch(removeHabit(h.id))}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}