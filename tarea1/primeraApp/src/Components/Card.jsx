/*
  ejercicio
  Crea un componente llamado "card" que reciba un objeto con
  las siguientes propiedades:
  {
    title: "Titulo de la card",
    description: "Descripción de la card",
    image: "url de la imagen",
  }
  y renderiza dos veces el componente con diferentes propiedades.
  Este componente además debe de tener un boton que diga "Ver más",
  debes usar el componente Button que ya hicimos. Y validar
  con PropTypes.
*/
import PropTypes from "prop-types";
import Button from './Button';
export default function Card({
  title = 'Titulo de la card',
  description = 'Descripción de la card',
  image = 'url de la imagen'
}) {
    return (
    <>
      <div className="my-4 bg-slate-600 text-white rounded-[25px] flex flex-col justify-center items-center gap-2 w-40 h-60" >
        <div>
          <img className="w-32" src={image} alt={title} />
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div>
          <Button text="Ver más" background="bg-green-600" />
        </div>
      </div>
    </>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};