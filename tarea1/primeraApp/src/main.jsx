import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Card from './Components/Card';
import Button from './Components/Button';


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

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Card title='Pikachu' description='Electrico' image='https://github.com/GranRoberto/tarea-react/blob/main/tarea1/imagenes/pikachu.jpeg' />
    <Card title='Charmander' description='Fuego' image='https://github.com/GranRoberto/tarea-react/blob/main/tarea1/imagenes/charmander.jpeg' />
    <Button text="Ver más" background="bg-red-600" />
  </StrictMode>
);
