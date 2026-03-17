import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import Filter from "./components/Filter";

function App() {
  return (
    <div>
      <h1>Controle de Hábitos</h1>
      <HabitForm />
      <Filter />
      <HabitList />
    </div>
  );
}

export default App;