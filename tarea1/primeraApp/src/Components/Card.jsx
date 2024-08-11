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
export default function Card({
  title = 'Titulo de la card',
  description = 'Descripción de la card',
  image = 'url de la imagen'
}) {
    return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
};