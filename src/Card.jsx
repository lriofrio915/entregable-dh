//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({input1, input2}) {
  return (
    <div>
      <h2>Información Ingresada Exitosamente</h2>
      <p>Bienvenido {input1} {input2} </p>
    </div>
  );
}

export default Card;
