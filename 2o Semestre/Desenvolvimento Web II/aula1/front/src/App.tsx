export default function App() {
  const nomes = [
    {
      name: "Ana",
      gender: "F",
      age: 21
    },
    {
      name: "Bruno",
      gender: "M",
      age: 17
    },
    {
      name: "Carla",
      gender: "F",
      age: 15
    },
    {
      name: "Daniel",
      gender: "M",
      age: 22
    },
  ];

  const f = {
    backgroundColor: "orange",
  };
  const m = {
    backgroundColor: "palegreen",
  };

  return (
    <ul>
      {nomes.map((pessoa, index) => {
        let estilo;
        if (pessoa.gender === "F") {
          estilo = f;
        } else {
          estilo = m;
        }
  
        return (
          <li key={index} style={estilo}>
            {pessoa.name} {pessoa.age < 18 && ' (menor) '} {pessoa.age >= 18 && ' (maior) '}
          </li>
        );
      })}
    </ul>
)
};