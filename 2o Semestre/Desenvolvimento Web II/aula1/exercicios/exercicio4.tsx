export default function App() {
  const nomes = ["Ana", "Bruno", "Carla", "Daniel"];
  return (
    <ul>
      {
        nomes.map((nomes, index) => (
          <li key={index}>{nomes}</li>
        ))
      }
    </ul>
  )
}