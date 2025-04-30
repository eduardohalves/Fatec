export default function App() {
    const nomes = [
      {
        name: "Ana",
        gender: "F",
      },
      {
        name: "Bruno",
        gender: "M",
      },
      {
        name: "Carla",
        gender: "F",
      },
      {
        name: "Daniel",
        gender: "M",
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
              {pessoa.name}
            </li>
          );
        })}
      </ul>
  )
  };