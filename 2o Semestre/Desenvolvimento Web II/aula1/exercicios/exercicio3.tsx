function Message() {
  // Obtém a hora atual (0-23)
  const currentHour = new Date().getHours();

  const dia = {
    backgroundColor: 'yellow'
  };

  const tarde = {
    backgroundColor: 'orange'
  };

  const noite = {
    backgroundColor: '#888'
  };

  let estilo;
  let hora;
  if (currentHour >= 6 && currentHour < 12) {
    estilo = dia;
    hora = "Bom dia!"

  } else if (currentHour >= 12 && currentHour < 18) {
    estilo = tarde;
      hora = "Boa tarde"
  } else {
    estilo = noite;
    hora = "Boa noite"
  }

  return (
    <div style={estilo}>
      {hora}
    </div>
  );
}

export default Message;
