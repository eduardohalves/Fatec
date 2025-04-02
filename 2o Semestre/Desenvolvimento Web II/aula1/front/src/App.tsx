function Message2() {
  // Obtém a hora atual (0-23)
  const currentHour = new Date().getHours();
  return (
    <div>
      {currentHour < 12
        ? "Bom dia!"
        : currentHour < 18
        ? "Boa tarde!"
        : "Boa noite!"}
    </div>
  );
}
