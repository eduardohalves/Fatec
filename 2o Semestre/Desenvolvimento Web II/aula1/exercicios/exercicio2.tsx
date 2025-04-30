function Message() {
    const currentHour = new Date().getHours();
    let hora;
  
    if (currentHour >= 6 && currentHour < 12) {
      hora = 'dia';
    } else if (currentHour < 18) {
      hora = 'tarde';
    } else {
      hora = 'noite';
    }
  
    return (
      <div>
        {hora}!
      </div>
    );
  }


// export default function App() {
//     const nro = aleatorio();
//     return (
//     <div>
//     {nro < 5?
//     <div>{nro} é menor que 5</div> :
//     <div>{nro} é maior que 4</div>
//     }
//     </div>
//     );
//     }
//     function aleatorio(){
//     //retorna um número aleatório entre 0 e 9
//     return Math.floor(Math.random()*10);
//     }    